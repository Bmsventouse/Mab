import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { company } from '../../content/company';
import { buildMetadata } from '../../lib/seo';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Galerie photo – Exemples de dispositifs de sécurité MAB SECURITE',
  description:
    "Galerie photo illustrant les contextes d'intervention de MAB SECURITE : chantiers BTP, entrepôts logistiques, centres commerciaux, événements et sites tertiaires.",
  canonicalPath: '/galerie',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Galerie photo', path: '/galerie' },
]);

const allImages = [
  {
    src: '/images/securite-chantier-btp-nuit.png',
    label: 'Illustration de gardiennage de chantier BTP de nuit',
  },
  {
    src: '/images/securite-entrepot-plateforme-logistique.png',
    label: 'Illustration de sécurité pour entrepôt ou plateforme logistique',
  },
  {
    src: '/images/securite-evenementiel-salon-professionnel.png',
    label: 'Illustration de sécurité événementielle pour salon ou convention',
  },
  {
    src: '/images/securite-siege-social-site-tertiaire.png',
    label: 'Illustration de sécurité pour un site tertiaire ou administratif',
  },
  {
    src: '/images/securite-privee-btp-01.png',
    label: 'Illustration de sécurité privée pour chantier BTP (vue 1)',
  },
  {
    src: '/images/securite-privee-btp-02.png',
    label: 'Illustration de sécurité privée pour chantier BTP (vue 2)',
  },
  {
    src: '/images/securite-privee-entrepot-logistique-01.png',
    label: 'Illustration de sécurité privée pour entrepôt logistique (vue 1)',
  },
  {
    src: '/images/securite-privee-entrepot-logistique-02.png',
    label: 'Illustration de sécurité privée pour entrepôt logistique (vue 2)',
  },
  {
    src: '/images/securite-privee-centre-commercial-retail-01.png',
    label: 'Illustration de sécurité pour centre commercial et retail (vue 1)',
  },
  {
    src: '/images/securite-privee-centre-commercial-retail-02.png',
    label: 'Illustration de sécurité pour centre commercial et retail (vue 2)',
  },
  {
    src: '/images/securite-evenementiel-exterieur-01.png',
    label: 'Illustration de sécurité événementielle en extérieur (vue 1)',
  },
  {
    src: '/images/securite-evenementiel-exterieur-02.png',
    label: 'Illustration de sécurité événementielle en extérieur (vue 2)',
  },
  {
    src: '/images/securite-siege-social-accueil-01.png',
    label: 'Illustration de sécurité à l’accueil d’un siège social (vue 1)',
  },
  {
    src: '/images/securite-siege-social-accueil-02.png',
    label: 'Illustration de sécurité à l’accueil d’un siège social (vue 2)',
  },
  {
    src: '/images/securite-rondes-nuit-01.png',
    label: 'Illustration de rondes de sécurité de nuit sur site professionnel (vue 1)',
  },
  {
    src: '/images/securite-rondes-nuit-02.png',
    label: 'Illustration de rondes de sécurité de nuit sur site professionnel (vue 2)',
  },
  {
    src: '/images/securite-videosurveillance-pc-01.png',
    label: 'Illustration de PC de vidéosurveillance et écrans de contrôle (vue 1)',
  },
  {
    src: '/images/securite-videosurveillance-pc-02.png',
    label: 'Illustration de PC de vidéosurveillance et écrans de contrôle (vue 2)',
  },
  {
    src: '/images/securite-agent-securite-01.png',
    label: 'Illustration d’agent de sécurité en tenue professionnelle (vue 1)',
  },
  {
    src: '/images/securite-agent-securite-02.png',
    label: 'Illustration d’agent de sécurité en tenue professionnelle (vue 2)',
  },
  {
    src: '/images/securite-poste-controle-01.png',
    label: 'Illustration de poste de contrôle et supervision de site (vue 1)',
  },
  {
    src: '/images/securite-poste-controle-02.png',
    label: 'Illustration de poste de contrôle et supervision de site (vue 2)',
  },
];

export default function GaleriePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList) de la galerie
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="section">
        <div className="section-inner space-y-6">
          <Breadcrumbs
            items={[
              { href: '/', label: 'Accueil' },
              { href: '/galerie', label: 'Galerie photo' },
            ]}
          />
          <header className="space-y-3">
            <p className="badge">Galerie photo</p>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Exemples de contextes d&apos;intervention sécurisés par {company.name}
            </h1>
            <p className="max-w-2xl text-sm text-muted">
              Cette galerie présente des visuels illustrant les principaux contextes pour lesquels{' '}
              {company.name} conçoit et pilote des dispositifs de sécurité&nbsp;: chantiers BTP,
              entrepôts et plateformes logistiques, centres commerciaux et retail, événements
              professionnels et sites tertiaires ou administratifs.
            </p>
          </header>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {allImages.map((item) => (
              <figure
                key={item.src}
                className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  width={1200}
                  height={720}
                  loading="lazy"
                  className="h-40 w-full object-cover opacity-90"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-slate-950/75 px-2 py-1">
                  <span className="text-[10px] text-slate-200">{item.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="text-[11px] text-slate-400">
            Ces visuels sont fournis à titre d&apos;illustration. Pour des exemples concrets de
            dispositifs de sécurité déployés sur vos sites (chantiers, entrepôts, centres
            commerciaux ou événements), n&apos;hésitez pas à nous contacter via la page{' '}
            <Link href="/contact#formulaire-devis" className="underline-offset-2 hover:underline">
              Contact &amp; demande de devis
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}