import type { Category } from "../types";

interface Props {
  categories: Category[];
  active: string;
  onChange: (tag: string) => void;
}

function CategoryFilter({ categories, active, onChange }: Props) {
  return (
    <div className="filter">
      {categories.map((c) => (
        <button
          key={c.tag}
          className={c.tag === active ? "filter-btn active" : "filter-btn"}
          onClick={() => onChange(c.tag)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;