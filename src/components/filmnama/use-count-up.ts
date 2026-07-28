"use client";

import { useEffect, useRef, useState } from "react";

// Count-up animation when element scrolls into view.
// Respects prefers-reduced-motion (renders final value immediately).
export function useCountUp(target: number, durationMs = 1600) {
  const ref = useRef<HTMLElement | null>(null);
  // Start at 0; for reduced-motion we set the final value via initial state computed lazily.
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      // Use a microtask to avoid synchronous setState in effect
      const id = window.setTimeout(() => {
        started.current = true;
        setValue(target);
      }, 0);
      return () => window.clearTimeout(id);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / durationMs);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, durationMs]);

  return { ref, value };
}
