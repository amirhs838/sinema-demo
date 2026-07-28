# فیلم‌نما · Design Tokens

تمام رنگ‌ها، فونت‌ها و فاصله‌ها به‌صورت CSS variables در `src/app/globals.css` (`@theme` block) تعریف شده‌اند و در کل پروژه به‌صورت یکدست استفاده می‌شوند.

## رنگ (Color)

### پالت اصلی — قرمز سینمایی + طلایی پریمیوم (فرش قرمز / جوایز سینمایی)
قرمز انرژی سینما را می‌رساند؛ **طلایی/کهربایی زبان مشترکِ همهٔ دپارتمان‌ها** است و حس پریمیوم می‌دهد. این دو رنگ با هم پالت فرش قرمز و جوایز سینمایی را می‌سازند.

| توکن | مقدار | کاربرد |
|---|---|---|
| `--color-noir` | `#0b0b0c` | پس‌زمینهٔ اصلی صفحه |
| `--color-noir-2` | `#121214` | پس‌زمینهٔ سکشن‌های متناوب |
| `--color-surface` | `#1a1a1d` | کارت‌ها |
| `--color-surface-hover` | `#232326` | هاور کارت‌ها |
| `--color-surface-secondary` | `#161618` | کارت‌های کم‌رنگ‌تر |
| `--color-ivory` | `#f5f5f4` | متن اصلی (سفیدِ گرم، نه خالص) |
| `--color-khaki` | `#a1a1a6` | متن ثانویه |
| `--color-muted` | `#6b6b70` | متن کم‌رنگ |
| `--color-gold` | `#e11d2a` | لهجهٔ قرمز (انرژی سینما) |
| `--color-gold-hover` | `#ff2e40` | هاور قرمز |
| `--color-amber` | `#f5b942` | **لهجهٔ طلایی پریمیوم — زبان مشترک همهٔ دپارتمان‌ها** |
| `--color-amber-hover` | `#ffd166` | هاور طلایی |
| `--color-amber-dim` | `#b8862a` | طلایی کم‌رنگ (بوردرها) |
| `--color-crimson` | `#7f1d1d` | قرمز تیره (تگ‌ها) |
| `--color-cine-green` | `#1f2937` | slate خنثی (وضعیت موفقیت/کپی) |
| `--color-divider` | `#2a2a2e` | بوردر نازک |
| `--color-ink` | `#0b0b0c` | پس‌زمینهٔ تیرک برای اورلی هیرو/عکس |

### قاعدهٔ استفاده
- **قرمز (`gold`)**: دکمه‌های اصلی، لهجه‌های سینمایی، CTAهای ثبت‌نام.
- **طلایی (`amber`)**: لهجهٔ پریمیوم، بوردر گلس، گلو، آیکون‌های دپارتمان‌ها، خط‌زیر تیترها در بخش‌های غیرسینمایی.

## تایپوگرافی (Typography)

| توکن | فونت | کاربرد |
|---|---|---|
| `--font-display` | Estedad (وزن ۶۰۰/۷۰۰/۸۰۰) | تیترها (فارسی) |
| `--font-body` | Vazirmatn (وزن ۴۰۰-۷۰۰) | متن بدنه (فارسی) |
| `--font-latin` | Bebas Neue | لهجهٔ لاتین تزئینی |
| `--font-mono` | Vazirmatn (tabular) | اعداد، USSD، ترمینال |

### مقیاس فلوئید (clamp)
- `--fs-display`: `clamp(2.25rem, 5vw + 1rem, 4.5rem)` — هیرو
- `--fs-h2`: `clamp(1.5rem, 2.5vw + 0.5rem, 2.5rem)` — عنوان سکشن
- `--fs-h3`: `clamp(1.125rem, 1.2vw + 0.8rem, 1.375rem)` — عنوان کارت
- `--fs-body`: `1rem`
- `--fs-small`: `0.8125rem`
- `--lh-body`: `1.75` | `--lh-heading`: `1.3`

`font-feature-settings: "ss01"` روی body برای نمایش یکدست ارقام فارسی.

## فاصله‌گذاری (Spacing)
مقیاس ۴px: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.
پدینگ عمودی سکشن‌ها: دسکتاپ ۹۶–۱۲۸px، موبایل ۵۶–۷۲px.

## شعاع گوشه (Radius)
`--radius: 0.5rem` + مشتقات (sm/md/lg/xl). کارت‌های موکاپ: `rounded-3xl`.

## سیستم دکمه (Button System)
1. **`.btn-primary`** — solid قرمز، متن سفید، radius 8px.
2. **`.btn-secondary`** — outline، بوردر سفید ۲۴٪، هاور بک‌گراند ۸٪.
3. **`.btn-tertiary`** — متن + فلش، underline روی هاور.
همه `focus-visible` با outline طلایی.

## ابزارها (Utilities)
- `.glass` — glassmorphism (backdrop-blur + بوردر گلو طلایی)
- `.glass-hover` — هاور: بوردر طلایی + سایه طلایی
- `.tilt-card` / `.tilt-inner` — تیلت سه‌بعدی خفیف روی هاور (دسکتاپ)
- `.amber-glow` / `.amber-text-glow` — گلو طلایی پریمیوم
- `.countup` — اعداد tabular برای انیمیشن count-up
- `.film-grain` — لایهٔ نویز ظریف (screen blend)
- `.hero-spotlight` — اسپات‌لایت کرسر (دسکتاپ‌فقط)
- `.teacher-photo` — duotone B&W + تینت قرمز یکدست روی عکس اساتید
- `.voice-avatar` — گرادیان شعاعی + آیکون film-reel

## انیمیشن (Motion)
- **Lenis** (اسکرول نرم) — غیرفعال روی موبایل و `prefers-reduced-motion`
- **Reveal** (framer-motion) — fade + translateY 16px، stagger ۶۰ms روی فرزندان
- **count-up** — موقع ورود به دید، easeOutCubic، ۱.۶s
- **مگنتیک دکمه** — کشش خفیف به سمت موس (دسکتاپ‌فقط)
- همهٔ انیمیشن‌ها زیر `prefers-reduced-motion: reduce` غیرفعال/instant می‌شوند.
