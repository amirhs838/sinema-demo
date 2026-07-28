"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { BRAND, NAV } from "./data";
import { MagneticButton } from "./magnetic-button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Filmnama brand logo (uploaded calligraphic mark, recolored red, transparent bg)
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
  const [activeId, setActiveId] = useState<string>("#home");

  // Shrink header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight active nav link
  useEffect(() => {
    const ids = NAV.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const overHero = !scrolled; // transparent over hero, glass when scrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-divider"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{ height: scrolled ? "56px" : "64px" }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8">
        {/* Logo / wordmark */}
        <a href="#home" className="flex items-center gap-2.5" aria-label={BRAND.fullName}>
          <FilmnamaLogo height={scrolled ? 34 : 40} />
          <span className="flex flex-col leading-none">
            <span
              className={`font-display font-extrabold transition-all duration-300 ${
                scrolled ? "text-base" : "text-xl"
              } ${overHero ? "text-white" : "text-ivory"}`}
            >
              {BRAND.name}
            </span>
            <span className="font-latin mt-0.5 text-[10px] tracking-[0.3em] text-amber">
              {BRAND.latinTag}
            </span>
          </span>
        </a>

        {/* Desktop nav — animated underline + active state */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="ناوبری اصلی">
          {NAV.map((item) => {
            const isActive = activeId === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`group relative px-3 py-2 text-sm transition-colors ${
                  overHero
                    ? "text-white/75 hover:text-white"
                    : isActive
                      ? "text-amber"
                      : "text-khaki hover:text-ivory"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-2 -bottom-0.5 h-px origin-center bg-amber transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        {/* Left-side group: hamburger (mobile) + CTA */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              asChild
              aria-label="باز کردن منو"
              className={`inline-flex h-10 w-10 items-center justify-center transition-colors lg:hidden ${
                overHero ? "text-white" : "text-ivory"
              }`}
            >
              <button type="button">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] border-divider bg-noir-2 p-0">
              <SheetHeader className="border-b border-divider px-5 py-4 text-start">
                <SheetTitle className="flex items-center gap-2 text-ivory">
                  <FilmnamaLogo height={32} />
                  <span className="font-display text-lg font-extrabold">{BRAND.name}</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-2 py-3" aria-label="ناوبری موبایل">
                {NAV.map((item) => {
                  const isActive = activeId === item.href;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`border-b border-divider/60 px-4 py-3.5 text-base transition-colors hover:bg-noir hover:text-amber ${
                        isActive ? "text-amber" : "text-khaki"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
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

          {/* CTA — magnetic on desktop, compact on mobile */}
          <MagneticButton
            href="#contact"
            className="btn-primary text-xs px-3.5 py-2 lg:text-sm lg:px-7 lg:py-3.5"
            strength={0.2}
          >
            ثبت‌نام
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
