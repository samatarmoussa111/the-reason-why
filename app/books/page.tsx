"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BooksPage() {
  const books = useQuery(api.books.getBooks);

  if (!books) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen px-6 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Books</h1>
        <p className="text-muted-foreground mt-2">
          Discover powerful books to transform your life
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.map((book) => (
          <Link key={book._id} href={`/books/${book.slug}`}>
            <div className="bg-background rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden group">
              {/* Cover */}
              <div className="aspect-[2/3] flex items-center justify-center">
                <img
                  src={book.coverImageUrl}
                  alt={book.title}
                  className="h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h2 className="font-semibold text-lg line-clamp-1">
                  {book.title}
                </h2>

                {book.subtitle && (
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {book.subtitle}
                  </p>
                )}

                {/* Rating */}
                {book.rating && (
                  <p className="text-sm mt-2">
                    ⭐ {book.rating} ({book.reviewsCount || 0})
                  </p>
                )}

                {/* Price */}
                <p className="mt-3 font-bold text-lg">
                  ${(book.price / 100).toFixed(2)}
                </p>

                <Button>View Book</Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
