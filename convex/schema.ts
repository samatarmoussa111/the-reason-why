import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  books: defineTable({
    title: v.string(),
    subtitle: v.optional(v.string()),
    description: v.string(),

    slug: v.string(),

    price: v.number(),
    pages: v.number(),

    rating: v.optional(v.number()),
    reviewsCount: v.optional(v.number()),

    chapters: v.array(
      v.object({
        title: v.string(),
        description: v.string(),
      }),
    ),
    // Stripe fields
    stripeProductId: v.optional(v.string()),
    stripePriceId: v.optional(v.string()),
    // trouver une solution pour stocker le contenu du livre, peut-être un champ fileUrl qui pointe vers un fichier stocké dans Convex Storage ou un service externe
    fileStorageId: v.id("_storage"),
    coverImageUrl: v.optional(v.string()),
  }),
  purchases: defineTable({
    email: v.string(), // email de l'acheteur (venu de Stripe)
    bookId: v.id("books"), // id du livre acheté
    sessionId: v.string(),
    paid: v.boolean(), // true si paiement confirmé
  }),
});
