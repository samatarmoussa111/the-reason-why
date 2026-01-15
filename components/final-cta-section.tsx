import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted/30 to-background" />

      <div className="container px-4 md:px-6 relative">
        <div className="mx-auto max-w-4xl">
          <div className="bg-card border rounded-3xl p-12 md:p-16 shadow-2xl text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
                From Struggles to Strength
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance">
                Begin your journey of resilience today
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all group"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Buy the eBook – The Reason Why
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">Instant PDF download after purchase • Read on any device</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 blur-3xl opacity-20">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
