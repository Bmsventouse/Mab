export type ConsentStatus = 'unknown' | 'granted' | 'denied';

const STORAGE_KEY = 'mab_securite_consent';

interface StoredConsent {
  status: Exclude<ConsentStatus, 'unknown'>;
  updatedAt: string;
}

/**
 * Read consent from localStorage (client-side only).
 */
export function readConsentFromStorage(): ConsentStatus {
  if (typeof window === 'undefined') {
    return 'unknown';
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return 'unknown';
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.status === 'granted' || parsed.status === 'denied') {
      return parsed.status;
    }
    return 'unknown';
  } catch {
    return 'unknown';
  }
}

/**
 * Persist consent status to localStorage.
 */
export function saveConsentToStorage(status: Exclude<ConsentStatus, 'unknown'>) {
  if (typeof window === 'undefined') {
    return;
  }

  const value: StoredConsent = {
    status,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}