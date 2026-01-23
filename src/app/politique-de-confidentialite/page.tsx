import type { Metadata } from 'next';
import { company } from '../../content/company';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Politique de confidentialité – MAB SECURITE',
  description:
    'Politique de confidentialité de MAB SECURITE concernant les données personnelles collectées via le site et le formulaire de contact.',
  canonicalPath: '/politique-de-confidentialite',
});

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="section">
      <div className="section-inner space-y-8 text-sm text-slate-200">
        <header className="space-y-3">
          <p className="badge">Données personnelles</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Politique de confidentialité
          </h1>
        </header>

        <section className="space-y-3 text-xs text-slate-300">
          <h2 className="text-sm font-semibold text-slate-50">1. Objet de la politique</h2>
          <p>
            La présente politique a pour objet d&apos;informer les utilisateurs du site de{' '}
            {company.name} sur les traitements de données personnelles réalisés dans le
            cadre des formulaires de contact et de la navigation.
          </p>
        </section>

        <section className="space-y-3 text-xs text-slate-300">
          <h2 className="text-sm font-semibold text-slate-50">
            2. Données collectées et finalités
          </h2>
          <p>
            Les données collectées via le formulaire de contact (identité, coordonnées, nom
            de la société, informations relatives au projet) sont utilisées exclusivement
            pour&nbsp;:
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>prendre connaissance de votre demande ;</li>
            <li>vous recontacter et échanger sur votre besoin ;</li>
            <li>établir une proposition commerciale le cas échéant.</li>
          </ul>
        </section>

        <section className="space-y-3 text-xs text-slate-300">
          <h2 className="text-sm font-semibold text-slate-50">
            3. Fondement juridique des traitements
          </h2>
          <p>
            Les traitements de données mis en œuvre reposent sur l&apos;intérêt légitime de{' '}
            {company.name} à répondre aux demandes qui lui sont adressées et sur votre
            consentement lorsque vous soumettez volontairement vos informations via le
            formulaire.
          </p>
        </section>

        <section className="space-y-3 text-xs text-slate-300">
          <h2 className="text-sm font-semibold text-slate-50">
            4. Destinataires et durée de conservation
          </h2>
          <p>
            Les données communiquées sont destinées aux équipes en charge du suivi
            commercial et opérationnel de {company.name}. Elles sont conservées pendant la
            durée nécessaire à l&apos;instruction de votre demande, puis pendant la durée
            légale de prescription applicable aux relations commerciales.
          </p>
        </section>

        <section className="space-y-3 text-xs text-slate-300">
          <h2 className="text-sm font-semibold text-slate-50">
            5. Vos droits sur les données vous concernant
          </h2>
          <p>
            Conformément à la réglementation en vigueur, vous disposez d&apos;un droit
            d&apos;accès, de rectification, d&apos;opposition, de limitation du traitement
            et d&apos;effacement des données vous concernant. Vous pouvez exercer ces
            droits en vous adressant à {company.contact.email} ou par courrier à
            l&apos;adresse du siège de la société.
          </p>
        </section>

        <section className="space-y-3 text-xs text-slate-300">
          <h2 className="text-sm font-semibold text-slate-50">
            6. Sécurité des données
          </h2>
          <p>
            {company.name} met en œuvre des mesures techniques et organisationnelles
            raisonnables pour préserver la confidentialité et l&apos;intégrité des
            informations qui lui sont confiées, dans la limite de ses moyens et de la
            nature des données traitées.
          </p>
        </section>
      </div>
    </div>
  );
}