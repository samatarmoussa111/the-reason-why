import { Id } from "@/convex/_generated/dataModel";

export type Book = {
  _id: Id<"books">;
  _creationTime: number;
  subtitle?: string | undefined;
  rating?: number | undefined;
  reviewsCount?: number | undefined;
  stripeProductId?: string | undefined;
  stripePriceId?: string | undefined;
  coverImageUrl?: string | undefined;
  coverImageId?: Id<"_storage"> | undefined;
  slug: string;
  price: number;
  title: string;
  chapters: {
    title: string;
    description: string;
  }[];
  description: string;
  pages: number;
  fileStorageId: Id<"_storage">;
};
