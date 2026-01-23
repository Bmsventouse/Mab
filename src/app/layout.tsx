import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '../components/organisms/SiteHeader';
import { SiteFooter } from '../components/organisms/SiteFooter';
import { ConsentProvider } from '../components/layout/ConsentProvider';
import { company } from '../content/company';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = company.contact.websiteUrl;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: `${company.name} – Sécurité privée & gardiennage BTP`,
    template: `%s | ${company.name}`,
  },
  description: company.shortDescription,
  openGraph: {
    title: `${company.name} – Sécurité privée & gardiennage BTP`,
    description: company.shortDescription,
    url: siteUrl || undefined,
    siteName: company.name,
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'SecurityService'],
    name: company.name,
    legalName: company.legalName,
    description: company.description,
    url: siteUrl || undefined,
    telephone: company.contact.phone.value,
    email: company.contact.email,
    vatID: company.vatNumber,
    foundingDate: company.creationDate,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.line2
        ? `${company.address.line1}, ${company.address.line2}`
        : company.address.line1,
      postalCode: company.address.postalCode,
      addressLocality: company.address.city,
      addressCountry: company.address.country,
    },
    areaServed: company.areaServed,
    identifier: [
      {
        '@type': 'PropertyValue',
        propertyID: 'SIREN',
        value: company.siren,
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'SIRET',
        value: company.siret,
      },
    ],
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          // JSON-LD pour les moteurs de recherche
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} bg-slate-950 text-slate-50 antialiased`}
      >
        <ConsentProvider>
          <a href="#contenu-principal" className="skip-link">
            Aller au contenu principal
          </a>
          <SiteHeader />
          <main id="contenu-principal" className="pt-16 md:pt-20">
            {children}
          </main>
          <SiteFooter />
        </ConsentProvider>
      </body>
    </html>
  );
}