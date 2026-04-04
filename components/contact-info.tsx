import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  MapPin,
  Clock,
  Youtube,
  Facebook,
  Instagram,
} from "lucide-react";
import Link from "next/link";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@fatoumaresilience.com",
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
  ];

  const socialLinks = [
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://www.youtube.com/@muradnasermuradnaser",
      color: "hover:bg-red-500/10 hover:text-red-500",
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/fatu.diamond",
      color: "hover:bg-blue-600/10 hover:text-blue-600",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/flower_light_mn?igsh=MXhwNDQ5ODRhdXBvYw%3D%3D&utm_source=qr",
      color: "hover:bg-pink-500/10 hover:text-pink-500",
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      name: "TikTok",
      url: "https://www.tiktok.com/@fatouma.resilience?_r=1&_t=ZP-95GIf3xayul",
      color: "hover:bg-foreground/10 hover:text-foreground",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">{"I'm Here to Help"}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Whether you have questions about the book, want to share your own
          story of resilience, or are interested in speaking engagements,
          I&apos;d love to hear from you.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 h-fit">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{detail.title}</h3>
                    <p className="text-foreground font-medium">
                      {detail.content}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {detail.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}

        <Card className="border-2 hover:border-primary/50 transition-colors">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="font-semibold">Follow Me on Social Media</h3>
                <p className="text-sm text-muted-foreground">
                  Stay connected for updates and inspiration
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 text-muted-foreground transition-colors ${social.color}`}
                    >
                      <Icon />
                      <span className="text-sm font-medium">{social.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
