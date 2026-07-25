import { Reveal } from "./reveal";

// ============================================================
// Paths — دو مسیر، یک فیلم‌نما (Academy + Production)
// بلافاصله بعد از Marquee، قبل از About.
// ============================================================

type PathPanel = {
  code: string;
  title: string;
  subtitle: string;
  desc: string;
  cta: string;
  href: string;
  image: string;
  /** hover tint class added over the background image */
  hoverTint: string;
};

const PATHS: PathPanel[] = [
  {
    code: "PATH 01 · ACADEMY",
    title: "آکادمی فیلم‌نما",
    subtitle: "هفت دپارتمان، یک هدف: حرفه‌ای شدن.",
    desc: "از هنرهای نمایشی و موسیقی تا برنامه‌نویسی، زبان، IT، گردشگری و حسابداری — آکادمی فیلم‌نما یک مجموعهٔ چندرشته‌ای است که در دل غرب تهران، هر مسیر را با مدرک رسمی به پایان می‌رساند.",
    cta: "مشاهدهٔ دپارتمان‌ها",
    href: "#departments",
    image: "/images/hero-cinema.png",
    hoverTint: "from-gold/35",
  },
  {
    code: "PATH 02 · PRODUCTION",
    title: "کارگاه فیلم‌نما",
    subtitle: "از فیلم‌نامه تا اکران، همین‌جا.",
    desc: "کارگاه تولید فیلم‌نما فیلم کوتاه، تیزر، مستند و تدوین می‌سازد. ایده روی کاغذ می‌نشیند، کلاکت می‌خورد و تا نسخهٔ نهایی همراه شما می‌ماند — همان‌جا که آثار هنرجویان روی پرده می‌آیند.",
    cta: "مشاهدهٔ کارها",
    href: "#screening",
    image: "/images/screening-seats.png",
    hoverTint: "from-crimson/70",
  },
];

export function Paths() {
  return (
    <section id="paths" className="relative border-b border-divider bg-noir py-14 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mb-10 max-w-2xl sm:mb-12">
          <span className="font-latin text-xs tracking-[0.35em] text-gold">
            WHERE TO START · از کجا شروع کنیم
          </span>
          <h2 className="title-rule mt-3 font-display text-3xl font-extrabold text-ivory sm:text-5xl">
            دو مسیر، یک فیلم‌نما
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-khaki sm:text-base">
            فیلم‌نما هم یک آکادمی چندرشته‌ای است، هم یک کارگاه فعال تولید فیلم.
            هرکدام را که دنبال می‌کنی، مسیرش از همین‌جا شروع می‌شود.
          </p>
        </Reveal>

        {/* Two big panels */}
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          {PATHS.map((p, i) => (
            <Reveal key={p.code} delay={i * 0.08}>
              <a
                href={p.href}
                className="group relative block min-h-[360px] overflow-hidden rounded-sm border border-divider sm:min-h-[440px]"
              >
                {/* Background image */}
                <img
                  src={p.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover opacity-[0.22] transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Dark gradient for legibility (always) */}
                <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/80 to-noir/40" />
                {/* Hover tint (gold for academy, crimson for production) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${p.hoverTint} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Content */}
                <div className="relative z-10 flex h-full min-h-[360px] flex-col justify-between p-5 sm:min-h-[440px] sm:p-7">
                  <div>
                    <span className="font-latin text-xs tracking-[0.3em] text-gold">
                      {p.code}
                    </span>
                    <h3 className="mt-3 font-display text-3xl font-extrabold text-ivory sm:text-4xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 font-display text-base text-ivory/85 sm:text-lg">
                      {p.subtitle}
                    </p>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-khaki sm:text-[15px]">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold sm:text-base">
                    <span>{p.cta}</span>
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
