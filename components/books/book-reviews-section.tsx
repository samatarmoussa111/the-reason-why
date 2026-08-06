"use client";

import type React from "react";
import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { Star } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const LONG_COMMENT_THRESHOLD = 240;

function ReviewComment({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > LONG_COMMENT_THRESHOLD;

  return (
    <div>
      <p
        className={`text-muted-foreground break-words whitespace-pre-wrap ${
          isLong && !expanded ? "line-clamp-4" : ""
        }`}
      >
        {text}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-primary font-medium mt-1 cursor-pointer"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

function StarRatingInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (rating: number) => void;
}) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className="cursor-pointer"
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
        >
          <Star
            className={`h-6 w-6 ${
              star <= value
                ? "fill-primary text-primary"
                : "fill-muted text-muted"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export function BookReviewsSection({ bookId }: { bookId: Id<"books"> }) {
  const reviews = useQuery(api.reviews.getApprovedReviews, { bookId });
  const createReview = useMutation(api.reviews.createReview);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;

    setSubmitting(true);
    await createReview({ bookId, name, email, rating, comment });
    setSubmitting(false);
    setSubmitted(true);
    setName("");
    setEmail("");
    setRating(0);
    setComment("");
  };

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-foreground mb-8">
        Reader Reviews
      </h2>

      {reviews && reviews.length > 0 && (
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {reviews.map((review) => (
            <Card key={review._id} className="border-border h-fit">
              <CardContent className="pt-6">
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
                <p className="font-semibold text-foreground mb-1 break-words">
                  {review.name}
                </p>
                <ReviewComment text={review.comment} />
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Card className="border-2">
        <CardContent className="p-6 md:p-8">
          {submitted ? (
            <p className="text-center text-muted-foreground">
              Thank you for your review! It will appear on this page once
              approved.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">
                Leave a Review
              </h3>

              <div className="space-y-2">
                <Label htmlFor="review-name">Your Name *</Label>
                <Input
                  id="review-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="review-email">Email Address *</Label>
                <Input
                  id="review-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Rating *</Label>
                <StarRatingInput value={rating} onChange={setRating} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="review-comment">Your Review *</Label>
                <Textarea
                  id="review-comment"
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-base cursor-pointer"
                disabled={submitting || rating === 0}
              >
                Submit Review
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
