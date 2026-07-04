import type { Lang } from '../i18n/ui';

// Canonical broad-ICP home content (Second Brain wiki is the source of truth).
// Positioning: brands that live on inquiries and bookings — clinics, charters,
// real estate. The LICK letter-reveal hero carries the top of the page; this
// content drives every section below it.
export const homeContent = {
  hr: {
    intro: {
      eyebrow: 'Strateška SEO agencija',
      text: 'Radimo s brendovima koji žive od upita i rezervacija.\nPoliklinike, charteri, agencije za nekretnine, webshopovi.\n\nL.I.C.K. framework pretvara Google i AI pretrage u stalan priljev upita, koji dolaze i kad ugasite oglase.',
      cta: 'Zatraži FIRST LICK',
    },
    problem: {
      eyebrow: 'Problem',
      title: 'Ako se prepoznate u ijednoj od ovih tvrdnji — treba vam L.I.C.K.',
      items: [
        'Vaš biznis je obiteljska tajna koju tržište još nije otkrilo.',
        'Konkurencija trči maraton, dok vi još učite vezati tenisice.',
        'Plaćate oglase iz mjeseca u mjesec — SEO je nekretnina, oglasi su najam, a vi i dalje samo plaćate najam.',
      ],
      close: 'Svi ovi problemi imaju isti rezultat:\nKupci pronalaze vašu konkurenciju prije vas. SEO LICK to mijenja.',
    },
    framework: {
      eyebrow: 'Framework',
      title: 'Četiri stupa. Jedan sustav. Bez prečaca.',
      intro: 'Većina SEO agencija radi taktike. Mi radimo sustav. L.I.C.K. pokriva svaku dimenziju organskog rasta — u točno onom redoslijedu koji funkcionira.',
      pillars: [
        {
          letter: 'L',
          name: 'Linkovi i autoritet',
          lead: 'Web glasuje za vas. Mi osiguravamo da pobjeđujete.',
          desc: 'Digital PR, izgradnja linkova i strategija backlink profila. U Googleovom svijetu, linkovi su povjerenje — a povjerenje je pozicija.',
          includes: ['Digital PR', 'Link outreach', 'Audit backlinkova', 'Anchor strategija'],
        },
        {
          letter: 'I',
          name: 'Infrastruktura',
          lead: 'Nevidljivo ljudima. Jasno Googleu.',
          desc: 'Tehnički SEO, arhitektura stranice, crawlabilnost. Prije nego što rangirate, Google vas mora razumjeti — u potpunosti.',
          includes: ['Tehnički audit', 'Core Web Vitals', 'Arhitektura stranice', 'Crawl optimizacija'],
        },
        {
          letter: 'C',
          name: 'Sadržaj',
          lead: 'Prave riječi. Prava stranica. Pravi trenutak.',
          desc: 'Landing stranice, blog sadržaj, CRO copy. Sadržaj koji rangira odgovara točno na ono što vaš kupac traži.',
          includes: ['Sadržaj mapiran na KW', 'Landing stranice', 'CRO copywriting', 'Blog strategija'],
        },
        {
          letter: 'K',
          name: 'Ključne riječi',
          lead: 'Znajte što kupci traže — prije nego što znaju da vas trebaju.',
          desc: 'Istraživanje, mapiranje namjere, konkurentska analiza. Ključne riječi su temelj — sve ostalo gradi se na tome.',
          includes: ['Istraživanje KR', 'Mapiranje namjere', 'Gap analiza', 'KW-to-page mapiranje'],
        },
      ],
      hint: '↑ Prijeđite mišem (ili dodirnite) preko slova za detalje svakog stupa.',
      cta: 'Saznaj kako L.I.C.K. funkcionira',
    },
    servicesTeaser: {
      eyebrow: 'Usluge',
      title: 'Tri usluge, jedan put do tržišta',
      intro: 'Od strategije do dugoročnog rasta. Tri usluge koje se nadovezuju jedna na drugu, a svaku možete uzeti i zasebno.',
      items: [
        { num: '01', name: 'Strategija & Audit', price: 'od 1.000 €', desc: 'Dubinska analiza i konkretna strategija s jasnim prioritetima.' },
        { num: '02', name: 'SEO LICK Foundations', price: 'od 4.000 €', desc: 'Projektno postavljanje SEO temelja — arhitektura, tehnika, sadržaj.' },
        { num: '03', name: 'SEO Retainer', price: 'od 2.200 € / mj', desc: 'Dedicirani tim koji radi po L.I.C.K. pilarima iz mjeseca u mjesec.' },
      ],
      cta: 'Pogledaj sve usluge',
    },
    guides: {
      eyebrow: 'Tko su vodiči?',
      title: 'Iza L.I.C.K. strategije ne stoje algoritmi, već ljudi.',
      body: 'Pozdrav, mi smo Marko i Ivan. Dva prijatelja s jednom vizijom — graditi SEO koji ima smisla i donosi stvarne poslovne rezultate.',
      body2: 'Iza nas je dugogodišnje iskustvo u digitalnom marketingu i brojni projekti za klijente iz različitih industrija — yacht charter, privatna medicina, nekretnine, moda, rasvjeta, turizam.',
      body3: 'Naučili smo da dobar SEO počinje razumijevanjem ljudi i da najbolji rezultati ne dolaze kroz buku, već kroz strpljiv, strateški i timski rad.',
      people: [
        { name: 'Marko', role: 'Suosnivač · SEO strateg' },
        { name: 'Ivan', role: 'Suosnivač · SEO strateg' },
      ],
    },
    testimonial: {
      eyebrow: 'Riječ klijenta',
      // Verbatim excerpt from a public LinkedIn recommendation. Name-safe by
      // default (Ivan adds the real name later). Real: Tarik Gvožđar, Founder @
      // Alpha Air Ambulance, May 2024.
      quote:
        'Ivan’s expertise in search engine optimization is truly exceptional. He not only improved our website’s ranking on major search engines but also significantly increased our organic traffic, leading to a noticeable boost in our overall online presence.',
      author: 'Osnivač',
      role: 'Tvrtka za hitni zračni medicinski prijevoz',
      source: 'Provjerena LinkedIn preporuka',
    },
    finalCta: {
      title: 'Spremni da vaš biznis izađe iz sjene? Mi jesmo.',
      sub: 'Pomoću L.I.C.K. frameworka pretvaramo pretragu u stalan priljev upita.',
      cta: 'Zatraži FIRST LICK',
    },
    faqTitle: 'Često postavljana pitanja',
    faq: [
      { q: 'Kolika je cijena vaših SEO usluga?', a: 'Cijena ovisi o usluzi i složenosti vašeg projekta. Nakon kratkih konzultacija dajemo jasnu ponudu prilagođenu vašim ciljevima i budžetu.' },
      { q: 'U kojem roku mogu očekivati prve rezultate?', a: 'SEO je dugoročna investicija. Prve pomake obično vidimo od 2 mjeseca, ovisno o startnoj poziciji, konkurenciji i opsegu rada.' },
      { q: 'Radite li s malim i novim biznisima?', a: 'Da. Upravo novim biznisima dobro postavljeni SEO temelji štede mjesece lutanja i odmah ih usmjeravaju prema pravom tržištu.' },
      { q: 'Za kakve biznise radite SEO?', a: 'Najbolje rezultate vidimo kod brendova koji žive od upita i rezervacija — privatne klinike, charter, agencije za nekretnine, suplementi, webshopovi s višom vrijednošću košarice. Strategiju gradimo na podacima i prilagođavamo je vašoj industriji.' },
      { q: 'Koje alate koristite u svom radu?', a: 'Koristimo industrijske standarde za istraživanje ključnih riječi, tehničke audite i praćenje rezultata (npr. Ahrefs, Google Search Console, GA4 i druge).' },
      { q: 'Radite li tehnički SEO i optimizaciju brzine stranice?', a: 'Da. Tehnička ispravnost i brzina dio su infrastrukture (I) u L.I.C.K. frameworku i temelj su svakog uspješnog projekta.' },
      { q: 'Pomažete li u izradi i optimizaciji SEO sadržaja?', a: 'Da. Pišemo SEO tekstove, blogove i landing stranice koje pomažu kupcima u odluci i grade autoritet vašeg brenda.' },
      { q: 'Kako mjerite uspješnost SEO aktivnosti?', a: 'Pratimo organski promet, pozicije ključnih riječi, konverzije i prihod — i redovito izvještavamo o stvarnim poslovnim pokazateljima.' },
      { q: 'Koliko često mogu dobiti izvješće o rezultatima?', a: 'Kod retainer usluge isporučujemo redovita mjesečna izvješća, a dinamiku prilagođavamo vašim potrebama.' },
      { q: 'Nudite li SEO edukacije ili konzultacije za samostalno održavanje?', a: 'Da. Nudimo konzultacije i edukacije za timove koji žele dio SEO aktivnosti voditi samostalno.' },
    ],
  },
  en: {
    intro: {
      eyebrow: 'Strategic SEO agency',
      text: 'We work with brands that live on inquiries and bookings.\nPolyclinics, charters, real-estate agencies, online stores.\n\nThe L.I.C.K. framework turns Google and AI search into a steady stream of inquiries — ones that keep coming even when you switch off the ads.',
      cta: 'Get your FIRST LICK',
    },
    problem: {
      eyebrow: 'The problem',
      title: 'If you recognize yourself in any of these — you need L.I.C.K.',
      items: [
        'Your business is a family secret the market hasn’t discovered yet.',
        'It feels like competitors are running a marathon while you’re still learning to tie your shoes.',
        'You pay for ads month after month — SEO is the property you own, ads are the rent, and you’re still only paying rent.',
      ],
      close: 'All of these problems share the same result:\nCustomers find your competitors before they find you. SEO LICK changes that.',
    },
    framework: {
      eyebrow: 'Framework',
      title: 'Four pillars. One system. No shortcuts.',
      intro: 'Most SEO agencies run tactics. We run a system. L.I.C.K. covers every dimension of organic growth — in the exact order that works.',
      pillars: [
        {
          letter: 'L',
          name: 'Links & Authority',
          lead: 'The web votes for you. We make sure you’re winning.',
          desc: 'Digital PR, link building and backlink strategy. In Google’s world, links are trust — and trust is position.',
          includes: ['Digital PR', 'Link outreach', 'Backlink audit', 'Anchor strategy'],
        },
        {
          letter: 'I',
          name: 'Infrastructure',
          lead: 'Invisible to humans. Unmissable to Google.',
          desc: 'Technical SEO, site architecture, crawlability. Before you rank, Google needs to understand you — fully.',
          includes: ['Technical audit', 'Core Web Vitals', 'Site architecture', 'Crawl optimization'],
        },
        {
          letter: 'C',
          name: 'Content',
          lead: 'The right words. The right page. The right moment.',
          desc: 'Landing pages, blog content, CRO copy. Content that ranks answers exactly what your customer is looking for.',
          includes: ['Keyword-mapped pages', 'Landing pages', 'CRO copywriting', 'Blog strategy'],
        },
        {
          letter: 'K',
          name: 'Keywords',
          lead: 'Know what customers search before they know they need you.',
          desc: 'Research, intent mapping, competitive analysis. Keywords are the foundation — everything else builds on this.',
          includes: ['Keyword research', 'Intent mapping', 'Gap analysis', 'KW-to-page mapping'],
        },
      ],
      hint: '↑ Hover (or tap) a letter for each pillar’s details.',
      cta: 'See how L.I.C.K. works',
    },
    servicesTeaser: {
      eyebrow: 'Services',
      title: 'Three services, one road to your market',
      intro: 'From strategy to long-term growth. Three services that build on each other — take any of them on its own.',
      items: [
        { num: '01', name: 'Strategy & Audit', price: 'from €1,000', desc: 'A deep analysis and a concrete strategy with clear priorities.' },
        { num: '02', name: 'SEO LICK Foundations', price: 'from €4,000', desc: 'A project that sets up your SEO foundations — architecture, technical, content.' },
        { num: '03', name: 'SEO Retainer', price: 'from €2,200 / mo', desc: 'A dedicated team working the L.I.C.K. pillars month over month.' },
      ],
      cta: 'See all services',
    },
    guides: {
      eyebrow: 'Who are the guides?',
      title: 'Behind the L.I.C.K. strategy are people, not algorithms.',
      body: 'Hi, we’re Marko and Ivan. Two friends with one vision — to build SEO that makes sense and delivers real business results.',
      body2: 'Behind us are years of digital marketing experience and projects across many industries — yacht charter, private medicine, real estate, fashion, lighting, tourism.',
      body3: 'We learned that good SEO starts with understanding people, and that the best results come not from noise but from patient, strategic teamwork.',
      people: [
        { name: 'Marko', role: 'Co-founder · SEO strategist' },
        { name: 'Ivan', role: 'Co-founder · SEO strategist' },
      ],
    },
    testimonial: {
      eyebrow: 'Client word',
      quote:
        'Ivan’s expertise in search engine optimization is truly exceptional. He not only improved our website’s ranking on major search engines but also significantly increased our organic traffic, leading to a noticeable boost in our overall online presence.',
      author: 'Founder',
      role: 'Emergency air-ambulance company',
      source: 'Verified LinkedIn recommendation',
    },
    finalCta: {
      title: 'Ready for your business to step out of the shadows? We are.',
      sub: 'With the L.I.C.K. framework we turn search into a steady stream of inquiries.',
      cta: 'Get your FIRST LICK',
    },
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'How much do your SEO services cost?', a: 'Pricing depends on the service and the complexity of your project. After a short consultation we provide a clear quote tailored to your goals and budget.' },
      { q: 'When can I expect the first results?', a: 'SEO is a long-term investment. We usually see the first movements from 2 months onward, depending on your starting position, competition and scope of work.' },
      { q: 'Do you work with small and new businesses?', a: 'Yes. For new businesses especially, well-set SEO foundations save months of wandering and point them at the right market right away.' },
      { q: 'What kind of businesses do you do SEO for?', a: 'We see the best results for brands that live on inquiries and bookings — private clinics, charter, real-estate agencies, supplements, higher-basket online stores. We build the strategy on data and tailor it to your industry.' },
      { q: 'What tools do you use?', a: 'We use industry standards for keyword research, technical audits and tracking (e.g. Ahrefs, Google Search Console, GA4 and others).' },
      { q: 'Do you do technical SEO and page speed optimization?', a: 'Yes. Technical health and speed are part of infrastructure (I) in the L.I.C.K. framework and the foundation of every successful project.' },
      { q: 'Do you help create and optimize SEO content?', a: 'Yes. We write SEO copy, blogs and landing pages that help buyers decide and build your brand’s authority.' },
      { q: 'How do you measure SEO success?', a: 'We track organic traffic, keyword positions, conversions and revenue — and report regularly on real business metrics.' },
      { q: 'How often can I get a results report?', a: 'With the retainer service we deliver regular monthly reports, and adjust the cadence to your needs.' },
      { q: 'Do you offer SEO training or consulting for self-management?', a: 'Yes. We offer consulting and training for teams that want to run part of their SEO activities independently.' },
    ],
  },
} satisfies Record<Lang, unknown>;

export type HomeContent = (typeof homeContent)['hr'];
