import type { Metadata } from 'next';
import { company } from '../../content/company';
import { buildMetadata } from '../../lib/seo';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';
import { Heading } from '../../components/atoms/Heading';
import { Text } from '../../components/atoms/Text';

export const metadata: Metadata = buildMetadata({
  title: 'Politique de confidentialité – MAB SECURITE',
  description:
    'Politique de confidentialité de MAB SECURITE concernant les données personnelles collectées via le site et le formulaire de contact.',
  canonicalPath: '/politique-de-confidentialite',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Politique de confidentialité', path: '/politique-de-confidentialite' },
]);

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList) de la politique de confidentialité
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="section">
        <div className="section-inner space-y-8 text-sm text-slate-200">
          <header className="space-y-3">
            <Breadcrumbs
              items={[
                { href: '/', label: 'Accueil' },
                { href: '/politique-de-confidentialite', label: 'Politique de confidentialité' },
              ]}
            />
            <p className="badge">Données personnelles</p>
            <Heading level={1} className="text-2xl sm:text-3xl">
              Politique de confidentialité
            </Heading>
          </header>

        <section className="space-y-3 text-xs text-slate-300">
          <Heading level={2} className="text-sm">
            1. Objet de la politique
          </Heading>
          <Text className="text-xs text-slate-300">
            La présente politique a pour objet d&apos;informer les utilisateurs du site de{' '}
            {company.name} sur les traitements de données personnelles réalisés dans le
            cadre des formulaires de contact et de la navigation.
          </Text>
        </section>

        <section className="space-y-3 text-xs text-slate-300">
          <Heading level={2} className="text-sm">
            2. Données collectées et finalités
          </Heading>
          <Text className="text-xs text-slate-300">
            Les données collectées via le <strong>formulaire de contact</strong> (identité,
            coordonnées, nom de la société, informations relatives au projet) sont utilisées
            exclusivement pour&nbsp;:
          </Text>
          <ul className="ml-4 list-disc space-y-1">
            <li>prendre connaissance de votre demande ;</li>
            <li>vous recontacter et échanger sur votre besoin ;</li>
            <li>établir une proposition commerciale le cas échéant.</li>
          </ul>
          <Text className="mt-2 text-xs text-slate-300">
            Les données collectées via le <strong>formulaire de candidature agents</strong>{' '}
            (nom, prénom, coordonnées, ville ou zone géographique, informations relatives à
            l&apos;expérience et aux habilitations de sécurité) sont utilisées pour&nbsp;:
          </Text>
          <ul className="ml-4 list-disc space-y-1">
            <li>étudier votre candidature ;</li>
            <li>vous recontacter le cas échéant pour des missions adaptées à votre profil ;</li>
            <li>
              constituer un vivier d&apos;agents de sécurité mobilisable en fonction des besoins
              opérationnels.
            </li>
          </ul>
        </section>

        <section className="space-y-3 text-xs text-slate-300">
          <Heading level={2} className="text-sm">
            3. Fondement juridique des traitements
          </Heading>
          <Text className="text-xs text-slate-300">
            Les traitements de données mis en œuvre reposent sur l&apos;intérêt légitime de{' '}
            {company.name} à répondre aux demandes qui lui sont adressées, à organiser ses
            prestations et à constituer un vivier d&apos;intervenants. Ils reposent également
            sur votre consentement lorsque vous soumettez volontairement vos informations via
            les formulaires du site.
          </Text>
        </section>

        <section className="space-y-3 text-xs text-slate-300">
          <Heading level={2} className="text-sm">
            4. Destinataires et durée de conservation
          </Heading>
          <Text className="text-xs text-slate-300">
            Les données communiquées sont destinées aux équipes en charge du suivi
            commercial et opérationnel de {company.name} et, pour les candidatures agents, aux
            personnes en charge du recrutement et de la planification des missions. Elles
            peuvent être hébergées dans des systèmes de messagerie professionnelle et dans
            des bases de données sécurisées fournies par les prestataires d&apos;hébergement et
            de services cloud de {company.name}.
          </Text>
          <Text className="text-xs text-slate-300">
            Les données de contact sont conservées pendant la durée nécessaire à
            l&apos;instruction de votre demande, puis pendant la durée légale de prescription
            applicable aux relations commerciales. Les candidatures agents peuvent être
            conservées dans un vivier pendant une durée compatible avec cette finalité, dans
            la limite des durées de prescription applicables.
          </Text>
        </section>

        <section className="space-y-3 text-xs text-slate-300">
          <Heading level={2} className="text-sm">
            5. Vos droits sur les données vous concernant
          </Heading>
          <Text className="text-xs text-slate-300">
            Conformément à la réglementation en vigueur, vous disposez d&apos;un droit
            d&apos;accès, de rectification, d&apos;opposition, de limitation du traitement
            et d&apos;effacement des données vous concernant. Vous pouvez exercer ces
            droits en vous adressant à {company.contact.email} ou par courrier à
            l&apos;adresse du siège de la société.
          </Text>
        </section>

        <section className="space-y-3 text-xs text-slate-300">
          <Heading level={2} className="text-sm">
            6. Sécurité des données
          </Heading>
          <Text className="text-xs text-slate-300">
            {company.name} met en œuvre des mesures techniques et organisationnelles
            raisonnables pour préserver la confidentialité et l&apos;intégrité des
            informations qui lui sont confiées, dans la limite de ses moyens et de la
            nature des données traitées.
          </Text>
        </section>

        <section className="space-y-3 text-xs text-slate-300">
          <Heading level={2} className="text-sm">
            7. Cookies et traceurs
          </Heading>
          <Text className="text-xs text-slate-300">
            Le site utilise des cookies et traceurs strictement nécessaires à son
            fonctionnement (par exemple pour la sécurité ou la mémorisation de certaines
            préférences d&apos;affichage). Avec votre accord, des traceurs de mesure
            d&apos;audience et des tags tiers (tels que Google Tag Manager) peuvent également
            être utilisés afin d&apos;améliorer la qualité des services et la compréhension de
            l&apos;utilisation du site.
          </Text>
          <Text className="text-xs text-slate-300">
            Aucune mesure d&apos;audience ni aucun traceur marketing n&apos;est activé sans votre
            consentement préalable. Une bannière d&apos;information vous permet d&apos;accepter ou
            de refuser ces traceurs. Vous pouvez également paramétrer votre navigateur pour
            limiter ou supprimer les cookies.
          </Text>
        </section>
      </div>
    </div>
    </>
  );
}