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
    return <p> Loading...</p>;
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
