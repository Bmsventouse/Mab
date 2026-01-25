import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company, services } from '../../content/company';
import { AgencyPageTemplate } from '../../components/templates/AgencyPageTemplate';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Sécurité BTP à Nîmes – Gardiennage de chantiers & sites commerciaux',
  description:
    "MAB SECURITE, agence de sécurité privée basée à Nîmes, est spécialisée dans le gardiennage de chantiers BTP, la surveillance de sites commerciaux et la sécurité d’événements dans le Gard (30) : rondes, levées de doute et sécurisation de périmètres.",
  canonicalPath: '/securite-privee-nimes',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  {
    name: 'Sécurité privée à Nîmes',
    path: '/securite-privee-nimes',
  },
]);

function getNimesLocalBusinessJsonLd() {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${company.name} Nîmes`,
    description:
      'Services de sécurité privée, gardiennage de chantiers BTP, sécurité de sites commerciaux et sécurité événementielle à Nîmes et dans le Gard (30).',
    url: `${baseUrl.replace(/\/$/, '')}/securite-privee-nimes`,
    telephone: company.contact.phone.value,
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        company.address.line1 +
        (company.address.line2 ? `, ${company.address.line2}` : ''),
      addressLocality: 'Nîmes',
      postalCode: '30000',
      addressCountry: 'FR',
    },
    openingHours: 'Mo-Su 00:00-23:59',
    areaServed: 'Nîmes et Gard (30)',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de Sécurité',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Gardiennage de chantier' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Sécurité Incendie SSIAP' },
        },
      ],
    },
  };
}

export default function SecuritePriveeNimesPage() {
  const keyServices = services;

  const structuredData = [getNimesLocalBusinessJsonLd(), breadcrumbJsonLd];

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD combiné : LocalBusiness Nîmes + fil d'Ariane (BreadcrumbList)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Breadcrumbs
        items={[
          { href: '/', label: 'Accueil' },
          { href: '/securite-privee-nimes', label: 'Sécurité privée à Nîmes' },
        ]}
      />
      <AgencyPageTemplate
        h1="Agence de sécurité privée à Nîmes et dans le Gard (30)"
        badge="Nîmes · Gard (30)"
        intro={`Basée à Nîmes, ${company.name} accompagne les entreprises locales, les collectivités et les organisateurs d'événements dans la protection de leurs chantiers, sites commerciaux, bâtiments et publics. Notre connaissance du territoire gardois et de ses spécificités est un atout pour construire des dispositifs de sécurité utiles, proportionnés et opérationnels.`}
        zoneLabel="France Sud – Nîmes, Gard & côte méditerranéenne"
        responsable="Sofiane"
        zonePhoneLabel={
          <>
            <p>
              Téléphone direct zone Sud&nbsp;:{' '}
              <a href="tel:+33759585023" className="hover:text-emerald-300">
                +33 7 59 58 50 23
              </a>{' '}
              (Sofiane – Nîmes, Gard, côte méditerranéenne).
            </p>
            <p className="mt-2 text-xs text-muted">
              Pour toute première demande, vous pouvez utiliser le numéro principal mentionné
              sur le site ou le formulaire de contact.
            </p>
          </>
        }
        situationsAside={
          <ul className="space-y-2">
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
              <span>Surveillance de chantiers BTP et opérations immobilières</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
              <span>Gardiennage de sites commerciaux et zones artisanales</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
              <span>Rondes de sûreté sur sites fermés et levées de doute</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
              <span>Dispositifs pour événements locaux et manifestations</span>
            </li>
          </ul>
        }
      >
      <section className="space-y-4 text-sm text-slate-300">
        <h2 className="text-base font-semibold text-slate-50">
          Sécurité privée de proximité à Nîmes et alentours
        </h2>
        <p>
          Nous intervenons sur des chantiers, des sites commerciaux, des zones
          artisanales, des établissements recevant du public et des événements locaux.
          Les missions peuvent concerner la surveillance de nuit, les rondes de
          sûreté, l&apos;ouverture et la fermeture de sites, le contrôle d&apos;accès
          ou la sécurisation de périmètres sensibles.
        </p>
        <p>
          {company.name} travaille en lien avec les maîtres d&apos;ouvrage, les
          exploitants et les collectivités pour intégrer la sécurité privée dans un
          dispositif global (plans de prévention, coordination de chantier, événements
          municipaux, etc.).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
          Prestations de sécurité proposées à Nîmes et dans le Gard
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {keyServices.map((service) => (
            <article key={service.slug} className="card-muted p-4 text-xs text-slate-300">
              <h3 className="text-sm font-semibold text-slate-50">{service.name}</h3>
              <p className="mt-1.5 text-muted">{service.shortDescription}</p>
              <ul className="mt-2 space-y-1.5">
                {service.highlights.slice(0, 2).map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-3 w-3 flex-shrink-0 text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="card-muted p-5 text-xs text-slate-300">
        <p className="font-medium text-slate-100">
          Un besoin de sécurité sur Nîmes ou dans le Gard (30) ?
        </p>
        <p className="mt-2">
          Nous étudions vos besoins en gardiennage, rondes de sûreté, sécurité
          événementielle ou sécurisation de périmètres, en prenant en compte la nature
          de vos sites, vos contraintes horaires et les éventuelles procédures
          réglementaires applicables.
        </p>
        <div className="mt-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
          >
            Échanger sur un projet à Nîmes ou dans le Gard
          </Link>
        </div>
      </section>
    </AgencyPageTemplate>
    </>
  );
}