"use client";

import Image from "next/image";
import {
  Star,
  BookOpen,
  FileText,
  ShoppingCart,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Book } from "@/lib/books";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

interface BookDetailsProps {
  book: Book;
}

export function BookDetails({ book }: BookDetailsProps) {
  const pay = useAction(api.stripe.pay);
  const router = useRouter();

  const handleBuy = async () => {
    const url = await pay({ bookId: book._id });
    if (!url) return;
    router.push(url);
  };
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(book.price / 100);

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Back Button */}
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Book Cover */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-3/4 max-w-md mx-auto">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5 rounded-2xl blur-3xl" />
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border bg-card">
                <Image
                  src={book.coverImageUrl || "/placeholder-cover.jpg"}
                  alt={`${book.title} - Book Cover`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Book Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">
                eBook
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">
                {book.title}
              </h1>
              <p className="text-xl text-primary font-medium">
                {book.subtitle}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(book.rating || 0)
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold text-foreground">
                {book.rating}
              </span>
              <span className="text-muted-foreground">
                ({book.reviewsCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed">
              {book.description}
            </p>

            {/* Stats */}
            <div className="flex gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <FileText className="h-5 w-5 text-primary" />
                <span>{book.pages} pages</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>{book.chapters.length} chapters</span>
              </div>
            </div>

            <Separator />

            {/* Price & Buy */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="text-4xl font-bold text-primary">
                  {formattedPrice}
                </p>
              </div>
              <Button
                size="lg"
                className="gap-2 px-8 cursor-pointer"
                onClick={handleBuy}
              >
                <ShoppingCart className="h-5 w-5" />
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* Chapters Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Book Content
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {book.chapters.map((chapter, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-colors"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">
                      {index + 1}
                    </span>
                    {chapter.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{chapter.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 mb-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Start Your Journey Today
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join the {book.reviewsCount} readers who have already changed
                their lives with this book.
              </p>
              <Button
                size="lg"
                className="gap-2 cursor-pointer"
                onClick={handleBuy}
              >
                <ShoppingCart className="h-5 w-5" />
                Get the book for {formattedPrice}
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
