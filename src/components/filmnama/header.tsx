"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { BRAND, NAV } from "./data";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Filmnama brand logo (uploaded calligraphic mark, recolored red, transparent bg)
// Source 857×1698 (aspect ~1:2). Rendered at a fixed height, width auto.
function FilmnamaLogo({ height = 40 }: { height?: number }) {
  return (
    <Image
      src="/images/logo-filmnama.png"
      alt="لوگوی فیلم‌نما"
      width={Math.round(height * (857 / 1698))}
      height={height}
      priority
      className="shrink-0"
      style={{ height: `${height}px`, width: "auto" }}
    />
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-divider bg-noir-2/95 backdrop-blur supports-[backdrop-filter]:bg-noir-2/85"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / wordmark */}
        <a href="#home" className="flex items-center gap-2.5" aria-label={`${BRAND.fullName}`}>
          <FilmnamaLogo height={40} />
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-xl font-extrabold transition-colors ${
                scrolled ? "text-ivory" : "text-white"
              }`}
            >
              {BRAND.name}
            </span>
            <span className="font-latin mt-0.5 text-[10px] tracking-[0.3em] text-gold">
              {BRAND.latinTag}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="ناوبری اصلی">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative px-3 py-2 text-sm transition-colors ${
                scrolled
                  ? "text-khaki hover:text-ivory"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA — visible on all sizes; compact on mobile */}
        <a
          href="#contact"
          className="btn-primary text-xs px-3.5 py-2 lg:text-sm lg:px-7 lg:py-3.5"
        >
          ثبت‌نام
        </a>

        {/* Mobile menu trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            asChild
            aria-label="باز کردن منو"
            className={`inline-flex h-10 w-10 items-center justify-center transition-colors lg:hidden ${
              scrolled ? "text-ivory" : "text-white"
            }`}
          >
            <button type="button">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[280px] border-divider bg-noir-2 p-0"
          >
            <SheetHeader className="border-b border-divider px-5 py-4 text-start">
              <SheetTitle className="flex items-center gap-2 text-ivory">
                <FilmnamaLogo height={32} />
                <span className="font-display text-lg font-extrabold">{BRAND.name}</span>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col px-2 py-3" aria-label="ناوبری موبایل">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-divider/60 px-4 py-3.5 text-base text-khaki transition-colors hover:bg-noir hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 w-full justify-center"
              >
                ثبت‌نام
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
