import { TEACHERS } from "./data";
import { Reveal } from "./reveal";

// ============================================================
// ۶. اساتید — به سبک تیتراژ فیلم (Cast & Crew)
//    عکس‌های واقعی اساتید با درمانِ سینمایی گرم (duotone طلایی روی نویر)
// ============================================================

export function Teachers() {
  return (
    <section id="teachers" className="relative border-b border-divider bg-noir-2 py-14 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mb-10 max-w-2xl sm:mb-12">
          <span className="font-latin text-xs tracking-[0.35em] text-gold">CAST &amp; CREW · اساتید</span>
          <h2 className="title-rule mt-3 font-display text-3xl font-extrabold text-ivory sm:text-5xl">
            عواملِ صحنهٔ فیلم‌نما
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-khaki sm:text-base">
            کنار اساتیدی کار می‌کنید که خودشان جلوی دوربین و پشت صحنهٔ سینما و تلویزیون
            بوده‌اند.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {TEACHERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <article className="group h-full overflow-hidden rounded-sm border border-divider bg-noir transition-colors hover:border-gold/60">
                {/* Cinematic portrait — real photo with red duotone treatment.
                    Photo zone stays dark (like a film still); name plate overlays in white. */}
                <div className="spotlight relative aspect-[3/4] overflow-hidden border-b border-divider sm:aspect-[4/5]">
                  {/* corner slate labels */}
                  <span className="absolute start-3 top-3 z-20 bg-ink/75 px-2 py-0.5 font-latin text-[10px] tracking-widest text-gold">
                    CAST
                  </span>
                  <span className="absolute end-3 top-3 z-20 bg-ink/75 px-2 py-0.5 font-latin text-[10px] tracking-widest text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Photo — absolute background layer, red duotone tint for brand cohesion */}
                  <img
                    src={t.image}
                    alt={`${t.name} — ${t.role}`}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-500 [filter:saturate(0.8)_contrast(1.1)_brightness(0.92)] group-hover:[filter:saturate(1)_contrast(1.05)_brightness(1)]"
                    loading="lazy"
                  />
                  {/* Red duotone overlay */}
                  <div
                    className="absolute inset-0 z-10 mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-30"
                    style={{ backgroundColor: "#e11d2a" }}
                  />
                  {/* Dark fade into card bottom + vignette (keeps name plate readable) */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(14,12,11,0.55)_100%)]" />

                  {/* Name plate on photo (film-credit style) — full width, pinned to bottom */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-3 sm:p-4">
                    <div className="font-latin text-[10px] tracking-[0.2em] text-gold">
                      {t.role}
                    </div>
                    <h3 className="mt-0.5 font-display text-xl font-extrabold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-2xl">
                      {t.name}
                    </h3>
                  </div>
                </div>

                {/* Bio */}
                <div className="p-4 sm:p-5">
                  <p className="text-[13px] leading-relaxed text-khaki sm:text-sm">{t.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
