import { useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import { useArticles } from "../context/ArticlesContext";
import { localArticles } from "../data/articles";
import { categories } from "../data/categories";
import type { Article } from "../types";

function Home() {
  const { userArticles } = useArticles();
  const [activeTag, setActiveTag] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"new" | "old">("new");

  const applyFilters = (list: Article[]) =>
    list
      .filter((article) => {
        const matchTag =
          activeTag === "" || article.tag_list.includes(activeTag);
        const matchSearch = article.title
          .toLowerCase()
          .includes(search.toLowerCase());
        return matchTag && matchSearch;
      })
      .sort((a, b) => (sort === "new" ? b.id - a.id : a.id - b.id));

  const siteFiltered = applyFilters(localArticles);
  const userFiltered = applyFilters(userArticles);

  return (
    <div className="container">
      <section className="hero">
        <h1>
          Texnologiya olami <span>bir joyda</span>
        </h1>
        <p>AI, dasturlash, veb va o'yinlar bo'yicha eng so'nggi yangiliklar.</p>
        <div className="hero-actions">
          <Link to="/create" className="btn btn-primary btn-lg">
            ✍ Maqola yozish
          </Link>
        </div>
      </section>

      <SearchBar value={search} onChange={setSearch} />
      <CategoryFilter
        categories={categories}
        active={activeTag}
        onChange={setActiveTag}
      />

      <div className="list-head">
        <span>{siteFiltered.length + userFiltered.length} ta maqola</span>
        <select
          className="sort-select"
          value={sort}
          onChange={(e) => setSort(e.target.value as "new" | "old")}
        >
          <option value="new">Eng yangi</option>
          <option value="old">Eng eski</option>
        </select>
      </div>

      {siteFiltered.length > 0 && (
        <section className="home-section">
          <h2 className="section-title">Tech News maqolalari</h2>
          <div className="grid">
            {siteFiltered.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}

      {userFiltered.length > 0 && (
        <section className="home-section">
          <h2 className="section-title">Foydalanuvchilar maqolalari</h2>
          <div className="grid">
            {userFiltered.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}

      {siteFiltered.length + userFiltered.length === 0 && (
        <p className="empty">Maqola topilmadi</p>
      )}
    </div>
  );
}

export default Home;

