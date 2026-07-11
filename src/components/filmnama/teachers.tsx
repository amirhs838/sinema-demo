import { TEACHERS } from "./data";
import { Reveal } from "./reveal";

// ============================================================
// ۶. اساتید — به سبک تیتراژ فیلم (Cast & Crew)
//    پرتره‌ها به‌صورت سیلوئت/مونوگرام سینمایی (بدون چهرهٔ ساختگی)
// ============================================================

function Silhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" className={className} fill="currentColor" aria-hidden="true">
      <path d="M50 10c-12 0-21 9-21 21 0 9 5 16 12 19-16 5-28 20-28 38v12h74V88c0-18-12-33-28-38 7-3 12-10 12-19 0-12-9-21-21-21z" />
    </svg>
  );
}

export function Teachers() {
  return (
    <section id="teachers" className="relative border-b border-divider bg-noir-2 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mb-12 max-w-2xl">
          <span className="font-latin text-xs tracking-[0.35em] text-gold">CAST &amp; CREW · اساتید</span>
          <h2 className="title-rule mt-3 font-display text-4xl font-extrabold text-ivory sm:text-5xl">
            عواملِ صحنهٔ فیلم‌نما
          </h2>
          <p className="mt-5 leading-relaxed text-khaki">
            کنار اساتیدی کار می‌کنید که خودشان جلوی دوربین و پشت صحنهٔ سینما و تلویزیون
            بوده‌اند.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {TEACHERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <article className="group h-full overflow-hidden rounded-sm border border-divider bg-noir transition-colors hover:border-gold/60">
                {/* Cinematic monogram portrait */}
                <div className="spotlight relative flex aspect-[4/5] items-center justify-center overflow-hidden border-b border-divider">
                  {/* corner slate labels */}
                  <span className="absolute start-3 top-3 font-latin text-[10px] tracking-widest text-gold/70">
                    CAST
                  </span>
                  <span className="absolute end-3 top-3 font-latin text-[10px] tracking-widest text-gold/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* silhouette */}
                  <Silhouette className="absolute bottom-0 h-3/4 w-auto text-gold/12" />

                  {/* monogram initials */}
                  <div className="relative z-10 text-center">
                    <div className="font-display text-6xl font-extrabold text-gold/35">
                      {t.initials}
                    </div>
                  </div>

                  {/* bottom fade */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-noir to-transparent" />
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="font-latin text-[11px] tracking-[0.2em] text-gold">
                    {t.role}
                  </div>
                  <h3 className="mt-1.5 font-display text-2xl font-extrabold text-ivory">
                    {t.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-khaki">{t.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
