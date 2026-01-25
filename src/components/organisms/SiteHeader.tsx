'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Shield, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { company } from '../../content/company';
import { MainNav } from '../molecules/MainNav';
import { Button } from '../atoms/Button';

/**
 * Top-level site header organism.
 * Wraps the existing header behaviour while reusing atomic components where relevant.
 */
export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Focus first item when menu opens and handle Escape key + focus trap
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    firstMobileLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        return;
      }

      if (event.key !== 'Tab') return;

      const container = mobileMenuRef.current;
      if (!container) return;

      const focusable = container.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-sm transition-colors ${
        isScrolled ? 'shadow-soft' : ''
      }`}
    >
      <div className="section-inner flex h-16 items-center justify-between gap-4 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/40">
            {company.branding.logoUrl ? (
              // Logo image (à condition que le fichier soit présent au chemin indiqué dans company.branding.logoUrl)
              <Image
                src={company.branding.logoUrl}
                alt={`${company.name} logo`}
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
                priority
              />
            ) : (
              <Shield className="h-5 w-5" aria-hidden="true" />
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-slate-200">
              {company.name}
            </span>
            <span className="text-xs text-slate-400">{company.branding.baseline}</span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <MainNav />

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${company.contact.phone.value}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs font-medium text-slate-100 transition-colors hover:border-emerald-500 hover:bg-slate-900"
          >
            <Phone className="h-4 w-4 text-emerald-400" aria-hidden="true" />
            <span>{company.contact.phone.label}</span>
          </a>
          <Link href="/contact#formulaire-devis">
            <Button className="text-xs">Demander un devis</Button>
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-100"
          >
            <Phone className="h-3 w-3 text-emerald-400" aria-hidden="true" />
            Devis
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 text-slate-100"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <>
          {/* Overlay to close the menu when clicking outside */}
          <button
            type="button"
            className="fixed inset-0 z-30 bg-black/40 md:hidden"
            aria-label="Fermer le menu"
            onClick={() => setIsOpen(false)}
          />
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            className="relative z-40 border-t border-slate-800/80 bg-slate-950/95 md:hidden"
          >
            <div className="section-inner flex flex-col gap-1 py-3 text-sm">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/prestations', label: 'Prestations' },
                { href: '/solutions', label: 'Solutions' },
                { href: '/securite-privee-paris', label: 'Paris / IDF' },
                { href: '/securite-privee-marseille', label: 'Marseille' },
                { href: '/securite-privee-montpellier', label: 'Montpellier' },
                { href: '/securite-privee-nimes', label: 'Nîmes / Gard' },
                { href: '/a-propos', label: 'À propos' },
                { href: '/contact', label: 'Contact' },
              ].map((item, index) => {
                const isActive =
                  item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    className={`rounded-lg px-3 py-2 ${
                      isActive
                        ? 'bg-slate-900 text-emerald-400'
                        : 'text-slate-200 hover:bg-slate-900/80 hover:text-slate-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact#formulaire-devis"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-950"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}