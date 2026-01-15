import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Heart, Globe, Shield, Sparkles, Mountain } from "lucide-react"

export function BookChapters() {
  const chapters = [
    {
      icon: BookOpen,
      number: "Chapter 1",
      title: "The Beginning",
      description: "Born in Qatar to a Yemeni and Somali family, navigating multiple cultures from birth.",
    },
    {
      icon: Globe,
      number: "Chapter 2",
      title: "Cultural Crossroads",
      description: "Growing up between worlds and learning to survive cultural barriers and expectations.",
    },
    {
      icon: Shield,
      number: "Chapter 3",
      title: "Facing Injustice",
      description: "Honest reflections on racism, discrimination, and the fight for dignity.",
    },
    {
      icon: Heart,
      number: "Chapter 4",
      title: "The Weight Women Carry",
      description: "Insight into oppression faced by women in many African societies.",
    },
    {
      icon: Mountain,
      number: "Chapter 5",
      title: "Perseverance",
      description: "Building businesses, supporting family, and refusing to give up.",
    },
    {
      icon: Sparkles,
      number: "Chapter 6",
      title: "Faith & Healing",
      description: "A journey of healing through faith and finding peace in Allah's plan.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Badge className="mb-4">Inside the Book</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">What You'll Discover</h2>
          <p className="text-lg text-muted-foreground text-balance">
            A powerful journey through six transformative chapters of resilience, faith, and hope
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, index) => {
            const Icon = chapter.icon
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">{chapter.number}</p>
                      <h3 className="text-xl font-semibold">{chapter.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{chapter.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
