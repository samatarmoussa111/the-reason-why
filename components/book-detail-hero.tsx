import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Book } from "lucide-react";
import Image from "next/image";

export function BookDetailHero() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Book Cover */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-3xl" />
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border bg-card">
                <Image
                  src="/the_reason_why_cover.jpeg"
                  alt="The Reason Why - Book Cover"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="space-y-4">
              <Badge className="text-sm px-4 py-1.5">Memoir & Biography</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                The Reason Why
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                A true story of hardship, cultural differences, and resilience
              </p>
            </div>

            {/* Rating & Stats */}
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">5.0</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Book className="h-4 w-4" />
                <span>248 pages</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Download className="h-4 w-4" />
                <span>Instant PDF</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                In this deeply personal memoir, Fatouma N Ali shares her journey
                through life — a journey shaped by cultural barriers, racism,
                injustice, and the strength required to survive them.
              </p>
              <p className="leading-relaxed">
                Born in Qatar to a Yemeni and Somali family, Fatouma grew up
                navigating complex family circumstances and social challenges
                across different countries. This book is a reflection on
                struggle, healing, and faith, and a reminder that everything
                happens for a reason.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base px-8">
                Buy the eBook - $14.99
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-transparent"
              >
                Read Sample
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
