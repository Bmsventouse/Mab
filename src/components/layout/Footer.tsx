import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { company } from '../../content/company';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950">
      <div className="section-inner py-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Company */}
          <div className="space-y-3">
            <div className="text-sm font-semibold tracking-wide text-slate-100">
              {company.name}
            </div>
            <p className="text-sm text-slate-400">{company.shortDescription}</p>
            <div className="space-y-1 text-xs text-slate-500">
              <p>
                SIREN&nbsp;: {company.siren} – SIRET&nbsp;: {company.siret}
              </p>
              <p>Code NAF / APE&nbsp;: {company.nafApe}</p>
              <p>TVA intracommunautaire&nbsp;: {company.vatNumber}</p>
              <p>Capital social&nbsp;: {company.shareCapital}</p>
            </div>
          </div>

          {/* Contact & address */}
          <div className="space-y-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-slate-300">
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
            </div>

            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <a href={`tel:${company.contact.phone.value}`} className="hover:text-emerald-300">
                  {company.contact.phone.label}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <a
                  href={`mailto:${company.contact.email}`}
                  className="hover:text-emerald-300"
                >
                  {company.contact.email}
                </a>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              Zone d’intervention&nbsp;: {company.areaServed}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4 text-sm">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Navigation
              </div>
              <div className="mt-3 flex flex-col gap-1 text-slate-300">
                <Link href="/prestations" className="hover:text-emerald-300">
                  Prestations
                </Link>
                <Link href="/secteurs" className="hover:text-emerald-300">
                  Secteurs
                </Link>
                <Link href="/references" className="hover:text-emerald-300">
                  Références
                </Link>
                <Link href="/a-propos" className="hover:text-emerald-300">
                  À propos
                </Link>
                <Link href="/contact" className="hover:text-emerald-300">
                  Contact
                </Link>
                <Link href="/rejoindre-mab" className="hover:text-emerald-300">
                  Rejoindre MAB
                </Link>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Informations légales
              </div>
              <div className="mt-3 flex flex-col gap-1 text-slate-300">
                <Link href="/mentions-legales" className="hover:text-emerald-300">
                  Mentions légales
                </Link>
                <Link
                  href="/politique-de-confidentialite"
                  className="hover:text-emerald-300"
                >
                  Politique de confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 md:flex-row md:items-center">
          <p>
            © {year} {company.name}. Tous droits réservés.
          </p>
          <p>Site vitrine institutionnel – Sécurité privée B2B.</p>
        </div>
      </div>
    </footer>
  );
};