'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Shield, Phone } from 'lucide-react';
import { company } from '../../content/company';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/prestations', label: 'Prestations' },
  { href: '/securite-privee-paris', label: 'Paris / IDF' },
  { href: '/securite-privee-marseille', label: 'Marseille' },
  { href: '/securite-privee-nimes', label: 'Nîmes / Gard' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
              <Image
                src={company.branding.logoUrl}
                alt={`${company.name} - logo`}
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
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
        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-200 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3 py-2 transition-colors ${
                  isActive
                    ? 'text-emerald-400'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-slate-50'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-emerald-500" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${company.contact.phone.value}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-xs font-medium text-slate-100 transition-colors hover:border-emerald-500 hover:bg-slate-900 min-h-[44px]"
          >
            <Phone className="h-4 w-4 text-emerald-400" aria-hidden="true" />
            <span>{company.contact.phone.label}</span>
          </a>
          <Link
            href="/contact#formulaire-devis"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400 min-h-[44px]"
          >
            Demander un devis
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3.5 py-2 text-xs font-medium text-slate-100 min-h-[44px]"
          >
            <Phone className="h-3 w-3 text-emerald-400" aria-hidden="true" />
            Devis
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Ouvrir le menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 text-slate-100"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-slate-800/80 bg-slate-950/95 md:hidden">
          <div className="section-inner flex flex-col gap-1 py-3 text-sm">
            {navItems.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
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
      )}
    </header>
  );
};