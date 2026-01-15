import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Clock, MessageSquare } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@fatoumanali.com",
      description: "Send me an email anytime",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "United States",
      description: "Based in the USA, serving worldwide",
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "24-48 hours",
      description: "I typically respond within 2 business days",
    },
    {
      icon: MessageSquare,
      title: "Social Media",
      content: "YouTube & Instagram",
      description: "Follow me for updates and inspiration",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">I'm Here to Help</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Whether you have questions about the book, want to share your own story of resilience, or are interested in
          speaking engagements, I'd love to hear from you.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon
          return (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 h-fit">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{detail.title}</h3>
                    <p className="text-foreground font-medium">{detail.content}</p>
                    <p className="text-sm text-muted-foreground">{detail.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
