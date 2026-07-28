"use client";

import { useState, useCallback, useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { WORKS, BRAND } from "./data";
import { Reveal } from "./reveal";

// ============================================================
// ۷. اتاق نمایش / آثار هنرجویان — اسلایدر با موکاپ مرکزی
//    انیمیشن اسلاید افقی، swipe لمسی، هر نمونه‌کار تامنیل اختصاصی.
// ============================================================

const subscribeReduced = (cb: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener?.("change", cb);
  return () => mq.removeEventListener?.("change", cb);
};
const getReducedSnap = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const getReducedServer = () => false;

function ProjectorPlay() {
  return (
    <div className="relative grid h-16 w-16 place-items-center rounded-full border-2 border-gold/70 transition-all duration-300 group-hover:scale-110 group-hover:border-gold sm:h-20 sm:w-20">
      <span className="absolute inset-2 rounded-full border border-gold/40" />
      <span className="absolute inset-4 rounded-full border border-gold/20" />
      <Play className="h-5 w-5 fill-gold text-gold sm:h-6 sm:w-6" aria-hidden="true" />
    </div>
  );
}

export function Screening() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0); // +1 forward, -1 back
  const reduced = useSyncExternalStore(subscribeReduced, getReducedSnap, getReducedServer);
  const total = WORKS.length;
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (n: number, dir: number) => {
      setDirection(dir);
      setActive(((n % total) + total) % total);
    },
    [total]
  );
  const next = useCallback(() => go(active + 1, 1), [active, go]);
  const prev = useCallback(() => go(active - 1, -1), [active, go]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || reduced) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 45) {
      // RTL: swipe right → previous, swipe left → next
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const w = WORKS[active];
  const prevIdx = (active - 1 + total) % total;
  const nextIdx = (active + 1) % total;

  // slide-in animation class based on direction
  const slideAnim = reduced ? "" : direction >= 0 ? "slide-in-next" : "slide-in-prev";

  return (
    <section
      id="screening"
      className="relative overflow-hidden border-b border-divider bg-noir py-14 sm:py-28"
    >
      {/* Ambient color blobs */}
      <div
        className="pointer-events-none absolute -top-20 start-1/4 h-72 w-72 rounded-full opacity-[0.18] blur-[100px]"
        style={{ background: "#7c3aed" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 end-1/4 h-80 w-80 rounded-full opacity-[0.15] blur-[110px]"
        style={{ background: "#2563eb" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 start-1/3 h-72 w-72 rounded-full opacity-[0.16] blur-[100px]"
        style={{ background: "#ea580c" }}
        aria-hidden="true"
      />

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

        {/* Carousel — swipeable */}
        <div
          className="relative"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          role="region"
          aria-roledescription="carousel"
          aria-label="آثار هنرجویان فیلم‌نما"
        >
          {/* Mockup stage: prev (blurred) | center | next (blurred) */}
          <div className="relative flex items-center justify-center gap-2 sm:gap-4">
            {/* Previous slide edge */}
            <button
              type="button"
              onClick={prev}
              aria-label={`اسلاید قبلی: ${WORKS[prevIdx].title}`}
              className="group/edge relative hidden aspect-video w-[14%] shrink-0 overflow-hidden rounded-2xl border border-divider opacity-30 blur-[2px] transition-all hover:opacity-50 md:block"
            >
              <Image
                src={WORKS[prevIdx].image}
                alt=""
                aria-hidden="true"
                fill
                sizes="14vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink/40" />
            </button>

            {/* Center mockup — slides in on change */}
            <div className="relative w-full max-w-3xl shrink-0 overflow-hidden rounded-3xl">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`تماشای فیلم ${w.title} در اینستاگرام فیلم‌نما`}
                className={`group relative block aspect-video overflow-hidden rounded-3xl border border-divider bg-surface shadow-[0_30px_90px_-30px_rgba(0,0,0,0.9)] ${slideAnim}`}
                key={active}
              >
                <Image
                  src={w.image}
                  alt={`پوستهٔ فیلم کوتاه ${w.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

                {/* slate label */}
                <span className="absolute start-4 top-4 bg-gold px-3 py-1 font-latin text-[10px] font-bold tracking-widest text-white">
                  {w.kind === "فیلم کوتاه" ? "SHORT FILM" : "FILM"}
                </span>

                {/* projector-ring play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <ProjectorPlay />
                </div>
              </a>
            </div>

            {/* Next slide edge */}
            <button
              type="button"
              onClick={next}
              aria-label={`اسلاید بعدی: ${WORKS[nextIdx].title}`}
              className="group/edge relative hidden aspect-video w-[14%] shrink-0 overflow-hidden rounded-2xl border border-divider opacity-30 blur-[2px] transition-all hover:opacity-50 md:block"
            >
              <Image
                src={WORKS[nextIdx].image}
                alt=""
                aria-hidden="true"
                fill
                sizes="14vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink/40" />
            </button>
          </div>

          {/* Text block below the mockup */}
          <div key={`txt-${active}`} className={`mx-auto mt-8 max-w-2xl text-center ${slideAnim}`}>
            <div className="font-latin text-xs tracking-[0.3em] text-gold">{w.director}</div>
            <h3 className="mt-2 font-display text-3xl font-extrabold text-ivory sm:text-4xl">
              «{w.title}»
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-khaki sm:text-base">
              {w.logline}
            </p>

            {/* CTA + nav arrows */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm sm:text-base"
              >
                <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                تماشای فیلم
              </a>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="اثر قبلی"
                  className="grid h-11 w-11 place-items-center rounded-full border border-divider bg-surface text-ivory transition-all hover:border-gold hover:bg-surface-hover hover:text-gold"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="اثر بعدی"
                  className="grid h-11 w-11 place-items-center rounded-full border border-divider bg-surface text-ivory transition-all hover:border-gold hover:bg-surface-hover hover:text-gold"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* pagination dots */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {WORKS.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`رفتن به اثر ${i + 1}: ${item.title}`}
                  onClick={() => go(i, i > active ? 1 : -1)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-gold" : "w-2 bg-divider hover:bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
