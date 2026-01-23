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
    '/solutions',
    '/solutions/securite-incendie/agent-ssiap-igh-paris',
    '/solutions/securite-electronique/videosurveillance-entreprise-paris',
    '/solutions/expertise-conseil/audit-surete-siege-social-paris',
    '/solutions/securite-humaine/gardiennage-ile-de-france',
    '/solutions/securite-humaine/securite-entrepots-logistiques',
    '/solutions/securite-humaine/securite-centres-commerciaux',
    '/solutions/securite-humaine/agent-securite-marseille',
    '/solutions/securite-humaine/agent-securite-montpellier',
    '/solutions/securite-humaine/agent-securite-nice',
    '/solutions/securite-evenementielle/securite-evenementielle-cannes',
    '/guides',
    '/guides/securiser-chantier-btp-nuit',
    '/guides/preparer-audit-surete-siege-social',
    '/mentions-legales',
    '/politique-de-confidentialite',
  ];

  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${baseUrl.replace(/\/$/, '')}${path || '/'}`,
    lastModified,
  }));
}