import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function AchievementsSection() {
  const achievements = [
    {
      year: "2009",
      badge: "Community",
      description: "Began working with community organizations at the age of 18",
    },
    {
      year: "2011",
      badge: "Entrepreneurship",
      description: "Founded her first small business at the age of 20",
    },
    {
      year: "",
      badge: "Education",
      description: "Completed her university education while fully supporting herself",
    },
    {
      year: "",
      badge: "Faith",
      description: "Sponsored her mother's pilgrimage to Hajj (Mecca)",
    },
    {
      year: "2016",
      badge: "Business",
      description: "Founded Zakina Café House, still operating in Somalia",
    },
    {
      year: "",
      badge: "Motherhood",
      description: "Became a mother — her greatest achievement",
    },
    {
      year: "",
      badge: "Growth",
      description: "Founded her own business in the United States",
    },
    {
      year: "",
      badge: "Creator",
      description: "Became an employer, YouTube creator, and author",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              Life Achievements
            </h2>
            <p className="text-xl text-muted-foreground">A journey of continuous growth and impact</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all border-border/50">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    {achievement.year && (
                      <Badge variant="default" className="text-sm font-bold px-3 py-1">
                        {achievement.year}
                      </Badge>
                    )}
                    <Badge variant="outline" className="text-sm">
                      {achievement.badge}
                    </Badge>
                  </div>
                  <p className="text-base leading-relaxed text-foreground/90">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
