'use client';

import { useState } from 'react';
import { Loader2, Mail, Phone } from 'lucide-react';
import { company, services } from '../../content/company';
import { trackEvent } from '../../lib/analytics';

interface ContactFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  consent: boolean;
}

interface FormErrors {
  companyName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  consent?: string;
}

export const ContactForm = () => {
  const [form, setForm] = useState<ContactFormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    date: '',
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.companyName.trim()) newErrors.companyName = 'Raison sociale requise.';
    if (!form.contactName.trim()) newErrors.contactName = 'Nom et prénom requis.';
    if (!form.phone.trim()) newErrors.phone = 'Téléphone requis.';
    if (!form.email.trim()) {
      newErrors.email = 'Adresse e-mail requise.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Adresse e-mail invalide.';
    }
    if (!form.subject) newErrors.subject = 'Veuillez sélectionner un type de besoin.';
    if (!form.consent)
      newErrors.consent =
        'Vous devez accepter le traitement de vos données pour pouvoir envoyer ce formulaire.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, type } = event.target;
    const value =
      type === 'checkbox'
        ? (event.target as HTMLInputElement).checked
        : event.target.value;

    setForm((current) => ({ ...current, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l’envoi du formulaire.');
      }

      trackEvent({
        event: 'lead_submitted',
        category: 'contact',
        action: 'submit_form',
        label: form.subject || 'contact',
      });

      setHasSubmitted(true);
      setForm({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        date: '',
        consent: false,
      });
    } catch {
      setSubmitError(
        "Une erreur est survenue lors de l'envoi de votre demande. Vous pouvez également nous contacter directement par téléphone ou par e-mail.",
      );
      trackEvent({
        event: 'lead_submit_error',
        category: 'contact',
        action: 'submit_form_error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (hasSubmitted) {
    return (
      <div className="card p-8 text-sm md:p-10">
        <h2 className="text-lg font-semibold text-slate-50 md:text-xl">
          Votre demande a bien été envoyée
        </h2>
        <p className="mt-3 text-muted">
          Nous accusons réception de votre message. Un interlocuteur MAB SECURITE vous
          recontactera dans les meilleurs délais pour qualifier votre besoin et vous
          proposer un devis.
        </p>
        <div className="mt-6 space-y-2 text-sm text-slate-200">
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
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 text-sm md:p-8" noValidate>
      <div className="mb-6 space-y-1">
        <h2 className="text-lg font-semibold text-slate-50 md:text-xl">
          Demande de devis ou d&apos;analyse de besoin
        </h2>
        <p className="text-muted">
          Précisez le contexte de votre organisation, la nature de la mission et, le cas
          échéant, le cadre contractuel (appel d&apos;offres privé ou public, marché,
          convention), afin que nous puissions évaluer votre demande et vous proposer un
          dispositif adapté.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
            Société / organisation*
          </label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            className={`mt-1 w-full rounded-lg border bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
              errors.companyName ? 'border-red-500/70' : 'border-slate-700'
            }`}
            placeholder="Nom de votre société ou structure"
          />
          {errors.companyName && (
            <p className="mt-1 text-xs text-red-400">{errors.companyName}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
            Nom et prénom du contact*
          </label>
          <input
            type="text"
            name="contactName"
            value={form.contactName}
            onChange={handleChange}
            className={`mt-1 w-full rounded-lg border bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
              errors.contactName ? 'border-red-500/70' : 'border-slate-700'
            }`}
            placeholder="Nom et prénom"
          />
          {errors.contactName && (
            <p className="mt-1 text-xs text-red-400">{errors.contactName}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
            E-mail professionnel*
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`mt-1 w-full rounded-lg border bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
              errors.email ? 'border-red-500/70' : 'border-slate-700'
            }`}
            placeholder="prenom.nom@entreprise.fr"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
            Téléphone*
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={`mt-1 w-full rounded-lg border bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
              errors.phone ? 'border-red-500/70' : 'border-slate-700'
            }`}
            placeholder="Numéro joignable en journée"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
            Type de besoin*
          </label>
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={`mt-1 w-full rounded-lg border bg-slate-900/60 px-3 py-2 text-sm text-slate-100 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
              errors.subject ? 'border-red-500/70' : 'border-slate-700'
            }`}
          >
            <option value="">Sélectionnez une prestation</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
            <option value="autre">Autre besoin de sécurité</option>
          </select>
          {errors.subject && (
            <p className="mt-1 text-xs text-red-400">{errors.subject}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
            Période ou date souhaitée
          </label>
          <input
            type="text"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="Ex. : soirée du 15/06, mission 3 mois, etc."
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
          Contexte et informations utiles
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="mt-1 w-full resize-y rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          placeholder="Type de site ou d’événement, volumes de public attendus, contraintes horaires ou géographiques, etc."
        />
      </div>

      <div className="mt-5 space-y-3 text-xs text-slate-400">
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
            className="mt-0.5 h-4 w-4 rounded border-slate-600 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
          />
          <span>
            J’accepte que les informations saisies soient utilisées par {company.name} pour
            analyser ma demande et me recontacter. Conformément à la réglementation en
            vigueur, vous pouvez exercer vos droits d’accès, de rectification et
            d’opposition en nous contactant aux coordonnées indiquées sur ce site.
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-red-400">{errors.consent}</p>
        )}
      </div>

      {submitError && (
        <p className="mt-3 text-xs text-red-400">
          {submitError}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 border-t border-slate-800 pt-4 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-emerald-700"
        >
          {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
          Envoyer ma demande
        </button>
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
          <span>Ou contactez-nous directement :</span>
          <a
            href={`tel:${company.contact.phone.value}`}
            className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 text-slate-100 hover:border-emerald-500"
            onClick={() =>
              trackEvent({
                event: 'cta_click',
                category: 'contact',
                action: 'click_phone_contact',
                label: company.contact.phone.value,
                location: 'contact_page',
                destination: 'phone',
              })
            }
          >
            <Phone className="h-3 w-3 text-emerald-400" />
            {company.contact.phone.label}
          </a>
          <a
            href={`mailto:${company.contact.email}`}
            className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 text-slate-100 hover:border-emerald-500"
            onClick={() =>
              trackEvent({
                event: 'cta_click',
                category: 'contact',
                action: 'click_email_contact',
                label: company.contact.email,
                location: 'contact_page',
                destination: 'email',
              })
            }
          >
            <Mail className="h-3 w-3 text-emerald-400" />
            {company.contact.email}
          </a>
        </div>
      </div>
    </form>
  );
};