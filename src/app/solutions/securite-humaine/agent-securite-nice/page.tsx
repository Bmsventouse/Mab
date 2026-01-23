import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company } from '../../../../content/company';
import { ServicePageTemplate } from '../../../../components/templates/ServicePageTemplate';
import { Breadcrumbs } from '../../../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../../../lib/breadcrumbs';
import { buildMetadata } from '../../../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Agent de sécurité Nice – Tarifs & prestations',
  description:
    "MAB SECURITE propose des agents de sécurité à Nice et sur la Côte d'Azur pour le gardiennage de sites professionnels, chantiers, commerces et événements : surveillance, rondes, contrôle d'accès et gestion des incidents.",
  canonicalPath: '/solutions/securite-humaine/agent-securite-nice',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  {
    name: 'Agents de sécurité à Nice',
    path: '/solutions/securite-humaine/agent-securite-nice',
  },
]);

function getAgentSecuriteNiceServiceJsonLd() {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Agent de sécurité Nice',
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      url: baseUrl.replace(/\/$/, ''),
    },
    description:
      "Fourniture d'agents de sécurité pour le gardiennage et la surveillance de sites à Nice et sur la Côte d'Azur : chantiers, sites professionnels, commerces et événements.",
    areaServed: "Nice et Côte d'Azur",
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: "Nice et Côte d'Azur",
    },
  };
}

function getAgentSecuriteNiceFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Comment obtenir un devis pour un agent de sécurité à Nice ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Pour obtenir un devis pour un agent de sécurité à Nice, il est nécessaire de préciser le type de site (commerce, chantier, site tertiaire, événement), l'adresse, l'amplitude horaire, la durée de la mission et les éventuelles contraintes spécifiques. MAB SECURITE établit un devis personnalisé à partir de ces éléments.",
        },
      },
      {
        '@type': 'Question',
        name:
          "Quel type de missions un agent de sécurité peut-il assurer à Nice ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Les agents de sécurité à Nice peuvent assurer des missions de surveillance de chantiers, de gardiennage de sites professionnels, de sécurité événementielle, de contrôle d'accès, de rondes de sûreté et de gestion des incidents en lien avec les forces de l'ordre si nécessaire.",
        },
      },
      {
        '@type': 'Question',
        name:
          "Peut-on confier plusieurs sites à un même prestataire de sécurité à Nice et sur la Côte d'Azur ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Oui, il est possible de confier la sécurisation de plusieurs sites à un même prestataire afin d'assurer cohérence et continuité de service, avec un interlocuteur unique pour l'ensemble du périmètre.",
        },
      },
    ],
  };
}

export default function AgentSecuriteNicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le service Agent de sécurité Nice
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getAgentSecuriteNiceServiceJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        // JSON-LD pour la FAQ Agent de sécurité Nice
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getAgentSecuriteNiceFaqJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { href: '/', label: 'Accueil' },
          { href: '/solutions', label: 'Solutions' },
          {
            href: '/solutions/securite-humaine/agent-securite-nice',
            label: 'Agents de sécurité à Nice',
          },
        ]}
      />
      <ServicePageTemplate
        h1="Agent de sécurité à Nice : tarifs et prestations"
        badge="Sécurité humaine · Nice"
        intro={`Cette page s’adresse aux entreprises, exploitants de sites et organisateurs d’événements situés à Nice et sur la Côte d’Azur qui recherchent des agents de sécurité pour le gardiennage et la surveillance de leurs sites.`}
        sidebar={
          <div className="space-y-3">
            <p className="font-medium text-slate-100">
              Besoin d&apos;un agent de sécurité à Nice&nbsp;?
            </p>
            <p className="text-slate-300">
              {company.name} dimensionne des dispositifs d&apos;agents de sécurité à Nice et
              sur la Côte d&apos;Azur : présence sur site, rondes, contrôle d&apos;accès et
              gestion des incidents.
            </p>
            <div className="pt-2 space-y-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Demandez un devis agent de sécurité Nice
              </Link>
              <p className="text-[11px] text-slate-400">
                Devis sous 24&nbsp;heures pour vos besoins en gardiennage à Nice et sur la Côte
                d&apos;Azur.
              </p>
            </div>
          </div>
        }
      >
        {/* H2 : Pourquoi recourir à des agents de sécurité à Nice ? */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Pourquoi recourir à des agents de sécurité à Nice&nbsp;?
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <p>
              Nice et la Côte d&apos;Azur concentrent des sites touristiques, des commerces,
              des hôtels, des chantiers et des événements à forte visibilité. Dans ce
              contexte, la présence d&apos;<strong>agents de sécurité à Nice</strong> permet
              de sécuriser les accès, dissuader les comportements malveillants et assurer un
              accueil rassurant pour les publics et les équipes.
            </p>
          </div>
        </section>

        {/* H2 : Nos prestations d'agents de sécurité à Nice */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Nos prestations d&apos;agents de sécurité à Nice
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <ul className="space-y-1.5">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Gardiennage de sites professionnels et chantiers.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Surveillance de commerces et de zones de stockage.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Contrôle d&apos;accès et filtrage sur événements.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Rondes de sûreté et levées de doute.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* H2 : Tarifs et modalités de mise en place */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Tarifs et modalités de mise en place
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <p>
              Le tarif d&apos;un <strong>agent de sécurité à Nice</strong> dépend de
              l&apos;amplitude horaire, de la nature du site, du nombre de postes à couvrir
              et de la durée de la mission. {company.name} privilégie une approche
              personnalisée pour définir un dispositif adapté à vos contraintes et à vos
              enjeux.
            </p>
            <div className="pt-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/70 bg-slate-950/60 px-4 py-2 text-[11px] font-semibold text-emerald-400 transition hover:bg-emerald-500 hover:text-slate-950"
              >
                Obtenez un devis pour un agent de sécurité à Nice
              </Link>
            </div>
          </div>
        </section>

        {/* H2 : FAQ – Agents de sécurité à Nice */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            FAQ – Agents de sécurité à Nice
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Peut-on combiner plusieurs types de prestations (gardiennage, événementiel,
                rondes) avec un même prestataire&nbsp;?
              </p>
              <p>
                Oui, il est possible de bâtir un dispositif multi-prestations avec un seul
                prestataire, ce qui facilite la coordination et le suivi opérationnel sur la
                durée.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Comment se déroule la relation au quotidien avec le prestataire&nbsp;?
              </p>
              <p>
                Un interlocuteur dédié assure le suivi, le traitement des remontées
                d&apos;information, l&apos;adaptation du dispositif et les points réguliers
                avec vos équipes, afin de garantir la continuité et la qualité du service.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Link
              href="/contact#formulaire-devis"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
            >
              Contactez notre équipe sécurité à Nice
            </Link>
          </div>
        </section>
      </ServicePageTemplate>
    </>
  );
}