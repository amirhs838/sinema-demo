import { MARQUEE_ITEMS } from "./data";

// نوار مارکی زیر هیرو — متن در حال اسکرول افقی، شبیه چراغ‌های تابلوی سینمای قدیمی
export function Marquee() {
  // Duplicate items so the -50% translate loop is seamless
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="marquee-mask relative overflow-hidden border-y border-divider bg-noir-2 py-2.5 sm:py-3.5"
      aria-label="رشته‌های آموزشی فیلم‌نما"
    >
      <div className="marquee-track" dir="ltr">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center" aria-hidden={i >= MARQUEE_ITEMS.length}>
            <span className="font-latin mx-2.5 text-base tracking-wide text-gold sm:mx-3 sm:text-2xl">
              {item === "بازیگری"
                ? "ACTING"
                : item === "کارگردانی"
                  ? "DIRECTING"
                  : item === "فیلمنامه‌نویسی"
                    ? "SCREENWRITING"
                    : item === "عکاسی سینمایی"
                      ? "CINEMATOGRAPHY"
                      : item === "گریم سینمایی"
                        ? "MAKE-UP"
                        : item === "تدوین"
                          ? "EDITING"
                          : "VOICE"}
            </span>
            <span className="font-display mx-2.5 text-sm text-ivory/85 sm:mx-3 sm:text-xl">{item}</span>
            {/* چراغ چشمک‌زن بین کلمات */}
            <span className="lamp-dot mx-2.5 inline-block h-2 w-2 rounded-full bg-gold shadow-[0_0_8px_2px_rgba(201,162,39,0.6)] sm:mx-3" />
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 start-0 w-16 bg-gradient-to-r from-noir-2 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 end-0 w-16 bg-gradient-to-l from-noir-2 to-transparent" />
    </div>
  );
}
