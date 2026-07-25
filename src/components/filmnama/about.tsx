import { BRAND } from "./data";
import { Reveal } from "./reveal";

// ============================================================
// ۴. چرا فیلم‌نما (درباره) — چیدمان دو ستونهٔ نامتقارن + تخته کلاکت
// ============================================================

const CLAPPER_FIELDS: { label: string; value: string }[] = [
  { label: "PRODUCTION", value: "فیلم‌نما" },
  { label: "ACADEMY", value: "آموزشگاه آزاد سینمایی" },
  { label: "LOCATION", value: "اندیشه، غرب تهران" },
  { label: "DISCIPLINES", value: "۷ رشتهٔ سینما + ۶ دپارتمان" },
  { label: "CERTIFICATE", value: "مدرک بین‌المللی" },
  { label: "HOURS", value: "هر روز ۱۳–۲۱" },
];

export function About() {
  return (
    <section id="about" className="relative border-b border-divider bg-noir py-14 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mb-10 max-w-2xl sm:mb-12">
          <span className="font-latin text-xs tracking-[0.35em] text-gold">ABOUT · چرا فیلم‌نما</span>
          <h2 className="title-rule mt-3 font-display text-3xl font-extrabold text-ivory sm:text-5xl">
            جایی که کلاکت می‌خورد و سینما شروع می‌شود
          </h2>
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-12">
          {/* Intro text — wider column */}
          <Reveal className="lg:col-span-7" delay={0.05}>
            <p className="text-[15px] leading-relaxed text-ivory/90 sm:text-lg">
              {BRAND.fullName} دو بازو دارد: یک <span className="text-gold">آکادمی</span> که
              با مدرکی بین‌المللی حرفه‌ای‌ات می‌کند، و یک <span className="text-gold">کارگاه
              تولید</span> که از فیلم‌نامه تا اکران فیلم می‌سازد. اینجا فقط کلاس نیست؛
              تولیدمحور است.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-khaki sm:mt-5 sm:text-base">
              ما به جای آموزشِ تئوریِ خشک، یک کارگاه واقعی را تجربه می‌کنید: نور روشن
              می‌شود، کلاکت می‌خورد، و شما می‌سازید. از اولین قاب تا نسخهٔ نهایی، در
              یک سالن واقعی سینما یاد می‌گیرید.
            </p>
          </Reveal>

          {/* Clapperboard card — narrower column */}
          <Reveal className="lg:col-span-5" delay={0.12}>
            <div className="overflow-hidden rounded-sm border border-divider shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
              {/* Striped clapper top bar — classic black/white film clapper */}
              <div className="relative h-14 overflow-hidden border-b-2 border-gold">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(120deg,#f4f5f7 0 26px,#0e0c0b 26px 52px)",
                  }}
                />
                <div className="absolute inset-0 bg-ink/25" />
                <div className="relative flex h-full items-center justify-between px-3">
                  <span className="bg-ink/85 px-2 py-1 font-latin text-[11px] tracking-widest text-gold">
                    FILMNAMA
                  </span>
                  <span className="bg-ink/85 px-2 py-1 font-latin text-[11px] tracking-widest text-white">
                    SCENE 01 / TAKE 01
                  </span>
                </div>
              </div>

              {/* Clapper body — slate fields */}
              <div className="bg-surface p-4 sm:p-5">
                <div className="space-y-0">
                  {CLAPPER_FIELDS.map((f, i) => (
                    <div
                      key={f.label}
                      className={`flex items-center justify-between gap-4 py-2.5 sm:py-3 ${
                        i !== CLAPPER_FIELDS.length - 1 ? "border-b border-divider/60" : ""
                      }`}
                    >
                      <span className="font-latin text-[10px] tracking-[0.2em] text-gold sm:text-[11px]">
                        {f.label}
                      </span>
                      <span className="text-start text-[13px] text-ivory sm:text-[15px]">
                        {f.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
