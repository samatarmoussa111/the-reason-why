import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createPurchase = mutation({
  args: {
    email: v.string(),
    bookId: v.id("books"),
    sessionId: v.string(),
    ispaid: v.optional(v.boolean()),
  },
  handler: async (ctx, { email, bookId, sessionId, ispaid }) => {
    await ctx.db.insert("purchases", {
      email,
      bookId,
      sessionId,
      paid: ispaid || false, // par défaut à false, sera mis à true une fois le paiement confirmé via Stripe webhook
    });
  },
});

export const getDownloadUrl = query({
  args: {
    sessionId: v.string(),
  },
  handler: async (ctx, { sessionId }) => {
    const purchase = await ctx.db
      .query("purchases")
      .filter((q) => q.eq(q.field("sessionId"), sessionId))
      .first();

    if (!purchase) throw new Error("Unauthorized");
    console.log("purchase", purchase);
    const book = await ctx.db.get(purchase.bookId);
    console.log("book", book);

    if (!book) throw new Error("Book not found");
    const url = await ctx.storage.getUrl(book.fileStorageId);
    console.log("url du book", url);

    return url;
  },
});
