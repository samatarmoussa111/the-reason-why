import { query } from "./_generated/server";
import { v } from "convex/values";

export const getBooks = query({
  args: {},
  handler: async (ctx) => {
    const books = await ctx.db.query("books").collect();
    return books;
  },
});

export const getBookBySlug = query({
  args: {
    slug: v.string(),
  },
  handler: async (ctx, args) => {
    const book = await ctx.db
      .query("books")
      .filter((q) => q.eq(q.field("slug"), args.slug))
      .first();

    if (!book) {
      throw new Error("Book not found");
    }

    return book;
  },
});
