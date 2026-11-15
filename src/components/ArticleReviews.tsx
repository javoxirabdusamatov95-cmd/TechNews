import { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { StarRating } from "./Stars";
import { useAuth } from "../context/AuthContext";
import { useReviews } from "../context/ReviewsContext";

function ArticleReviews({ articleId }: { articleId: string | number }) {
  const { user } = useAuth();
  const { getComments, addComment, deleteComment, rate, getUserRating, getStats } = useReviews();
  const [text, setText] = useState("");

  const comments = getComments(articleId);
  const { avg, count } = getStats(articleId);
  const mine = user ? getUserRating(articleId, user.name) : 0;

  const submit = () => {
    if (!user || !text.trim()) return;
    addComment(articleId, user.name, text.trim());
    setText("");
  };

  return (
    <section className="reviews">
      <div className="rate-box">
        <div className="rate-score">
          <strong>{count > 0 ? avg.toFixed(1) : "–"}</strong>
          <StarRating value={avg} size={18} />
          <span>{count} ta baho</span>
        </div>

        <div className="rate-mine">
          {user ? (
            <>
              <p>{mine ? "Sizning bahoyingiz" : "Maqolani baholang"}</p>
              <StarRating value={mine} onChange={(v) => rate(articleId, user.name, v)} size={30} />
            </>
          ) : (
            <p>
              Baholash uchun <Link to="/login">tizimga kiring</Link>
            </p>
          )}
        </div>
      </div>

      <h3 className="reviews-title">Sharhlar ({comments.length})</h3>

      {user ? (
        <div className="comment-form">
          <Avatar name={user.name} src={user.avatar} className="comment-avatar" />
          <div className="comment-form-body">
            <textarea
              placeholder="Fikringizni yozing..."
              value={text}
              maxLength={500}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-primary" onClick={submit} disabled={!text.trim()}>
              Yuborish
            </button>
          </div>
        </div>
      ) : (
        <p className="empty">
          Sharh yozish uchun <Link to="/login">tizimga kiring</Link>
        </p>
      )}

      <div className="comment-list">
        {comments.length === 0 && <p className="empty">Hali sharh yo'q. Birinchi bo'lib yozing!</p>}
        {comments.map((c) => (
          <div className="comment" key={c.id}>
            <Avatar
              name={c.author}
              src={user && c.author === user.name ? user.avatar : undefined}
              className="comment-avatar"
            />
            <div className="comment-body">
              <div className="comment-head">
                <strong>{c.author}</strong>
                <span>{new Date(c.createdAt).toLocaleDateString()}</span>
                {user && c.author === user.name && (
                  <button className="link-btn" onClick={() => deleteComment(c.id)}>
                    O'chirish
                  </button>
                )}
              </div>
              <p>{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArticleReviews;