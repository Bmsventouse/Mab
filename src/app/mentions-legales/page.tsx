import type { Metadata } from 'next';
import { company } from '../../content/company';
import { buildMetadata } from '../../lib/seo';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';
import { Heading } from '../../components/atoms/Heading';
import { Text } from '../../components/atoms/Text';

export const metadata: Metadata = buildMetadata({
  title: 'Mentions légales – MAB SECURITE',
  description:
    'Mentions légales du site de MAB SECURITE : informations relatives à la société éditrice, à son activité de sécurité privée et au cadre juridique applicable.',
  canonicalPath: '/mentions-legales',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Mentions légales', path: '/mentions-legales' },
]);

export default function MentionsLegalesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList) des mentions légales
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="section">
        <div className="section-inner space-y-8 text-sm text-slate-200">
          <header className="space-y-3">
            <Breadcrumbs
              items={[
                { href: '/', label: 'Accueil' },
                { href: '/mentions-legales', label: 'Mentions légales' },
              ]}
            />
            <p className="badge">Informations juridiques</p>
            <Heading level={1} className="text-2xl sm:text-3xl">
              Mentions légales
            </Heading>
          </header>

        <section className="space-y-3">
          <Heading level={2} className="text-base">
            Éditeur du site
          </Heading>
          <Text className="text-sm">
            Nom&nbsp;: {company.name}
            <br />
            Forme&nbsp;: {company.legalForm}
            <br />
            Activité&nbsp;: Sécurité privée
            <br />
            Code NAF / APE&nbsp;: {company.nafApe}
            <br />
            SIREN&nbsp;: {company.siren}
            <br />
            SIRET&nbsp;: {company.siret}
            <br />
            TVA intracommunautaire&nbsp;: {company.vatNumber}
            <br />
            Capital social&nbsp;: {company.shareCapital}
            <br />
            Adresse&nbsp;:
            <br />
            {company.address.line1}
            <br />
            {company.address.line2 && (
              <>
                {company.address.line2}
                <br />
              </>
            )}
            {company.address.postalCode} {company.address.city}
            <br />
            {company.address.country}
            <br />
            Date de création&nbsp;: {company.creationDate}
          </Text>
        </section>

        <section className="space-y-3 text-xs text-slate-400">
          <Heading level={2} className="text-sm">
            Propriété intellectuelle
          </Heading>
          <Text className="text-xs text-slate-400">
            Le présent site et l’ensemble de ses contenus (textes, éléments graphiques,
            photographies, logos, icônes, structure générale des pages, etc.) sont la
            propriété de {company.name}, sauf mentions contraires. Toute reproduction,
            représentation, modification, publication, adaptation totale ou partielle des
            éléments du site, par quelque moyen ou procédé que ce soit, est interdite sans
            l’autorisation préalable et écrite de la société.
          </Text>
        </section>

        <section className="space-y-3 text-xs text-slate-400">
          <Heading level={2} className="text-sm">
            Responsabilité
          </Heading>
          <Text className="text-xs text-slate-400">
            Les informations communiquées sur ce site le sont à titre indicatif. {company.name}{' '}
            s’efforce d’en assurer l’exactitude et la mise à jour, sans toutefois pouvoir en
            garantir l’exhaustivité ni l’absence d’erreurs. La société ne saurait être tenue
            pour responsable des dommages directs ou indirects pouvant résulter de
            l’accès au site ou de l’utilisation des informations qui y figurent.
          </Text>
        </section>
      </div>
    </div>
    </>
  );
}