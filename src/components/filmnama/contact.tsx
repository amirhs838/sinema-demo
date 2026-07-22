"use client";

import { useState } from "react";
import { BRAND } from "./data";
import { Reveal } from "./reveal";

// ============================================================
// ۱۰. ثبت‌نام / تماس (باجهٔ بلیت‌فروشی) — همهٔ راه‌های تماس
//     کلیک‌برای‌تماس + کپی خودکار USSD با پیام «کپی شد»
// ============================================================

function CopyButton({ value, label }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Fallback for non-secure contexts
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* noop */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1900);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "کپی شد" : `کپی کردن ${value}`}
      className={`inline-flex shrink-0 items-center gap-1.5 border px-3 py-2 font-display text-xs font-bold transition-colors ${
        copied
          ? "border-cine-green bg-cine-green/15 text-ivory"
          : "border-gold/50 text-gold hover:bg-gold/10"
      }`}
    >
      {copied ? (
        <>
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          کپی شد
        </>
      ) : (
        <>
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="9" y="9" width="11" height="11" rx="1" />
            <path d="M5 15V5a1 1 0 011-1h10" />
          </svg>
          {label ?? "کپی"}
        </>
      )}
    </button>
  );
}

/* Custom minimal brand icons (no stock icon pack) */
function IconPhone({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" strokeLinejoin="round" />
    </svg>
  );
}
function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconPin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
function IconClock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Contact() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    BRAND.address
  )}`;

  return (
    <section id="contact" className="relative border-b border-divider bg-noir-2 py-14 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mb-10 max-w-2xl sm:mb-12">
          <span className="font-latin text-xs tracking-[0.35em] text-gold">BOX OFFICE · باجهٔ بلیت‌فروشی</span>
          <h2 className="title-rule mt-3 font-display text-3xl font-extrabold text-ivory sm:text-5xl">
            ثبت‌نام و تماس با فیلم‌نما
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-khaki sm:text-base">
            سیستم ثبت‌نام آنلاین نداریم؛ اما همهٔ راه‌های تماس اینجا هستند. کافی است
            زنگ بزنید یا کد USSD را شماره‌گیری کنید.
          </p>
        </Reveal>

        {/* USSD featured booth */}
        <Reveal>
          <div className="relative overflow-hidden rounded-sm border-2 border-gold/50 bg-noir">
            <div className="flex items-center justify-between border-b border-gold/30 bg-gold/5 px-4 py-3 sm:px-6">
              <span className="font-latin text-[11px] tracking-[0.25em] text-gold sm:text-sm">
                BOX OFFICE · ثبت‌نام سریع
              </span>
              <span className="lamp-dot inline-block h-2 w-2 rounded-full bg-gold shadow-[0_0_8px_2px_rgba(225,29,42,0.6)]" />
            </div>
            <div className="grid items-center gap-5 p-4 sm:gap-6 sm:p-6 md:grid-cols-2">
              <div>
                <h3 className="font-display text-xl font-extrabold text-ivory sm:text-3xl">
                  با یک کد USSD ثبت‌نام کنید
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-khaki sm:text-sm">
                  کد زیر را شماره‌گیری کنید تا کارشناسان ما برای تکمیل ثبت‌نام با شما
                  تماس بگیرند. (دکمهٔ کپی هم در کنار آن است.)
                </p>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-sm border border-divider bg-noir-2 px-3 py-3.5 sm:px-5 sm:py-4">
                <code className="font-latin text-lg tracking-[0.12em] text-gold sm:text-3xl" dir="ltr">
                  {BRAND.ussd}
                </code>
                <CopyButton value={BRAND.ussd} label="کپی کد" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Contact channels grid */}
        <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {/* Mobile */}
          <Reveal>
            <a
              href={`tel:${BRAND.phoneMobile}`}
              className="group flex h-full flex-col rounded-sm border border-divider bg-noir p-4 transition-colors hover:border-gold/60 sm:p-5"
            >
              <div className="flex items-center justify-between">
                <IconPhone className="h-6 w-6 text-gold" />
                <span className="font-latin text-[10px] tracking-widest text-khaki">MOBILE</span>
              </div>
              <div className="mt-3 font-latin text-lg tracking-wider text-ivory sm:mt-4 sm:text-xl" dir="ltr">
                {BRAND.phoneMobile}
              </div>
              <div className="mt-1 text-xs text-khaki sm:text-sm">تماس مستقیم (موبایل)</div>
            </a>
          </Reveal>

          {/* Landline */}
          <Reveal delay={0.06}>
            <a
              href={`tel:${BRAND.phoneLandline}`}
              className="group flex h-full flex-col rounded-sm border border-divider bg-noir p-4 transition-colors hover:border-gold/60 sm:p-5"
            >
              <div className="flex items-center justify-between">
                <IconPhone className="h-6 w-6 text-gold" />
                <span className="font-latin text-[10px] tracking-widest text-khaki">LANDLINE</span>
              </div>
              <div className="mt-3 font-latin text-lg tracking-wider text-ivory sm:mt-4 sm:text-xl" dir="ltr">
                {BRAND.phoneLandline}
              </div>
              <div className="mt-1 text-xs text-khaki sm:text-sm">تلفن ثابت آموزشگاه</div>
            </a>
          </Reveal>

          {/* Instagram */}
          <Reveal delay={0.12}>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-sm border border-divider bg-noir p-4 transition-colors hover:border-gold/60 sm:p-5"
            >
              <div className="flex items-center justify-between">
                <IconInstagram className="h-6 w-6 text-gold" />
                <span className="font-latin text-[10px] tracking-widest text-khaki">INSTAGRAM</span>
              </div>
              <div className="mt-3 font-latin text-lg tracking-wider text-ivory sm:mt-4 sm:text-xl" dir="ltr">
                @{BRAND.instagram}
              </div>
              <div className="mt-1 text-xs text-khaki sm:text-sm">آخرین اخبار و آثار</div>
            </a>
          </Reveal>

          {/* Hours */}
          <Reveal delay={0.18}>
            <div className="flex h-full flex-col rounded-sm border border-divider bg-noir p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <IconClock className="h-6 w-6 text-gold" />
                <span className="font-latin text-[10px] tracking-widest text-khaki">HOURS</span>
              </div>
              <div className="mt-3 font-display text-lg text-ivory sm:mt-4 sm:text-xl">۱۳ الی ۲۱</div>
              <div className="mt-1 text-xs text-khaki sm:text-sm">{BRAND.hours}</div>
            </div>
          </Reveal>
        </div>

        {/* Address banner */}
        <Reveal delay={0.1}>
          <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-sm border border-divider bg-noir p-4 sm:mt-6 sm:flex-row sm:items-center sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <IconPin className="h-6 w-6 shrink-0 text-gold" />
              <div>
                <div className="font-latin text-[10px] tracking-widest text-khaki">ADDRESS</div>
                <div className="mt-1 text-sm text-ivory sm:text-base">{BRAND.address}</div>
              </div>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 border border-gold/50 px-4 py-2.5 font-display text-sm font-bold text-gold transition-colors hover:bg-gold/10"
            >
              مسیریابی در نقشه
              <span aria-hidden="true">←</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
