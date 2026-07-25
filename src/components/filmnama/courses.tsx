"use client";

import { useState, useRef, type KeyboardEvent } from "react";
import {
  Drama,
  Clapperboard,
  PenLine,
  Camera,
  Brush,
  Scissors,
  Mic,
  Music,
  Compass,
  Code2,
  Languages,
  Cpu,
  Calculator,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react";
import { COURSES, DEPARTMENTS, type Department, type Course } from "./data";
import { Reveal } from "./reveal";

// ============================================================
// ۴. دوره‌ها — تب‌سوییچر: «سینما و بازیگری» (پیش‌فرض) / «سایر دپارتمان‌ها»
//    پنل ۱: ۷ کارت بزرگ سینما (آیکون Lucide، هاور translateY).
//    پنل ۲: کارت‌های کوچک دپارتمان فرعی (surface-secondary، کم‌رنگ‌تر).
// ============================================================

const COURSE_ICONS: Record<string, LucideIcon> = {
  Drama,
  Clapperboard,
  PenLine,
  Camera,
  Brush,
  Scissors,
  Mic,
};

const DEPT_ICONS: Record<string, LucideIcon> = {
  Music,
  Compass,
  Code2,
  Languages,
  Cpu,
  Calculator,
};

type TabKey = "cinema" | "other";

export function Courses() {
  const [tab, setTab] = useState<TabKey>("cinema");
  const tablistRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation for the tablist (RTL-aware).
  // In RTL, ArrowLeft visually moves to the next tab (leftwards) and ArrowRight to previous.
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const tabs: TabKey[] = ["cinema", "other"];
    const idx = tabs.indexOf(tab);
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const next = tabs[(idx + 1) % tabs.length];
      setTab(next);
      requestAnimationFrame(() =>
        (document.getElementById(`tab-${next}`) as HTMLButtonElement | null)?.focus()
      );
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      const prev = tabs[(idx - 1 + tabs.length) % tabs.length];
      setTab(prev);
      requestAnimationFrame(() =>
        (document.getElementById(`tab-${prev}`) as HTMLButtonElement | null)?.focus()
      );
    } else if (e.key === "Home") {
      e.preventDefault();
      setTab("cinema");
      (document.getElementById("tab-cinema") as HTMLButtonElement | null)?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      setTab("other");
      (document.getElementById("tab-other") as HTMLButtonElement | null)?.focus();
    }
  };

  return (
    <section id="courses" className="relative border-b border-divider bg-noir py-14 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mb-10 max-w-2xl sm:mb-12">
          <span className="font-latin text-xs tracking-[0.35em] text-gold">COURSES · دوره‌ها</span>
          <h2 className="title-rule mt-3 font-display text-3xl font-extrabold text-ivory sm:text-5xl">
            سینما و دپارتمان‌ها
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-khaki sm:text-base">
            دپارتمان پرچمدار سینما و بازیگری در یک نگاه، و کنارش شش دپارتمان فرعی.
            مسیرت را انتخاب کن.
          </p>
        </Reveal>

        {/* Tab switcher */}
        <div
          ref={tablistRef}
          role="tablist"
          aria-label="دسته دوره‌ها"
          onKeyDown={onKey}
          className="mb-8 inline-flex gap-1 rounded-lg border border-divider bg-surface p-1"
        >
          <button
            id="tab-cinema"
            role="tab"
            aria-selected={tab === "cinema"}
            aria-controls="panel-cinema"
            tabIndex={tab === "cinema" ? 0 : -1}
            onClick={() => setTab("cinema")}
            className={`rounded-md px-4 py-2.5 text-sm font-bold transition-colors sm:px-5 ${
              tab === "cinema"
                ? "bg-gold text-white"
                : "text-khaki hover:text-ivory"
            }`}
          >
            سینما و بازیگری
          </button>
          <button
            id="tab-other"
            role="tab"
            aria-selected={tab === "other"}
            aria-controls="panel-other"
            tabIndex={tab === "other" ? 0 : -1}
            onClick={() => setTab("other")}
            className={`rounded-md px-4 py-2.5 text-sm font-bold transition-colors sm:px-5 ${
              tab === "other"
                ? "bg-gold text-white"
                : "text-khaki hover:text-ivory"
            }`}
          >
            سایر دپارتمان‌ها
          </button>
        </div>

        {/* Panel 1 — Cinema (big cards) */}
        <div
          id="panel-cinema"
          role="tabpanel"
          aria-labelledby="tab-cinema"
          hidden={tab !== "cinema"}
          className={tab === "cinema" ? "tab-panel-enter" : undefined}
        >
          <div className="flex flex-wrap justify-center gap-5">
            {COURSES.map((c, i) => (
              <Reveal
                key={c.fa}
                delay={(i % 4) * 0.06}
                className="w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] xl:w-[calc((100%-3.75rem)/4)]"
              >
                <CinemaCard c={c} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Panel 2 — Other departments (small, muted cards) */}
        <div
          id="panel-other"
          role="tabpanel"
          aria-labelledby="tab-other"
          hidden={tab !== "other"}
          className={tab === "other" ? "tab-panel-enter" : undefined}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DEPARTMENTS.filter((d) => d.code !== "DEPT 01").map((d, i) => (
              <Reveal key={d.code} delay={(i % 3) * 0.06}>
                <DeptCard d={d} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Big cinema card ---- */
function CinemaCard({ c }: { c: Course }) {
  const Icon = COURSE_ICONS[c.icon] ?? Clapperboard;
  return (
    <a
      href="#contact"
      className="group flex h-full min-h-[280px] flex-col overflow-hidden rounded-lg border border-divider bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_12px_40px_-12px_rgba(225,29,42,0.45)]"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-latin text-[11px] tracking-[0.2em] text-gold">{c.scene}</span>
        {c.comingSoon && (
          <span className="border border-gold/50 px-2 py-0.5 font-latin text-[9px] tracking-widest text-gold/90">
            SOON · به‌زودی
          </span>
        )}
      </div>

      <div className="mt-5 text-gold">
        <Icon className="h-8 w-8" strokeWidth={1.75} aria-hidden="true" />
      </div>

      <h3 className="mt-4 font-display text-2xl font-extrabold text-ivory sm:text-3xl">{c.fa}</h3>
      <div className="font-latin mt-1 text-xs tracking-[0.15em] text-khaki sm:text-sm">{c.en}</div>
      <p className="mt-3 flex-1 text-[13px] leading-relaxed text-khaki sm:mt-4 sm:text-sm">{c.desc}</p>

      <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-gold">
        <span>{c.comingSoon ? "استعلام زمان‌بندی" : "ثبت‌نام این دوره"}</span>
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
      </div>
    </a>
  );
}

/* ---- Small department card (muted, placeholder-ready for future photos) ---- */
function DeptCard({ d }: { d: Department }) {
  const Icon = DEPT_ICONS[d.icon] ?? Code2;
  return (
    <a
      href={d.href}
      className="group flex min-h-[150px] flex-col overflow-hidden rounded-lg border border-divider bg-surface-secondary p-5 transition-colors hover:border-gold/40 hover:bg-surface-hover"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-latin text-[10px] tracking-[0.2em] text-gold/80">{d.code}</span>
        {!d.pageReady && (
          <span className="border border-gold/40 px-2 py-0.5 font-latin text-[9px] tracking-widest text-gold/80">
            SOON · صفحهٔ کامل
          </span>
        )}
      </div>

      <div className="mt-3 text-gold/80">
        <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
      </div>

      <h3 className="mt-3 font-display text-lg font-extrabold text-ivory">{d.fa}</h3>
      <p className="mt-1 flex-1 text-xs leading-relaxed text-khaki">{d.desc}</p>

      {d.badge && (
        <span className="mt-3 inline-flex w-fit border border-gold/50 px-2 py-0.5 font-latin text-[9px] tracking-widest text-gold/90">
          {d.badge}
        </span>
      )}

      <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted transition-colors group-hover:text-khaki">
        <span>{d.pageReady ? "مشاهدهٔ رشته‌ها" : "استعلام ثبت‌نام"}</span>
        <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
      </div>
    </a>
  );
}
