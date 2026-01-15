import { BookOpen, Heart, Users, Sparkles, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function BookFeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Authentic Story",
      description: "A true story based on real-life experiences",
    },
    {
      icon: Shield,
      title: "Raw & Honest",
      description: "Honest reflections on racism, discrimination, and injustice",
    },
    {
      icon: Users,
      title: "Cultural Insight",
      description: "Insight into the oppression faced by women in many African societies",
    },
    {
      icon: Heart,
      title: "Message of Hope",
      description: "A message of hope and motivation, especially for mothers",
    },
    {
      icon: Sparkles,
      title: "Transformative Journey",
      description: "A journey of healing, faith, and self-empowerment",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              What You'll Discover
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Five powerful themes woven throughout this transformative memoir
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all border-border/50 hover:border-primary/50"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
