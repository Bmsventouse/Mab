'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { company } from '../../content/company';

interface AgentApplicationData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  zone: string;
  hasCnaps: boolean;
  ssiapLevel: string;
  experience: string;
  consent: boolean;
}

interface AgentFormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  city?: string;
  consent?: string;
}

export const AgentApplicationForm = () => {
  const [form, setForm] = useState<AgentApplicationData>({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    zone: '',
    hasCnaps: false,
    ssiapLevel: '',
    experience: '',
    consent: false,
  });

  const [errors, setErrors] = useState<AgentFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: AgentFormErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = 'Nom et prénom requis.';
    if (!form.phone.trim()) newErrors.phone = 'Téléphone requis.';
    if (!form.email.trim()) {
      newErrors.email = 'Adresse e-mail requise.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Adresse e-mail invalide.';
    }
    if (!form.city.trim()) newErrors.city = 'Ville ou zone géographique requise.';
    if (!form.consent) {
      newErrors.consent =
        'Vous devez accepter le traitement de vos données pour pouvoir envoyer ce formulaire.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, type } = event.target;
    const value =
      type === 'checkbox' ? (event.target as HTMLInputElement).checked : event.target.value;

    setForm((current) => ({ ...current, [name]: value }));

    if (errors[name as keyof AgentFormErrors]) {
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
      const response = await fetch('/api/agents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l’envoi du formulaire.');
      }

      setHasSubmitted(true);
      setForm({
        fullName: '',
        phone: '',
        email: '',
        city: '',
        zone: '',
        hasCnaps: false,
        ssiapLevel: '',
        experience: '',
        consent: false,
      });
    } catch {
      setSubmitError(
        "Une erreur est survenue lors de l'envoi de votre candidature. Vous pouvez également nous contacter directement par téléphone ou par e-mail.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (hasSubmitted) {
    return (
      <div className="card p-8 text-sm md:p-10">
        <h2 className="text-lg font-semibold text-slate-50 md:text-xl">
          Votre candidature a bien été envoyée
        </h2>
        <p className="mt-3 text-muted">
          Nous accusons réception de votre message. {company.name} conserve vos coordonnées
          dans un vivier d&apos;agents de sécurité et pourra vous recontacter pour des missions
          correspondant à votre profil et à votre zone géographique.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 text-sm md:p-8" noValidate>
      <div className="mb-6 space-y-1">
        <h2 className="text-lg font-semibold text-slate-50 md:text-xl">
          Candidature agent de sécurité
        </h2>
        <p className="text-muted">
          Ce formulaire est destiné aux agents de sécurité et profils SSIAP qui souhaitent
          être recontactés pour des missions ponctuelles ou récurrentes sur les zones
          d&apos;intervention de {company.name}. Les champs marqués d&apos;une astérisque sont
          obligatoires.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
            Nom et prénom*
          </label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className={`mt-1 w-full rounded-lg border bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
              errors.fullName ? 'border-red-500/70' : 'border-slate-700'
            }`}
            placeholder="Nom et prénom"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>
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
            placeholder="Numéro joignable"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
            E-mail*
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`mt-1 w-full rounded-lg border bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
              errors.email ? 'border-red-500/70' : 'border-slate-700'
            }`}
            placeholder="prenom.nom@email.fr"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
            Ville / zone géographique*
          </label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            className={`mt-1 w-full rounded-lg border bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
              errors.city ? 'border-red-500/70' : 'border-slate-700'
            }`}
            placeholder="Ex. : Marseille, Montpellier, Paris, Nîmes / Gard…"
          />
          {errors.city && (
            <p className="mt-1 text-xs text-red-400">{errors.city}</p>
          )}
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
            Zone préférentielle
          </label>
          <select
            name="zone"
            value={form.zone}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          >
            <option value="">Sélectionnez une zone (optionnel)</option>
            <option value="france-nord">France Nord – Paris &amp; Île-de-France</option>
            <option value="france-sud">
              France Sud – Marseille, Montpellier, Nîmes / Gard, Côte méditerranéenne
            </option>
          </select>
        </div>

        <div className="grid gap-2 md:grid-cols-2">
          <div>
            <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
              Carte professionnelle (CNAPS)
            </label>
            <div className="mt-1 flex items-center gap-2 text-xs text-slate-300">
              <label className="inline-flex items-center gap-1">
                <input
                  type="checkbox"
                  name="hasCnaps"
                  checked={form.hasCnaps}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
                />
                <span>Je dispose d&apos;une carte professionnelle en cours de validité</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
              Niveau SSIAP
            </label>
            <select
              name="ssiapLevel"
              value={form.ssiapLevel}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="">Aucun / non applicable</option>
              <option value="1">SSIAP 1</option>
              <option value="2">SSIAP 2</option>
              <option value="3">SSIAP 3</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
          Expérience et disponibilités (optionnel)
        </label>
        <textarea
          name="experience"
          value={form.experience}
          onChange={handleChange}
          rows={5}
          className="mt-1 w-full resize-y rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          placeholder="Ex. : expériences BTP, tertiaire, logistique, événements ; disponibilités (jour/nuit, semaine/week-end)…"
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
            étudier ma candidature, me recontacter et, le cas échéant, me proposer des
            missions correspondant à mon profil. Conformément à la réglementation en
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

      <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4 text-xs text-slate-400">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-emerald-700"
        >
          {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
          Envoyer ma candidature
        </button>
        <p className="hidden text-[11px] text-slate-500 md:block">
          Les informations transmises ne sont pas partagées avec des tiers à des fins
          commerciales.
        </p>
      </div>
    </form>
  );
};