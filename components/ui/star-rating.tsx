import { Star } from "lucide-react";

export function StarRating({
  rating,
  size = "h-5 w-5",
}: {
  rating: number;
  size?: string;
}) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const fillPercent = Math.max(0, Math.min(1, rating - i)) * 100;
        return (
          <div key={i} className={`relative ${size}`}>
            <Star className={`${size} fill-muted text-muted`} />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fillPercent}%` }}
            >
              <Star className={`${size} fill-primary text-primary`} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
