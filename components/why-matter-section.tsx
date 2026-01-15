import { Card, CardContent } from "@/components/ui/card"
import { HeartHandshake, Users, Lightbulb } from "lucide-react"

export function WhyMatterSection() {
  const audiences = [
    {
      icon: HeartHandshake,
      title: "For Mothers",
      description: "Carrying heavy emotional and social responsibilities",
    },
    {
      icon: Users,
      title: "For Women",
      description: "Facing cultural or social oppression",
    },
    {
      icon: Lightbulb,
      title: "For Anyone",
      description: "Struggling to remain hopeful during difficult times",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              Why This Book Matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A powerful message for those who need it most
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {audiences.map((audience, index) => {
              const Icon = audience.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all border-border/50 hover:border-primary/50"
                >
                  <CardContent className="p-8 space-y-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors mx-auto">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{audience.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{audience.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="bg-card border rounded-2xl p-8 md:p-12 shadow-sm text-center">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground font-medium text-pretty">
              The Reason Why is not just a story of survival — it is a call to rise, heal, and move forward with
              strength and faith.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
