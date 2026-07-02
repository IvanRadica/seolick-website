# SEO LICK — Source of Truth

Read this before editing copy, positioning, services, or brand voice anywhere in this repo.

## Hierarchy

| Rank | What | Where | Role |
|------|------|-------|------|
| 1 — **CANONICAL** | Brand truth (voice, positioning, services, ICP) | Second Brain wiki → `/Users/korisnik/Obsidian/SecondBrain/SecondBrain/` (read `SCHEMA.md` + `CURRENT-STATE.md` first) | THE source of truth. If anything conflicts, the wiki wins. |
| 2 — **Build** | This repo (Astro site, `src/**`) | `…/Documents/Claude/Projects/seolick.me/` | The ONLY build. Copy lives in `src/content/*.ts`. |
| 3 — Archived | Superseded standalone prototypes | `_archive/` | Reference only. The locked hero source is `_archive/2026-06-16-lick-hero-standalone.html`. |

## Decisions locked 2026-07-02 (with Ivan)
- **One build**: the Astro app. The parallel `redesign/` page and root `index.html` are archived; the noindex v2 track was promoted to the main routes and deleted.
- **Theme**: dark premium sitewide (black / white / `#e12c2c`).
- **Hero**: the LICK letter-reveal animation is **LOCKED** — ported verbatim into `src/components/HeroLick.astro`. Hybrid brand: Montserrat letterforms kept, red standardized to `#e12c2c`. Do not change the choreography or timing.
- **Tagline**: “We LICK websites. For organic growth.”
- **Positioning**: broad ICP — “brendovi koji žive od upita i rezervacija” (clinics, charters, real estate). Services architecture: 01 Strategija & Audit (od 1.000 €) / 02 Foundations (od 4.000 €) / 03 Retainer (START 2.200 / GROWTH 4.000 / SCALE 5.400 €/mj).
- **Case studies** (`src/content/results.ts`): anonymized, every number traceable to the wiki proof sheet `Wiki/decisions/client-results-proof.md`. Ivan adds client names later via the `name` slot. Never publish: the retired “100+ keywords” LED claim, Green Stay, Danielis-as-a-win, or a real client name without Ivan’s sign-off.
- **Fonts**: Montserrat (display) + Roboto (body) + Roboto Mono (labels). Logo SVGs in `public/brand/` (`icon.svg` recolored `#d12928 → #e12c2c`).

## Editing rules
- **Don’t invent positioning/voice.** Pull from the wiki first.
- Brand voice: advisory not salesy; every claim gets a number + timeframe; HR for Croatian clients, EN for international; the L.I.C.K. tagline stays English.
