import { Reveal } from "./reveal";

// ============================================================
// ۳. نوار آماری — اعداد فارسی + لیبل uppercase + جداکنندهٔ عمودی
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
        <div className="mx-auto flex max-w-7xl flex-wrap items-stretch justify-center px-4 sm:px-6 lg:px-8">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex min-w-[44%] flex-1 flex-col items-center justify-center px-4 py-7 text-center sm:min-w-[22%] sm:py-9 ${
                i !== 0 ? "border-s border-divider sm:border-s" : ""
              }`}
            >
              <div
                className="font-display font-extrabold text-gold"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}
              >
                {s.num}
              </div>
              <div className="font-latin mt-2 text-[10px] tracking-[0.2em] text-khaki sm:text-[11px]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
