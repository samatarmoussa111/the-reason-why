import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function BookTestimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Reader & Mother",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
      content:
        "This book touched my soul. As a mother facing my own struggles, Fatouma's story gave me hope and strength to keep going.",
      rating: 5,
    },
    {
      name: "Amina K.",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=200&auto=format&fit=crop",
      content:
        "Powerful and honest. Fatouma's journey from hardship to success is truly inspiring. Every woman should read this.",
      rating: 5,
    },
    {
      name: "Mariam H.",
      role: "Educator",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      content:
        "A beautifully written memoir that sheds light on important cultural issues while offering hope and faith-based solutions.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">What Readers Are Saying</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Stories that resonate with mothers, entrepreneurs, and women worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-8 w-8 text-primary/20" />

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
