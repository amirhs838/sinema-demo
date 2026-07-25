import { Reveal } from "./reveal";

// ============================================================
// ۳. نوار آماری — اعداد فارسی + لیبل uppercase + جداکنندهٔ داخلی
//    موبایل: گرید ۲×۲ با بوردر داخلی؛ دسکتاپ: یک ردیف ۴ ستونه
// ============================================================

const STATS: { num: string; label: string }[] = [
  { num: "۷", label: "رشتهٔ سینما" },
  { num: "۶", label: "دپارتمان فرعی" },
  { num: "۳", label: "استاد سینما و تلویزیون" },
  { num: "★", label: "مدرک بین‌المللی" },
];

export function Stats() {
  return (
    <section
      id="stats"
      aria-label="آمار فیلم‌نما"
      className="border-b border-divider bg-noir-2"
    >
      <Reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 2×2 grid on mobile, single row of 4 on desktop */}
          <div className="grid grid-cols-2 divide-divider sm:flex sm:items-stretch sm:justify-center">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={[
                  // mobile: internal borders for the 2×2 grid
                  "flex flex-col items-center justify-center px-3 py-6 text-center sm:px-6 sm:py-9",
                  // mobile grid borders (rows/cols)
                  i % 2 === 1 ? "border-s border-divider" : "",
                  i >= 2 ? "border-t border-divider sm:border-t-0" : "",
                  // desktop: only start border (skip first)
                  i !== 0 ? "sm:border-s sm:border-t-0" : "",
                ].join(" ")}
              >
                <div
                  className="font-display font-extrabold text-gold"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1 }}
                >
                  {s.num}
                </div>
                <div className="mt-1.5 text-[10px] leading-tight text-khaki sm:mt-2 sm:text-[11px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
