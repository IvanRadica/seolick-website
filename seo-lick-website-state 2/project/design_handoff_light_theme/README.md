# Handoff: SEO LICK — Light Theme (full site)

## Overview
A light-background variant of the entire seolick.me site (Home, Usluge, L.I.C.K., Kontakt): white ground, black typography, red `#e12c2c` accents, warm `#f6f4ef` section bands. The LOCKED LICK letter-reveal hero is preserved — letters now reveal in near-black (`#111`) and turn red on the same locked timeline.

**Target codebase:** the existing Astro v5 site at `seolick.me/` (Tailwind v4 via `@tailwindcss/vite`, tokens in `src/styles/global.css`, locked hero in `src/components/HeroLick.astro`). This is a **re-theme + subpage unification** of what's already there — not a rebuild.

## About the Design Files
The `.dc.html` files in this bundle are **design references created in HTML** — self-contained prototypes showing intended look and behavior. Do NOT copy them into the codebase. Recreate the design in the existing Astro components by (1) swapping the color tokens and (2) unifying subpage card styling, as specified below. Open each file in a browser to see the reference.

## Fidelity
**High-fidelity.** Colors, typography, spacing and the hero timeline are final. Recreate pixel-perfectly using the existing Tailwind v4 + component-class setup.

## Design Tokens — exact dark → light mapping
Apply in `src/styles/global.css` (`:root` block + `@layer base`). Red stays `#e12c2c` / dark `#c41f1f` everywhere.

| Token / usage | Dark (current) | Light (new) |
|---|---|---|
| page background (`html`, `body`) | `#000` | `#fff` |
| body text | `#fff` | `#111` |
| `--surface` (Results, Testimonial, Retainer tiers, Roadmap bands) | `#0a0a0a` | `#f6f4ef` (brand bež) |
| card background (inside `.grid-frame`) | `#000` | `#fff` |
| `--dim` (secondary text) | `rgba(255,255,255,0.45)` | `rgba(0,0,0,0.55)` |
| `--dimmer` (tertiary/mono list text) | `rgba(255,255,255,0.28)` | `rgba(0,0,0,0.4)` |
| `--border` (hairlines, `.grid-frame` gap fill) | `rgba(255,255,255,0.08)` | `rgba(0,0,0,0.1)` |
| `--faint` (card-list top border) | `rgba(255,255,255,0.06)` | `rgba(0,0,0,0.08)` |
| stronger border (footer rule, stats strip) | `rgba(255,255,255,0.1)` | `rgba(0,0,0,0.12)` |
| input/ghost-button border | `rgba(255,255,255,0.15)` | `rgba(0,0,0,0.18)` |
| body copy 60% / 70% white | `rgba(255,255,255,0.6)` / `0.7` | `rgba(0,0,0,0.65)` / `0.75` |
| muted mono (footer legal, disclaimers) | `rgba(255,255,255,0.3)` | `rgba(0,0,0,0.45)` |
| placeholder text | `rgba(255,255,255,0.4)` | `rgba(0,0,0,0.5)` |
| header glass (`[data-site-header]` scrolled) | `bg-black/90` | `rgba(255,255,255,0.88)` + blur |
| footer oversized wordmark | `rgba(255,255,255,0.04)` | `rgba(0,0,0,0.05)` |
| input background | `rgba(255,255,255,0.03)` | `rgba(0,0,0,0.03)` |
| card hover tint | `rgba(225,44,44,0.12)` | unchanged (works on white) |

**Keep white text ONLY on red fills:** `.btn-primary`, the "Preporučeno" badge, roadmap chips (`#a11414`, `#cf2b2b`, `#e85d54`; the `#f4a8a2` chip keeps `#4a0f0f` text), and `::selection`.

## Hero — `src/components/HeroLick.astro` (LOCKED timeline, colors only)
Timeline, easings and durations are **unchanged and locked**. Only three color changes:
1. `.hero-lick` background `#000` → `#fff`; `.letter` color `#fff` → `#111`
2. `@keyframes turnRed { from { color: #111 } … }` (was `#fff`)
3. `@keyframes descriptorIn` — from `rgba(0,0,0,0)` to `rgba(0,0,0,0.55)`; descriptor resting color likewise; `.hero-logo` → `rgba(0,0,0,0.5)`; scroll-hint label → `rgba(0,0,0,0.35)`; tagline color `#111`
Also update the `prefers-reduced-motion` resting-state block with the same values. The reference adds a small "↺ Replay" control (mono 10px, `rgba(0,0,0,0.35)`, bottom-right of hero, hover red) that reruns the timeline — optional but included in the mocks.

## Subpage unification (design change, not just re-theme)
Usluge / L.I.C.K. / Kontakt currently use `rounded-xl` cards with `bg-white/[0.02]`. The reference unifies them with the home page's sharp system:
- **Cards:** square corners (2px max radius on buttons only), 1px hairline borders, fused `.grid-frame` grids (1px gap, border-color fill) for the services trio and related-services rows
- **Retainer tiers:** separate bordered boxes, 24px gap; featured GROWTH = 2px solid red border + `rgba(225,44,44,0.06)` fill + red badge
- **Section bands:** Retainer tiers, Roadmap, Results and Testimonial sections sit on `--surface` (`#f6f4ef`)
- **Forms:** inputs 2px radius, `rgba(0,0,0,0.03)` fill, `rgba(0,0,0,0.18)` border, red border on focus

## Screens
1. **Home** (`Home Light.dc.html`) — hero (locked reveal) → positioning band → problem (3-card grid-frame) → L.I.C.K. framework (4-card grid-frame w/ red letters) → results on bež band (stats strip + 6 case cards + prior-track-record box + disclaimer) → services teaser (3-card grid-frame) → team 2-col (photo slots 88px circles) → testimonial on bež band → final CTA → FAQ (native `<details>`) → footer
2. **Usluge** (`Usluge Light.dc.html`) — centered header → services trio grid-frame w/ per-card CTA → path note → retainer tiers on bež band → related services grid-frame → 2-col inquiry section (title + form)
3. **L.I.C.K.** (`LICK Light.dc.html`) — header w/ L-I-C-K anchor chips → 4 pillar sections (2/3 body + 1/3 benefits, red first letter enlarged) → 6-month roadmap gantt on bež band (colors unchanged) → CTA
4. **Kontakt** (`Kontakt Light.dc.html`) — 2-col: eyebrow/title/lead + contact rows | inquiry form card

Copy is verbatim from `src/content/*.ts` (HR), with one deliberate edit: visible "webshop" wording on the L.I.C.K. page generalized to "web" to match the broad ICP (title: "L.I.C.K. — Strategija za web koji prodaje").

## Typography (unchanged from repo)
Montserrat 900 display / Roboto body / Roboto Mono labels. Eyebrows: mono 11px 600, tracking 0.22em, red, uppercase. Section titles: `clamp(28px, 4.5vw, 54px)`, 900, line-height 1.06, tracking −0.025em. Buttons: mono 12px 600, tracking 0.14em, uppercase, 16px/32px padding, 2px radius.

## Interactions & Behavior
- Hero: locked JS timeline (L at 400ms, then +750ms per letter; descriptors +280ms; turnRed at 3130ms; divider +300; tagline +900; logo +1600; scroll hint +2400). Reduced-motion → static final state.
- Nav links: `rgba(0,0,0,0.55)` → `#111` on hover; active page `#111`
- Cards: red-tint background on hover, 0.3s ease
- Ghost buttons: border+text turn red on hover; primary buttons darken to `#c41f1f`
- FAQ: native `<details>/<summary>`, red "+" marker
- Forms: Web3Forms wiring already exists in `InquiryForm.astro` — unchanged

## State Management
None beyond existing (mobile menu toggle, header scroll state, FAQ details, form submit).

## Assets
- Founder photos: mocks use drag-drop placeholder slots (88px circles) — real photos needed
- No client logos (text-based proof, per repo decision)
- Fonts via Google Fonts (already loaded in `BaseLayout.astro`)

## Files in this bundle
- `Home Light.dc.html` — homepage reference
- `Usluge Light.dc.html` — services reference
- `LICK Light.dc.html` — L.I.C.K. explainer reference
- `Kontakt Light.dc.html` — contact reference

## Suggested Claude Code prompt
> Read design_handoff_light_theme/README.md. Re-theme the site from dark to light exactly per the token mapping table (edit src/styles/global.css and HeroLick.astro — do NOT change the hero timeline), and unify Usluge/Lick/Kontakt card styling with the sharp grid-frame system per the "Subpage unification" section. Open the bundled .dc.html files as visual references.
