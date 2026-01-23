import { NextResponse } from 'next/server';
import { company, services, sectors, engagements } from '../../content/company';

export const dynamic = 'force-static';

/**
 * Endpoint machine-readable pour les IA et intégrations externes.
 * Donne une vue structurée de l'offre MAB SECURITE.
 */
export async function GET() {
  const payload = {
    version: '1.0',
    language: 'fr',
    business: {
      name: company.name,
      legalName: company.legalName,
      legalForm: company.legalForm,
      nafApe: company.nafApe,
      siren: company.siren,
      siret: company.siret,
      vatNumber: company.vatNumber,
      shareCapital: company.shareCapital,
      creationDate: company.creationDate,
      address: company.address,
      description: company.description,
      shortDescription: company.shortDescription,
      areaServed: company.areaServed,
    },
    contact: {
      phone: company.contact.phone,
      email: company.contact.email,
      websiteUrl: company.contact.websiteUrl,
    },
    services: services.map((service) => ({
      slug: service.slug,
      name: service.name,
      shortDescription: service.shortDescription,
      description: service.description,
      highlights: service.highlights,
    })),
    sectors: sectors.map((sector) => ({
      slug: sector.slug,
      name: sector.name,
      shortDescription: sector.shortDescription,
      description: sector.description,
      examples: sector.examples,
    })),
    engagements: engagements.map((engagement) => ({
      title: engagement.title,
      description: engagement.description,
    })),
    source: 'MAB SECURITE website content (Next.js app)',
    updatedAt: new Date().toISOString(),
  };

  return NextResponse.json(payload, {
    headers: {
      'Cache-Control': 'public, max-age=3600',
    },
  });
}