"use client";

import type React from "react";
import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { Star, Check, X } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const STORAGE_KEY = "admin_reviews_password";

export default function AdminReviewsPage() {
  // Only this state feeds the Convex query — it changes once, on submit,
  // not on every keystroke (which was causing the whole page to flip
  // between the login card and the admin layout as you typed).
  const [submittedPassword, setSubmittedPassword] = useState(
    () =>
      (typeof window !== "undefined" &&
        sessionStorage.getItem(STORAGE_KEY)) ||
      "",
  );
  const [passwordInput, setPasswordInput] = useState("");

  const data = useQuery(
    api.reviews.getPendingReviews,
    submittedPassword ? { password: submittedPassword } : "skip",
  );

  const approveReview = useMutation(api.reviews.approveReview);
  const rejectReview = useMutation(api.reviews.rejectReview);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem(STORAGE_KEY, passwordInput);
    setSubmittedPassword(passwordInput);
  };

  if (!submittedPassword || (data && !data.authorized)) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="w-full max-w-sm">
          <CardContent className="p-6">
            <form onSubmit={handleUnlock} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-password">Admin Password</Label>
                <Input
                  id="admin-password"
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  autoFocus
                />
              </div>
              {data && !data.authorized && (
                <p className="text-sm text-destructive">
                  Incorrect password.
                </p>
              )}
              <Button type="submit" className="w-full cursor-pointer">
                Unlock
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl font-bold text-foreground mb-8">
          Pending Reviews
        </h1>

        {data === undefined && (
          <p className="text-muted-foreground">Loading...</p>
        )}

        {data && data.reviews.length === 0 && (
          <p className="text-muted-foreground">No reviews pending review.</p>
        )}

        <div className="space-y-4">
          {data?.reviews.map((review) => (
            <Card key={review._id}>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-2">
                  {review.bookTitle}
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="font-semibold text-foreground">
                  {review.name}{" "}
                  <span className="font-normal text-muted-foreground">
                    ({review.email})
                  </span>
                </p>
                <p className="text-muted-foreground mt-1 mb-4 break-words whitespace-pre-wrap">
                  {review.comment}
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="gap-1 cursor-pointer"
                    onClick={() =>
                      approveReview({
                        reviewId: review._id,
                        password: submittedPassword,
                      })
                    }
                  >
                    <Check className="h-4 w-4" />
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-1 cursor-pointer"
                    onClick={() =>
                      rejectReview({
                        reviewId: review._id,
                        password: submittedPassword,
                      })
                    }
                  >
                    <X className="h-4 w-4" />
                    Reject
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
