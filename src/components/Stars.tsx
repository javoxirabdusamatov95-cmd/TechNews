import { useState } from "react";
import { useReviews } from "../context/ReviewsContext";

type StarRatingProps = {
  value: number;
  onChange?: (value: number) => void;
  size?: number;
};

export function StarRating({ value, onChange, size = 22 }: StarRatingProps) {
  const [hover, setHover] = useState(0);
  const shown = hover || Math.round(value);

  return (
    <div className={onChange ? "stars interactive" : "stars"} onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          className={n <= shown ? "star on" : "star"}
          style={{ fontSize: size }}
          disabled={!onChange}
          onMouseEnter={() => onChange && setHover(n)}
          onClick={() => onChange?.(n)}
          aria-label={`${n} yulduz`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export function RatingBadge({ articleId }: { articleId: string | number }) {
  const { getStats } = useReviews();
  const { avg, count } = getStats(articleId);

  return (
    <div className="rating-badge">
      <span className="rating-star">★</span>
      {count > 0 ? (
        <>
          <b>{avg.toFixed(1)}</b>
          <span>({count})</span>
        </>
      ) : (
        <span>Baho yo'q</span>
      )}
    </div>
  );
}