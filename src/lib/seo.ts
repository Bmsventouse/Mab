import type { Metadata } from 'next';
import { company } from '../content/company';

interface SeoParams {
  title: string;
  description: string;
  canonicalPath?: string;
}

/**
 * Build a Next.js Metadata object with sensible defaults for MAB SECURITE.
 * Can be used from any page file:
 *
 * export const metadata = buildMetadata({ ... });
 */
export function buildMetadata({ title, description, canonicalPath }: SeoParams): Metadata {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';
  const url = canonicalPath ? `${baseUrl.replace(/\/$/, '')}${canonicalPath}` : baseUrl;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      locale: 'fr_FR',
      type: 'website',
    },
  };
}