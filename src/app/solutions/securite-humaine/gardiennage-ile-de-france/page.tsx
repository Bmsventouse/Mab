import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company } from '../../../../content/company';
import { ServicePageTemplate } from '../../../../components/templates/ServicePageTemplate';
import { Breadcrumbs } from '../../../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../../../lib/breadcrumbs';
import { buildMetadata } from '../../../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Gardiennage Île-de-France – Agents de sécurité & surveillance de sites',
  description:
    "MAB SECURITE propose des dispositifs de gardiennage en Île-de-France (Paris, 92, 93, 94, 95, 77, 78, 91) : agents de sécurité, rondes de sûreté et surveillance de chantiers, sites tertiaires, entrepôts et sites sensibles.",
  canonicalPath: '/solutions/securite-humaine/gardiennage-ile-de-france',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  {
    name: 'Gardiennage en Île-de-France',
    path: '/solutions/securite-humaine/gardiennage-ile-de-france',
  },
]);

function getGardiennageIdfServiceJsonLd() {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Gardiennage Île-de-France',
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      url: baseUrl.replace(/\/$/, ''),
    },
    description:
      'Dispositifs de gardiennage et de surveillance humaine pour les sites implantés en Île-de-France : chantiers BTP, sites tertiaires, entrepôts et sites sensibles.',
    areaServed: 'Paris et Île-de-France',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: 'Paris et Île-de-France',
    },
  };
}

function getGardiennageIdfFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quelles sont les prestations de gardiennage proposées en Île-de-France ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "MAB SECURITE propose des prestations de gardiennage en Île-de-France incluant postes de garde, rondes de sûreté, levées de doute, gestion des accès, surveillance de chantiers BTP, d'immeubles tertiaires, d'entrepôts et de sites sensibles.",
        },
      },
      {
        '@type': 'Question',
        name:
          "Sur quels départements d'Île-de-France MAB SECURITE intervient-elle pour le gardiennage ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "MAB SECURITE intervient principalement sur Paris et les départements de la petite et grande couronne : 75, 92, 93, 94, 95, 77, 78, 91, avec des dispositifs adaptés au profil de chaque site.",
        },
      },
      {
        '@type': 'Question',
        name:
          "Comment est fixé le tarif d'un dispositif de gardiennage en Île-de-France ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Le tarif d'un dispositif de gardiennage en Île-de-France dépend du nombre de postes, de l'amplitude horaire, de la nature du site (chantier, site tertiaire, entrepôt, site sensible) et de la durée prévisionnelle de la mission. Un devis personnalisé est établi après analyse du besoin.",
        },
      },
    ],
  };
}

export default function GardiennageIdfPage() {
  const structuredData = [
    getGardiennageIdfServiceJsonLd(),
    getGardiennageIdfFaqJsonLd(),
    breadcrumbJsonLd,
  ];

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD combiné : service Gardiennage Île-de-France + FAQ + fil d'Ariane (BreadcrumbList)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Breadcrumbs
        items={[
          { href: '/', label: 'Accueil' },
          { href: '/solutions', label: 'Solutions' },
          {
            href: '/solutions/securite-humaine/gardiennage-ile-de-france',
            label: 'Gardiennage en Île-de-France',
          },
        ]}
      />
      <ServicePageTemplate
        h1="Gardiennage en Île-de-France : agents de sécurité et surveillance de sites"
        badge="Sécurité humaine · Île-de-France"
        intro={`Cette page s’adresse aux entreprises, maîtres d’ouvrage et donneurs d’ordre implantés à Paris et en Île-de-France (75, 92, 93, 94, 95, 77, 78, 91) qui recherchent un dispositif de gardiennage fiable pour leurs chantiers, sites tertiaires, entrepôts ou sites sensibles.`}
        sidebar={
          <div className="space-y-3">
            <p className="font-medium text-slate-100">
              Besoin d&apos;un dispositif de gardiennage en Île-de-France&nbsp;?
            </p>
            <p className="text-slate-300">
              {company.name} dimensionne des dispositifs de gardiennage avec agents de
              sécurité, rondes et levées de doute pour les sites situés en Île-de-France,
              en articulation avec vos propres procédures.
            </p>
            <div className="pt-2 space-y-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Obtenez un devis gardiennage Île-de-France
              </Link>
              <p className="text-[11px] text-slate-400">
                Devis sous 24&nbsp;heures pour vos sites en région parisienne.
              </p>
            </div>
          </div>
        }
      >
        {/* H2 : Pourquoi un dispositif de gardiennage en Île-de-France ? */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Pourquoi mettre en place un dispositif de gardiennage en Île-de-France&nbsp;?
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <p>
              La région Île-de-France concentre des chantiers de grande envergure, des
              immeubles tertiaires, des entrepôts logistiques et des sites sensibles. Les
              risques d&apos;intrusion, de vol, de dégradation ou d&apos;incivilités rendent
              indispensable un dispositif de <strong>gardiennage en Île-de-France</strong>{' '}
              adapté au profil de chaque site.
            </p>
            <p>
              La présence d&apos;agents de sécurité, combinée à des rondes de sûreté et à des
              levées de doute sur alarme, permet d&apos;assurer une surveillance continue et de
              réagir rapidement en cas d&apos;événement.
            </p>
          </div>
        </section>

        {/* H2 : Nos prestations de gardiennage en Île-de-France */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Nos prestations de gardiennage en Île-de-France
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Gardiennage de chantiers BTP et sites tertiaires
            </h3>
            <p>
              {company.name} intervient pour le gardiennage de chantiers BTP, de bases-vie,
              d&apos;immeubles tertiaires et de sites techniques à Paris et en petite et
              grande couronne. Les dispositifs peuvent inclure postes fixes, rondes,
              contrôles d&apos;accès et gestion des clés.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Surveillance d&apos;entrepôts et de sites sensibles
            </h3>
            <p>
              Nous mettons également en place des dispositifs de gardiennage pour les
              entrepôts, plateformes logistiques et sites sensibles en Île-de-France, en
              articulation avec vos systèmes de vidéosurveillance et de télésurveillance.
            </p>
            <ul className="space-y-1.5">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Postes de garde et accueil sécurisé.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Rondes préventives et levées de doute sur alarme.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Surveillance de zones de stockage, parkings et abords immédiats.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* H2 : Tarifs et dimensionnement de votre gardiennage en Île-de-France */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Tarifs et dimensionnement de votre gardiennage en Île-de-France
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <p>
              Le coût d&apos;un dispositif de <strong>gardiennage en Île-de-France</strong>{' '}
              dépend du nombre de postes d&apos;agents, de l&apos;amplitude horaire (jour,
              nuit, week-end, 24/7), de la nature du site et du niveau de risque. Nous
              privilégions une approche basée sur l&apos;analyse du besoin plutôt que des
              grilles tarifaires génériques.
            </p>
            <div className="pt-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/70 bg-slate-950/60 px-4 py-2 text-[11px] font-semibold text-emerald-400 transition hover:bg-emerald-500 hover:text-slate-950"
              >
                Demandez un devis gardiennage Île-de-France
              </Link>
            </div>
          </div>
        </section>

        {/* H2 : FAQ – Gardiennage en Île-de-France */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            FAQ – Gardiennage en Île-de-France
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Peut-on adapter le dispositif entre les phases de chantier et l&apos;exploitation
                du site&nbsp;?
              </p>
              <p>
                Oui. Il est courant d&apos;adapter le gardiennage entre la phase chantier et la
                phase exploitation, les risques et les flux n&apos;étant pas les mêmes. Le
                dispositif peut être allégé ou renforcé selon les périodes.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Un même prestataire peut-il gérer plusieurs sites en Île-de-France&nbsp;?
              </p>
              <p>
                Travailler avec un prestataire unique permet d&apos;harmoniser les procédures,
                de simplifier la coordination et de disposer d&apos;un interlocuteur unique pour
                l&apos;ensemble de votre parc francilien.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Link
              href="/contact#formulaire-devis"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
            >
              Contactez notre équipe gardiennage Île-de-France
            </Link>
          </div>
        </section>

        <section className="mt-6 space-y-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-xs text-slate-300">
          <p className="font-medium text-slate-100">
            Guides et solutions pour sécuriser vos sites franciliens
          </p>
          <p>
            Pour compléter votre réflexion sur le gardiennage de vos sites, vous pouvez consulter&nbsp;:
          </p>
          <ul className="ml-4 list-disc space-y-1.5">
            <li>
              la page{' '}
              <Link
                href="/gardiennage-chantiers-btp-paris"
                className="underline-offset-2 hover:underline"
              >
                gardiennage de chantiers BTP à Paris
              </Link>
              , si vos enjeux portent aussi sur des opérations de construction en Île-de-France ;
            </li>
            <li>
              le guide{' '}
              <Link
                href="/guides/securiser-chantier-btp-nuit"
                className="underline-offset-2 hover:underline"
              >
                sécuriser un chantier BTP la nuit
              </Link>
              , pour disposer d&apos;une checklist opérationnelle dédiée aux périodes nocturnes ;
            </li>
            <li>
              nos offres de{' '}
              <Link
                href="/solutions/securite-electronique/videosurveillance-entreprise-paris"
                className="underline-offset-2 hover:underline"
              >
                vidéosurveillance d&apos;entreprise à Paris
              </Link>
              , afin d&apos;articuler gardiennage humain et moyens techniques sur vos sites
              tertiaires et logistiques.
            </li>
          </ul>
          <div className="pt-3">
            <Link
              href="/contact#formulaire-devis"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/70 bg-slate-950/60 px-4 py-2 text-[11px] font-semibold text-emerald-400 transition hover:bg-emerald-500 hover:text-slate-950"
            >
              Parler de vos sites en Île-de-France avec MAB SECURITE
            </Link>
          </div>
        </section>
      </ServicePageTemplate>
    </>
  );
}