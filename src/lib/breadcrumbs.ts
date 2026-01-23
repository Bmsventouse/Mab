import { company } from '../content/company';

interface BreadcrumbItemInput {
  name: string;
  path: string;
}

/**
 * Build a JSON-LD BreadcrumbList object for a given list of crumbs.
 * Paths should be absolutes from the site root (e.g. "/solutions/...").
 */
export function buildBreadcrumbJsonLd(items: BreadcrumbItemInput[]) {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';
  const normalizedBase = baseUrl.replace(/\/$/, '');

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${normalizedBase}${item.path}`,
    })),
  };
}