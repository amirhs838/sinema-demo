import { FilmGrain } from "@/components/filmnama/grain";
import { Header } from "@/components/filmnama/header";
import { Hero } from "@/components/filmnama/hero";
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
        {/* ۳. نوار آماری */}
        <Stats />
        {/* ۴. چرا فیلم‌نما (درباره) + تخته کلاکت (پیام دو بازو: آکادمی/کارگاه) */}
        <About />
        {/* ۵. دوره‌ها — تب‌سوییچر سینما / سایر دپارتمان‌ها */}
        <Courses />
        {/* ۶. اساتید — تیتراژ فیلم (عکس یکدست B&W + تینت قرمز) */}
        <Teachers />
        {/* ۷. آثار هنرجویان روی پرده */}
        <Screening />
        {/* ۸. مجلهٔ سینمایی */}
        <Articles />
        {/* ۹. نظرات هنرجویان */}
        <Testimonials />
        {/* ۱۰. ثبت‌نام / تماس (باجهٔ بلیت‌فروشی) */}
        <Contact />
      </main>

      {/* ۱۱. فوتر — تیتراژ پایان فیلم (THE END / پایان) */}
      <Footer />
    </div>
  );
}
