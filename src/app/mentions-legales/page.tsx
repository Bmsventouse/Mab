import type { Metadata } from 'next';
import { company } from '../../content/company';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Mentions légales – MAB SECURITE',
  description:
    'Mentions légales du site de MAB SECURITE : informations relatives à la société éditrice, à son activité de sécurité privée et au cadre juridique applicable.',
  canonicalPath: '/mentions-legales',
});

export default function MentionsLegalesPage() {
  return (
    <div className="section">
      <div className="section-inner space-y-8 text-sm text-slate-200">
        <header className="space-y-3">
          <p className="badge">Informations juridiques</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Mentions légales
          </h1>
        </header>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-slate-50">Éditeur du site</h2>
          <p>
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
          </p>
        </section>

        <section className="space-y-3 text-xs text-slate-400">
          <h2 className="text-sm font-semibold text-slate-50">Propriété intellectuelle</h2>
          <p>
            Le présent site et l’ensemble de ses contenus (textes, éléments graphiques,
            photographies, logos, icônes, structure générale des pages, etc.) sont la
            propriété de {company.name}, sauf mentions contraires. Toute reproduction,
            représentation, modification, publication, adaptation totale ou partielle des
            éléments du site, par quelque moyen ou procédé que ce soit, est interdite sans
            l’autorisation préalable et écrite de la société.
          </p>
        </section>

        <section className="space-y-3 text-xs text-slate-400">
          <h2 className="text-sm font-semibold text-slate-50">Responsabilité</h2>
          <p>
            Les informations communiquées sur ce site le sont à titre indicatif. {company.name}{' '}
            s’efforce d’en assurer l’exactitude et la mise à jour, sans toutefois pouvoir en
            garantir l’exhaustivité ni l’absence d’erreurs. La société ne saurait être tenue
            pour responsable des dommages directs ou indirects pouvant résulter de
            l’accès au site ou de l’utilisation des informations qui y figurent.
          </p>
        </section>
      </div>
    </div>
  );
}