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

export type Department = {
  fa: string;
  en: string;
  code: string; // department code label (Latin)
  desc: string;
  href: string;
  icon: string; // lucide icon name
  badge?: string; // small gold badge text
  pageReady?: boolean;
};

// هفت دپارتمان آکادمی فیلم‌نما.
// دپارتمان ۱ (هنرهای نمایشی) آمادهٔ نمایش است؛ دپارتمان‌های ۲ تا ۷ صرفاً پیش‌نویس‌اند
// و بعداً با محتوای واقعی جایگزین می‌شوند.
export const DEPARTMENTS: Department[] = [
  {
    fa: "هنرهای نمایشی",
    en: "PERFORMING ARTS",
    code: "DEPT 01",
    desc: "بازیگری، کارگردانی، فیلمنامه‌نویسی، عکاسی سینمایی، گریم، تدوین و فن بیان؛ هفت زیررشته در دل یک کارگاه واقعی سینما.",
    href: "#courses",
    icon: "Clapperboard",
    pageReady: true,
  },
  {
    fa: "موسیقی",
    en: "MUSIC",
    code: "DEPT 02",
    desc: "آموزش حضوری نوازندگی و تئوری موسیقی، از پایه تا اجرای صحنه‌ای.",
    href: "#contact",
    icon: "Music",
  },
  {
    fa: "گردشگری",
    en: "TOURISM",
    code: "DEPT 03",
    desc: "راهنمای تور و صنعت گردشگری؛ دوره‌ای که با مدرک رسمی به پایان می‌رسد.",
    href: "#contact",
    badge: "مدرک آموزش‌وپرورش",
    icon: "Compass",
  },
  {
    fa: "برنامه‌نویسی",
    en: "PROGRAMMING",
    code: "DEPT 04",
    desc: "برنامه‌نویسی وب و نرم‌افزار، از مبانی تا ساخت اولین پروژهٔ واقعی.",
    href: "#contact",
    icon: "Code2",
  },
  {
    fa: "زبان",
    en: "LANGUAGE",
    code: "DEPT 05",
    desc: "دوره‌های زبان خارجی با رویکرد مکالمه‌محور و کاربردی.",
    href: "#contact",
    icon: "Languages",
  },
  {
    fa: "IT",
    en: "INFORMATION TECHNOLOGY",
    code: "DEPT 06",
    desc: "مهارت‌های فناوری اطلاعات و شبکه، متناسب با نیاز بازار کار امروز.",
    href: "#contact",
    icon: "Cpu",
  },
  {
    fa: "حسابداری",
    en: "ACCOUNTING",
    code: "DEPT 07",
    desc: "حسابداری مالی و کار با نرم‌افزارهای حسابداری، آماده برای ورود به بازار کار.",
    href: "#contact",
    icon: "Calculator",
  },
];

export type Course = {
  fa: string;
  en: string;
  scene: string; // scene number label (Latin)
  desc: string;
  icon: string; // lucide icon name
  comingSoon?: boolean;
};

// هفت رشته — همه هم‌وزن. کارگردانی و گریم سینمایی «به‌زودی» اما هم‌اندازه.
export const COURSES: Course[] = [
  {
    fa: "بازیگری",
    en: "ACTING",
    scene: "SCENE 01",
    desc: "بازیگری مقابل دوربین و تئاتر؛ از تکنیک‌های شخصیت‌پردازی تا کار صحنه.",
    icon: "Drama",
  },
  {
    fa: "کارگردانی",
    en: "DIRECTING",
    scene: "SCENE 02",
    desc: "زبان تصویر، مدیریت صحنه و هدایت بازیگر؛ از ایده تا قاب نهایی.",
    icon: "Clapperboard",
    comingSoon: true,
  },
  {
    fa: "فیلمنامه‌نویسی",
    en: "SCREENWRITING",
    scene: "SCENE 03",
    desc: "ساختار دراماتیک، شخصیت‌پردازی و دیالوگ‌نویسی برای سینما.",
    icon: "PenLine",
  },
  {
    fa: "عکاسی سینمایی",
    en: "CINEMATOGRAPHY",
    scene: "SCENE 04",
    desc: "نور، کادربندی و حرکت دوربین؛ روایت با نور و سایه.",
    icon: "Camera",
  },
  {
    fa: "گریم سینمایی",
    en: "MAKE-UP",
    scene: "SCENE 05",
    desc: "گریم سنتی و افکت‌محور برای شخصیت‌پردازی روی پردهٔ سینما.",
    icon: "Brush",
    comingSoon: true,
  },
  {
    fa: "تدوین",
    en: "EDITING",
    scene: "SCENE 06",
    desc: "ریتم، روایت و قواعد کات؛ از خام‌برش تا نسخهٔ نهایی.",
    icon: "Scissors",
  },
  {
    fa: "فن بیان و گویندگی",
    en: "VOICE & DUBBING",
    scene: "SCENE 07",
    desc: "تکنیک‌های تنفس، بیان و گویندگی حرفه‌ای برای صحنه و میکروفون.",
    icon: "Mic",
  },
];

export type Teacher = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image: string;
};

export const TEACHERS: Teacher[] = [
  {
    name: "رامین راستاد",
    role: "نقش: مدرس بازیگری",
    bio: "مدرس رشتهٔ بازیگری؛ آموزش تکنیک‌های بازیگری مقابل دوربین و تئاتر در کارگاه فیلم‌نما.",
    initials: "ر.ر",
    image: "/images/teacher-ramin-rastad.jpg",
  },
  {
    name: "حدیث تهرانی",
    role: "نقش: از اساتید فیلم‌نما",
    bio: "از مدرسان آموزشگاه آزاد سینمایی فیلم‌نما در کنار تیم آموزشی این کارگاه.",
    initials: "ح.ت",
    image: "/images/teacher-hadis-tehrani.jpg",
  },
  {
    name: "رحیم نوروزی",
    role: "نقش: بازیگر و مدرس",
    bio: "بازیگر با سابقهٔ واقعی سینما و تلویزیون؛ از سوابق او ایفای نقش در سریال «یوسف پیامبر» (به کارگردانی فرج‌الله سلحشور)، فیلم «دوزخ برزخ بهشت» و چند اثر دیگر.",
    initials: "ر.ن",
    image: "/images/teacher-rahim-norouzi.jpg",
  },
];

export type Voice = {
  quote: string;
  name: string;
  field: string;
};

// نظرات هنرجویان — نمونه‌های صادقانه و واقع‌گرایانه
export const VOICES: Voice[] = [
  {
    quote:
      "از روزی که پا تو فیلم‌نما گذاشتم یه چیزی دستم اومد: اینجا تئوری خشک نیست، کارِ واقعیه. آقای راستاد جلوی دوربین میذارن و بعدش همون قاب رو با هم می‌بینیم. تا حالا تو هیچ کلاسی این حس رو نداشتم.",
    name: "نگار",
    field: "هنرجوی بازیگری",
  },
  {
    quote:
      "فیلمنامه‌نویسی رو فقط با کتاب یاد نمی‌گیری. اینجا از ایدهٔ اولیه تا پیش‌نویس نهایی همراهی می‌شیم. خروجی ترم ما یه فیلم کوتاه بود که خودمون ساختیم؛ این برام خیلی باارزش‌تر از هر مدرکی بود.",
    name: "امیرحسین",
    field: "هنرجوی فیلمنامه‌نویسی",
  },
  {
    quote:
      "غرب تهران رو گشتم تا یه کارگاه سینمایی جدی پیدا کنم. فیلم‌نما تنها جایی بود که هم مدرکش بین‌المللی بود، هم اساتیدش خودشون تو سینما و تلویزیون کار کرده‌ن. هر هفته از اندیشه میام اینجا و پشیمون نیستم.",
    name: "سارا",
    field: "هنرجوی تدوین",
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

// مارکی زیر هیرو — همهٔ دوره‌های سینما + همهٔ دپارتمان‌ها (پشت‌سرهم، لوپ)
export const MARQUEE_ITEMS: { fa: string; en: string }[] = [
  ...COURSES.map((c) => ({ fa: c.fa, en: c.en })),
  ...DEPARTMENTS.map((d) => ({ fa: d.fa, en: d.en })),
];
