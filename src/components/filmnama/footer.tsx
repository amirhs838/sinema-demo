import Image from "next/image";
import { BRAND, NAV } from "./data";

// ============================================================
// ۱۱. فوتر — لوگو، تگ‌لاین، لینک‌های سریع، شبکه‌های اجتماعی کاستوم،
//     آدرس و ساعت کاری، و خط پایانی به سبک تیتراژ پایان فیلم (پایان / THE END)
// ============================================================

function SocialInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
function SocialPhone({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" strokeLinejoin="round" />
    </svg>
  );
}
function SocialUssd({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 3v18M15 3v18" strokeDasharray="2 2" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ClapperLogo({ height = 40 }: { height?: number }) {
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

export function Footer() {
  return (
    <footer className="mt-auto bg-noir-2">
      {/* Top: brand + links + contact */}
      <div className="border-b border-divider">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 lg:grid-cols-12 lg:px-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <ClapperLogo height={48} />
              <div className="flex flex-col leading-none">
                <span className="font-display text-2xl font-extrabold text-ivory">{BRAND.name}</span>
                <span className="font-latin mt-1 text-[10px] tracking-[0.3em] text-gold">
                  {BRAND.latinTag}
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-khaki">
              {BRAND.tagline}.
            </p>

            {/* Custom social icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="اینستاگرام فیلم‌نما"
                className="grid h-10 w-10 place-items-center rounded-sm border border-divider text-khaki transition-colors hover:border-gold hover:text-gold"
              >
                <SocialInstagram className="h-5 w-5" />
              </a>
              <a
                href={`tel:${BRAND.phoneMobile}`}
                aria-label="تماس تلفنی"
                className="grid h-10 w-10 place-items-center rounded-sm border border-divider text-khaki transition-colors hover:border-gold hover:text-gold"
              >
                <SocialPhone className="h-5 w-5" />
              </a>
              <a
                href={`tel:${BRAND.ussd.replace(/[#*]/g, "")}`}
                aria-label="کد USSD ثبت‌نام"
                className="grid h-10 w-10 place-items-center rounded-sm border border-divider text-khaki transition-colors hover:border-gold hover:text-gold"
              >
                <SocialUssd className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h3 className="font-latin text-xs tracking-[0.3em] text-gold">QUICK LINKS</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-khaki transition-colors hover:text-ivory">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="font-latin text-xs tracking-[0.3em] text-gold">CONTACT</h3>
            <ul className="mt-4 space-y-3 text-sm text-khaki">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-gold">⚲</span>
                <span>{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">◷</span>
                <span>{BRAND.hours}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">☎</span>
                <a href={`tel:${BRAND.phoneMobile}`} className="font-latin tracking-wider transition-colors hover:text-gold" dir="ltr">
                  {BRAND.phoneMobile}
                </a>
                <span className="text-divider">|</span>
                <a href={`tel:${BRAND.phoneLandline}`} className="font-latin tracking-wider transition-colors hover:text-gold" dir="ltr">
                  {BRAND.phoneLandline}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">@</span>
                <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-latin tracking-wider transition-colors hover:text-gold" dir="ltr">
                  {BRAND.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* End-credits card */}
      <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 sm:py-10 lg:px-8">
        {/* film-strip divider */}
        <div className="mx-auto mb-5 flex max-w-xs items-center justify-center gap-1.5 sm:mb-6" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="h-2 w-3 rounded-[1px] bg-divider" />
          ))}
        </div>
        <div className="font-latin text-2xl tracking-[0.4em] text-gold sm:text-4xl">THE END</div>
        <div className="mt-2 font-display text-base text-khaki sm:text-lg">پایان</div>
        <p className="mt-4 text-xs text-khaki/70 sm:mt-5">
          © {new Date().getFullYear()} {BRAND.fullName} — تمام حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}
