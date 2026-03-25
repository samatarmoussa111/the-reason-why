"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { BookOpen, CheckCircle2, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  const params = useSearchParams();
  const sessionId = params.get("session_id");

  const url = useQuery(
    api.purchases.getDownloadUrl,
    sessionId ? { sessionId } : "skip",
  );
  if (!url) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-muted border-t-foreground animate-spin" />
          <p className="text-muted-foreground text-sm font-medium tracking-wide">
            Preparing your download...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          {/* Success Icon */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-150" />
            <div className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            Payment successful
          </h1>
          <p className="text-muted-foreground text-lg mb-10 max-w-md leading-relaxed">
            Thank you for your purchase. Your book is ready to download.
          </p>

          {/* Download Card */}
          <div className="w-full bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Book Preview */}
              <div className="w-32 h-44 bg-muted rounded-lg flex items-center justify-center shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-foreground/5 to-foreground/10" />
                <BookOpen className="w-12 h-12 text-muted-foreground/50" />
              </div>

              {/* Book Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium uppercase tracking-widest text-primary">
                    Digital Download
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Your eBook
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  PDF format • Instant access
                </p>
                <Button asChild size="lg" className="w-full md:w-auto gap-2">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" />
                    Download your book
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Help Text */}
          <p className="text-sm text-muted-foreground">
            Having trouble?{" "}
            <a
              href="mailto:contact@fatoumaresilience.com"
              className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
