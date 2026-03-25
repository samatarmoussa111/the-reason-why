"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

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
    <div className="container py-16">
      <h1>Payment successful 🎉</h1>

      <a href={url} target="_blank">
        Download your book
      </a>
    </div>
  );
}
