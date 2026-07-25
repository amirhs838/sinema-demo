import {
  Clapperboard,
  Music,
  Compass,
  Code2,
  Languages,
  Cpu,
  Calculator,
  type LucideIcon,
} from "lucide-react";
import { DEPARTMENTS, type Department } from "./data";
import { Reveal } from "./reveal";

// ============================================================
// Departments — هفت راه برای شروع (آکادمی چندرشته‌ای فیلم‌نما)
// بلافاصله بعد از About، قبل از Courses.
// ============================================================

const ICONS: Record<string, LucideIcon> = {
  "DEPT 01": Clapperboard,
  "DEPT 02": Music,
  "DEPT 03": Compass,
  "DEPT 04": Code2,
  "DEPT 05": Languages,
  "DEPT 06": Cpu,
  "DEPT 07": Calculator,
};

function DeptCard({ d, i }: { d: Department; i: number }) {
  const Icon = ICONS[d.code] ?? Clapperboard;

  return (
    <Reveal
      delay={(i % 4) * 0.06}
      className="w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] xl:w-[calc((100%-3.75rem)/4)]"
    >
      <a
        href={d.href}
        className="jitter group flex h-full flex-col overflow-hidden rounded-sm border border-divider bg-noir-2"
      >
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          {/* Top row: code + (soon badge if not pageReady) */}
          <div className="flex items-center justify-between gap-2">
            <span className="font-latin text-[11px] tracking-[0.2em] text-gold">
              {d.code}
            </span>
            {!d.pageReady && (
              <span className="border border-gold/50 px-2 py-0.5 font-latin text-[9px] tracking-widest text-gold/90">
                SOON · صفحهٔ کامل
              </span>
            )}
          </div>

          {/* Icon */}
          <div className="mt-5 text-gold">
            <Icon className="h-9 w-9" strokeWidth={1.6} aria-hidden="true" />
          </div>

          {/* Optional gold badge above title */}
          {d.badge && (
            <span className="mt-4 inline-flex w-fit border border-gold/50 px-2 py-0.5 font-latin text-[9px] tracking-widest text-gold/90">
              {d.badge}
            </span>
          )}

          <h3 className="mt-3 font-display text-2xl font-extrabold text-ivory sm:text-3xl">
            {d.fa}
          </h3>
          <div className="font-latin mt-1 text-xs tracking-[0.15em] text-khaki sm:text-sm">
            {d.en}
          </div>

          <p className="mt-3 flex-1 text-[13px] leading-relaxed text-khaki sm:mt-4 sm:text-sm">
            {d.desc}
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-gold sm:mt-5 sm:text-sm">
            <span>{d.pageReady ? "مشاهدهٔ رشته‌ها" : "استعلام ثبت‌نام"}</span>
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export function Departments() {
  return (
    <section id="departments" className="relative border-b border-divider bg-noir py-14 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mb-10 max-w-2xl sm:mb-12">
          <span className="font-latin text-xs tracking-[0.35em] text-gold">
            ACADEMY · دپارتمان‌های آکادمی
          </span>
          <h2 className="title-rule mt-3 font-display text-3xl font-extrabold text-ivory sm:text-5xl">
            هفت راه برای شروع
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-khaki sm:text-base">
            آکادمی فیلم‌نما فقط سینما نیست؛ هفت دپارتمان از هنرهای نمایشی تا
            حسابداری، هرکدام با مسیر و مدرک خودشان. روی هر کارت بگذارید تا تکان
            بخورد.
          </p>
        </Reveal>

        {/* Cards — flex-wrap so orphan rows stay centered & equal-size */}
        <div className="flex flex-wrap justify-center gap-5">
          {DEPARTMENTS.map((d, i) => (
            <DeptCard key={d.code} d={d} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
