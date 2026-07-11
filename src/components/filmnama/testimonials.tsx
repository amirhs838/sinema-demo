import { VOICES, BRAND } from "./data";
import { Reveal } from "./reveal";

// ============================================================
// ۹. نظرات هنرجویان — نمونه‌های واقع‌گرایانه + دعوت به ثبت نظر در اینستاگرام
// ============================================================

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-gold" aria-label="۵ از ۵ ستاره">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.2 6.8.7-5 4.6 1.4 6.7L12 17.8 5.9 20.9l1.4-6.7-5-4.6 6.8-.7z" />
        </svg>
      ))}
    </div>
  );
}

function InitialsAvatar({ name }: { name: string }) {
  return (
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 bg-noir font-display text-sm font-bold text-gold">
      {name.slice(0, 1)}
    </span>
  );
}

export function Testimonials() {
  return (
    <section id="voices" className="relative border-b border-divider bg-noir py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mb-12 max-w-2xl">
          <span className="font-latin text-xs tracking-[0.35em] text-gold">VOICES · صدای هنرجویان</span>
          <h2 className="title-rule mt-3 font-display text-4xl font-extrabold text-ivory sm:text-5xl">
            از زبانِ کسانی که اینجا کار کرده‌اند
          </h2>
          <p className="mt-5 leading-relaxed text-khaki">
            تجربهٔ واقعی هنرجویان فیلم‌نما — از سالن تمرین تا پردهٔ نمایش.
          </p>
        </Reveal>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {VOICES.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.08}>
              <figure className="spotlight relative flex h-full flex-col overflow-hidden rounded-sm border border-divider bg-noir-2 p-6 transition-colors hover:border-gold/50">
                {/* big decorative quote mark */}
                <div className="font-display text-6xl leading-none text-gold/25" aria-hidden="true">
                  ”
                </div>

                <StarRow />

                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ivory/90">
                  {v.quote}
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-divider/60 pt-4">
                  <InitialsAvatar name={v.name} />
                  <div>
                    <div className="font-display text-sm font-bold text-ivory">{v.name}</div>
                    <div className="text-xs text-khaki">{v.field}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Invite banner */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-sm border border-gold/40 bg-noir-2/60 p-5 text-center sm:flex-row sm:text-start">
            <div>
              <h3 className="font-display text-lg font-bold text-ivory">
                تجربهٔ شما را هم می‌خوانیم
              </h3>
              <p className="mt-1 text-sm text-khaki">
                اگر هنرجوی فیلم‌نما هستید، نظرتان را در اینستاگرام برای ما بنویسید.
              </p>
            </div>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 bg-gold px-5 py-2.5 font-display text-sm font-bold text-noir transition-colors hover:bg-gold-hover"
            >
              <span>@{BRAND.instagram}</span>
              <span aria-hidden="true">←</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
