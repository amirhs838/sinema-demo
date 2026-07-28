"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TEACHERS } from "./data";
import { Reveal } from "./reveal";

// ============================================================
// اساتید — کاروسل تک‌نمایشی (یک استاد در هر لحظه)
// چرخش خودکار هر ۶ ثانیه + دکمه‌های ناوبری + نقاط صفحه‌بندی.
// ============================================================

const AUTOPLAY_MS = 6000;

// Subscribe to prefers-reduced-motion without setState-in-effect lint issues.
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const subscribeReducedMotion = (cb: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener?.("change", cb);
  return () => mq.removeEventListener?.("change", cb);
};
const getReducedSnapshot = () => (prefersReducedMotion() ? true : false);
const getReducedServerSnapshot = () => false;

export function Teachers() {
  const [active, setActive] = useState(0);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedSnapshot,
    getReducedServerSnapshot
  );

  const total = TEACHERS.length;

  const go = useCallback(
    (next: number) => {
      setActive(((next % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => go(active + 1), [active, go]);
  const prev = useCallback(() => go(active - 1), [active, go]);

  // Autoplay every 6s (paused on hover, disabled for reduced-motion)
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (reduced || paused) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [reduced, paused, total]);

  // Keyboard navigation (ArrowLeft/ArrowRight — RTL aware)
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") next();
    else if (e.key === "ArrowRight") prev();
  };

  const t = TEACHERS[active];

  return (
    <section
      id="teachers"
      className="relative overflow-hidden border-b border-divider bg-noir py-14 sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Heading */}
      <Reveal className="mx-auto mb-10 max-w-7xl px-4 sm:mb-12 sm:px-6 lg:px-8">
        <span className="font-latin text-xs tracking-[0.35em] text-gold">CAST &amp; CREW · اساتید</span>
        <h2 className="title-rule mt-3 font-display text-3xl font-extrabold text-ivory sm:text-5xl">
          عواملِ صحنهٔ فیلم‌نما
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-khaki sm:text-base">
          کنار اساتیدی کار می‌کنید که خودشان جلوی دوربین و پشت صحنهٔ سینما و تلویزیون
          بوده‌اند.
        </p>
      </Reveal>

      {/* Carousel viewport */}
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        onKeyDown={onKey}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="اساتید فیلم‌نما"
      >
        <div
          key={active}
          className="tab-panel-enter grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
        >
          {/* Text column (right in RTL) */}
          <div className="order-2 lg:order-1">
            <span className="font-latin text-xs tracking-[0.3em] text-gold">
              {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display text-3xl font-extrabold text-ivory sm:text-4xl lg:text-5xl">
              {t.name}
            </h3>
            <div className="mt-2 font-display text-base text-gold sm:text-lg">{t.role}</div>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-khaki sm:text-base">
              {t.bio}
            </p>
          </div>

          {/* Image card (left in RTL) with glow */}
          <div className="order-1 lg:order-2">
            <div className="teacher-photo relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-divider bg-surface shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
              {/* glow behind */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(225,29,42,0.25), transparent 70%)",
                }}
              />
              <Image
                src={t.image}
                alt={`${t.name} — ${t.role}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="relative z-10 object-cover object-top"
                loading="lazy"
              />
              {/* corner slate label */}
              <span className="absolute end-3 top-3 z-20 bg-ink/75 px-2 py-0.5 font-latin text-[10px] tracking-widest text-gold">
                CAST
              </span>
            </div>
          </div>
        </div>

        {/* Navigation: prev arrow + dots + next arrow */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="استاد قبلی"
            className="grid h-11 w-11 place-items-center rounded-full border border-divider bg-surface text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="انتخاب استاد">
            {TEACHERS.map((teacher, i) => (
              <button
                key={teacher.name}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`استاد ${i + 1}: ${teacher.name}`}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active
                    ? "w-8 bg-gold"
                    : "w-2 bg-divider hover:bg-muted"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="استاد بعدی"
            className="grid h-11 w-11 place-items-center rounded-full border border-divider bg-surface text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
