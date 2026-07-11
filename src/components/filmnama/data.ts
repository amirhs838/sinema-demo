// ============================================================
// فیلم‌نما · محتوای واقعی برند (بدون محتوای ساختگی)
// All content below is real brand information for Filmnama academy.
// ============================================================

export const BRAND = {
  name: "فیلم‌نما",
  fullName: "آموزشگاه آزاد سینمایی فیلم‌نما",
  tagline: "اولین و تنها کارگاه سینمایی با مدرک بین‌المللی در غرب تهران",
  latinTag: "FILM ACADEMY",
  phoneMobile: "09120290980",
  phoneLandline: "02165560132",
  ussd: "*6655*1*202020#",
  instagram: "kargah.filmnama",
  instagramUrl: "https://instagram.com/kargah.filmnama",
  address: "اندیشه، فاز ۳، خیابان بوستان، خیابان شبنم، پلاک ۱۹",
  addressShort: "اندیشه، فاز ۳ — غرب تهران",
  hours: "هر روز هفته، ۱۳ الی ۲۱",
};

export const NAV = [
  { label: "صفحه اصلی", href: "#home" },
  { label: "دوره‌ها", href: "#courses" },
  { label: "اساتید", href: "#teachers" },
  { label: "گالری", href: "#screening" },
  { label: "مقالات", href: "#articles" },
  { label: "درباره ما", href: "#about" },
  { label: "تماس با ما", href: "#contact" },
];

export type Course = {
  fa: string;
  en: string;
  scene: string; // scene number label (Latin)
  desc: string;
  comingSoon?: boolean;
};

// هفت رشته — همه هم‌وزن. کارگردانی و گریم سینمایی «به‌زودی» اما هم‌اندازه.
export const COURSES: Course[] = [
  {
    fa: "بازیگری",
    en: "ACTING",
    scene: "SCENE 01",
    desc: "بازیگری مقابل دوربین و تئاتر؛ از تکنیک‌های شخصیت‌پردازی تا کار صحنه.",
  },
  {
    fa: "کارگردانی",
    en: "DIRECTING",
    scene: "SCENE 02",
    desc: "زبان تصویر، مدیریت صحنه و هدایت بازیگر؛ از ایده تا قاب نهایی.",
    comingSoon: true,
  },
  {
    fa: "فیلمنامه‌نویسی",
    en: "SCREENWRITING",
    scene: "SCENE 03",
    desc: "ساختار دراماتیک، شخصیت‌پردازی و دیالوگ‌نویسی برای سینما.",
  },
  {
    fa: "عکاسی سینمایی",
    en: "CINEMATOGRAPHY",
    scene: "SCENE 04",
    desc: "نور، کادربندی و حرکت دوربین؛ روایت با نور و سایه.",
  },
  {
    fa: "گریم سینمایی",
    en: "MAKE-UP",
    scene: "SCENE 05",
    desc: "گریم سنتی و افکت‌محور برای شخصیت‌پردازی روی پردهٔ سینما.",
    comingSoon: true,
  },
  {
    fa: "تدوین",
    en: "EDITING",
    scene: "SCENE 06",
    desc: "ریتم، روایت و قواعد کات؛ از خام‌برش تا نسخهٔ نهایی.",
  },
  {
    fa: "فن بیان و گویندگی",
    en: "VOICE & DUBBING",
    scene: "SCENE 07",
    desc: "تکنیک‌های تنفس، بیان و گویندگی حرفه‌ای برای صحنه و میکروفون.",
  },
];

export type Teacher = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const TEACHERS: Teacher[] = [
  {
    name: "رامین راستاد",
    role: "نقش: مدرس بازیگری",
    bio: "مدرس رشتهٔ بازیگری؛ آموزش تکنیک‌های بازیگری مقابل دوربین و تئاتر در کارگاه فیلم‌نما.",
    initials: "ر.ر",
  },
  {
    name: "حدیث تهرانی",
    role: "نقش: از اساتید فیلم‌نما",
    bio: "از مدرسان آموزشگاه آزاد سینمایی فیلم‌نما در کنار تیم آموزشی این کارگاه.",
    initials: "ح.ت",
  },
  {
    name: "رحیم نوروزی",
    role: "نقش: بازیگر و مدرس",
    bio: "بازیگر با سابقهٔ واقعی سینما و تلویزیون؛ از سوابق او ایفای نقش در سریال «یوسف پیامبر» (به کارگردانی فرج‌الله سلحشور)، فیلم «دوزخ برزخ بهشت» و چند اثر دیگر.",
    initials: "ر.ن",
  },
];

export type Work = {
  title: string;
  director: string;
  kind: string;
};

export const WORKS: Work[] = [
  {
    title: "اخفاء",
    director: "ساختهٔ بهنام شعبانی‌مهر",
    kind: "فیلم کوتاه",
  },
  {
    title: "سایه‌های تردید",
    director: "اثر هنرجویان فیلم‌نما",
    kind: "فیلم کوتاه",
  },
];

export type Article = {
  title: string;
  kicker: string;
  desc: string;
  read: string;
};

export const ARTICLES: Article[] = [
  {
    title: "مراحل تدوین فیلم: از خام‌برش تا نسخهٔ نهایی",
    kicker: "تدوین",
    desc: "سفر یک فیلم از مواد خام ضبط‌شده تا کات نهایی؛ شناخت ریتم، قواعد کات و ساختن روایت در اتاق تدوین.",
    read: "مجلهٔ سینمایی",
  },
  {
    title: "نورپردازی سینمایی با لامپ‌های تنگستن",
    kicker: "عکاسی سینمایی",
    desc: "چراغ‌های تنگستن و دمای رنگ گرم؛ ساختن فضای دراماتیک با نور، همان نوری که سالن سینما را زنده می‌کند.",
    read: "مجلهٔ سینمایی",
  },
  {
    title: "از ایده تا فیلمنامه: ساختار سه‌پرده‌ای",
    kicker: "فیلمنامه‌نویسی",
    desc: "قواعد ساختار دراماتیک و سفر شخصیت اصلی در سه پردهٔ کلاسیک؛ پایهٔ روایت در سینمای داستانی.",
    read: "مجلهٔ سینمایی",
  },
];

// مارکی زیر هیرو — هفت رشته
export const MARQUEE_ITEMS = [
  "بازیگری",
  "کارگردانی",
  "فیلمنامه‌نویسی",
  "عکاسی سینمایی",
  "گریم سینمایی",
  "تدوین",
  "فن بیان و گویندگی",
];
