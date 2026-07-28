"use client";

import { useState, useEffect, useCallback, useSyncExternalStore, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TEACHERS } from "./data";
import { Reveal } from "./reveal";

// ============================================================
// اساتید — کاروسل تک‌نمایشیِ چشم‌نواز
// پخش خودکار هر ۵ ثانیه + ناوبری فلش + نقاط + کشیدن لمسی
// ============================================================

const AUTOPLAY_MS = 5000;

// prefers-reduced-motion (بدون خطای lint در setState داخل effect)
const subscribeReducedMotion = (cb: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener?.("change", cb);
  return () => mq.removeEventListener?.("change", cb);
};
const getReducedSnapshot = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const getReducedServerSnapshot = () => false;

export function Teachers() {
  const [active, setActive] = useState(0);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedSnapshot,
    getReducedServerSnapshot
  );
  const [paused, setPaused] = useState(false);
  const total = TEACHERS.length;

  const go = useCallback(
    (next: number) => setActive(((next % total) + total) % total),
    [total]
  );
  const next = useCallback(() => setActive((a) => (a + 1) % total), []);
  const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);

  // Autoplay every 5s (paused on hover/interaction, disabled for reduced-motion)
  useEffect(() => {
    if (reduced || paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [reduced, paused, total]);

  // Keyboard navigation (RTL-aware)
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") next();
    else if (e.key === "ArrowRight") prev();
  };

  // Touch / drag swipe support
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 45) {
      // In RTL: swipe right → previous, swipe left → next
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
    // resume autoplay shortly after
    window.setTimeout(() => setPaused(false), 1500);
  };

  const t = TEACHERS[active];

  return (
    <section
      id="teachers"
      className="relative overflow-hidden border-b border-divider bg-noir py-14 sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ambient red glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 30%, rgba(225,29,42,0.10), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Heading — centered */}
      <Reveal className="relative mx-auto mb-12 max-w-3xl px-4 text-center sm:mb-16 sm:px-6">
        <span className="font-latin text-xs tracking-[0.35em] text-gold">
          CAST &amp; CREW · اساتید
        </span>
        <h2 className="title-rule mt-3 inline-block font-display text-3xl font-extrabold text-ivory sm:text-5xl">
          عواملِ صحنهٔ فیلم‌نما
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-khaki sm:text-base">
          کنار اساتیدی کار می‌کنید که خودشان جلوی دوربین و پشت صحنهٔ سینما و تلویزیون
          بوده‌اند.
        </p>
      </Reveal>

      {/* Carousel viewport */}
      <div
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        onKeyDown={onKey}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="اساتید فیلم‌نما"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Slide */}
        <div key={active} className="tab-panel-enter">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            {/* Image card (left in RTL) */}
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-divider bg-surface shadow-[0_30px_80px_-30px_rgba(225,29,42,0.35)]">
                {/* red glow behind photo */}
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 75% 65% at 50% 25%, rgba(225,29,42,0.30), transparent 70%)",
                  }}
                />
                <Image
                  src={t.image}
                  alt={`${t.name} — ${t.role}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="relative z-10 object-cover object-top"
                  loading="lazy"
                />
                {/* dark fade at bottom for depth */}
                <div className="absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                {/* CAST slate */}
                <span className="absolute end-3 top-3 z-20 bg-ink/75 px-2 py-0.5 font-latin text-[10px] tracking-widest text-gold backdrop-blur">
                  CAST
                </span>
                {/* index badge */}
                <span className="absolute bottom-3 start-3 z-20 font-latin text-2xl text-ivory/30">
                  {String(active + 1).padStart(2, "0")}
                  <span className="text-ivory/15"> / {String(total).padStart(2, "0")}</span>
                </span>
              </div>
            </div>

            {/* Text column (right in RTL) */}
            <div className="order-2 lg:order-1">
              <div className="font-latin text-xs tracking-[0.3em] text-gold">
                {t.role}
              </div>
              <h3 className="mt-2 font-display text-4xl font-extrabold leading-tight text-ivory sm:text-5xl lg:text-6xl">
                {t.name}
              </h3>
              <div className="mt-4 h-px w-16 bg-gold/60" aria-hidden="true" />
              <p className="mt-5 max-w-xl text-sm leading-[1.9] text-khaki sm:text-base">
                {t.bio}
              </p>

              {/* hint for swipe on mobile */}
              <div className="mt-6 flex items-center gap-2 text-xs text-muted lg:hidden">
                <span className="inline-flex items-center gap-1">
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span>برای دیدن استاد بعدی، بکشید</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation: prev arrow + dots + next arrow */}
        <div className="mt-12 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={prev}
            aria-label="استاد قبلی"
            className="grid h-12 w-12 place-items-center rounded-full border border-divider bg-surface text-ivory transition-all hover:border-gold hover:bg-surface-hover hover:text-gold"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* dots */}
          <div className="flex items-center gap-2.5" role="tablist" aria-label="انتخاب استاد">
            {TEACHERS.map((teacher, i) => (
              <button
                key={teacher.name}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`استاد ${i + 1}: ${teacher.name}`}
                onClick={() => go(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-10 bg-gold"
                    : "w-2.5 bg-divider hover:bg-muted"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="استاد بعدی"
            className="grid h-12 w-12 place-items-center rounded-full border border-divider bg-surface text-ivory transition-all hover:border-gold hover:bg-surface-hover hover:text-gold"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
