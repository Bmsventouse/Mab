import type { MetadataRoute } from 'next';
import { company } from '../content/company';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';

  const routes = [
    '',
    '/prestations',
    '/secteurs',
    '/a-propos',
    '/contact',
    '/securite-privee-paris',
    '/securite-privee-marseille',
    '/securite-privee-montpellier',
    '/securite-privee-nimes',
    '/gardiennage-chantiers-btp-paris',
    '/mentions-legales',
    '/politique-de-confidentialite',
  ];

  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${baseUrl.replace(/\/$/, '')}${path || '/'}`,
    lastModified,
  }));
}