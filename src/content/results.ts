import type { Lang } from '../i18n/ui';

// Honest, name-safe case studies. Every number is traceable to the Second Brain
// proof sheet: Wiki/decisions/client-results-proof.md (Ahrefs, 2026-06-26),
// except the Alpha Air lead count, which is Ivan's own client-reporting figure
// (dictated 2026-07-03). Client names are withheld on purpose — Ivan adds
// specific names later via the `name` slot (null = anonymized).
// Do NOT add the retired "100+ keywords" LED claim or any unverified number.
// `icon` keys map to the pictogram set in HomeSections.astro.
export const resultsContent = {
  hr: {
    eyebrow: 'Rezultati',
    title: 'Brojke iz stvarnih projekata',
    intro: 'Anonimizirano na zahtjev klijenata — nazivi dostupni na upit. Brojke su procjene organskog prometa (Ahrefs), ne uljepšane.',
    counters: [
      { number: '5', suffix: '+', label: 'godina iskustva' },
      { number: '10', suffix: '+', label: 'branši' },
      { number: '30', suffix: '+', label: 'projekata' },
    ],
    cases: [
      {
        name: null,
        icon: 'sail',
        industry: 'Yacht charter',
        challenge: 'Nova domena, gotovo bez organske vidljivosti.',
        solution: 'Strukturni i programatski SEO, arhitektura, audit.',
        result: '0 → 2.187 / mj',
        resultSub: 'rast organskog prometa u 10 mjeseci',
      },
      {
        name: null,
        icon: 'shirt',
        industry: 'Fashion e-commerce',
        challenge: 'Zadržati autoritet i organski promet uz rast.',
        solution: 'Email automatizacija i off-page SEO.',
        result: '12–16k / mj',
        resultSub: 'organskih posjeta, održano uz rast autoriteta',
      },
      {
        name: null,
        icon: 'terrain',
        industry: 'Quad e-commerce',
        challenge: 'Slaba vidljivost u komercijalnim kategorijama.',
        solution: 'SEO, Google Ads i tracking.',
        result: '+315%',
        resultSub: 'rast mjesečnog organskog prometa',
      },
      {
        name: null,
        icon: 'anchor',
        industry: 'Najam plovila',
        challenge: 'Sezonski vrhunci ovisni o plaćenim oglasima.',
        solution: 'Lokalni SEO i OTA profili.',
        result: '201 → 1.613 / mj',
        resultSub: 'rast organskih posjeta, bez ulaganja u oglase',
      },
      {
        name: null,
        icon: 'cross',
        industry: 'Poliklinika',
        challenge: 'Migracija weba bez gubitka pozicija.',
        solution: 'SEO-sigurna migracija i tehnički SEO.',
        result: '370–460 / mj',
        resultSub: 'pozicije očuvane nakon migracije weba',
      },
      {
        name: null,
        icon: 'plane',
        industry: 'Hitni zračni prijevoz',
        challenge: 'Globalna niša — pacijenti traže po destinacijama.',
        solution: 'Programatske odredišne stranice i Google Ads.',
        result: '50+ high-ticket leadova',
        resultSub: 'kroz Google Ads i programatski SEO',
      },
    ],
    priorTitle: 'Iz ranijeg iskustva tima',
    priorNote: 'Rezultati koje su osnivači ostvarili prije SEO LICK-a — samoprijavljeno.',
    prior: [
      { industry: 'Yacht charter', result: '2× prodaja / 12 mj' },
      { industry: 'Estetska klinika', result: '1.500 → 10.000+ / mj (+500%)' },
      { industry: 'Kamp', result: '3× organski u sezoni · +100% online prodaja' },
    ],
    disclaimer: 'Procjene organskog prometa (Ahrefs, 2026). Nazivi klijenata i detaljni izvještaji dostupni na upit.',
  },
  en: {
    eyebrow: 'Results',
    title: 'Numbers from real projects',
    intro: 'Anonymized at clients’ request — names available on request. Figures are organic-traffic estimates (Ahrefs), not inflated.',
    counters: [
      { number: '5', suffix: '+', label: 'years of experience' },
      { number: '10', suffix: '+', label: 'industries' },
      { number: '30', suffix: '+', label: 'projects' },
    ],
    cases: [
      {
        name: null,
        icon: 'sail',
        industry: 'Yacht charter',
        challenge: 'New domain with almost no organic visibility.',
        solution: 'Structural and programmatic SEO, architecture, audit.',
        result: '0 → 2,187 / mo',
        resultSub: 'organic traffic growth in 10 months',
      },
      {
        name: null,
        icon: 'shirt',
        industry: 'Fashion e-commerce',
        challenge: 'Hold authority and organic traffic while growing.',
        solution: 'Email automation and off-page SEO.',
        result: '12–16k / mo',
        resultSub: 'organic visits, sustained while authority grew',
      },
      {
        name: null,
        icon: 'terrain',
        industry: 'Quad e-commerce',
        challenge: 'Weak visibility across commercial categories.',
        solution: 'SEO, Google Ads and tracking.',
        result: '+315%',
        resultSub: 'growth in monthly organic traffic',
      },
      {
        name: null,
        icon: 'anchor',
        industry: 'Boat rental',
        challenge: 'Seasonal peaks dependent on paid ads.',
        solution: 'Local SEO and OTA profiles.',
        result: '201 → 1,613 / mo',
        resultSub: 'organic growth, zero ad spend',
      },
      {
        name: null,
        icon: 'cross',
        industry: 'Polyclinic',
        challenge: 'Website migration without losing rankings.',
        solution: 'SEO-safe migration and technical SEO.',
        result: '370–460 / mo',
        resultSub: 'rankings preserved after the website migration',
      },
      {
        name: null,
        icon: 'plane',
        industry: 'Air ambulance',
        challenge: 'A global niche — patients search by destination.',
        solution: 'Programmatic destination pages and Google Ads.',
        result: '50+ high-ticket leads',
        resultSub: 'through Google Ads and programmatic SEO',
      },
    ],
    priorTitle: 'From the team’s earlier track record',
    priorNote: 'Results the founders delivered before SEO LICK — self-reported.',
    prior: [
      { industry: 'Yacht charter', result: 'sales 2× / 12 mo' },
      { industry: 'Aesthetic clinic', result: '1,500 → 10,000+ / mo (+500%)' },
      { industry: 'Campsite', result: '3× organic in season · +100% online sales' },
    ],
    disclaimer: 'Organic-traffic estimates (Ahrefs, 2026). Client names and detailed reports available on request.',
  },
} satisfies Record<Lang, unknown>;

export type ResultsContent = (typeof resultsContent)['hr'];
