"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { BRAND, NAV } from "./data";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Clapperboard mark — custom brand icon (no stock icon pack)
function ClapperLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <rect x="5" y="22" width="38" height="20" rx="1.5" fill="#17130F" stroke="#C9A227" strokeWidth="1.6" />
      <rect x="5" y="18" width="38" height="6" fill="#0E0C0B" stroke="#C9A227" strokeWidth="1.6" />
      <g transform="rotate(-7 24 16)">
        <rect x="6" y="9" width="36" height="9" fill="#0E0C0B" stroke="#C9A227" strokeWidth="1.6" />
        <polygon points="9,9 15,9 12,18 6,18" fill="#F4EDE1" />
        <polygon points="21,9 27,9 24,18 18,18" fill="#F4EDE1" />
        <polygon points="33,9 39,9 36,18 30,18" fill="#F4EDE1" />
      </g>
    </svg>
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
          <ClapperLogo className="h-9 w-9 shrink-0" />
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

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden bg-gold px-5 py-2 font-display text-sm font-bold text-white shadow-[0_0_18px_-4px_rgba(225,29,42,0.6)] transition-colors hover:bg-gold-hover lg:inline-block"
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
                <ClapperLogo className="h-8 w-8" />
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
                className="mt-4 bg-gold px-4 py-3 text-center font-display font-bold text-noir transition-colors hover:bg-gold-hover"
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
