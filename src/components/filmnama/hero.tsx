import { BRAND } from "./data";
import { Reveal } from "./reveal";

// ============================================================
// ۲. هیرو سینمایی (فول‌بلید) — letterbox + تایپوگرافی پوستری + بلیت CTA
// ============================================================
export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Background cinema-hall image */}
      <img
        src="/images/hero-cinema.png"
        alt="سالن سینمای آرت‌هاوس با نور اسپات‌لایت روی صحنه و پردهٔ مخمل"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      {/* Legibility overlays — dark scrim on the text side (hero stays a dark cinematic "screen") */}
      <div className="absolute inset-0 bg-gradient-to-l from-ink via-ink/75 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/40" />

      {/* Top letterbox bar */}
      <div className="letterbox-bar relative z-10 h-7 sm:h-14" />

      {/* Main content — asymmetric poster block aligned to start (right in RTL) */}
      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
          <Reveal className="max-w-3xl">
            {/* Kicker */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              <span className="font-latin text-[11px] tracking-[0.35em] text-gold sm:text-xs">
                FILMNAMA · CINEMA WORKSHOP
              </span>
            </div>

            {/* Poster-style stacked title — white text on the dark cinematic hero */}
            <h1 className="font-display font-extrabold leading-[0.98]">
              <span className="block text-lg text-white/70 sm:text-3xl">آموزشگاه آزاد</span>
              <span className="mt-0.5 block bg-gradient-to-b from-gold-hover to-gold bg-clip-text text-5xl text-transparent sm:text-7xl lg:text-8xl">
                سینمایی
              </span>
              <span className="block text-5xl text-white sm:text-7xl lg:text-8xl">فیلم‌نما</span>
            </h1>

            {/* Tagline subtitle */}
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75 sm:mt-6 sm:max-w-xl sm:text-lg">
              {BRAND.tagline}
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col items-start gap-5 sm:mt-9 sm:flex-row sm:items-center sm:gap-6">
              {/* Ticket CTA with perforated edge */}
              <a
                href="#courses"
                className="ticket group inline-flex items-stretch bg-gold text-white shadow-[0_10px_40px_-12px_rgba(225,29,42,0.55)] transition-colors hover:bg-gold-hover"
              >
                <span className="flex items-center gap-2 px-6 py-3.5 font-display text-base font-bold sm:px-7">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  مشاهده دوره‌ها
                </span>
                <span className="flex items-center border-s border-dashed border-white/45 px-4 font-latin text-sm tracking-widest">
                  SCENE&nbsp;01
                </span>
              </a>

              {/* Secondary text CTA */}
              <a
                href="#about"
                className="group inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-gold sm:text-base"
              >
                <span>چرا فیلم‌نما؟</span>
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Decorative vertical poster text on the far edge */}
      <div className="pointer-events-none absolute inset-y-0 end-5 z-10 hidden items-center lg:flex">
        <span
          className="font-latin text-[11px] tracking-[0.4em] text-white/40"
          style={{ writingMode: "vertical-rl" }}
        >
          ANAMORPHIC · 2.39:1 · 35MM
        </span>
      </div>

      {/* Bottom letterbox bar */}
      <div className="letterbox-bar relative z-10 h-7 sm:h-14" />
    </section>
  );
}
