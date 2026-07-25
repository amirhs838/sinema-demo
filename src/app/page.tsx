import { FilmGrain } from "@/components/filmnama/grain";
import { Header } from "@/components/filmnama/header";
import { Hero } from "@/components/filmnama/hero";
import { Marquee } from "@/components/filmnama/marquee";
import { Stats } from "@/components/filmnama/stats";
import { About } from "@/components/filmnama/about";
import { Courses } from "@/components/filmnama/courses";
import { Teachers } from "@/components/filmnama/teachers";
import { Screening } from "@/components/filmnama/screening";
import { Articles } from "@/components/filmnama/articles";
import { Testimonials } from "@/components/filmnama/testimonials";
import { Contact } from "@/components/filmnama/contact";
import { Footer } from "@/components/filmnama/footer";

// ============================================================
// فیلم‌نما · Homepage
// ساختار صفحه به ترتیب اسکرول (مستندسازی هر سکشن در کامپوننت مربوطه)
// ============================================================
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-noir">
      {/* Overlay: subtle film grain (respects prefers-reduced-motion) */}
      <FilmGrain />

      {/* ۱. هدر شناور */}
      <Header />

      <main className="flex-1">
        {/* ۲. هیرو سینمایی (letterbox + اسپات‌لایت کرسر + دکمه‌های Primary/Secondary) */}
        <Hero />
        {/* ۳. مارکی دپارتمان‌ها (تزئینی، aria-hidden) */}
        <Marquee />
        {/* ۴. نوار آماری */}
        <Stats />
        {/* ۵. چرا فیلم‌نما (درباره) + تخته کلاکت (پیام دو بازو: آکادمی/کارگاه) */}
        <About />
        {/* ۶. دوره‌ها — تب‌سوییچر سینما / سایر دپارتمان‌ها */}
        <Courses />
        {/* ۷. اساتید — تیتراژ فیلم (عکس یکدست B&W + تینت قرمز) */}
        <Teachers />
        {/* ۸. آثار هنرجویان روی پرده */}
        <Screening />
        {/* ۹. مجلهٔ سینمایی */}
        <Articles />
        {/* ۱۰. نظرات هنرجویان */}
        <Testimonials />
        {/* ۱۱. ثبت‌نام / تماس (باجهٔ بلیت‌فروشی) */}
        <Contact />
      </main>

      {/* ۱۲. فوتر — تیتراژ پایان فیلم (THE END / پایان) */}
      <Footer />
    </div>
  );
}
