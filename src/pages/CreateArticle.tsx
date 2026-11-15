import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useArticles } from "../context/ArticlesContext";
import { categories } from "../data/categories";
import { fileToDataUrl } from "../utils/image";

const categoryOptions = categories.filter((c) => c.tag !== "");

function CreateArticle() {
  const { user } = useAuth();
  const { addArticle } = useArticles();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const [tag, setTag] = useState(categoryOptions[0].tag);
  const [cover, setCover] = useState<string | null>(null);

  if (!user) return <Navigate to="/login" replace />;

  const handleCover = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setCover(await fileToDataUrl(file, 900));
    } catch {
      alert("Rasmni yuklab bo'lmadi");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const paragraphs = text
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean);
    if (paragraphs.length === 0) {
      alert("Maqola matnini yozing");
      return;
    }
    const id = addArticle({
      title: title.trim(),
      description: description.trim(),
      content: paragraphs,
      tag,
      cover_image: cover,
    });
    if (id === null) {
      alert("Saqlab bo'lmadi. Rasm juda katta bo'lishi mumkin.");
      return;
    }
    navigate(`/article/${id}`);
  };

  return (
    <div className="container create-page">
      <form className="create-form" onSubmit={handleSubmit}>
        <h2>Yangi maqola</h2>

        <label className="field">
          <span>Sarlavha</span>
          <input
            type="text"
            placeholder="Maqola sarlavhasi"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label className="field">
          <span>Kategoriya</span>
          <select value={tag} onChange={(e) => setTag(e.target.value)}>
            {categoryOptions.map((c) => (
              <option key={c.tag} value={c.tag}>
                {c.label}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Qisqa tavsif</span>
          <input
            type="text"
            placeholder="Kartochkada ko'rinadigan bir qator"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>

        <label className="field">
          <span>Maqola matni</span>
          <textarea
            rows={8}
            placeholder="Matnni yozing..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <small className="hint">
            Abzatslar orasida bitta bo'sh qator qoldiring.
          </small>
        </label>

        <label className="upload-box">
          {cover ? (
            <img src={cover} alt="Oldindan ko'rish" />
          ) : (
            <span>🖼 Muqova rasmini tanlang (ixtiyoriy)</span>
          )}
          <input type="file" accept="image/*" onChange={handleCover} hidden />
        </label>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary btn-lg">
            Joylash
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-lg"
            onClick={() => navigate(-1)}
          >
            Bekor qilish
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateArticle;