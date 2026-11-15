export interface ArticleUser {
  name: string;
  username: string;
}

export interface Article {
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  tag_list: string[];
  published_at: string;
  reading_time_minutes: number;
  url: string;
  user: ArticleUser;
  content: string[];
}

// Maqolaning ichki sahifasi uchun: to'liq matn qo'shiladi
export interface ArticleDetails extends Article {
  body_html: string;
}