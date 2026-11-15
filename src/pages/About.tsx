import { Link } from "react-router-dom";

const features = [
  {
    icon: "🎨",
    title: "Sozlamalar",
    text: "Qorong'i yoki yorug' mavzu, rang, shrift va matn o'lchamini o'zingizga moslang.",
  },
  {
    icon: "⭐",
    title: "Baholash",
    text: "Maqolalarga 1 dan 5 gacha yulduzcha qo'ying va o'rtacha bahoni ko'ring.",
  },
  {
    icon: "💬",
    title: "Sharhlar",
    text: "Maqola ostida fikringizni yozing va boshqalarning sharhlarini o'qing.",
  },
  {
    icon: "🏆",
    title: "Reyting",
    text: "Eng ko'p maqola yozgan va eng yuqori baholangan foydalanuvchilarni ko'ring.",
  },
  {
    icon: "🔎",
    title: "Qidiruv va filtr",
    text: "Maqolalarni sarlavha va kategoriya bo'yicha tez topish.",
  },
  {
    icon: "♥",
    title: "Sevimlilar",
    text: "Yoqqan maqolangizni saqlab qo'ying va profilda qayta oching.",
  },
  {
    icon: "✍",
    title: "Maqola yozish",
    text: "O'z maqolangizni muqova rasmi bilan joylang.",
  },
  {
    icon: "👤",
    title: "Profil",
    text: "Profil rasmini o'zgartiring va o'zingiz haqingizda yozing.",
  },
  {
    icon: "🔐",
    title: "Kirish va ro'yxatdan o'tish",
    text: "Hisob yarating va shaxsiy imkoniyatlardan foydalaning.",
  },
  {
    icon: "📱",
    title: "Moslashuvchan dizayn",
    text: "Sayt telefon va kompyuterda bir xil qulay ishlaydi.",
  },
];

const tech = [
  "React",
  "TypeScript",
  "Vite",
  "React Router",
  "CSS",
  "localStorage",
];

function About() {
  return (
    <div className="container">
      <section className="hero">
        <h1>
          Tech News <span>haqida</span>
        </h1>
        <p>Texnologiya yangiliklari uchun yaratilgan zamonaviy veb-sayt.</p>
      </section>

      <section className="home-section">
        <h2 className="section-title">Loyiha haqida</h2>
        <p className="about-text">
          Tech News sun'iy intellekt, dasturlash, veb va o'yinlar bo'yicha
          maqolalarni bir joyda o'qish mumkin bo'lgan sayt. Loyiha React va
          TypeScript o'rganish jarayonida o'quv loyihasi sifatida yaratilgan.
        </p>
      </section>

      <section className="home-section">
        <h2 className="section-title">Imkoniyatlar</h2>
        <div className="about-grid">
          {features.map((f) => (
            <div key={f.title} className="about-card">
              <span className="about-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section">
        <h2 className="section-title">Texnologiyalar</h2>
        <div className="tech-list">
          {tech.map((t) => (
            <span key={t} className="tech-chip">
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="about-note">
          <strong>Eslatma:</strong> sayt demo rejimda ishlaydi. Foydalanuvchilar,
          maqolalar, sharhlar va baholar faqat shu brauzerda saqlanadi, parollar
          esa xavfsiz saqlanmaydi.
        </div>
      </section>

      <div className="hero-actions">
        <Link to="/" className="btn btn-primary btn-lg">
          Maqolalarga o'tish
        </Link>
      </div>
    </div>
  );
}

export default About;