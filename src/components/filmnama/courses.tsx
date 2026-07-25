import { COURSES } from "./data";
import { Reveal } from "./reveal";

// ============================================================
// ۵. دوره‌های آموزشی — کارت‌های فریم فیلم ۳۵mm با سوراخ پرفراژ + frame-jitter
//    هفت رشته هم‌وزن؛ کارگردانی و گریم سینمایی «به‌زودی» اما هم‌اندازه.
// ============================================================

function SprocketStrip() {
  return (
    <div className="sprocket-strip w-4 shrink-0 sm:w-5" aria-hidden="true">
      {Array.from({ length: 7 }).map((_, i) => (
        <span key={i} className="sprocket-hole" />
      ))}
    </div>
  );
}

export function Courses() {
  return (
    <section id="courses" className="relative border-b border-divider bg-noir py-14 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mb-10 max-w-2xl sm:mb-12">
          <span className="font-latin text-xs tracking-[0.35em] text-gold">DEPT 01 · دپارتمان هنرهای نمایشی</span>
          <h2 className="title-rule mt-3 font-display text-3xl font-extrabold text-ivory sm:text-5xl">
            هفت رشته، یک کارگاه
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-khaki sm:text-base">
            از بازیگری مقابل دوربین تا تدوین و فن بیان — هر رشته در فیلم‌نما با هم‌وزنی
            کامل آموزش داده می‌شود. روی هر فریم بگذارید تا تکان بخورد.
          </p>
        </Reveal>

        {/* Cards — flex-wrap so orphan rows stay centered & equal-size */}
        <div className="flex flex-wrap justify-center gap-5">
          {COURSES.map((c, i) => (
            <Reveal
              key={c.fa}
              delay={(i % 4) * 0.06}
              className="w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] xl:w-[calc((100%-3.75rem)/4)]"
            >
              <a
                href="#contact"
                className="jitter group flex h-full overflow-hidden rounded-sm border border-divider bg-noir-2"
              >
                {/* Sprocket holes edge */}
                <SprocketStrip />

                {/* Frame content */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-latin text-[11px] tracking-[0.2em] text-gold">
                      {c.scene}
                    </span>
                    {c.comingSoon && (
                      <span className="border border-gold/50 px-2 py-0.5 font-latin text-[9px] tracking-widest text-gold/90">
                        SOON · به‌زودی
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-extrabold text-ivory sm:mt-5 sm:text-3xl">
                    {c.fa}
                  </h3>
                  <div className="font-latin mt-1 text-xs tracking-[0.15em] text-khaki sm:text-sm">
                    {c.en}
                  </div>

                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-khaki sm:mt-4 sm:text-sm">{c.desc}</p>

                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-gold sm:mt-5 sm:text-sm">
                    <span>{c.comingSoon ? "استعلام زمان‌بندی" : "ثبت‌نام این دوره"}</span>
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
