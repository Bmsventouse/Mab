'use client';

import type { HTMLAttributes } from 'react';
import { useConsent } from '../layout/ConsentProvider';

type CookiePreferencesLinkProps = HTMLAttributes<HTMLButtonElement>;

/**
 * Petit lien/bouton permettant de rouvrir les préférences cookies.
 * Utilisé dans le pied de page.
 */
export function CookiePreferencesLink(props: CookiePreferencesLinkProps) {
  const { setStatus } = useConsent();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(event);
    }
    // Remettre le statut à 'unknown' pour réafficher la bannière
    setStatus('unknown');
  };

  return (
    <button
      type="button"
      {...props}
      onClick={handleClick}
      className={
        props.className ??
        'underline-offset-2 hover:underline text-slate-400 hover:text-slate-200'
      }
    >
      Gérer mes cookies
    </button>
  );
}