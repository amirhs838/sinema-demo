"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { BRAND } from "./data";
import { Reveal } from "./reveal";
import { MagneticButton } from "./magnetic-button";

// ============================================================
// ۲. هیرو سینمایی — ویدیوی پس‌زمینه + پارالاکس لایه‌ای + وینیت
//    موبایل: ویدیوی عمودی؛ دسکتاپ: ویدیوی افقی. یک‌بار پخش، فریم آخر ثابت.
// ============================================================

const handleEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
  e.currentTarget.pause();
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Parallax: overlay & content move at different rates (desktop only)
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Spotlight cursor — desktop only
  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  // parallax offsets (capped)
  const overlayY = Math.min(scrollY * 0.3, 120);
  const contentY = Math.min(scrollY * 0.15, 60);

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMouseMove}
      className="hero-spotlight relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Background video — desktop (landscape) */}
      <video
        className="absolute inset-0 hidden h-full w-full object-cover bg-noir sm:block"
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-label="انیمیشن لوگوی فیلم‌نما در نور قرمز اسپات‌لایت سینمایی"
        onEnded={handleEnded}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Background video — mobile (portrait) */}
      <video
        className="absolute inset-0 h-full w-full object-cover bg-noir sm:hidden"
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-label="انیمیشن لوگوی فیلم‌نما در نور قرمز اسپات‌لایت سینمایی"
        onEnded={handleEnded}
      >
        <source src="/videos/hero-bg-mobile.mp4" type="video/mp4" />
      </video>

      {/* SEO fallback image (hidden visually, indexed by crawlers) */}
      <Image
        src="/images/hero-cinema.png"
        alt="سالن سینمای آرت‌هاوس با نور اسپات‌لایت روی صحنه و پردهٔ مخمل"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ display: "none" }}
      />

      {/* Parallax overlay layers (move slower than content) */}
      <div
        className="absolute inset-0 bg-gradient-to-l from-ink via-ink/75 to-ink/20"
        style={{ transform: `translateY(${overlayY}px)` }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/40"
        style={{ transform: `translateY(${overlayY * 0.5}px)` }}
      />
      {/* Vignette for depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(11,11,12,0.7) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top letterbox bar */}
      <div className="letterbox-bar relative z-10 h-7 sm:h-14" />

      {/* Main content — parallax (moves slightly slower) */}
      <div className="relative z-10 flex flex-1 items-center" style={{ transform: `translateY(${contentY}px)` }}>
        <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
          <Reveal className="max-w-3xl">
            {/* Kicker */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="h-px w-10 bg-amber" aria-hidden="true" />
              <span className="font-latin text-[11px] tracking-[0.35em] text-amber sm:text-xs">
                FILMNAMA · CINEMA WORKSHOP
              </span>
            </div>

            {/* Poster-style stacked title — fluid display size */}
            <h1
              className="font-display font-extrabold leading-[0.98]"
              style={{ fontSize: "var(--fs-display)" }}
            >
              <span className="block text-lg text-white/70 sm:text-3xl">
                آموزشگاه آزاد
              </span>
              <span className="mt-0.5 block bg-gradient-to-b from-amber-hover via-amber to-gold bg-clip-text text-transparent amber-text-glow">
                سینمایی
              </span>
              <span className="block text-white">فیلم‌نما</span>
            </h1>

            {/* Tagline subtitle */}
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80 sm:mt-6 sm:max-w-xl sm:text-lg">
              {BRAND.tagline}
            </p>

            {/* CTAs — primary (magnetic) + secondary (high-contrast outline) */}
            <div className="mt-7 flex flex-col items-start gap-4 sm:mt-9 sm:flex-row sm:items-center sm:gap-5">
              <a
                href="#about"
                className="btn-secondary order-1 text-sm sm:order-2 sm:text-base"
                style={{
                  borderColor: "rgba(245, 185, 66, 0.45)",
                  color: "#f5f5f4",
                }}
              >
                چرا فیلم‌نما؟
              </a>
              <MagneticButton
                href="#courses"
                className="btn-primary order-2 text-sm sm:order-1 sm:text-base"
                strength={0.25}
              >
                مشاهده دوره‌ها
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Decorative vertical poster text on the far edge */}
      <div className="pointer-events-none absolute inset-y-0 end-5 z-10 hidden items-center lg:flex">
        <span
          className="font-latin text-[11px] tracking-[0.4em] text-amber/40"
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
