import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company } from '../../../../../content/company';
import { ServicePageTemplate } from '../../../../../components/templates/ServicePageTemplate';
import { buildMetadata } from '../../../../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Sécurité événementielle Cannes – Festivals & salons',
  description:
    "MAB SECURITE accompagne les organisateurs d'événements à Cannes et sur la Côte d'Azur : festivals, salons, événements corporate, soirées privées. Dispositifs d'agents de sécurité, contrôle d'accès, filtrage, rondes et gestion des incidents.",
  canonicalPath: '/solutions/securite-evenementielle/securite-evenementielle-cannes',
});

function getSecuriteEvenementielleCannesServiceJsonLd() {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Sécurité événementielle Cannes',
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      url: baseUrl.replace(/\/$/, ''),
    },
    description:
      "Prestations de sécurité événementielle pour festivals, salons, événements professionnels et soirées privées à Cannes et sur la Côte d'Azur.",
    areaServed: "Cannes et Côte d'Azur",
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: "Cannes et Côte d'Azur",
    },
  };
}

function getSecuriteEvenementielleCannesFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Quels types d'événements peuvent être sécurisés à Cannes ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "MAB SECURITE peut sécuriser des festivals, des salons professionnels, des événements corporate, des soirées privées et des manifestations publiques à Cannes et sur la Côte d'Azur.",
        },
      },
      {
        '@type': 'Question',
        name:
          "Quand faut-il prévoir la mise en place d'un dispositif de sécurité événementielle à Cannes ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Il est recommandé d'anticiper plusieurs semaines ou mois avant l'événement, afin de définir le périmètre, les flux, les accès, les postes d'agents de sécurité, les scénarios de risque et les interactions avec les autorités locales.",
        },
      },
      {
        '@type': 'Question',
        name:
          "Quelles missions peuvent être confiées aux agents de sécurité sur un événement à Cannes ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Les agents de sécurité peuvent assurer le filtrage et le contrôle d'accès, la gestion des flux, la prévention des incidents, les rondes de sûreté, la protection des zones sensibles (backstage, loges, régie) et la gestion des situations d'urgence en lien avec les organisateurs et les secours.",
        },
      },
    ],
  };
}

export default function SecuriteEvenementielleCannesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le service Sécurité événementielle Cannes
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getSecuriteEvenementielleCannesServiceJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        // JSON-LD pour la FAQ Sécurité événementielle Cannes
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getSecuriteEvenementielleCannesFaqJsonLd()),
        }}
      />
      <ServicePageTemplate
        h1="Sécurité événementielle à Cannes : festivals, salons et événements corporate"
        badge="Sécurité événementielle · Cannes"
        intro={`Cette page s’adresse aux organisateurs d’événements, agences, directions marketing et directions générales qui organisent des festivals, salons, conventions, lancements de produits ou soirées privées à Cannes et sur la Côte d’Azur, et qui souhaitent mettre en place un dispositif de sécurité événementielle professionnel.`}
        sidebar={
          <div className="space-y-3">
            <p className="font-medium text-slate-100">
              Besoin d&apos;un dispositif de sécurité pour un événement à Cannes&nbsp;?
            </p>
            <p className="text-slate-300">
              {company.name} étudie vos contraintes (site, jauge, public, partenaires,
              exigences des autorités) et dimensionne un dispositif d&apos;agents de sécurité,
              de contrôle d&apos;accès et de rondes adapté.
            </p>
            <div className="pt-2 space-y-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Obtenez un devis sécurité événementielle Cannes
              </Link>
              <p className="text-[11px] text-slate-400">
                Devis sous 24&nbsp;heures pour les événements professionnels et festivals.
              </p>
            </div>
          </div>
        }
      >
        {/* H2 : Pourquoi la sécurité événementielle est cruciale à Cannes ? */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Pourquoi la sécurité événementielle est-elle cruciale à Cannes&nbsp;?
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <p>
              Cannes accueille chaque année des festivals et des salons à forte visibilité,
              ainsi que de nombreux événements corporate et soirées privées. La gestion des
              flux, la protection des invités, la maîtrise des accès et la prévention des
              incidents nécessitent un dispositif structuré d&apos;
              <strong>agents de sécurité événementielle</strong>.
            </p>
          </div>
        </section>

        {/* H2 : Nos prestations de sécurité événementielle à Cannes */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Nos prestations de sécurité événementielle à Cannes
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <ul className="space-y-1.5">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Analyse des risques et définition du dispositif de sécurité.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Contrôle d&apos;accès, filtrage et gestion des files.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Rondes de sûreté et protection des zones sensibles.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Coordination avec les organisateurs et les autorités locales.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* H2 : Tarifs et organisation de la sécurité de votre événement à Cannes */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Tarifs et organisation de la sécurité de votre événement à Cannes
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <p>
              Le coût d&apos;un dispositif de <strong>sécurité événementielle à Cannes</strong>{' '}
              dépend de la taille de l&apos;événement, de la nature du public, du nombre
              d&apos;accès, des plages horaires et des contraintes spécifiques (VIP, zones
              sensibles, réglementation). {company.name} établit un devis détaillé à partir
              de votre cahier des charges.
            </p>
            <div className="pt-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/70 bg-slate-950/60 px-4 py-2 text-[11px] font-semibold text-emerald-400 transition hover:bg-emerald-500 hover:text-slate-950"
              >
                Demandez un devis sécurité événementielle Cannes
              </Link>
            </div>
          </div>
        </section>

        {/* H2 : FAQ – Sécurité événementielle à Cannes */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            FAQ – Sécurité événementielle à Cannes
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Combien de temps à l&apos;avance faut-il préparer la sécurité d&apos;un
                événement à Cannes&nbsp;?
              </p>
              <p>
                Pour un festival ou un salon, la préparation commence généralement plusieurs
                mois à l&apos;avance. Pour des événements de taille plus modeste, quelques
                semaines peuvent suffire, sous réserve de disponibilité des équipes et de
                validation des dispositifs par les parties prenantes.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Un même prestataire peut-il gérer la sécurité de plusieurs événements sur la
                saison&nbsp;?
              </p>
              <p>
                Oui, il est possible de bâtir une relation pluri-événements avec un même
                prestataire, ce qui facilite les échanges, la capitalisation sur les retours
                d&apos;expérience et la montée en maturité des dispositifs de sécurité.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Link
              href="/contact#formulaire-devis"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
            >
              Contactez notre équipe sécurité événementielle à Cannes
            </Link>
          </div>
        </section>
      </ServicePageTemplate>
    </>
  );
}