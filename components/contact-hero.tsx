import { Badge } from "@/components/ui/badge"

export function ContactHero() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge className="text-sm px-4 py-1.5">Get In Touch</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">Let's Connect</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Have questions about the book? Want to share your story? I'd love to hear from you.
          </p>
        </div>
      </div>
    </section>
  )
}
