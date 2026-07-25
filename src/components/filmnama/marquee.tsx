import { MARQUEE_ITEMS } from "./data";

// نوار مارکی زیر هیرو — همهٔ دوره‌ها + دپارتمان‌ها، پشت‌سرهم، لوپ بی‌وقفه، بدون گپ
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
          <span key={i} className="marquee-item">
            <span className="font-latin text-base tracking-wide text-gold sm:text-2xl">
              {item.en}
            </span>
            <span className="font-display ms-1.5 text-sm text-ivory/85 sm:ms-2 sm:text-xl">
              {item.fa}
            </span>
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 start-0 w-16 bg-gradient-to-r from-noir-2 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 end-0 w-16 bg-gradient-to-l from-noir-2 to-transparent" />
    </div>
  );
}
