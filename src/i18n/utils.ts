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

// Given the current URL, return the equivalent path in the other locale.
export function getAlternatePath(url: URL, target: Lang): string {
  let path = url.pathname;
  if (path.startsWith('/en')) path = path.slice(3) || '/';
  return localizePath(path, target);
}
