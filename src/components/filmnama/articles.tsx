import { ARTICLES, BRAND } from "./data";
import { Reveal } from "./reveal";

// ============================================================
// ۸. مقالات — کارت‌های مجلهٔ سینمایی (نه کارت بلاگ معمولی)
// ============================================================

const ARTICLE_IMAGES = [
  "/images/article-editing.png",
  "/images/article-clapper.png",
  "/images/article-screenplay.png",
];

export function Articles() {
  return (
    <section id="articles" className="relative border-b border-divider bg-noir-2 py-14 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
          <div className="max-w-2xl">
            <span className="font-latin text-xs tracking-[0.35em] text-gold">JOURNAL · مجلهٔ سینمایی</span>
            <h2 className="title-rule mt-3 font-display text-3xl font-extrabold text-ivory sm:text-5xl">
              از پشتِ دوربینِ فیلم‌نما
            </h2>
          </div>
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gold transition-colors hover:text-gold-hover"
          >
            همهٔ مقالات در اینستاگرام ←
          </a>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {ARTICLES.map((a, i) => {
            const img = ARTICLE_IMAGES[i];

            if (!img) {
              // Typographic feature card (no photo) — editorial variety
              return (
                <Reveal key={a.title} delay={i * 0.08}>
                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spotlight group flex h-full flex-col justify-between overflow-hidden rounded-sm border border-divider bg-noir p-6 transition-colors hover:border-gold/60"
                  >
                    <div>
                      <span className="font-latin text-[11px] tracking-[0.3em] text-gold">
                        {a.kicker.toUpperCase()}
                      </span>
                      <div className="mt-4 font-display text-7xl font-extrabold leading-none text-gold/15">
                        “
                      </div>
                      <h3 className="-mt-4 font-display text-2xl font-extrabold leading-snug text-ivory">
                        {a.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-khaki">{a.desc}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-divider/60 pt-3">
                      <span className="font-latin text-[10px] tracking-widest text-gold">
                        {a.read}
                      </span>
                      <span className="text-gold transition-transform duration-300 group-hover:-translate-x-1">
                        ←
                      </span>
                    </div>
                  </a>
                </Reveal>
              );
            }

            return (
              <Reveal key={a.title} delay={i * 0.08}>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-sm border border-divider bg-noir-2 transition-colors hover:border-gold/60"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/10]">
                    <img
                      src={img}
                      alt={a.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir-2 via-transparent to-transparent" />
                    <span className="absolute start-3 top-3 bg-noir/85 px-2.5 py-1 font-latin text-[10px] tracking-widest text-gold">
                      {a.kicker.toUpperCase()}
                    </span>
                  </div>
                  {/* Body */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <h3 className="font-display text-lg font-extrabold leading-snug text-ivory sm:text-xl">
                      {a.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-khaki sm:text-sm">{a.desc}</p>
                    <div className="mt-4 flex items-center justify-between border-t border-divider/60 pt-3 sm:mt-5">
                      <span className="font-latin text-[10px] tracking-widest text-gold">
                        {a.read}
                      </span>
                      <span className="text-gold transition-transform duration-300 group-hover:-translate-x-1">
                        ←
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
