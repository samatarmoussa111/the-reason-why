"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function SuccessClient({ sessionId }: { sessionId?: string }) {
  const url = useQuery(
    api.purchases.getDownloadUrl,
    sessionId ? { sessionId } : "skip",
  );
  console.log("url de la vente", url);
  if (!url) return <p>Loading...</p>;

  return (
    <div className="container py-16">
      <h1>Payment successful 🎉</h1>

      <a href={url} target="_blank">
        Download your book
      </a>
    </div>
  );
}
