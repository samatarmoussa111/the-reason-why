import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Download, Lock } from "lucide-react"

export function BookCta() {
  const features = [
    "Instant PDF download",
    "Read on any device",
    "248 pages of inspiring content",
    "Secure payment via Stripe",
    "30-day money-back guarantee",
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <Card className="max-w-4xl mx-auto border-2 shadow-xl">
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-6 mb-8">
              <Badge className="text-sm px-4 py-1.5">Limited Time Offer</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Start Your Journey Today</h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Join thousands of readers who found hope, strength, and inspiration in this powerful memoir
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8 max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Price & CTA */}
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">One-time payment</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl text-muted-foreground line-through">$24.99</span>
                  <span className="text-5xl font-bold">$14.99</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <Button size="lg" className="text-base px-8">
                  <Download className="mr-2 h-5 w-5" />
                  Buy the eBook Now
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4" />
                <span>Secure checkout powered by Stripe</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
