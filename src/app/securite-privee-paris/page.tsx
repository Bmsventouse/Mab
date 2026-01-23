import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company, services } from '../../content/company';
import { AgencyPageTemplate } from '../../components/templates/AgencyPageTemplate';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Sécurité BTP à Paris – Gardiennage de chantiers & sites sensibles',
  description:
    "MAB SECURITE, prestataire de sécurité privée à Paris, accompagne les entreprises du BTP, les maîtres d’ouvrage et les donneurs d’ordre publics en Île-de-France : gardiennage de chantiers, surveillance humaine, rondes de sûreté et protection de sites sensibles.",
  canonicalPath: '/securite-privee-paris',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  {
    name: 'Sécurité BTP à Paris',
    path: '/securite-privee-paris',
  },
]);

const parisLocalBusinessJsonLd = (() => {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${company.name} Paris`,
    description:
      'Services de sécurité privée, gardiennage de chantiers BTP et sécurité incendie à Paris et en Île-de-France.',
    url: `${baseUrl.replace(/\/$/, '')}/securite-privee-paris`,
    telephone: company.contact.phone.value,
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        company.address.line1 + (company.address.line2 ? `, ${company.address.line2}` : ''),
      addressLocality: 'Paris',
      postalCode: '75000',
      addressCountry: 'FR',
    },
    openingHours: 'Mo-Su 00:00-23:59',
    areaServed: 'Paris et Île-de-France',
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
})();

export default function SecuritePriveeParisPage() {
  const keyServices = services.filter((service) =>
    ['gardiennage-surveillance', 'rondes-prevention', 'securisation-sites-perimetres'].includes(
      service.slug,
    ),
  );

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le référencement local (LocalBusiness)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(parisLocalBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { href: '/', label: 'Accueil' },
          { href: '/securite-privee-paris', label: 'Sécurité BTP à Paris' },
        ]}
      />
      <AgencyPageTemplate
        h1="Sécurité BTP à Paris : gardiennage de chantiers et sites sensibles"
        badge="Paris · Île-de-France"
        intro={`${company.name} accompagne en priorité les entreprises du BTP, les maîtres d'ouvrage et les donneurs d'ordre publics implantés à Paris et en Île-de-France (75, 92, 93, 94, 95, 77, 78, 91). Nos dispositifs de gardiennage, de surveillance et de rondes de sûreté sont dimensionnés pour les environnements à enjeux : chantiers urbains, bases-vie, bâtiments en construction, mais aussi sièges sociaux, immeubles tertiaires et sites techniques.`}
        zoneLabel="France Nord – Paris & Île-de-France"
        responsable="Béna"
        zonePhoneLabel={
          <>
            <p>
              Les coordonnées directes de la zone Nord sont communiquées dans le cadre des
              échanges avec les clients implantés à Paris et en Île-de-France.
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
              <span>Gardiennage de chantiers BTP et bases-vie en milieu urbain</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
              <span>
                Surveillance de sites techniques, dépôts de matériaux et zones à accès
                restreint
              </span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
              <span>
                Rondes de sûreté, levées de doute et contrôles d&apos;accès hors horaires
                ouvrés
              </span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
              <span>
                Dispositifs de sécurité pour opérations et événements corporate à Paris
              </span>
            </li>
          </ul>
        }
      >
        <section className="space-y-4 text-sm text-slate-300">
          <h2 className="text-base font-semibold text-slate-50">
            Sécurité privée pour les organisations basées à Paris
          </h2>
          <p>
            Nous intervenons en renfort des directions générales, directions immobilières,
            directions de la sûreté et services généraux pour sécuriser les bâtiments
            (sièges sociaux, immeubles tertiaires, centres de services), les équipes et les
            flux de visiteurs. Selon les enjeux, cela peut intégrer un{' '}
            <Link
              href="/solutions/expertise-conseil/audit-surete-siege-social-paris"
              className="underline-offset-2 hover:underline"
            >
              audit de sûreté de votre siège social à Paris
            </Link>
            , l&apos;évaluation du niveau de sécurité de vos sites sensibles et la
            définition de mesures adaptées pour vos bureaux et locaux techniques, ainsi que
            la mise en place de dispositifs dédiés de{' '}
            <Link
              href="/solutions/securite-humaine/gardiennage-ile-de-france"
              className="underline-offset-2 hover:underline"
            >
              gardiennage en Île-de-France
            </Link>
            .
          </p>
          <p>
            {company.name} travaille aussi bien dans le cadre de contrats récurrents que
            d&apos;appels d&apos;offres privés ou publics. Notre structure à taille humaine
            permet de proposer une gestion opérationnelle réactive, en lien direct avec un
            interlocuteur identifié, tout en intégrant des volets à forte valeur
            ajoutée&nbsp;
            <Link
              href="/solutions/securite-electronique/videosurveillance-entreprise-paris"
              className="underline-offset-2 hover:underline"
            >
              vidéosurveillance d&apos;entreprise à Paris
            </Link>
            , accompagnement à la mise en œuvre d&apos;un{' '}
            <strong>plan de continuité d&apos;activité (PCA)</strong> et prise en compte des
            obligations de <strong>sécurité incendie et SSIAP pour les IGH</strong> ou sites
            recevant du public.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Prestations clés mobilisables à Paris
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
            Expertises locales pour vos sites parisiens
          </h2>
          <div className="grid gap-4 md:grid-cols-3 text-xs text-slate-300">
            <article className="card-muted p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Caméras de surveillance &amp; détecteurs de mouvement
              </h3>
              <p className="mt-1.5 text-muted">
                Dimensionnement et positionnement de dispositifs de{' '}
                <strong>vidéosurveillance d&apos;entreprise à Paris</strong> (caméras de
                surveillance, détecteurs de mouvement, contrôle d’accès) adaptés aux
                contraintes des chantiers, immeubles tertiaires et sièges sociaux parisiens.
                Nous coordonnons l&apos;installation et la maintenance de ces systèmes avec
                vos prestataires techniques afin de les intégrer au dispositif global de
                sûreté.
              </p>
            </article>
            <article className="card-muted p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Agents de sécurité &amp; maîtres-chiens
              </h3>
              <p className="mt-1.5 text-muted">
                Mobilisation d&apos;agents de sécurité expérimentés et, lorsque le profil de
                risque l&apos;exige, de maîtres-chiens pour renforcer la dissuasion et la
                capacité de réaction sur vos chantiers et sites sensibles, dans le respect
                du cadre réglementaire de la sécurité privée.
              </p>
            </article>
            <article className="card-muted p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Protection incendie &amp; agents SSIAP
              </h3>
              <p className="mt-1.5 text-muted">
                Intégration de la sécurité incendie au dispositif de sûreté : rondes de
                sécurité incendie, prise en compte des points sensibles et recours, le cas
                échéant, à des agents SSIAP via un pilotage et une coordination adaptés à la
                configuration de vos bâtiments. Nous pouvons vous accompagner sur les{' '}
                <strong>obligations SSIAP pour les IGH</strong> et immeubles de grande
                hauteur, notamment pour dimensionner le nombre d&apos;agents SSIAP à prévoir
                en permanence.
              </p>
            </article>
          </div>
        </section>

        <section className="grid gap-4 text-xs text-slate-300 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="card-muted p-5">
            <p className="font-medium text-slate-100">
              Vous recherchez un partenaire de sécurité pour un site parisien ?
            </p>
            <p className="mt-2">
              Que votre besoin concerne un siège social, un immeuble tertiaire, un site
              technique ou un événement corporate, nous étudions votre contexte et vos
              contraintes (horaires, flux, exigences d&apos;image, appels d&apos;offres
              privés ou publics) avant de proposer un dispositif adapté. MAB SECURITE peut
              également accompagner vos sites situés à{' '}
              <Link
                href="/securite-privee-marseille"
                className="underline-offset-2 hover:underline"
              >
                Marseille
              </Link>
              ,{' '}
              <Link
                href="/securite-privee-montpellier"
                className="underline-offset-2 hover:underline"
              >
                Montpellier
              </Link>{' '}
              ou{' '}
              <Link
                href="/securite-privee-nimes"
                className="underline-offset-2 hover:underline"
              >
                Nîmes / Gard
              </Link>
              , via ses équipes France Sud.
            </p>
            <div className="mt-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Échanger sur un projet à Paris
              </Link>
            </div>
          </div>
          <div className="card p-5">
            <p className="font-medium text-slate-100">
              Détail de notre offre de gardiennage de chantiers BTP à Paris
            </p>
            <p className="mt-2">
              Pour les chantiers BTP en Île-de-France, {company.name} a structuré une offre
              dédiée : gardiennage de nuit, rondes de sûreté, levées de doute et protection
              des bases-vie, stockages de matériaux et périmètres sensibles.
            </p>
            <div className="mt-3">
              <Link
                href="/gardiennage-chantiers-btp-paris"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/70 bg-slate-950/60 px-4 py-2 text-[11px] font-semibold text-emerald-400 transition hover:bg-emerald-500 hover:text-slate-950"
              >
                Découvrir le gardiennage de chantiers BTP à Paris
              </Link>
            </div>
          </div>
        </section>
      </AgencyPageTemplate>
    </>
  );
}