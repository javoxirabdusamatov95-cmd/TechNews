import { useState } from "react";
import Avatar from "../components/Avatar";
import { StarRating } from "../components/Stars";
import { useArticles } from "../context/ArticlesContext";
import { useAuth } from "../context/AuthContext";
import { useReviews } from "../context/ReviewsContext";

type Mode = "posts" | "stars";

type Row = { name: string; posts: number; votes: number; avg: number };

function Rating() {
  const { articles } = useArticles();
  const { user } = useAuth();
  const { getStats } = useReviews();
  const [mode, setMode] = useState<Mode>("posts");

  // har bir muallif bo'yicha maqola soni va baholarni yig'amiz
  const authors = new Map<string, { posts: number; votes: number; sum: number }>();
  for (const a of articles) {
    const { avg, count } = getStats(a.id);
    const cur = authors.get(a.user.name) ?? { posts: 0, votes: 0, sum: 0 };
    cur.posts += 1;
    cur.votes += count;
    cur.sum += avg * count;
    authors.set(a.user.name, cur);
  }

  const rows: Row[] = [...authors.entries()].map(([name, v]) => ({
    name,
    posts: v.posts,
    votes: v.votes,
    avg: v.votes ? v.sum / v.votes : 0,
  }));

  const sorted =
    mode === "posts"
      ? [...rows].sort((a, b) => b.posts - a.posts || b.avg - a.avg)
      : rows.filter((r) => r.votes > 0).sort((a, b) => b.avg - a.avg || b.votes - a.votes);

  return (
    <div className="container rating-page">
      <h2 className="section-title">Foydalanuvchilar reytingi</h2>

      <div className="tabs rating-tabs">
        <button
          className={mode === "posts" ? "tab active" : "tab"}
          onClick={() => setMode("posts")}
        >
          Ko'p maqola yozganlar
        </button>
        <button
          className={mode === "stars" ? "tab active" : "tab"}
          onClick={() => setMode("stars")}
        >
          Yulduzcha bo'yicha
        </button>
      </div>

      {sorted.length === 0 ? (
        <p className="empty">
          Hali hech kim baholanmagan. Maqolani ochib, yulduzchani bosing.
        </p>
      ) : (
        <div className="leaderboard">
          {sorted.map((r, i) => {
            const isMe = user?.name === r.name;
            return (
              <div key={r.name} className={isMe ? "lb-row me" : "lb-row"}>
                <span className={`lb-rank rank-${i + 1}`}>{i + 1}</span>
                <Avatar
                  name={r.name}
                  src={isMe ? user?.avatar : undefined}
                  className="lb-avatar"
                />
                <div className="lb-info">
                  <strong>
                    {r.name}
                    {isMe && <em className="lb-me">Siz</em>}
                  </strong>
                  <span>
                    {r.posts} ta maqola · {r.votes} ta baho
                  </span>
                </div>
                <div className="lb-score">
                  {mode === "posts" ? (
                    <>
                      <b>{r.posts}</b>
                      <small>maqola</small>
                    </>
                  ) : (
                    <>
                      <b>{r.avg.toFixed(1)}</b>
                      <StarRating value={r.avg} size={14} />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Rating;