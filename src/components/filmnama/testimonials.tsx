import { BRAND } from "./data";
import { Reveal } from "./reveal";

// ============================================================
// ۹. نظرات هنرجویان — قاب‌های آمادهٔ برای پر شدن + دعوت به اینستاگرام
//    (بدون نظر ساختگی؛ صادقانهً در انتظار صدای واقعی هنرجویان)
// ============================================================

function EmptyVoiceCard() {
  return (
    <div className="relative rounded-sm border border-dashed border-divider bg-noir-2/50 p-6">
      <span className="absolute end-3 top-3 font-latin text-[10px] tracking-widest text-gold/50">
        WAITING
      </span>
      <div className="font-display text-5xl leading-none text-gold/30" aria-hidden="true">
        ”
      </div>
      {/* placeholder lines — a frame ready to be filled */}
      <div className="mt-4 space-y-2.5" aria-hidden="true">
        <div className="h-2.5 w-full rounded-full bg-divider/50" />
        <div className="h-2.5 w-11/12 rounded-full bg-divider/40" />
        <div className="h-2.5 w-4/5 rounded-full bg-divider/30" />
      </div>
      <div className="mt-6 flex items-center gap-3 border-t border-divider/50 pt-4">
        <span className="grid h-9 w-9 place-items-center rounded-full border border-dashed border-divider text-khaki">
          ?
        </span>
        <span className="text-sm text-khaki">منتظر صدای شما</span>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="voices" className="relative border-b border-divider bg-noir py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mb-12 max-w-2xl">
          <span className="font-latin text-xs tracking-[0.35em] text-gold">VOICES · صدای هنرجویان</span>
          <h2 className="title-rule mt-3 font-display text-4xl font-extrabold text-ivory sm:text-5xl">
            قاب‌هایی در انتظارِ صدای شما
          </h2>
          <p className="mt-5 leading-relaxed text-khaki">
            هنوز نظرات در دایرکتوری‌ها ثبت نشده‌اند. این قاب‌ها برای تجربهٔ واقعی شما
            آماده شده‌اند؛ اولین کلمه را شما بنویسید.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <EmptyVoiceCard />
          </Reveal>
          <Reveal delay={0.08}>
            <EmptyVoiceCard />
          </Reveal>

          {/* Invite card */}
          <Reveal delay={0.16}>
            <div className="spotlight relative flex h-full flex-col justify-center overflow-hidden rounded-sm border-2 border-gold/50 bg-noir p-6">
              <span className="font-latin text-xs tracking-[0.3em] text-gold">YOUR VOICE</span>
              <h3 className="mt-3 font-display text-2xl font-extrabold leading-snug text-ivory">
                نظرتان را در اینستاگرام ثبت کنید
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-khaki">
                تجربه‌تان از فیلم‌نما را برای ما و دیگر هنرجویان بنویسید تا این قاب‌ها
                پر شوند.
              </p>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-2 bg-gold px-5 py-2.5 font-display text-sm font-bold text-noir transition-colors hover:bg-gold-hover"
              >
                <span>@{BRAND.instagram}</span>
                <span aria-hidden="true">←</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
