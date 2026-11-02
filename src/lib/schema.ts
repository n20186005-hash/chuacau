// Bộ tạo JSON-LD (TouristAttraction + FAQPage + WebSite/WebPage/BreadcrumbList).
import type { Locale } from '../i18n';
import {
  GEO,
  MAPS_URL,
  ADDRESS,
  IMAGES,
  ATTRACTION_NAME,
  ATTRACTION_ALT,
  LAST_CONTENT_REVIEWED,
} from '../data/site';
import { htmlLang, localizedPath } from '../i18n';
import { home } from '../content/home';

export function buildAttraction(locale: Locale, siteUrl: string) {
  const url = (siteUrl || '').replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Place'],
    '@id': url + '#attraction',
    name: ATTRACTION_NAME[locale],
    alternateName: ATTRACTION_ALT[locale],
    description: home[locale].attractionDescription,
    url,
    image: [url + IMAGES.hero, url + IMAGES.night, url + IMAGES.portal],
    hasMap: MAPS_URL,
    address: { '@type': 'PostalAddress', streetAddress: ADDRESS.street, addressLocality: ADDRESS.locality, addressRegion: ADDRESS.region, postalCode: ADDRESS.postalCode, addressCountry: ADDRESS.country },
    geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lon },

  };
}

export function buildFaq(locale: Locale, siteUrl: string) {
  const pairs = home[locale].faq.pairs;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pairs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function buildGraph(locale: Locale, siteUrl: string) {
  const url = (siteUrl || '').replace(/\/$/, '');
  const pageUrl = new URL(localizedPath('home', locale), url).href;
  const crumbs = [{ name: home[locale].hero.h1a, url: pageUrl }];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': url + '#website',
        url,
        name: ATTRACTION_NAME[locale],
        inLanguage: htmlLang[locale],
      },
      {
        '@type': 'WebPage',
        '@id': pageUrl + '#webpage',
        url: pageUrl,
        inLanguage: htmlLang[locale],
        isPartOf: { '@id': url + '#website' },
        dateModified: LAST_CONTENT_REVIEWED,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: c.name,
          item: c.url === 'HOME' ? url : c.url,
        })),
      },
    ],
  };
}

export function buildAll(locale: Locale, siteUrl: string) {
  return [buildAttraction(locale, siteUrl), buildGraph(locale, siteUrl), buildFaq(locale, siteUrl)];
}
