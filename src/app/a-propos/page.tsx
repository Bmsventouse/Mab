import type { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';
import { company } from '../../content/company';
import { buildMetadata } from '../../lib/seo';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';
import { Heading } from '../../components/atoms/Heading';
import { Text } from '../../components/atoms/Text';

export const metadata: Metadata = buildMetadata({
  title: 'À propos de MAB SECURITE – Spécialiste sécurité BTP & sites professionnels',
  description:
    "Présentation de MAB SECURITE, société de sécurité privée basée à Nîmes et présente à Paris, Marseille, Montpellier et dans le Gard, spécialisée dans le gardiennage de chantiers BTP, la surveillance de sites professionnels et la sécurisation d'événements pour les entreprises et acteurs publics.",
  canonicalPath: '/a-propos',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/a-propos' },
]);

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList) de la page À propos
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="section">
        <div className="section-inner space-y-10">
          <header className="space-y-3">
            <Breadcrumbs
              items={[
                { href: '/', label: 'Accueil' },
                { href: '/a-propos', label: 'À propos' },
              ]}
            />
            <p className="badge">À propos</p>
            <Heading level={1} className="text-2xl sm:text-3xl">
              Une société de sécurité privée engagée aux côtés des professionnels
            </Heading>
            <Text className="max-w-3xl text-sm text-muted">
              {company.name} met à disposition des entreprises privées, des collectivités et
              des acteurs publics une structure à taille humaine, réactive et orientée
              service. Les missions sont pilotées de manière structurée et documentée, dans
              une logique de partenariat durable et de réponse aux exigences contractuelles
              et réglementaires de leurs donneurs d&apos;ordre. {company.name} n&apos;intervient
              pas pour des prestations de sécurité destinées aux particuliers ou aux
              habitations privées.
            </Text>
          </header>

        <section className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <article className="space-y-5 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <Heading level={2} className="text-base">
                  Une structure dédiée à la sécurité privée
                </Heading>
                <Text className="text-sm text-slate-300">
                  Créée le 29/03/2023 et implantée à Nîmes, {company.name} se concentre
                  exclusivement sur les métiers de la sécurité privée. Cette spécialisation
                  permet de proposer des dispositifs ciblés et des interlocuteurs qui
                  maîtrisent les enjeux de terrain.
                </Text>
              </div>
            </div>

            <Text className="text-sm text-slate-300">
              Chaque mission fait l&apos;objet d&apos;un cadrage précis : analyse du
              contexte et des enjeux, définition du périmètre, consignes de poste,
              modalités de reporting. L&apos;objectif est d&apos;apporter un niveau de
              sécurité adapté et justifié, en veillant à la continuité de vos activités et
              au respect de vos contraintes opérationnelles.
            </Text>

            <Text className="text-sm text-slate-300">
              {company.name} privilégie une relation suivie avec ses clients, basée sur la
              transparence, la disponibilité et la régularité des échanges. Un
              interlocuteur unique accompagne votre dossier, de la qualification du besoin
              jusqu&apos;au retour d&apos;expérience en fin de mission.
            </Text>

            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-200">
              <Heading level={3} className="text-[13px]">
                Direction générale &amp; organisation France Nord / France Sud
              </Heading>
              <Text className="text-xs text-slate-200">
                Le pilotage national de {company.name} est assuré par une direction
                générale dédiée, qui définit la vision, valide les dispositifs de sécurité
                proposés aux clients et supervise l&apos;ensemble des opérations menées sur
                le territoire.
              </Text>
              <Text className="text-xs text-slate-200">
                Pour garantir une proximité opérationnelle, l&apos;activité est structurée
                en deux zones&nbsp;:
              </Text>
              <ul className="ml-4 list-disc space-y-1.5">
                <li>
                  <span className="font-semibold">France Nord</span> : Paris et
                  Île-de-France, avec <span className="font-semibold">Béna</span> comme
                  responsable opérationnel local.
                </li>
                <li>
                  <span className="font-semibold">France Sud</span> : Marseille,
                  Montpellier, Nîmes / Gard et côte méditerranéenne, sous la responsabilité
                  opérationnelle de <span className="font-semibold">Sofiane</span>.
                </li>
              </ul>
              <Text className="text-xs text-slate-400">
                Les responsables de zone assurent le suivi quotidien des missions en lien
                étroit avec la direction générale, afin de maintenir un niveau homogène de
                qualité de service sur l&apos;ensemble des sites.
              </Text>
            </div>
          </article>

          <aside className="card p-6 text-xs text-slate-200">
            <Heading level={2} className="text-sm">
              Informations clés sur la société
            </Heading>
            <div className="mt-3 space-y-1.5">
              <Text className="text-xs text-slate-200">
                <span className="text-slate-400">Dénomination sociale&nbsp;:</span>{' '}
                {company.legalName}
              </Text>
              <Text className="text-xs text-slate-200">
                <span className="text-slate-400">Forme juridique&nbsp;:</span>{' '}
                {company.legalForm}
              </Text>
              <Text className="text-xs text-slate-200">
                <span className="text-slate-400">Code NAF / APE&nbsp;:</span>{' '}
                {company.nafApe}
              </Text>
              <Text className="text-xs text-slate-200">
                <span className="text-slate-400">SIREN&nbsp;:</span> {company.siren}
              </Text>
              <Text className="text-xs text-slate-200">
                <span className="text-slate-400">SIRET&nbsp;:</span> {company.siret}
              </Text>
              <Text className="text-xs text-slate-200">
                <span className="text-slate-400">TVA intracommunautaire&nbsp;:</span>{' '}
                {company.vatNumber}
              </Text>
              <Text className="text-xs text-slate-200">
                <span className="text-slate-400">Capital social&nbsp;:</span>{' '}
                {company.shareCapital}
              </Text>
              <Text className="text-xs text-slate-200">
                <span className="text-slate-400">Adresse du siège&nbsp;:</span>
                <br />
                {company.address.line1}
                {company.address.line2 && (
                  <>
                    <br />
                    {company.address.line2}
                  </>
                )}
                <br />
                {company.address.postalCode} {company.address.city}
                <br />
                {company.address.country}
              </Text>
            </div>

            <Text className="mt-4 text-xs text-slate-400">
              Les prestations de sécurité proposées s&apos;inscrivent dans le respect du
              cadre réglementaire français applicable aux activités privées de sécurité
              (Livre VI du Code de la sécurité intérieure).
            </Text>
          </aside>
        </section>
      </div>
    </div>
    </>
  );
}