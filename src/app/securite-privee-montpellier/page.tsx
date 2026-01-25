import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company, services } from '../../content/company';
import { AgencyPageTemplate } from '../../components/templates/AgencyPageTemplate';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Sécurité privée à Montpellier – BTP, sites tertiaires & événements',
  description:
    "MAB SECURITE, société de sécurité privée à Montpellier, sécurise vos chantiers BTP, sites tertiaires et événements dans l'Hérault (34) et sur le littoral méditerranéen : gardiennage, agents de sécurité, maîtres-chiens, vidéosurveillance et dispositifs de sécurité incendie.",
  canonicalPath: '/securite-privee-montpellier',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  {
    name: 'Sécurité privée à Montpellier',
    path: '/securite-privee-montpellier',
  },
]);

function getMontpellierLocalBusinessJsonLd() {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${company.name} Montpellier`,
    description:
      "Services de sécurité privée, gardiennage de chantiers BTP, sécurité tertiaire et sécurité événementielle à Montpellier et dans l'Hérault (34).",
    url: `${baseUrl.replace(/\/$/, '')}/securite-privee-montpellier`,
    telephone: company.contact.phone.value,
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        company.address.line1 +
        (company.address.line2 ? `, ${company.address.line2}` : ''),
      addressLocality: 'Montpellier',
      postalCode: '34000',
      addressCountry: 'FR',
    },
    openingHours: 'Mo-Su 00:00-23:59',
    areaServed: "Montpellier et Hérault (34)",
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

export default function SecuritePriveeMontpellierPage() {
  const keyServices = services.filter((service) =>
    ['gardiennage-surveillance', 'rondes-prevention', 'securisation-sites-perimetres'].includes(
      service.slug,
    ),
  );

  const structuredData = [getMontpellierLocalBusinessJsonLd(), breadcrumbJsonLd];

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD combiné : LocalBusiness Montpellier + fil d'Ariane (BreadcrumbList)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Breadcrumbs
        items={[
          { href: '/', label: 'Accueil' },
          { href: '/securite-privee-montpellier', label: 'Sécurité privée à Montpellier' },
        ]}
      />
      <AgencyPageTemplate
        h1="Sécurité privée à Montpellier pour chantiers BTP, sites tertiaires et événements"
        badge="Montpellier · Hérault (34)"
        intro={`${company.name} accompagne les entreprises du BTP, les propriétaires et gestionnaires d'immeubles tertiaires ainsi que les organisateurs d'événements à Montpellier, dans l'Hérault et sur le littoral méditerranéen. Les dispositifs combinent présence humaine, vidéosurveillance et sécurité incendie pour protéger vos sites, équipes et publics.`}
        zoneLabel="France Sud – Montpellier & Hérault (34)"
        responsable="Sofiane"
        zonePhoneLabel={
          <>
            <p>
              Téléphone direct zone Sud&nbsp;:{' '}
              <a href="tel:+33759585023" className="hover:text-emerald-300">
                +33 7 59 58 50 23
              </a>{' '}
              (Sofiane – Montpellier &amp; Hérault).
            </p>
            <p className="mt-2 text-xs text-muted">
              Pour toute première prise de contact, vous pouvez utiliser le numéro principal
              indiqué sur le site ou le formulaire de contact.
            </p>
          </>
        }
        situationsAside={
          <ul className="space-y-2">
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
              <span>Gardiennage de chantiers BTP et opérations immobilières</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
              <span>Surveillance de sites tertiaires et parcs d&apos;activités</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
              <span>Protection de dépôts, zones de stockage et locaux techniques</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
              <span>Dispositifs de sécurité pour événements professionnels et institutionnels</span>
            </li>
          </ul>
        }
      >
      <section className="space-y-4 text-sm text-slate-300">
        <h2 className="text-base font-semibold text-slate-50">
          Une approche adaptée aux sites montpelliérains
        </h2>
        <p>
          La zone de Montpellier concentre des chantiers BTP, des parcs d&apos;activités,
          des immeubles tertiaires et des équipements recevant du public. Les missions de
          sécurité doivent tenir compte de la coactivité, des flux de salariés et de
          visiteurs, ainsi que des contraintes réglementaires propres à chaque site. MAB
          SECURITE se positionne comme entreprise de sécurité et de{' '}
          <strong>gardiennage à Montpellier</strong>, en mettant à disposition des{' '}
          <Link
            href="/solutions/securite-humaine/agent-securite-montpellier"
            className="underline-offset-2 hover:underline"
          >
            agents de sécurité à Montpellier
          </Link>{' '}
          pour vos chantiers et sites tertiaires.
        </p>
        <p>
          {company.name} met en place des dispositifs combinant agents de sécurité,
          maîtres-chiens, rondes de sûreté et moyens techniques (caméras de surveillance,
          détecteurs de mouvement, contrôle d&apos;accès), en coordination avec vos
          prestataires spécialisés. La dimension sécurité incendie est intégrée dès la
          conception du dispositif, avec la possibilité d&apos;articuler l&apos;action
          d&apos;agents SSIAP au profil de risque de vos sites.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
          Prestations clés mobilisables à Montpellier
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
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

      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
          Expertises locales pour vos sites à Montpellier
        </h2>
        <div className="grid gap-4 md:grid-cols-3 text-xs text-slate-300">
          <article className="card-muted p-4">
            <h3 className="text-sm font-semibold text-slate-50">
              Caméras de surveillance &amp; détecteurs de mouvement
            </h3>
            <p className="mt-1.5 text-muted">
              Déploiement et supervision, en lien avec vos prestataires de vidéosurveillance,
              de caméras de surveillance, détecteurs de mouvement et contrôle d&apos;accès
              pour sécuriser chantiers, parkings, halls et zones de stockage autour de
              Montpellier.
            </p>
          </article>
          <article className="card-muted p-4">
            <h3 className="text-sm font-semibold text-slate-50">
              Agents de sécurité &amp; maîtres-chiens
            </h3>
            <p className="mt-1.5 text-muted">
              Agents de sécurité présents sur site et possibilité de mobiliser des
              maîtres-chiens pour les zones les plus exposées (sites isolés, grandes
              emprises, chantiers sensibles), notamment en horaires de nuit.
            </p>
          </article>
          <article className="card-muted p-4">
            <h3 className="text-sm font-semibold text-slate-50">
              Protection incendie &amp; agents SSIAP
            </h3>
            <p className="mt-1.5 text-muted">
              Prise en compte de la sécurité incendie dans vos dispositifs&nbsp;: rondes
              de sécurité incendie, surveillance des issues de secours et coordination
              avec des agents SSIAP lorsque la réglementation ou le profil de site le
              nécessite.
            </p>
          </article>
        </div>
      </section>

      <section className="card-muted p-5 text-xs text-slate-300">
        <p className="font-medium text-slate-100">
          Un projet de sécurité à Montpellier ou dans l&apos;Hérault (34) ?
        </p>
        <p className="mt-2">
          Nous étudions vos besoins en gardiennage, rondes de sûreté, vidéosurveillance
          et protection incendie, en tenant compte de la nature de vos sites, de vos
          contraintes horaires et des cadres réglementaires applicables.
        </p>
        <div className="mt-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
          >
            Échanger sur un projet à Montpellier
          </Link>
        </div>
        <p className="mt-3 text-[11px] text-slate-400">
          Pour les entreprises présentes à la fois à{' '}
          <Link href="/securite-privee-marseille" className="underline-offset-2 hover:underline">
            Marseille
          </Link>
          ,{' '}
          <Link href="/securite-privee-paris" className="underline-offset-2 hover:underline">
            Paris
          </Link>
          ,{' '}
          <Link href="/securite-privee-nimes" className="underline-offset-2 hover:underline">
            Nîmes / Gard
          </Link>{' '}
          ou en Île-de-France, MAB SECURITE peut coordonner un dispositif de sécurité unifié
          avec ses équipes France Nord et France Sud.
        </p>
      </section>
    </AgencyPageTemplate>
    </>
  );
}