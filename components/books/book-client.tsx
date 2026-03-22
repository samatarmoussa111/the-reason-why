"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { notFound } from "next/navigation";
import { BookDetails } from "./book-details";

export default function BookClient({ slug }: { slug: string }) {
  const book = useQuery(api.books.getBookBySlug, { slug });

  if (book === undefined) {
    return <div>Loading...</div>;
  }

  if (book === null) {
    notFound();
  }

  return <BookDetails book={book} />;
}
