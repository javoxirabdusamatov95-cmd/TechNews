import type { Article } from "../types";

export const localArticles: Article[] = [
  {
    id: 1,
    content: [
  "Sun'iy intellekt so'nggi yillarda hayotimizning ko'plab sohalariga kirib keldi. Tarjima, rasm chizish, matn yozish va dasturlashda yordam beradigan vositalar har kuni ko'payib bormoqda.",
  "Zamonaviy modellar katta hajmdagi ma'lumotlardan o'rganadi va inson tilini tushunib javob bera oladi. Shu sababli ularni ta'lim, tibbiyot va biznesda ishlatish imkoniyatlari kengaymoqda.",
  "Shu bilan birga, sun'iy intellektdan to'g'ri foydalanish ham muhim: uning javoblarini tekshirib ko'rish va shaxsiy ma'lumotlarni ehtiyotkorlik bilan ulashish kerak.",
],
    title: "Sun'iy intellekt rivojlanmoqda",
    description: "AI sohasidagi so'nggi yangiliklar, foydasi va foydalanish",
    cover_image: "/images/images.jfif",
    tag_list: ["ai"],
    published_at: "2026-11-01",
    reading_time_minutes: 3,
    url: "#",
    user: { name: "TechNews", username: "TECHNEWS" },
  },

     {
    id: 2,
    content: [
  "Dasturlashni o'rganishni boshlayotganlar uchun eng muhim narsa sabr va muntazam mashq qilishdir. Har kuni oz bo'lsa ham kod yozish katta natija beradi.",
  "Avval bitta tilni tanlab, uning asoslarini o'rganish kerak: o'zgaruvchilar, shartlar, sikllar va funksiyalar. Keyin kichik loyihalar qilish bilimlarni mustahkamlaydi.",
  "Xato qilishdan qo'rqmang: dasturchilar ham har kuni xatolarga duch keladi va ularni tuzatish orqali o'rganadi.",
],
    title: "Dasturlash olamiga ilk qadam",
    description: "Dasturlash sohasiga kirish uchun asosiy qadamlar.",
    cover_image: "/images/images1.jfif",
    tag_list: ["programming"],
    published_at: "2026-11-01",
    reading_time_minutes: 3,
    url: "#",
    user: { name: "TechNews", username: "TECHNEWS" },
  },

    {
    id: 3,
    content: [
  "Zamonaviy veb saytlar endi faqat ma'lumot ko'rsatish uchun emas, balki to'liq ilova sifatida ishlaydi. Buning uchun React, Vue va Angular kabi kutubxonalar keng qo'llaniladi.",
  "Yaxshi sayt tez ochilishi, telefon va kompyuterda bir xil chiroyli ko'rinishi va foydalanuvchiga qulay bo'lishi kerak. Shuning uchun moslashuvchan (responsive) dizayn juda muhim.",
  "TypeScript esa katta loyihalarda xatolarni oldindan topishga yordam beradi va kodni tartibli saqlaydi.",
],
    title: "Zamonaviy veb saytlar yaratish",
    description: "Zamonaviy veb saytlar yaratish haqidagi yangiliklar.",
    cover_image: "/images/images2.jfif",
    tag_list: ["webdev"],
    published_at: "2026-11-01",
    reading_time_minutes: 3,
    url: "#",
    user: { name: "TechNews", username: "TECHNEWS" },
  },

    {
    id: 4,
    content: [
  "O'yinlar industriyasi bugun dunyodagi eng tez rivojlanayotgan sohalardan biri. Unda dasturchilar, dizaynerlar, rassomlar va musiqachilar birgalikda ishlaydi.",
  "Ko'plab o'yinlar Unity va Unreal Engine kabi tayyor vositalarda yaratiladi. Kichik jamoalar ham mustaqil (indie) o'yinlar chiqarib, katta muvaffaqiyatga erishishi mumkin.",
  "O'yin yaratishni o'rganish dasturlash, mantiqiy fikrlash va jamoada ishlash ko'nikmalarini birdaniga rivojlantiradi.",
],
    title: "O'yinlar industriyasi sirlari",
    description: "O'yinlar industriyasida ishlash haqidagi yangiliklar.",
    cover_image: "/images/images3.jfif",
    tag_list: ["gamedev"],
    published_at: "2026-11-01",
    reading_time_minutes: 3,
    url: "#",
    user: { name: "TechNews", username: "TECHNEWS" },
  },

    {
    id: 5,
    title: "AI yordamchilardan to'g'ri foydalanish sirlari",
    description:
      "Sun'iy intellekt yordamchilaridan o'qishda va ishda samarali foydalanish bo'yicha maslahatlar.",
    content: [
      "Sun'iy intellekt yordamchilari bugun o'quvchilar ham, dasturchilar ham eng ko'p ishlatadigan vositalardan biriga aylandi. Lekin ulardan olinadigan natija ko'p jihatdan savol qanday berilganiga bog'liq.",
      "Birinchi qoida: savolni aniq va batafsil yozing. \"Menga kod yoz\" deyish o'rniga, qaysi tilda, nima qilishi kerakligi va qanday ma'lumot bilan ishlashini tushuntirsangiz, javob ancha foydali bo'ladi.",
      "Ikkinchi qoida: javobni har doim tekshiring. AI ba'zan ishonchli ko'rinadigan, lekin noto'g'ri ma'lumot berishi mumkin. Kodni ishga tushirib ko'ring, faktlarni ishonchli manbadan solishtiring.",
      "Uchinchi qoida: tayyor javobni ko'chirib olish o'rniga, uni tushunishga harakat qiling. AI'dan o'qituvchi sifatida foydalanib, \"buni nima uchun shunday yozding?\" deb so'rasangiz, o'rganish tezlashadi. Shaxsiy ma'lumotlaringiz va parollaringizni esa hech qachon yozmang.",
    ],
    cover_image: "/images/images4.jfif",
    tag_list: ["ai"],
    published_at: "2026-11-10",
    reading_time_minutes: 2,
    url: "#",
    user: { name: "TechNews", username: "TECHNEWS" },
  },
  {
    id: 6,
    title: "Git nima va nega har bir dasturchi uni bilishi kerak?",
    description:
      "Versiyalarni boshqarish tizimi Git va GitHub haqida boshlovchilar uchun qisqacha tushuntirish.",
    content: [
      "Git kodning o'zgarishlarini kuzatib boradigan tizim. Fayllaringizni har safar saqlaganingizda yangi nusxa yaratish o'rniga, Git faqat nima o'zgarganini eslab qoladi va xohlagan vaqtda oldingi holatga qaytishga imkon beradi.",
      "Git'ning asosiy tushunchalari oddiy. Commit loyihaning ma'lum paytdagi holatini saqlaydi, branch esa asosiy kodga tegmasdan yangi narsani sinab ko'rish uchun alohida yo'l ochadi. Tajriba muvaffaqiyatli bo'lsa, uni asosiy qismga qo'shib yuborasiz.",
      "GitHub esa Git loyihalarini internetda saqlash va boshqalar bilan ulashish uchun xizmat. Bir necha kishi bitta loyihada ishlaganda, har kim o'z qismini yozadi va keyin hammasi birlashtiriladi.",
      "Boshlovchi dasturchi uchun GitHub profili portfolio vazifasini ham o'taydi. Yaratgan har bir loyihangizni u yerga yuklab borsangiz, vaqt o'tgan sari o'sishingizni ko'rsatadigan tayyor to'plam paydo bo'ladi.",
    ],
    cover_image: "images/git.jfif",
    tag_list: ["programming"],
    published_at: "2026-11-08",
    reading_time_minutes: 2,
    url: "#",
    user: { name: "TechNews", username: "TECHNEWS" },
  },
  {
    id: 7,
    title: "React nima va nima uchun u bunchalik mashhur?",
    description:
      "Zamonaviy saytlar yaratishda keng ishlatiladigan React kutubxonasining asosiy g'oyalari.",
    content: [
      "React foydalanuvchi interfeyslarini yaratish uchun mo'ljallangan JavaScript kutubxonasi. Uni Facebook jamoasi yaratgan va bugun dunyodagi ko'plab saytlar va ilovalarda ishlatiladi.",
      "React'ning asosiy g'oyasi komponentlardir. Sahifa kichik, mustaqil bo'laklarga bo'linadi: sarlavha, qidiruv, kartochka, tugma. Har bir bo'lak bir marta yoziladi va kerak bo'lgan joyda qayta-qayta ishlatiladi.",
      "Ikkinchi muhim g'oya holat (state). Foydalanuvchi biror narsani bosganda yoki yozganda, holat o'zgaradi va React sahifaning faqat kerakli qismini avtomatik yangilaydi. Shuning uchun qo'lda sahifani o'zgartirib o'tirish shart emas.",
      "React'ni TypeScript bilan birga ishlatish kodni xavfsizroq qiladi: ma'lumot turlari oldindan tekshiriladi va ko'p xatolar sayt ishga tushmasdan topiladi. Aynan shu juftlik bugun yangi loyihalarda eng ko'p tanlanadi.",
    ],
    cover_image: "images/react.jfif",
    tag_list: ["webdev"],
    published_at: "2026-11-12",
    reading_time_minutes: 2,
    url: "#",
    user: { name: "TechNews", username: "TECHNEWS" },
  },
  {
    id: 8,
    title: "Birinchi o'yinni yaratish: qayerdan boshlash kerak?",
    description:
      "O'yin yaratishni boshlamoqchi bo'lganlar uchun dvigatel tanlash va birinchi loyiha bo'yicha maslahatlar.",
    content: [
      "O'yin yaratish ko'pchilikka murakkab tuyuladi, lekin kichikdan boshlasangiz bu juda qiziqarli jarayon. Eng katta xato odatda birinchi loyihaga haddan tashqari katta g'oya tanlashdir.",
      "Dastlab oddiy o'yinni tanlang: to'plarni tutish, bitta ekrandagi jumboq yoki oddiy platformer. Bunday o'yin ham harakat, to'qnashuv, ball hisoblash va g'alaba yoki mag'lubiyat kabi barcha asosiy tushunchalarni o'rgatadi.",
      "O'yin dvigateli ishni ancha yengillashtiradi. Unity va Godot boshlovchilar orasida mashhur, Unreal Engine esa katta va murakkab loyihalarda ko'p ishlatiladi. Godot bepul va ochiq kodli bo'lgani uchun o'rganishni boshlash uchun qulay variant bo'la oladi.",
      "Eng muhimi, boshlagan o'yiningizni oxirigacha yetkazing. Kichik, lekin tugallangan o'yin yarim yo'lda qolgan katta loyihadan ko'ra ko'proq narsa o'rgatadi va uni do'stlaringizga ko'rsatsangiz bo'ladi.",
    ],
    cover_image: "images/images8.jfif",
    tag_list: ["gamedev"],
    published_at: "2026-11-12",
    reading_time_minutes: 2,
    url: "#",
    user: { name: "TechNews", username: "TECHNEWS" },
  },


];