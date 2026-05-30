import type { Lang } from '../i18n/ui';

export const servicesV2Content = {
  hr: {
    eyebrow: 'Usluge',
    title: 'Tri usluge, jedan put do tržišta',
    subtitle: 'Od strategije do dugoročnog rasta.',
    intro:
      'Svaki biznis je negdje na putu do tržišta — klinika, charter, agencija za nekretnine ili webshop. Mi vas pokupimo gdje god da jeste — analiziramo, postavljamo temelje i vozimo dalje. Tri usluge koje se nadovezuju jedna na drugu, a svaku možete uzeti i zasebno.',
    trio: [
      {
        num: '01',
        name: 'SEO Strategija & Audit',
        price: 'od 1.000 €',
        tagline: 'Polazna točka svakog ozbiljnog SEO-a.',
        desc: 'Dubinska analiza vašeg biznisa, konkurencije i tržišta te konkretna strategija s jasnim prioritetima. Uzmite je zasebno ili kao prvu fazu Foundationsa.',
        bullets: [
          'Tehnička, content i backlink analiza',
          'Analiza konkurencije i tržišta',
          'Strategija s jasnim prioritetima',
        ],
      },
      {
        num: '02',
        name: 'SEO LICK Foundations',
        price: 'od 4.000 € / projekt',
        tagline: 'Postavljamo temelje koje Google voli.',
        desc: 'Projektno postavljanje SEO temelja — arhitektura, tehnika, dizajn i sadržaj. Uključuje Strategiju & Audit iz prve postaje.',
        bullets: [
          'Arhitektura prilagođena ključnim riječima',
          'Tehnički SEO i on-page optimizacija',
          'Dizajn i tracking koji prodaju',
          'Uključuje Strategiju & Audit',
        ],
      },
      {
        num: '03',
        name: 'SEO Retainer',
        price: 'od 2.200 € / mj',
        tagline: 'Dugoročno partnerstvo nakon temelja.',
        desc: 'Kad su temelji postavljeni, preuzimamo kontinuirani rast. Dedicirani tim radi po L.I.C.K. pilarima iz mjeseca u mjesec — tri tiera ovisno o tempu rasta.',
        bullets: [
          'Dedicirani tim (PM + SEO specijalisti)',
          'Rad po L.I.C.K. pilarima',
          'Redovni sync pozivi i izvještaji',
        ],
      },
    ],
    pathNote:
      'Audit → Foundations → Retainer. Audit je ujedno prva faza Foundationsa, a Retainer kreće kad su temelji postavljeni. Svaku uslugu možete uzeti i samostalno.',
    tiers: {
      bridge: 'Treća postaja — Retainer — dolazi u tri tiera. Odaberite tempo rasta.',
      eyebrow: 'SEO Retainer',
      title: 'Tri tiera za dugoročni rast',
      subtitle: 'Kapacitet i tim koji rastu zajedno s vama.',
      featuredLabel: 'Preporučeno',
      perMonth: '/ mj',
      note: 'Ugovor na 6 mjeseci: −10%. Na 12 mjeseci: −20%. Na M2M nema lock-ina.',
      cta: 'Zatraži ponudu',
      plans: [
        { name: 'START', capacity: '40 h / mj', price: '2.200 €', team: 'PM + 1 SEO specijalist', featured: false },
        { name: 'GROWTH', capacity: '80 h / mj', price: '4.000 €', team: 'PM + SEO Lead + 2–3 specijalista + sync svaka 2 tjedna', featured: true },
        { name: 'SCALE', capacity: '120 h / mj', price: '5.400 €', team: 'PM + SEO Lead + 3–5 specijalista + tjedni sync', featured: false },
      ],
    },
    width: {
      eyebrow: 'Povezane usluge',
      title: 'Usluge koje se nadovezuju na SEO',
      subtitle: 'Uzmite ih samostalno ili uz SEO — cijena prema opsegu.',
      items: [
        { name: 'Web Redesign & Migracija', desc: 'Novi web ili migracija bez gubitka SEO ekvitija.', price: 'prema opsegu' },
        { name: 'Google Ads', desc: 'Plaćeni promet uz ili bez SEO-a.', price: 'od 400 € / mj + 10%' },
        { name: 'Tracking & Analitika', desc: 'GA4, GTM i conversion tracking.', price: 'custom' },
      ],
    },
    cta: 'Zatraži ponudu',
    formTitle: 'Zatražite ponudu za L.I.C.K. start već danas',
    formSub: 'Konkurencija ne čeka, nemojte ni vi.',
  },
  en: {
    eyebrow: 'Services',
    title: 'Three services, one road to your market',
    subtitle: 'From strategy to long-term growth.',
    intro:
      'Every business is somewhere on the road to its market — a clinic, a charter, a real-estate agency or an online store. We pick you up wherever you are — analyze, lay the foundations and drive on. Three services that build on each other, and you can take any of them on its own.',
    trio: [
      {
        num: '01',
        name: 'SEO Strategy & Audit',
        price: 'from €1,000',
        tagline: 'The starting point of any serious SEO.',
        desc: 'A deep analysis of your business, competitors and market, plus a concrete strategy with clear priorities. Take it standalone or as the first phase of Foundations.',
        bullets: [
          'Technical, content and backlink analysis',
          'Competitor and market analysis',
          'Strategy with clear priorities',
        ],
      },
      {
        num: '02',
        name: 'SEO LICK Foundations',
        price: 'from €4,000 / project',
        tagline: 'We lay the foundations Google loves.',
        desc: 'A project that sets up your SEO foundations — architecture, technical, design and content. Includes the Strategy & Audit from the first stop.',
        bullets: [
          'Architecture adapted to your keywords',
          'Technical SEO and on-page optimization',
          'Design and tracking that sell',
          'Includes Strategy & Audit',
        ],
      },
      {
        num: '03',
        name: 'SEO Retainer',
        price: 'from €2,200 / mo',
        tagline: 'A long-term partnership after the foundations.',
        desc: 'Once the foundations are set, we take over continuous growth. A dedicated team works the L.I.C.K. pillars month over month — three tiers depending on your pace.',
        bullets: [
          'Dedicated team (PM + SEO specialists)',
          'Work across the L.I.C.K. pillars',
          'Regular sync calls and reports',
        ],
      },
    ],
    pathNote:
      'Audit → Foundations → Retainer. The Audit is also the first phase of Foundations, and the Retainer starts once the foundations are in place. You can take any service on its own.',
    tiers: {
      bridge: 'The third stop — the Retainer — comes in three tiers. Pick your pace of growth.',
      eyebrow: 'SEO Retainer',
      title: 'Three tiers for long-term growth',
      subtitle: 'Capacity and a team that grow with you.',
      featuredLabel: 'Recommended',
      perMonth: '/ mo',
      note: '6-month contract: −10%. 12-month: −20%. No lock-in on month-to-month.',
      cta: 'Request a quote',
      plans: [
        { name: 'START', capacity: '40 h / mo', price: '€2,200', team: 'PM + 1 SEO specialist', featured: false },
        { name: 'GROWTH', capacity: '80 h / mo', price: '€4,000', team: 'PM + SEO Lead + 2–3 specialists + biweekly sync', featured: true },
        { name: 'SCALE', capacity: '120 h / mo', price: '€5,400', team: 'PM + SEO Lead + 3–5 specialists + weekly sync', featured: false },
      ],
    },
    width: {
      eyebrow: 'Related services',
      title: 'Services that build on your SEO',
      subtitle: 'Take them standalone or alongside SEO — priced by scope.',
      items: [
        { name: 'Web Redesign & Migration', desc: 'A new site or migration without losing SEO equity.', price: 'by scope' },
        { name: 'Google Ads', desc: 'Paid traffic with or without SEO.', price: 'from €400 / mo + 10%' },
        { name: 'Tracking & Analytics', desc: 'GA4, GTM and conversion tracking.', price: 'custom' },
      ],
    },
    cta: 'Request a quote',
    formTitle: 'Request your L.I.C.K. start today',
    formSub: 'Your competition isn’t waiting — neither should you.',
  },
} satisfies Record<Lang, unknown>;
