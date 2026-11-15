import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { localArticles } from "../data/articles";
import type { Article } from "../types";
import { useAuth } from "./AuthContext";

export interface NewArticle {
  title: string;
  description: string;
  content: string[];
  tag: string;
  cover_image: string | null;
}

interface ArticlesContextType {
  articles: Article[];
  userArticles: Article[];
  myArticles: Article[];
  favoriteArticles: Article[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (id: number) => void;
  addArticle: (data: NewArticle) => number | null;
  deleteArticle: (id: number) => void;
}

const ArticlesContext = createContext<ArticlesContextType | null>(null);

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function save(key: string, value: unknown): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function ArticlesProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [userArticles, setUserArticles] = useState<Article[]>(() =>
    load("userArticles", [])
  );
  const [favMap, setFavMap] = useState<Record<string, number[]>>(() =>
    load("favorites", {})
  );

  const articles = [...userArticles, ...localArticles];
  const favIds = user ? favMap[user.name] ?? [] : [];
  const myArticles = user
    ? userArticles.filter((a) => a.user.username === user.name)
    : [];
  const favoriteArticles = articles.filter((a) => favIds.includes(a.id));

  const isFavorite = (id: number) => favIds.includes(id);

  const toggleFavorite = (id: number) => {
    if (!user) return;
    const current = favMap[user.name] ?? [];
    const next = current.includes(id)
      ? current.filter((x) => x !== id)
      : [...current, id];
    const updated = { ...favMap, [user.name]: next };
    setFavMap(updated);
    save("favorites", updated);
  };

  const addArticle = (data: NewArticle) => {
    if (!user) return null;
    const words = data.content.join(" ").split(/\s+/).length;
    const article: Article = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      content: data.content,
      cover_image: data.cover_image,
      tag_list: [data.tag],
      published_at: new Date().toISOString().slice(0, 10),
      reading_time_minutes: Math.max(1, Math.round(words / 180)),
      url: "#",
      user: { name: user.name, username: user.name },
    };
    const next = [article, ...userArticles];
    if (!save("userArticles", next)) return null;
    setUserArticles(next);
    return article.id;
  };

  const deleteArticle = (id: number) => {
    const next = userArticles.filter((a) => a.id !== id);
    setUserArticles(next);
    save("userArticles", next);
  };

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        userArticles,
        myArticles,
        favoriteArticles,
        isFavorite,
        toggleFavorite,
        addArticle,
        deleteArticle,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
}

export function useArticles() {
  const ctx = useContext(ArticlesContext);
  if (!ctx) throw new Error("useArticles faqat ArticlesProvider ichida ishlaydi");
  return ctx;
}