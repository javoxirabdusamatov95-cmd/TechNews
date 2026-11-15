import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type Id = string | number;

export type Comment = {
  id: string;
  articleId: string;
  author: string;
  text: string;
  createdAt: number;
};

// articleId -> { foydalanuvchi ismi -> yulduz }
type Ratings = Record<string, Record<string, number>>;

type ReviewsValue = {
  getComments: (articleId: Id) => Comment[];
  addComment: (articleId: Id, author: string, text: string) => void;
  deleteComment: (id: string) => void;
  rate: (articleId: Id, user: string, stars: number) => void;
  getUserRating: (articleId: Id, user: string) => number;
  getStats: (articleId: Id) => { avg: number; count: number };
};

const ReviewsContext = createContext<ReviewsValue | null>(null);

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function ReviewsProvider({ children }: { children: ReactNode }) {
  const [comments, setComments] = useState<Comment[]>(() => load("tn_comments", []));
  const [ratings, setRatings] = useState<Ratings>(() => load("tn_ratings", {}));

  useEffect(() => {
    localStorage.setItem("tn_comments", JSON.stringify(comments));
  }, [comments]);

  useEffect(() => {
    localStorage.setItem("tn_ratings", JSON.stringify(ratings));
  }, [ratings]);

  const getComments = (articleId: Id) =>
    comments
      .filter((c) => c.articleId === String(articleId))
      .sort((a, b) => b.createdAt - a.createdAt);

  const addComment = (articleId: Id, author: string, text: string) => {
    const comment: Comment = {
      id: crypto.randomUUID(),
      articleId: String(articleId),
      author,
      text,
      createdAt: Date.now(),
    };
    setComments((prev) => [...prev, comment]);
  };

  const deleteComment = (id: string) =>
    setComments((prev) => prev.filter((c) => c.id !== id));

  const rate = (articleId: Id, user: string, stars: number) => {
    const key = String(articleId);
    setRatings((prev) => ({ ...prev, [key]: { ...(prev[key] ?? {}), [user]: stars } }));
  };

  const getUserRating = (articleId: Id, user: string) =>
    ratings[String(articleId)]?.[user] ?? 0;

  const getStats = (articleId: Id) => {
    const votes = Object.values(ratings[String(articleId)] ?? {});
    const count = votes.length;
    const avg = count ? votes.reduce((sum, v) => sum + v, 0) / count : 0;
    return { avg, count };
  };

  return (
    <ReviewsContext.Provider
      value={{ getComments, addComment, deleteComment, rate, getUserRating, getStats }}
    >
      {children}
    </ReviewsContext.Provider>
  );
}

export function useReviews() {
  const ctx = useContext(ReviewsContext);
  if (!ctx) throw new Error("useReviews ReviewsProvider ichida ishlatilishi kerak");
  return ctx;
}