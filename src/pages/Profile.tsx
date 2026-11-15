import { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import Avatar from "../components/Avatar";
import { useArticles } from "../context/ArticlesContext";
import { useAuth } from "../context/AuthContext";
import { fileToDataUrl } from "../utils/image";
import { useSettings } from "../context/SettingsContext";

type Tab = "mine" | "favorites";

function Profile() {
  const { user, logout, updateProfile } = useAuth();
  const { settings, toggleTheme } = useSettings();
  const { articles, myArticles, favoriteArticles } = useArticles();
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);
  const [tab, setTab] = useState<Tab>("mine");
  const [bio, setBio] = useState(user?.bio ?? "");
  const [saved, setSaved] = useState(false);

  if (!user) return <Navigate to="/login" replace />;

  const handleAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const file = input.files?.[0];
    if (!file) return;
    try {
      const dataUrl = await fileToDataUrl(file, 256);
      const error = updateProfile({ avatar: dataUrl });
      if (error) alert(error);
    } catch {
      alert("Rasmni yuklab bo'lmadi");
    }
    input.value = "";
  };

  const removeAvatar = () => {
    updateProfile({ avatar: undefined });
  };

  const saveBio = () => {
    const error = updateProfile({ bio: bio.trim() });
    if (error) {
      alert(error);
      return;
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const list = tab === "mine" ? myArticles : favoriteArticles;

  return (
    <div className="container profile-page">
      <aside className="profile-side">
        <div className="profile-avatar-wrap">
          <Avatar
            name={user.name}
            src={user.avatar}
            className="profile-avatar"
          />
          <button
            className="avatar-edit"
            onClick={() => fileRef.current?.click()}
            title="Rasmni o'zgartirish"
          >
            📷
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleAvatar}
          />
        </div>

        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-role">Tech News foydalanuvchisi</p>
        {user.avatar && (
          <button className="link-btn" onClick={removeAvatar}>
            Rasmni o'chirish
          </button>
        )}

        <label className="field profile-bio">
          <span>Men haqimda</span>
          <textarea
            placeholder="O'zingiz haqingizda qisqacha yozing..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </label>
        <button className="btn btn-primary" onClick={saveBio}>
          Saqlash
        </button>
        {saved && <span className="saved">✓ Saqlandi</span>}

        <div className="profile-stats">
          <div className="stat">
            <strong>{myArticles.length}</strong>
            <span>Maqolalarim</span>
          </div>
          <div className="stat">
            <strong>{favoriteArticles.length}</strong>
            <span>Sevimlilar</span>
          </div>
          <div className="stat">
            <strong>{articles.length}</strong>
            <span>Jami</span>
          </div>
        </div>
                <button className="btn btn-ghost" onClick={toggleTheme}>
          {settings.theme === "dark" ? "☀️ Yorug' mavzu" : "🌙 Qorong'i mavzu"}
        </button>
        <Link to="/settings" className="btn btn-ghost">
          ⚙️ Sozlamalar
        </Link>

        <button className="btn btn-ghost" onClick={handleLogout}>
          Chiqish
        </button>
      </aside>

      <section className="profile-main">
        <div className="profile-main-head">
          <div className="tabs">
            <button
              className={tab === "mine" ? "tab active" : "tab"}
              onClick={() => setTab("mine")}
            >
              Mening maqolalarim
            </button>
            <button
              className={tab === "favorites" ? "tab active" : "tab"}
              onClick={() => setTab("favorites")}
            >
              Sevimlilar
            </button>
          </div>
          <Link to="/create" className="btn btn-primary">
            + Maqola yozish
          </Link>
        </div>

        {list.length === 0 ? (
          <p className="empty">
            {tab === "mine"
              ? "Siz hali maqola yozmagansiz."
              : "Sevimli maqolalar yo'q. Kartochkadagi ♡ ni bosing."}
          </p>
        ) : (
          <div className="grid">
            {list.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Profile;