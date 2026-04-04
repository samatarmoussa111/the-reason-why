"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Book } from "@/lib/books";

export function BooksPreviewSection() {
  const books = useQuery(api.books.getBooks);

  if (!books) {
    return (
      <section className="py-24 md:py-32">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-muted-foreground">Loading books...</p>
        </div>
      </section>
    );
  }

  // 👉 On prend seulement les 3 premiers pour le preview
  const previewBooks = books.slice(0, 3);

  return (
    <section className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Library
            </span>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              Explore My Books
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stories that inspire, heal, and empower readers around the world
            </p>
          </div>

          {/* Books */}
          <div className="grid gap-8 md:grid-cols-3">
            {previewBooks.map((book: Book) => (
              <Card
                key={book._id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50"
              >
                <div className="relative aspect-2/3 overflow-hidden">
                  <Image
                    src={book.coverImageUrl || ""}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Library
                  </span>
                </div>

                <CardContent className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {book.subtitle}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {book.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Button asChild size="lg" variant="outline" className="group px-8">
              <Link href="/books">
                View All Books
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
