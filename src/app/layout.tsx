import type { Metadata, Viewport } from "next";
import "./globals.css";

// Self-hosted fonts (fontsource) — Estedad (Persian display), Vazirmatn (Persian body), Bebas Neue (Latin accent)
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";
import "@fontsource/estedad/600.css";
import "@fontsource/estedad/700.css";
import "@fontsource/estedad/800.css";
import "@fontsource/bebas-neue/400.css";

import { Toaster } from "@/components/ui/toaster";

// Explicit mobile viewport — ensures proper scaling & safe-area handling on phones
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "فیلم‌نما | آموزشگاه آزاد سینمایی — کارگاه سینمایی با مدرک بین‌المللی در غرب تهران",
  description:
    "اولین و تنها کارگاه سینمایی با مدرک بین‌المللی در غرب تهران. رشته‌ها: بازیگری، کارگردانی، فیلمنامه‌نویسی، عکاسی سینمایی، گریم سینمایی، تدوین، فن بیان و گویندگی. اندیشه، فاز ۳.",
  keywords: [
    "آموزشگاه سینمایی",
    "فیلم‌نما",
    "کلاس بازیگری",
    "کارگردانی",
    "فیلمنامه‌نویسی",
    "عکاسی سینمایی",
    "گریم سینمایی",
    "تدوین",
    "فن بیان",
    "غرب تهران",
    "اندیشه",
  ],
  authors: [{ name: "آموزشگاه آزاد سینمایی فیلم‌نما" }],
  openGraph: {
    title: "فیلم‌نما | کارگاه سینمایی با مدرک بین‌المللی",
    description:
      "اولین و تنها کارگاه سینمایی با مدرک بین‌المللی در غرب تهران. آموزش حرفه‌ای سینما در هفت رشته.",
    type: "website",
    locale: "fa_IR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="antialiased bg-noir text-ivory font-body">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
