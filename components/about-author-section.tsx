import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

export function AboutAuthorSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16 items-center">
            {/* Author Image with modern frame */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative aspect-square overflow-hidden rounded-2xl border bg-muted shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=800&fit=crop"
                  alt="Fatouma N Ali"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Author Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">About Fatouma N Ali</h2>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-sm">
                    <Briefcase className="h-3 w-3 mr-1" />
                    Entrepreneur
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    <GraduationCap className="h-3 w-3 mr-1" />
                    Business Administration
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    Author
                  </Badge>
                </div>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                <p>
                  Fatouma Nasser Ali is a business entrepreneur and a graduate in Business Administration Management.
                </p>
                <p>
                  Her life story spans multiple countries and cultures. From her early years in Qatar to her experiences
                  navigating different societies, Fatouma faced cultural, racial, and social barriers that shaped her
                  resilience and determination.
                </p>
                <p className="font-medium text-foreground">
                  With the support of meaningful mentors, family members, and her faith, she transformed hardship into
                  purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
