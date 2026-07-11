---
Task ID: 1
Agent: main (Z.ai Code)
Task: Design & build a professional, cinematic Persian RTL homepage for «فیلم‌نما» cinema academy (Next.js 16 + Tailwind 4)

Work Log:
- Installed self-hosted fonts via fontsource: Estedad (Persian display), Vazirmatn (Persian body), Bebas Neue (Latin accent).
- Generated 4 atmospheric cinematic brand images with z-ai image CLI (hero cinema hall, screening seats, film-editing desk, clapperboard) — all warm-noir, no people.
- Rewrote `src/app/globals.css`: warm-noir brand palette (exact HEX from brief), `@theme` color/font tokens, film-grain overlay, marquee, frame-jitter, blinking lamp, ticket perforation, spotlight, velvet-curtain, sprocket-strip utilities; `prefers-reduced-motion` disables all decorative animation.
- Rewrote `src/app/layout.tsx`: `dir="rtl" lang="fa"`, fontsource imports, Persian metadata, dark-noir body.
- Built 12 section components under `src/components/filmnama/`: data.ts (real brand content), grain, reveal, header (scroll-aware + mobile Sheet), hero (letterbox + asymmetric poster type + ticket CTA), marquee, about (clapperboard card), courses (7 equal 35mm film-frame cards w/ sprocket holes + frame-jitter; directing & makeup "به‌زودی" but equal weight), teachers (film-credits w/ monogram silhouettes — no fabricated faces), screening (projector-ring play buttons), articles (magazine cards), testimonials (honest empty frames + Instagram invite), contact (box-office: click-to-call, USSD copy→"کپی شد", maps link), footer (custom social icons + THE END / پایان).
- Composed `src/app/page.tsx` with `min-h-screen flex flex-col` + footer `mt-auto` for sticky-footer behavior.
- Hit a dev-server CSS cache issue (stale globals.css served); resolved by clearing `.next` and restarting dev server.
- Verified end-to-end with Agent Browser + VLM: fresh noir theme applied (body bg #0E0C0B, text #F4EDE1), Estedad font loaded, 8 sections / 7 course cards / 3 teacher cards, no horizontal overflow (desktop + 390px mobile), USSD copy button → "کپی شد", mobile hamburger menu visible, footer with "THE END", gradient gold title visible. Lint clean.

Stage Summary:
- Homepage complete & browser-verified. Real brand info used throughout (no Lorem Ipsum). Anti-cliché checklist honored (no purple-blue gradients, no centered hero w/ round gradient buttons, no glassmorphism, no rounded-2xl-everything, custom icons, real cinema imagery).
- Artifacts: src/app/{page.tsx,layout.tsx,globals.css}, src/components/filmnama/*.tsx, public/images/{hero-cinema,screening-seats,article-editing,article-clapper}.png
- Note: sandbox kills background dev-server processes when a Bash command returns; server must be (re)started for live preview.

---
Task ID: 2
Agent: main (Z.ai Code)
Task: Add real photos of the three teachers (search the web) and replace empty testimonial frames with realistic, human-sounding Persian reviews.

Work Log:
- Used image-search skill (z-ai image-search CLI) to find public web photos of رامین راستاد، حدیث تهرانی، رحیم نوروزی (Persian queries).
- Downloaded 2 candidate portraits per teacher, verified each with VLM (z-ai vision) for clarity, professionalism, absence of watermarks, and fit on dark cinema site.
- Selected best portrait per teacher (all rated 8/10): ramin-b1 (portrait orientation, male 40s), hadis-3 (female), rahim-3 (male 40s). Copied to public/images/teacher-{ramin-rastad,hadis-tehrani,rahim-norouzi}.jpg.
- Updated data.ts: added `image` field to Teacher type; added VOICES array with 3 realistic Persian testimonials (نگار/بازیگری، امیرحسین/فیلمنامه‌نویسی، سارا/تدوین) — colloquial, human-toned, mentioning real details (آقای راستاد، فیلم کوتاه خروجی، مدرک بین‌المللی، اندیشه).
- Rewrote teachers.tsx: replaced monogram-silhouette portrait with real photo + cinematic treatment (warm sepia/gold duotone via mix-blend-soft-light overlay, saturate/contrast/brightness filter, noir vignette + bottom fade, film-credit name plate on photo, CAST + number corner slates, hover brightens filter).
- Rewrote testimonials.tsx: 3 figure cards with star row, big quote mark, blockquote, initials-avatar + name/field figcaption; plus a slim Instagram invite banner below.
- Lint clean. Browser-verified: 3 teacher photos load (naturalWidth 1200, complete, displayed ~362–387px) with duotone filter applied; 3 testimonials render with real quotes; invite present. VLM rated teachers section 9/10 (warm golden tint, professional, no broken images).

Stage Summary:
- Teachers now show real searched portraits with cohesive noir+gold cinematic treatment instead of monogram silhouettes.
- Testimonials filled with 3 realistic, human-toned Persian reviews (replacing empty frames) + retained Instagram invite.
- Artifacts updated: src/components/filmnama/{data.ts,teachers.tsx,testimonials.tsx}, public/images/teacher-*.jpg
