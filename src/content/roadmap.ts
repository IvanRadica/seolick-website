import type { Lang } from '../i18n/ui';

type Task = { hr: string; en: string; start: number; end: number };
type Pillar = { hr: string; en: string; bg: string; fg: string; lanes: Task[][] };

type Heading = { eyebrow: string; title: string; subtitle: string };

export const roadmap: {
  months: { hr: string; en: string };
  heading: Record<Lang, Heading>;
  pillars: Pillar[];
} = {
  months: { hr: 'Mjesec', en: 'Month' },
  heading: {
    hr: {
      eyebrow: 'Mapa puta',
      title: 'Imamo mapu — evo kako izgleda put do tržišta',
      subtitle:
        'Okvirni 6-mjesečni plan složen po L.I.C.K. metodi. Faze prilagođavamo vašem webshopu i ciljevima.',
    },
    en: {
      eyebrow: 'The roadmap',
      title: 'We have the map — here’s the road to your market',
      subtitle:
        'An indicative 6-month plan built on the L.I.C.K. method. We adapt the phases to your store and goals.',
    },
  },
  pillars: [
    {
      hr: 'Ključne riječi',
      en: 'Keywords',
      bg: '#a11414',
      fg: '#ffffff',
      lanes: [
        [{ hr: 'Audit i strategija', en: 'Audit & Strategy', start: 1, end: 1 }],
        [
          { hr: 'Istraživanje ključnih riječi', en: 'Keyword Research', start: 1, end: 1 },
          { hr: 'Praćenje pozicija i izvještavanje', en: 'Rank Tracking & Reporting', start: 2, end: 6 },
        ],
        [
          { hr: 'Istraživanje tržišta', en: 'Market Research', start: 1, end: 1 },
          { hr: 'Analiza namjere pretraživanja', en: 'Search Intent Analysis', start: 2, end: 3 },
          { hr: 'Prilike za širenje', en: 'Expansion Opportunities', start: 5, end: 6 },
        ],
        [
          { hr: 'Analiza konkurencije', en: 'Competitive Analysis', start: 1, end: 1 },
          { hr: 'Analiza nedostajućih ključnih riječi', en: 'Keyword Gap Analysis', start: 3, end: 4 },
        ],
      ],
    },
    {
      hr: 'Content',
      en: 'Content',
      bg: '#cf2b2b',
      fg: '#ffffff',
      lanes: [
        [
          { hr: 'Audit sadržaja', en: 'Content audit', start: 1, end: 1 },
          { hr: 'Tematski klasteri', en: 'Topical Clusters', start: 3, end: 4 },
          { hr: 'Programatski sadržaj', en: 'Programmatic', start: 5, end: 6 },
        ],
        [
          { hr: 'Plan sadržaja', en: 'Content Plan', start: 2, end: 2 },
          { hr: 'Skaliranje produkcije sadržaja', en: 'Content Production Scaling', start: 3, end: 5 },
          { hr: 'Reciklaža sadržaja', en: 'Repurposing', start: 6, end: 6 },
        ],
        [
          { hr: 'Ideacija sadržaja', en: 'Content ideation', start: 1, end: 1 },
          { hr: 'Konverzijski copywriting', en: 'Conversion Copywriting', start: 3, end: 4 },
          { hr: 'Lead magnet', en: 'Lead Magnet', start: 5, end: 6 },
        ],
      ],
    },
    {
      hr: 'Infrastruktura',
      en: 'Infrastructure',
      bg: '#e85d54',
      fg: '#ffffff',
      lanes: [
        [
          { hr: 'Tehnički SEO audit', en: 'Technical SEO audit', start: 1, end: 1 },
          { hr: 'Core Web Vitals i popravci', en: 'Core Web Vitals & Fixes', start: 2, end: 3 },
          { hr: 'Praćenje tehničkog SEO-a', en: 'Tech SEO monitoring', start: 4, end: 6 },
        ],
        [{ hr: 'On-Page (Meta, H1, Schema)', en: 'On-Page (Meta, H1, Schema)', start: 2, end: 3 }],
        [
          { hr: 'Optimizacija informacijske arhitekture', en: 'Information Architecture Optimization', start: 1, end: 2 },
          { hr: 'Interno povezivanje', en: 'Internal Linking', start: 3, end: 4 },
          { hr: 'CRO i analiza toplinskih mapa', en: 'CRO & Heatmap analysis', start: 5, end: 6 },
        ],
      ],
    },
    {
      hr: 'Linkovi i lokalno',
      en: 'Links & Local',
      bg: '#f4a8a2',
      fg: '#4a0f0f',
      lanes: [
        [
          { hr: 'Audit backlinkova', en: 'Backlink Audit', start: 1, end: 1 },
          { hr: 'Nepovezani spomeni i citati', en: 'Unlinked Mentions & Citations', start: 4, end: 5 },
        ],
        [{ hr: 'Kampanje gostujućih objava', en: 'Guest Posting Campaigns', start: 3, end: 5 }],
        [
          { hr: 'Lokalni SEO audit', en: 'Local SEO audit', start: 1, end: 1 },
          { hr: 'Optimizacija Google Businessa', en: 'Google Business Optimization', start: 2, end: 3 },
          { hr: 'Digitalne PR kampanje', en: 'Digital PR Campaigns', start: 5, end: 6 },
        ],
      ],
    },
  ],
};
