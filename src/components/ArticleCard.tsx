import { Link, useNavigate } from "react-router-dom";
import type { Article } from "../types";
import { useAuth } from "../context/AuthContext";
import { useArticles } from "../context/ArticlesContext";

interface Props {
  article: Article;
}

function ArticleCard({ article }: Props) {
  const { user } = useAuth();
  const { isFavorite, toggleFavorite } = useArticles();
  const navigate = useNavigate();
  const fav = isFavorite(article.id);

  const handleFavorite = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    toggleFavorite(article.id);
  };

  return (
    <div className="card-wrap">
      <Link to={`/article/${article.id}`} className="card-link">
        <article className="card">
          {article.cover_image ? (
            <img
              src={article.cover_image}
              alt={article.title}
              className="card-img"
            />
          ) : (
            <div className="card-img card-img--empty" />
          )}
          <div className="card-body">
            <div className="card-tags">
              {article.tag_list.slice(0, 3).map((tag) => (
                <span key={tag} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
            <h3 className="card-title">{article.title}</h3>
            <p className="card-desc">{article.description}</p>
            <div className="card-meta">
              <span>{article.user.name}</span>
              <span>{article.reading_time_minutes} daqiqa</span>
            </div>
          </div>
        </article>
      </Link>
      <button
        className={fav ? "fav-btn active" : "fav-btn"}
        onClick={handleFavorite}
        aria-label="Sevimlilarga qo'shish"
      >
        {fav ? "♥" : "♡"}
      </button>
    </div>
  );
}

export default ArticleCard;