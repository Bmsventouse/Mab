import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { company } from '../../content/company';
import { ContactForm } from '../../components/forms/ContactForm';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact MAB SECURITE – Devis sécurité BTP & gardiennage de sites',
  description:
    "Contactez MAB SECURITE pour toute demande de devis ou d'information concernant le gardiennage de chantiers BTP, la surveillance de sites professionnels et la sécurisation d'événements à Paris, Marseille, Montpellier, Nîmes et sur la côte sud.",
  canonicalPath: '/contact',
});

export default function ContactPage() {
  return (
    <div className="section">
      <div className="section-inner space-y-10">
        <header className="space-y-3">
          <p className="badge">Contact</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Échangeons sur vos besoins en sécurité
          </h1>
          <p className="max-w-2xl text-sm text-muted">
            Pour toute question, étude ou demande de devis, complétez le formulaire ci-dessous
            ou contactez-nous directement par téléphone ou par e-mail. Nous analysons chaque
            demande de manière individualisée afin de proposer un dispositif cohérent avec
            votre contexte et vos priorités, qu&apos;il s&apos;agisse d&apos;un{' '}
            <strong>devis d&apos;agent de sécurité à Marseille, Montpellier ou Nice</strong>,
            d&apos;un <strong>dispositif de gardiennage en Île-de-France</strong>, d&apos;un
            besoin de <strong>sécurité des entrepôts et plateformes logistiques</strong>, de{' '}
            <strong>sécurité centres commerciaux &amp; retail</strong>, de{' '}
            <strong>sécurité événementielle à Cannes</strong>, de{' '}
            <strong>vidéosurveillance d&apos;entreprise à Paris</strong> ou d&apos;un{' '}
            <strong>audit SSIAP pour IGH</strong>. {company.name} intervient exclusivement
            pour des clients professionnels et ne propose pas de prestations de sécurité
            pour des particuliers ou des habitations privées.
          </p>
        </header>

        <section className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-200 sm:grid-cols-3">
          <div className="space-y-1.5">
            <p className="text-[13px] font-semibold text-slate-50">
              Direction générale
            </p>
            <p>
              La direction générale de {company.name} supervise l&apos;ensemble des
              dispositifs de sécurité déployés et valide les engagements pris auprès des
              clients.
            </p>
            <p className="text-slate-400">
              Les interlocuteurs opérationnels sont ensuite désignés par zone
              géographique pour assurer un suivi de proximité des missions.
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-[13px] font-semibold text-slate-50">
              France Nord – Paris &amp; Île-de-France
            </p>
            <p>
              Responsable opérationnel&nbsp;: <span className="font-semibold">Béna</span>.
            </p>
            <p className="text-slate-400">
              Zone couverte&nbsp;: Paris et Île-de-France (75, 92, 93, 94, 95, 77, 78, 91).
            </p>
            <p className="text-[11px] text-slate-500">
              Les coordonnées directes de la zone Nord sont communiquées aux interlocuteurs
              en charge de sites situés à Paris et en Île-de-France.
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-[13px] font-semibold text-slate-50">
              France Sud – Marseille, Montpellier, Nîmes / Gard
            </p>
            <p>
              Responsable opérationnel&nbsp;: <span className="font-semibold">Sofiane</span>.
            </p>
            <p className="text-slate-400">
              Zone couverte&nbsp;: Marseille, Montpellier, Nîmes / Gard et côte
              méditerranéenne.
            </p>
            <p className="text-[11px] text-slate-500">
              Téléphone direct zone Sud&nbsp;:{' '}
              <a href="tel:+33759585023" className="hover:text-emerald-300">
                +33 7 59 58 50 23
              </a>{' '}
              (Sofiane).
            </p>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <section id="formulaire-devis">
            <ContactForm />
          </section>

          <aside className="space-y-4 text-sm text-slate-200">
            <div className="card p-6">
              <h2 className="text-sm font-semibold text-slate-50">
                Coordonnées de MAB SECURITE
              </h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <div>
                    <p>{company.address.line1}</p>
                    {company.address.line2 && <p>{company.address.line2}</p>}
                    <p>
                      {company.address.postalCode} {company.address.city}
                    </p>
                    <p>{company.address.country}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <a
                    href={`tel:${company.contact.phone.value}`}
                    className="hover:text-emerald-300"
                  >
                    {company.contact.phone.label}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="hover:text-emerald-300"
                  >
                    {company.contact.email}
                  </a>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted">
                Zone d’intervention&nbsp;: {company.areaServed}
              </p>
            </div>

            <div className="card-muted p-6 text-xs text-slate-300">
              <p className="font-medium text-slate-100">
                Pour les demandes sensibles ou urgentes
              </p>
              <p className="mt-2">
                Certaines missions de sécurité impliquent des informations confidentielles
                (sites sensibles, contraintes particulières, personnalités, etc.). Dans ce
                cas, nous vous invitons à privilégier un échange direct par téléphone afin
                de cadrer précisément le besoin.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}