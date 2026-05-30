import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'en') return 'en';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['hr']): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

// Build a locale-aware path. HR is unprefixed, EN is under /en/.
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') return clean === '/' ? '/en/' : `/en${clean}`;
  return clean;
}

// Strip the /en locale prefix to get the canonical (HR) path for matching.
export function stripLocale(url: URL): string {
  const path = url.pathname;
  if (path.startsWith('/en')) return path.slice(3) || '/';
  return path;
}

// Given the current URL, return the equivalent path in the other locale.
export function getAlternatePath(url: URL, target: Lang): string {
  return localizePath(stripLocale(url), target);
}

// The v2 test track: a parallel set of pages (v2, usluge-v2, lick-v2) used to
// trial wider positioning behind noindex. Navigation must stay inside the
// track, so shared components branch on this. Single source of truth — do not
// re-implement the regex inline.
export function isV2Track(url: URL): boolean {
  return /^\/(v2|usluge-v2|lick-v2)\/?$/.test(stripLocale(url));
}
