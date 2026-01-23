'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { readConsentFromStorage, saveConsentToStorage, type ConsentStatus } from '../../lib/consent';

interface ConsentContextValue {
  status: ConsentStatus;
  setStatus: (status: ConsentStatus) => void;
}

const ConsentContext = createContext<ConsentContextValue | undefined>(undefined);

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return ctx;
}

interface ConsentProviderProps {
  children: ReactNode;
}

/**
 * Provides consent status (CNIL-compliant cookie / tracking consent)
 * and manages the display of the cookie banner + GTM loading.
 */
export function ConsentProvider({ children }: ConsentProviderProps) {
  const [status, setStatus] = useState<ConsentStatus>('unknown');
  const [hasHydrated, setHasHydrated] = useState(false);

  // Hydrate consent status from localStorage on client
  useEffect(() => {
    const stored = readConsentFromStorage();
    setStatus(stored);
    setHasHydrated(true);
  }, []);

  // Persist changes (only when status is granted/denied)
  useEffect(() => {
    if (status === 'granted' || status === 'denied') {
      saveConsentToStorage(status);
    }
  }, [status]);

  const value: ConsentContextValue = {
    status,
    setStatus,
  };

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {hasHydrated && (
        <>
          <GtmLoader />
          <CookieBanner />
        </>
      )}
    </ConsentContext.Provider>
  );
}

/**
 * Loads Google Tag Manager only si l'utilisateur a donné son consentement.
 * Le conteneur GTM est fourni via NEXT_PUBLIC_GTM_ID.
 */
interface MabWindow extends Window {
  mabGtmLoaded?: boolean;
  dataLayer?: Array<Record<string, unknown>>;
}

function GtmLoader() {
  const { status } = useConsent();

  useEffect(() => {
    if (status !== 'granted') {
      return;
    }

    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
    if (!gtmId) {
      return;
    }

    if (typeof window === 'undefined') {
      return;
    }

    const win = window as MabWindow;

    // Ne charger qu'une seule fois
    if (win.mabGtmLoaded) {
      return;
    }

    win.mabGtmLoaded = true;

    // Initialiser dataLayer
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({
      event: 'consent_granted',
      analytics_storage: 'granted',
    });

    // Injecter le script GTM
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    script.async = true;
    document.head.appendChild(script);
  }, [status]);

  return null;
}

/**
 * Cookie banner conforme aux recommandations CNIL :
 * - aucune traceur marketing / analytics avant consentement
 * - possibilité de tout accepter ou tout refuser avec une action équivalente
 * - information claire sur la finalité.
 */
function CookieBanner() {
  const { status, setStatus } = useConsent();

  const handleAccept = () => {
    setStatus('granted');
  };

  const handleReject = () => {
    setStatus('denied');
  };

  // Si le consentement est déjà donné ou refusé, ne pas afficher la bannière
  if (status !== 'unknown') {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-800 bg-slate-950/95">
      <div className="section-inner py-4 text-xs text-slate-200 sm:flex sm:items-center sm:justify-between sm:gap-6">
        <div className="space-y-1 sm:max-w-3xl">
          <p className="text-[13px] font-semibold text-slate-50">
            Gestion des cookies et traceurs
          </p>
          <p className="text-[11px] text-slate-300">
            Nous utilisons des cookies strictement nécessaires au fonctionnement du site. Avec votre
            accord, nous pouvons également utiliser des cookies de mesure d&apos;audience et des
            traceurs tiers (ex. Google Tag Manager) pour améliorer la qualité de nos services. Vous
            pouvez accepter ou refuser ces traceurs à tout moment.
          </p>
          <p className="text-[11px] text-slate-400">
            Aucun traceur de mesure d&apos;audience ou marketing n&apos;est déposé sans votre
            consentement, conformément aux recommandations de la CNIL.
          </p>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 sm:mt-0 sm:justify-end">
          <button
            type="button"
            onClick={handleReject}
            className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900 px-4 py-1.5 text-[11px] font-semibold text-slate-100 hover:border-slate-500"
          >
            Tout refuser
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-1.5 text-[11px] font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}