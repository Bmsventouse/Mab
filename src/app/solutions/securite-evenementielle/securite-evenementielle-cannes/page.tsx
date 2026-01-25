import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company } from '../../../../content/company';
import { ServicePageTemplate } from '../../../../components/templates/ServicePageTemplate';
import { Breadcrumbs } from '../../../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../../../lib/breadcrumbs';
import { buildMetadata } from '../../../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Sécurité événementielle à Cannes – Salons, festivals & événements corporate',
  description:
    "MAB SECURITE conçoit et pilote des dispositifs de sécurité événementielle à Cannes et sur la Côte d'Azur : agents de sécurité, contrôle d'accès, gestion des flux, rondes de sûreté et protection des zones sensibles pour vos salons, festivals et événements corporate.",
  canonicalPath: '/solutions/securite-evenementielle/securite-evenementielle-cannes',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  {
    name: 'Sécurité événementielle à Cannes',
    path: '/solutions/securite-evenementielle/securite-evenementielle-cannes',
  },
]);

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
      "Dispositifs de sécurité événementielle pour salons professionnels, festivals, conventions et événements corporate à Cannes et sur la Côte d'Azur : agents de sécurité, filtrage, contrôle d'accès, rondes et protection des zones sensibles.",
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
        name: "Pour quels types d'événements MAB SECURITE intervient-elle à Cannes ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "MAB SECURITE intervient sur des salons professionnels, festivals, conventions, événements corporate, lancements de produits et soirées institutionnelles organisés à Cannes et sur la Côte d'Azur.",
        },
      },
      {
        '@type': 'Question',
        name: "Quel délai faut-il prévoir pour préparer un dispositif de sécurité événementielle à Cannes ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Idéalement, plusieurs semaines sont à prévoir pour cadrer le périmètre, visiter les lieux, définir les flux, rédiger les consignes et mobiliser les équipes. Pour certains événements plus courts ou récurrents, des délais plus courts peuvent être envisagés après étude du besoin.",
        },
      },
      {
        '@type': 'Question',
        name: "Quelles sont les missions assurées par les agents de sécurité sur un événement ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Les agents de sécurité événementielle assurent l'accueil sécurisé, le contrôle d'accès, la gestion des files d'attente, la surveillance des zones sensibles (backstage, régies, stockages, zones VIP), les rondes de sûreté et l'application des consignes définies avec l'organisateur.",
        },
      },
    ],
  };
}

export default function SecuriteEvenementielleCannesPage() {
  const structuredData = [
    getSecuriteEvenementielleCannesServiceJsonLd(),
    getSecuriteEvenementielleCannesFaqJsonLd(),
    breadcrumbJsonLd,
  ];

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD combiné : service Sécurité événementielle Cannes + FAQ + fil d'Ariane (BreadcrumbList)
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Breadcrumbs
        items={[
          { href: '/', label: 'Accueil' },
          { href: '/solutions', label: 'Solutions' },
          {
            href: '/solutions/securite-evenementielle/securite-evenementielle-cannes',
            label: 'Sécurité événementielle à Cannes',
          },
        ]}
      />
      <ServicePageTemplate
        h1="Sécurité événementielle à Cannes : dispositifs pour salons, festivals et événements corporate"
        badge="Sécurité événementielle · Cannes"
        intro={`Cette page s’adresse aux organisateurs d’événements, agences, directions marketing et directions générales qui organisent des salons, conventions ou événements corporate à Cannes et sur la Côte d’Azur. L’objectif : sécuriser les lieux, les publics et les équipes tout en préservant l’expérience et l’image de votre événement.`}
        sidebar={
          <div className="space-y-3">
            <p className="font-medium text-slate-100">
              Besoin d&apos;un dispositif de sécurité pour un événement à Cannes&nbsp;?
            </p>
            <p className="text-slate-300">
              {company.name} conçoit des dispositifs de sécurité sur mesure pour vos salons,
              festivals et événements corporate à Cannes, en articulation avec vos équipes
              internes, vos régies et vos prestataires techniques.
            </p>
            <div className="pt-2 space-y-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Demandez un devis sécurité événementielle Cannes
              </Link>
              <p className="text-[11px] text-slate-400">
                Devis sous 24&nbsp;heures pour vos événements professionnels ou institutionnels
                à Cannes et sur la Côte d&apos;Azur.
              </p>
            </div>
          </div>
        }
      >
        {/* H2 : Enjeux de la sécurité pour vos événements à Cannes */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Enjeux de la sécurité pour vos événements à Cannes
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <p>
              Cannes accueille de nombreux événements à forte visibilité (festivals, salons
              professionnels, conventions, lancements de marque) impliquant des publics
              variés, des invités VIP et des équipes nombreuses. Dans ce contexte, un
              dispositif de <strong>sécurité événementielle à Cannes</strong> doit concilier
              fluidité des flux, prévention des incidents et respect des contraintes
              réglementaires.
            </p>
            <p>
              La sécurité ne doit pas être vécue comme un frein, mais comme un cadre
              discret et professionnel qui permet à l&apos;événement de se dérouler dans
              de bonnes conditions, tant pour les participants que pour les organisateurs.
            </p>
          </div>
        </section>

        {/* H2 : Notre approche pour la sécurité de vos salons et événements corporate */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Notre approche pour la sécurité de vos salons et événements corporate
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Cadrage en amont et visite des lieux
            </h3>
            <p>
              {company.name} intervient dès la phase de préparation : échanges avec vos
              équipes et vos régies, étude des plans, visite des lieux (palais des
              festivals, hôtels, centres de congrès, lieux partenaires) pour cartographier
              les accès, les zones sensibles, les parkings et les espaces back-office.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Définition du dispositif humain et des consignes
            </h3>
            <p>
              À partir de ce cadrage, nous dimensionnons le dispositif humain : postes
              fixes, filtrage, contrôle des badges, rondes de sûreté, surveillances
              spécifiques (zones VIP, régies, stockages). Des consignes claires sont
              établies pour encadrer le comportement des agents et la gestion des
              situations sensibles.
            </p>
          </div>
        </section>

        {/* H2 : Exemples de prestations pour la sécurité événementielle à Cannes */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Exemples de prestations pour la sécurité événementielle à Cannes
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <ul className="space-y-1.5">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  Accueil sécurisé et contrôle d&apos;accès aux entrées principales et zones
                  VIP.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  Rondes de sûreté dans les espaces d&apos;exposition, les coulisses et les
                  zones techniques.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  Surveillance des flux en entrée et sortie de salle, gestion des files
                  d&apos;attente et prévention des mouvements de foule.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  Protection des zones sensibles (stockages, régies, espaces presse, zones
                  de préparation).
                </span>
              </li>
            </ul>
            <p className="text-[11px] text-slate-400">
              Les dispositifs événementiels peuvent être articulés avec des{' '}
              <Link
                href="/solutions/securite-humaine/agent-securite-nice"
                className="underline-offset-2 hover:underline"
              >
                agents de sécurité à Nice
              </Link>{' '}
              et des prestations de{' '}
              <Link
                href="/solutions/securite-humaine/securite-centres-commerciaux"
                className="underline-offset-2 hover:underline"
              >
                sécurité centres commerciaux &amp; retail
              </Link>
              , lorsque des événements ont lieu dans des sites commerciaux ou ouverts au
              public.
            </p>
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
                Pour quels types d&apos;événements pouvez-vous intervenir à Cannes&nbsp;?
              </p>
              <p>
                Nous intervenons sur des salons professionnels, des festivals, des
                conventions, des lancements de produits, des soirées corporate et des
                événements institutionnels, en coordination avec vos équipes et vos régies.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Quel délai faut-il prévoir pour préparer le dispositif de sécurité&nbsp;?
              </p>
              <p>
                Plus le délai est confortable, plus le cadrage peut être précis. Il est
                recommandé de nous solliciter dès la phase de conception de l&apos;événement,
                en particulier pour les opérations de grande ampleur ou à forte visibilité.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Comment se déroule la coordination pendant l&apos;événement&nbsp;?
              </p>
              <p>
                Un référent sécurité est identifié pour assurer la liaison avec vos équipes
                et vos régies, piloter les agents sur le terrain, traiter les incidents et
                adapter le dispositif si nécessaire au fil de l&apos;événement.
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