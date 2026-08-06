import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

function checkAdminPassword(password: string) {
  if (password !== process.env.ADMIN_REVIEWS_PASSWORD) {
    throw new Error("Unauthorized");
  }
}

export const getApprovedReviews = query({
  args: {
    bookId: v.id("books"),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("reviews")
      .withIndex("by_book_status", (q) =>
        q.eq("bookId", args.bookId).eq("status", "approved"),
      )
      .order("desc")
      .collect();
  },
});

export const getPendingReviews = query({
  args: { password: v.string() },
  handler: async (ctx, args) => {
    if (args.password !== process.env.ADMIN_REVIEWS_PASSWORD) {
      return { authorized: false as const, reviews: [] };
    }

    const pendingReviews = await ctx.db
      .query("reviews")
      .withIndex("by_status", (q) => q.eq("status", "pending"))
      .order("desc")
      .collect();

    const reviews = await Promise.all(
      pendingReviews.map(async (review) => {
        const book = await ctx.db.get(review.bookId);
        return { ...review, bookTitle: book?.title ?? "Unknown book" };
      }),
    );

    return { authorized: true as const, reviews };
  },
});

export const createReview = mutation({
  args: {
    bookId: v.id("books"),
    name: v.string(),
    email: v.string(),
    rating: v.number(),
    comment: v.string(),
  },
  handler: async (ctx, args) => {
    if (args.rating < 1 || args.rating > 5) {
      throw new Error("Rating must be between 1 and 5");
    }

    await ctx.db.insert("reviews", {
      bookId: args.bookId,
      name: args.name,
      email: args.email,
      rating: args.rating,
      comment: args.comment,
      status: "pending",
    });
  },
});

async function syncBookRatingStats(
  ctx: { db: import("./_generated/server").MutationCtx["db"] },
  bookId: import("./_generated/dataModel").Id<"books">,
) {
  const approvedReviews = await ctx.db
    .query("reviews")
    .withIndex("by_book_status", (q) =>
      q.eq("bookId", bookId).eq("status", "approved"),
    )
    .collect();

  const reviewsCount = approvedReviews.length;
  const rating =
    reviewsCount === 0
      ? undefined
      : Math.round(
          (approvedReviews.reduce((sum, r) => sum + r.rating, 0) /
            reviewsCount) *
            10,
        ) / 10;

  await ctx.db.patch(bookId, { rating, reviewsCount });
}

export const approveReview = mutation({
  args: { reviewId: v.id("reviews"), password: v.string() },
  handler: async (ctx, args) => {
    checkAdminPassword(args.password);

    const review = await ctx.db.get(args.reviewId);
    if (!review) throw new Error("Review not found");

    await ctx.db.patch(args.reviewId, { status: "approved" });
    await syncBookRatingStats(ctx, review.bookId);
  },
});

export const rejectReview = mutation({
  args: { reviewId: v.id("reviews"), password: v.string() },
  handler: async (ctx, args) => {
    checkAdminPassword(args.password);

    await ctx.db.patch(args.reviewId, { status: "rejected" });
  },
});
