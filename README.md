# Tech News

Texnologiya yangiliklari uchun yaratilgan zamonaviy veb-sayt. Sun'iy intellekt, dasturlash, veb va o'yinlar bo'yicha maqolalarni bir joyda o'qish, o'z maqolangizni joylash, baholash, sharh yozish va sevimlilarni saqlab qo'yish mumkin.

🔗 **Demo:** _Vercel'ga joylangandan keyin havolani shu yerga yozing_

## Imkoniyatlar

- Maqolalarni sarlavha bo'yicha qidirish va kategoriya bo'yicha filtrlash
- Yangi va eski maqolalarni saralash
- Maqola sahifasi: muallif, o'qish vaqti, sana va to'liq matn
- Kirish va ro'yxatdan o'tish
- Sevimli maqolalarni saqlash (♡)
- O'z maqolangizni muqova rasmi bilan joylash va o'chirish
- Profil sahifasi: profil rasmini o'zgartirish, "men haqimda" matni, o'z va sevimli maqolalar
- **Baholash:** maqolaga 1 dan 5 gacha yulduzcha qo'yish, o'rtacha baho kartochkada va maqola sahifasida ko'rinadi
- **Sharhlar:** maqola ostida sharh yozish va o'z sharhini o'chirish
- **Foydalanuvchilar reytingi:** eng ko'p maqola yozganlar va yulduzcha (o'rtacha baho) bo'yicha ikkita ro'yxat
- **Sozlamalar sahifasi:** qorong'i va yorug' mavzu, asosiy rangni tanlash (binafsha, ko'k, yashil, to'q sariq), shrift va matn o'lchamini o'zgartirish, standart holatga qaytarish
- **Mavzu tugmasi:** headerda va profil sahifasida qorong'i/yorug' mavzuni tez almashtirish
- Telefon va kompyuterga moslashgan dizayn

## Texnologiyalar

- React
- TypeScript
- Vite
- React Router
- CSS (tayyor kutubxonasiz, mavzular CSS o'zgaruvchilari orqali)
- localStorage (ma'lumotlarni brauzerda saqlash)

## Ishga tushirish

Kompyuteringizda Node.js o'rnatilgan bo'lishi kerak.

```bash
# kutubxonalarni o'rnatish
npm install

# ishlab chiqish rejimida ochish
npm run dev

# tayyor versiyani yig'ish
npm run build
```

`npm run dev` dan keyin terminalda chiqqan manzilni (odatda `http://localhost:5173`) brauzerda oching.

## Loyiha tuzilmasi

```
src/
 ├─ components/   # Header, ArticleCard, SearchBar, CategoryFilter, Avatar,
 │                # ThemeToggle, Stars (yulduzchalar), ArticleReviews (baho va sharhlar)
 ├─ context/      # AuthContext (foydalanuvchi), ArticlesContext (maqolalar),
 │                # SettingsContext (mavzu va ko'rinish), ReviewsContext (sharh va baholar)
 ├─ data/         # saytning tayyor maqolalari va kategoriyalar
 ├─ pages/        # Home, ArticlePage, Login, Register, Profile, CreateArticle,
 │                # About, Settings (sozlamalar), Rating (foydalanuvchilar reytingi)
 ├─ types/        # TypeScript tiplari
 └─ utils/        # rasmni kichraytirish funksiyasi
```

## Muhim eslatma

Bu o'quv loyihasi, backend (server) yo'q. Foydalanuvchilar, yozilgan maqolalar, sevimlilar, profil rasmlari, **sharhlar, baholar va sayt sozlamalari** faqat shu brauzerning `localStorage` xotirasida saqlanadi. Shuning uchun:

- boshqa kompyuter yoki brauzerda ro'yxatdan o'tish, maqolalar, sharhlar va baholar noldan boshlanadi;
- reyting faqat shu brauzerdagi ma'lumotlar asosida hisoblanadi;
- parollar xavfsiz saqlanmaydi, haqiqiy loyihada bunday qilish mumkin emas.

Kelajakda haqiqiy backend ulash rejalashtirilgan.

## Muallif

Javohir
