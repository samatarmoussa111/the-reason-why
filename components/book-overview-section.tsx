import { Badge } from "@/components/ui/badge"

export function BookOverviewSection() {
  return (
    <section className="py-24 md:py-32 bg-background" id="book">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Book Image with enhanced styling */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border bg-muted shadow-2xl group-hover:shadow-3xl transition-all">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=800&fit=crop"
                  alt="The Reason Why book cover"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Book Content with modern spacing */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  Memoir
                </Badge>
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">The Reason Why</h2>
                <p className="text-xl text-muted-foreground italic">
                  A true story of hardship, cultural differences, and resilience.
                </p>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                <p>
                  In this deeply personal memoir, Fatouma N Ali shares her journey through life — a journey shaped by
                  cultural barriers, racism, injustice, and the strength required to survive them.
                </p>
                <p>
                  Born in Qatar to a Yemeni and Somali family, Fatouma grew up navigating complex family circumstances
                  and social challenges across different countries.
                </p>
                <p className="font-medium text-foreground">
                  This book is a reflection on struggle, healing, and faith, and a reminder that everything happens for
                  a reason.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
