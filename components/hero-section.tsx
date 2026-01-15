"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container px-4 md:px-6 py-20 md:py-32 lg:py-40">
        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Sparkles className="h-3.5 w-3.5 mr-2" />A True Story of Resilience
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold tracking-tight text-center sm:text-6xl md:text-7xl lg:text-8xl text-balance bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Fatouma N Ali
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-xl md:text-2xl lg:text-3xl text-center text-muted-foreground max-w-3xl mx-auto text-balance">
            From hardship to hope. A memoir of cultural barriers, faith, and the strength to survive.
          </p>

          {/* Quote Section */}
          <div className="mt-16 bg-card border rounded-2xl p-8 md:p-12 shadow-sm">
            <blockquote className="space-y-6">
              <p className="text-lg md:text-xl text-foreground/90 italic text-pretty leading-relaxed">
                "Life is not meant to be endless joy. It requires perseverance, effort, and devotion to Allah."
              </p>
              <p className="text-lg md:text-xl text-foreground/90 italic text-pretty leading-relaxed">
                "Never give up — no matter how difficult life becomes — until your last breath."
              </p>
            </blockquote>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all">
              Buy the eBook – The Reason Why
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 rounded-full bg-transparent"
              onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold">20+</div>
              <div className="text-sm md:text-base text-muted-foreground">Years of Resilience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold">Multiple</div>
              <div className="text-sm md:text-base text-muted-foreground">Countries & Cultures</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold">1</div>
              <div className="text-sm md:text-base text-muted-foreground">Inspiring True Story</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
