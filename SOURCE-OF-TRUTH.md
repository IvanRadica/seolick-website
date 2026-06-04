# SEO LICK — Source of Truth

Read this before editing copy, positioning, services, or brand voice anywhere in this repo.

## Hierarchy

| Rank | What | Where | Role |
|------|------|-------|------|
| 1 — **CANONICAL** | Brand truth (voice, positioning, services, ICP) | Second Brain wiki → `/Users/korisnik/Obsidian/SecondBrain/SecondBrain/` (read `SCHEMA.md` + `CURRENT-STATE.md` first) | THE source of truth. If anything conflicts, the wiki wins. |
| 2 — Secondary | Working brand drafts | `…/Documents/SEOLICK - COWORK/` | Scratch/detail. Reconcile INTO the wiki — do not treat as truth. |
| 3 — Build | This repo (Astro site) | `…/Documents/Claude/Projects/seolick.me/` | Implements the brand. Copy lives in `src/content/*.ts`. |
| 4 — Archived | Dead May prototypes | `…/SEO LICK/_ARCHIVE_SEO-LICK-website-OLD/` | Ignore. |

## Editing rules
- **Don't invent positioning/voice.** Pull from the wiki first.
- Chosen direction: **v2 broad-ICP** ("brendovi koji žive od upita i rezervacija") + **services-v2** architecture (01 Strategija & Audit / 02 Foundations / 03 Retainer). Live on `redesign/index.html`.
- Brand logo assets: `public/brand/`.

## ⚠️ Open: wiki ↔ build drift
The canonical wiki has correct pricing tiers but is missing a brand-voice page, a positioning page, and the services-v2 (Audit/Foundations/Retainer) framing; its `seolick-website-rebuild` project page is stale (2026-05-25). Reconcile these before treating the wiki as fully trustworthy.
