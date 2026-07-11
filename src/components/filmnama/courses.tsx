import { COURSES } from "./data";
import { Reveal } from "./reveal";

// ============================================================
// ۵. دوره‌های آموزشی — کارت‌های فریم فیلم ۳۵mm با سوراخ پرفراژ + frame-jitter
//    هفت رشته هم‌وزن؛ کارگردانی و گریم سینمایی «به‌زودی» اما هم‌اندازه.
// ============================================================

function SprocketStrip() {
  return (
    <div className="sprocket-strip w-5 shrink-0" aria-hidden="true">
      {Array.from({ length: 7 }).map((_, i) => (
        <span key={i} className="sprocket-hole" />
      ))}
    </div>
  );
}

export function Courses() {
  return (
    <section id="courses" className="relative border-b border-divider bg-noir py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mb-12 max-w-2xl">
          <span className="font-latin text-xs tracking-[0.35em] text-gold">COURSES · دوره‌ها</span>
          <h2 className="title-rule mt-3 font-display text-4xl font-extrabold text-ivory sm:text-5xl">
            هفت رشته، یک کارگاه
          </h2>
          <p className="mt-5 leading-relaxed text-khaki">
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
                <div className="flex flex-1 flex-col p-5">
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

                  <h3 className="mt-5 font-display text-3xl font-extrabold text-ivory">
                    {c.fa}
                  </h3>
                  <div className="font-latin mt-1 text-sm tracking-[0.15em] text-khaki">
                    {c.en}
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-khaki">{c.desc}</p>

                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-gold">
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
