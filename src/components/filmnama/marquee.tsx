import { MARQUEE_ITEMS } from "./data";

// نوار مارکی زیر هیرو — همهٔ دوره‌ها + دپارتمان‌ها، پشت‌سرهم، لوپ بی‌وقفه
export function Marquee() {
  // Duplicate the full set so the -50% translate loop is seamless
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="marquee-mask relative overflow-hidden border-y border-divider bg-noir-2 py-2.5 sm:py-3.5"
      aria-hidden="true"
    >
      <div className="marquee-track" dir="ltr">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            {/* Latin label + Persian label together, no gap between them */}
            <span className="font-latin text-base tracking-wide text-gold sm:text-2xl">
              {item.en}
            </span>
            <span className="font-display ms-2 text-sm text-ivory/85 sm:ms-3 sm:text-xl">
              {item.fa}
            </span>
            {/* چراغ چشمک‌زن بین آیتم‌ها */}
            <span className="lamp-dot mx-3 inline-block h-2 w-2 rounded-full bg-gold shadow-[0_0_8px_2px_rgba(225,29,42,0.6)] sm:mx-4" />
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 start-0 w-16 bg-gradient-to-r from-noir-2 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 end-0 w-16 bg-gradient-to-l from-noir-2 to-transparent" />
    </div>
  );
}
