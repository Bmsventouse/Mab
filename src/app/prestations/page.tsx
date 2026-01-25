import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company, services } from '../../content/company';
import { ServicePageTemplate } from '../../components/templates/ServicePageTemplate';
import { buildMetadata } from '../../lib/seo';
import { Heading } from '../../components/atoms/Heading';
import { Text } from '../../components/atoms/Text';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Prestations de sécurité privée – Gardiennage BTP & sites professionnels',
  description:
    'Prestations de sécurité MAB SECURITE : gardiennage de chantiers BTP, surveillance humaine, rondes de sûreté, sécurité événementielle, vidéosurveillance et sécurisation de sites pour les entreprises et collectivités à Paris, Marseille, Montpellier, Nîmes et sur la côte sud.',
  canonicalPath: '/prestations',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Prestations', path: '/prestations' },
]);

export default function PrestationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList) des prestations
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="section pb-0">
        <div className="section-inner">
          <Breadcrumbs
            items={[
              { href: '/', label: 'Accueil' },
              { href: '/prestations', label: 'Prestations' },
            ]}
          />
        </div>
      </section>
      <ServicePageTemplate
        h1="Prestations de sécurité privée pour les organisations professionnelles"
        badge="Prestations"
        intro={`${company.name} conçoit et pilote des dispositifs de sécurité adaptés aux contraintes des entreprises privées, des collectivités et des établissements publics. Chaque mission est cadrée en amont afin d'assurer un niveau de sécurité cohérent avec vos enjeux, vos obligations réglementaires et, le cas échéant, les exigences de vos appels d'offres privés ou publics et de vos cahiers des charges.`}
        sidebar={
          <div className="space-y-3">
            <Heading level={3} className="text-sm">
              Besoin d’une approche globale de la sécurité de vos sites&nbsp;?
            </Heading>
            <Text className="text-xs text-slate-300">
              Nous construisons des dispositifs combinant gardiennage, rondes de sûreté et
              sécurité événementielle, en articulation avec vos procédures internes (plans
              de prévention, consignes d&apos;accès, gestion des visiteurs, prestataires et
              sous-traitants).
            </Text>
          </div>
        }
      >
        <section className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article key={service.slug} className="card p-6 text-sm">
                <Heading level={2} className="text-base">
                  {service.name}
                </Heading>
                <Text variant="muted" className="mt-2 text-sm">
                  {service.description}
                </Text>
                <div className="mt-4 space-y-1.5 text-xs text-slate-400">
                  <Text className="font-medium text-slate-200">
                    Exemples de situations prises en charge :
                  </Text>
                </div>
                <ul className="mt-2 space-y-2 text-xs text-slate-300">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="card p-5 text-xs text-slate-300">
              <p className="font-medium text-slate-100">
                Focus : gardiennage de chantiers BTP à Paris
              </p>
              <p className="mt-2">
                Pour les opérations de construction et de réhabilitation en Île-de-France,{' '}
                {company.name} propose des dispositifs dédiés au gardiennage de chantiers
                BTP : présence de nuit, rondes de sûreté, levées de doute et protection des
                bases-vie et dépôts de matériaux.
              </p>
              <div className="mt-3">
                <Link
                  href="/gardiennage-chantiers-btp-paris"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
                >
                  Découvrir notre offre BTP à Paris
                </Link>
              </div>
            </div>
          </div>

          <section className="card-muted mt-6 p-5 text-xs text-slate-300">
            <p className="font-medium text-slate-100">
              Besoins très ciblés : nos solutions dédiées
            </p>
            <p className="mt-2">
              Pour des sujets précis (conformité incendie, vidéosurveillance, audit ou
              dispositifs locaux), vous pouvez vous appuyer sur nos pages solutions&nbsp;:&nbsp;
              <Link
                href="/solutions/securite-incendie/agent-ssiap-igh-paris"
                className="underline-offset-2 hover:underline"
              >
                obligations SSIAP en IGH à Paris
              </Link>
              ,&nbsp;
              <Link
                href="/solutions/securite-electronique/videosurveillance-entreprise-paris"
                className="underline-offset-2 hover:underline"
              >
                vidéosurveillance d&apos;entreprise à Paris
              </Link>
              ,&nbsp;
              <Link
                href="/solutions/expertise-conseil/audit-surete-siege-social-paris"
                className="underline-offset-2 hover:underline"
              >
                audit de sûreté de siège social à Paris
              </Link>
              ,&nbsp;
              <Link
                href="/solutions/securite-humaine/gardiennage-ile-de-france"
                className="underline-offset-2 hover:underline"
              >
                gardiennage en Île-de-France
              </Link>
              ,&nbsp;
              <Link
                href="/solutions/securite-humaine/securite-entrepots-logistiques"
                className="underline-offset-2 hover:underline"
              >
                sécurité des entrepôts et plateformes logistiques
              </Link>
              ,&nbsp;
              <Link
                href="/solutions/securite-humaine/securite-centres-commerciaux"
                className="underline-offset-2 hover:underline"
              >
                sécurité centres commerciaux &amp; retail
              </Link>
              ,&nbsp;
              <Link
                href="/solutions/securite-humaine/agent-securite-marseille"
                className="underline-offset-2 hover:underline"
              >
                agents de sécurité à Marseille
              </Link>
              ,&nbsp;
              <Link
                href="/solutions/securite-humaine/agent-securite-montpellier"
                className="underline-offset-2 hover:underline"
              >
                agents de sécurité à Montpellier
              </Link>
              ,&nbsp;
              <Link
                href="/solutions/securite-humaine/agent-securite-nice"
                className="underline-offset-2 hover:underline"
              >
                agents de sécurité à Nice
              </Link>
              &nbsp;et&nbsp;
              <Link
                href="/solutions/securite-evenementielle/securite-evenementielle-cannes"
                className="underline-offset-2 hover:underline"
              >
                sécurité événementielle à Cannes
              </Link>
              .
            </p>
          </section>
        </section>
      </ServicePageTemplate>
    </>
  );
}