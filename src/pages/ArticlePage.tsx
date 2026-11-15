import { useParams, Link, useNavigate } from "react-router-dom";
import { useArticles } from "../context/ArticlesContext";
import ArticleReviews from "../components/ArticleReviews";
import { RatingBadge } from "../components/Stars";



function formatDate(date: string) {
  return new Date(date).toLocaleDateString("ru-RU");
}

function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { articles, myArticles, deleteArticle } = useArticles();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="container article-page">
        <Link to="/" className="back-link">
          ← Orqaga
        </Link>
        <p className="empty">Maqola topilmadi</p>
      </div>
    );
  }

  const isMine = myArticles.some((a) => a.id === article.id);

  const handleDelete = () => {
    if (confirm("Maqolani o'chirasizmi?")) {
      deleteArticle(article.id);
      navigate("/");
    }
  };

  return (
    <div className="container article-page">
      <div className="article-top">
        <Link to="/" className="back-link">
          ← Orqaga
        </Link>
        {isMine && (
          <button className="btn btn-danger" onClick={handleDelete}>
            🗑 O'chirish
          </button>
        )}
      </div>

      <header className="article-header">
        <div className="card-tags">
          {article.tag_list.map((tag) => (
            <span key={tag} className="tag">
              #{tag}
            </span>
          ))}
          <RatingBadge articleId={article.id} />
        </div>

        <h1 className="article-title">{article.title}</h1>

        <div className="article-meta">
          <div className="meta-item">
            <span className="avatar">{article.user.name[0].toUpperCase()}</span>
            <span>{article.user.name}</span>
          </div>
          <div className="meta-item">
            🕒 {article.reading_time_minutes} daqiqa o'qish
          </div>
          <div className="meta-item">📅 {formatDate(article.published_at)}</div>
        </div>
      </header>

      {article.cover_image ? (
        <img
          src={article.cover_image}
          alt={article.title}
          className="article-cover"
        />
      ) : (
        <div className="article-cover article-cover--empty" />
      )}

      <div className="article-content">
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
       <ArticleReviews articleId={article.id} />
    </div>
  );
}

export default ArticlePage;