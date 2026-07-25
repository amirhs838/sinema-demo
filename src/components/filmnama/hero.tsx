"use client";

import { useRef } from "react";
import Image from "next/image";
import { BRAND } from "./data";
import { Reveal } from "./reveal";

// ============================================================
// ۲. هیرو سینمایی — letterbox + تایپوگرافی پوستری + اسپات‌لایت کرسر
//    Primary (solid red) + Secondary (outline) buttons, split clearly.
// ============================================================
export function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Spotlight cursor — desktop only; CSS disables the ::before on touch devices.
  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMouseMove}
      className="hero-spotlight relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Background cinema-hall image */}
      <Image
        src="/images/hero-cinema.png"
        alt="سالن سینمای آرت‌هاوس با نور اسپات‌لایت روی صحنه و پردهٔ مخمل"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Legibility overlays — dark scrim on the text side */}
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

            {/* Poster-style stacked title — fluid display size */}
            <h1
              className="font-display font-extrabold leading-[0.98]"
              style={{ fontSize: "var(--fs-display)" }}
            >
              <span className="block text-lg text-white/70 sm:text-3xl" style={{ fontSize: undefined }}>
                آموزشگاه آزاد
              </span>
              <span className="mt-0.5 block bg-gradient-to-b from-gold-hover to-gold bg-clip-text text-transparent">
                سینمایی
              </span>
              <span className="block text-white">فیلم‌نما</span>
            </h1>

            {/* Tagline subtitle */}
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75 sm:mt-6 sm:max-w-xl sm:text-lg">
              {BRAND.tagline}
            </p>

            {/* CTAs — on mobile: "چرا فیلم‌نما؟" first, then "مشاهده دوره‌ها"; on desktop: reversed */}
            <div className="mt-7 flex flex-col items-start gap-4 sm:mt-9 sm:flex-row sm:items-center sm:gap-5">
              <a href="#about" className="btn-secondary order-1 text-sm sm:order-2 sm:text-base">
                چرا فیلم‌نما؟
              </a>
              <a href="#courses" className="btn-primary order-2 text-sm sm:order-1 sm:text-base">
                مشاهده دوره‌ها
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
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
