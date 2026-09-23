// Bộ tạo JSON-LD (TouristAttraction + FAQPage + WebSite/WebPage/BreadcrumbList).
import type { Locale } from '../i18n';
import {
  GEO,
  MAPS_URL,
  ADDRESS,
  RATING,
  OPENING_HOURS,
  SAME_AS,
  IMAGES,
  ATTRACTION_NAME,
  ATTRACTION_ALT,
} from '../data/site';
import { home } from '../content/home';

export function buildAttraction(locale: Locale, siteUrl: string) {
  const url = siteUrl || '';
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LocalBusiness'],
    '@id': url + '#attraction',
    name: ATTRACTION_NAME[locale],
    alternateName: ATTRACTION_ALT[locale],
    description: home[locale].attractionDescription,
    url,
    image: [url + IMAGES.hero, url + IMAGES.night, url + IMAGES.portal],
    hasMap: MAPS_URL,
    address: { '@type': 'PostalAddress', ...ADDRESS },
    geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lon },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: RATING.ratingValue, reviewCount: RATING.reviewCount },
    openingHoursSpecification: OPENING_HOURS.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    isAccessibleForFree: false,
    touristType: ['Historic Bridge', 'Cultural Landmark', 'UNESCO World Heritage Site'],
    sameAs: SAME_AS,
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
  const url = siteUrl || '';
  const crumbs = home[locale].breadcrumb;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': url + '#website',
        url,
        name: ATTRACTION_NAME[locale],
        inLanguage: locale,
      },
      {
        '@type': 'WebPage',
        '@id': url + '#webpage',
        url,
        inLanguage: locale,
        isPartOf: { '@id': url + '#website' },
        datePublished: '2026-08-01',
        dateModified: '2026-09-01',
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
