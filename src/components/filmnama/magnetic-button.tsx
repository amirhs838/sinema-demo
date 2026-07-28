"use client";

import { useRef, type ReactNode } from "react";

// Magnetic button — subtle pull toward cursor on desktop. No-op on touch / reduced-motion.
export function MagneticButton({
  children,
  className,
  strength = 0.25,
  ...props
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0, 0)";
  };

  return (
    <a
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.25s ease" }}
      {...props}
    >
      {children}
    </a>
  );
}
