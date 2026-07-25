import { WORKS, BRAND } from "./data";
import { Reveal } from "./reveal";

// ============================================================
// ۷. اتاق نمایش / آثار هنرجویان — گالری تاریک با حال‌وهوای سالن سینما
//    تامبنیل ویدیویی با آیکون پلی به‌شکل حلقهٔ پروژکتور
// ============================================================

function ProjectorPlay() {
  return (
    <div className="group/play relative grid h-16 w-16 place-items-center rounded-full border-2 border-gold/70 transition-all duration-300 group-hover:scale-110 group-hover:border-gold sm:h-20 sm:w-20">
      {/* inner lens ring */}
      <span className="absolute inset-2 rounded-full border border-gold/40" />
      <span className="absolute inset-4 rounded-full border border-gold/20" />
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold sm:h-6 sm:w-6" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

export function Screening() {
  return (
    <section
      id="screening"
      className="relative overflow-hidden border-b border-divider bg-noir py-14 sm:py-28"
    >
      {/* Cinema-seats backdrop (subtle texture on black) */}
      <img
        src="/images/screening-seats.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-noir via-noir/80 to-noir" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mb-10 max-w-2xl sm:mb-12">
          <span className="font-latin text-xs tracking-[0.35em] text-gold">PATH 02 · SCREENING ROOM</span>
          <h2 className="title-rule mt-3 font-display text-3xl font-extrabold text-ivory sm:text-5xl">
            آثارِ هنرجویان روی پرده
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-khaki sm:text-base">
            فیلم‌های کوتاهی که در کارگاه فیلم‌نما ساخته شده‌اند؛ از ایده تا کات نهایی،
            دستِ هنرجویان ما بوده است.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {WORKS.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`مشاهدهٔ فیلم ${w.title} در اینستاگرام فیلم‌نما`}
                className="group block overflow-hidden rounded-sm border border-divider bg-noir-2 transition-colors hover:border-gold/60"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src="/images/screening-seats.png"
                    alt={`پوستهٔ فیلم کوتاه ${w.title}`}
                    className="h-full w-full object-cover opacity-50 transition-opacity duration-500 group-hover:opacity-70"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

                  {/* slate label — dark chip over photo */}
                  <span className="absolute start-3 top-3 bg-ink/80 px-2 py-1 font-latin text-[10px] tracking-widest text-gold">
                    {w.kind === "فیلم کوتاه" ? "SHORT FILM" : "FILM"}
                  </span>

                  {/* projector-ring play */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ProjectorPlay />
                  </div>
                </div>

                {/* Meta */}
                <div className="p-4 sm:p-5">
                  <div className="font-latin text-[11px] tracking-[0.2em] text-khaki">
                    {w.kind}
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-extrabold text-ivory">
                    «{w.title}»
                  </h3>
                  <div className="mt-2 text-sm text-khaki">{w.director}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
