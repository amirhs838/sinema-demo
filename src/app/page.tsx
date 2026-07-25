import { FilmGrain } from "@/components/filmnama/grain";
import { Header } from "@/components/filmnama/header";
import { Hero } from "@/components/filmnama/hero";
import { Marquee } from "@/components/filmnama/marquee";
import { Paths } from "@/components/filmnama/paths";
import { About } from "@/components/filmnama/about";
import { Departments } from "@/components/filmnama/departments";
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
        {/* ۲. هیرو سینمایی (فول‌بلید + letterbox + بلیت CTA) */}
        <Hero />
        {/* ۳. نوار مارکی — چراغ‌های تابلوی سینما */}
        <Marquee />
        {/* ۴. دو مسیر، یک فیلم‌نما (آکادمی + کارگاه تولید) */}
        <Paths />
        {/* ۵. چرا فیلم‌نما (درباره) + تخته کلاکت */}
        <About />
        {/* ۶. دپارتمان‌های آکادمی — هفت کارت با آیکون */}
        <Departments />
        {/* ۷. دپارتمان هنرهای نمایشی — کارت‌های فریم ۳۵mm */}
        <Courses />
        {/* ۸. اساتید — تیتراژ فیلم */}
        <Teachers />
        {/* ۹. کارگاه تولید / اتاق نمایش / آثار هنرجویان */}
        <Screening />
        {/* ۱۰. مقالات — مجلهٔ سینمایی */}
        <Articles />
        {/* ۱۱. نظرات هنرجویان */}
        <Testimonials />
        {/* ۱۲. ثبت‌نام / تماس (باجهٔ بلیت‌فروشی) */}
        <Contact />
      </main>

      {/* ۱۳. فوتر — تیتراژ پایان فیلم (THE END / پایان) */}
      <Footer />
    </div>
  );
}
