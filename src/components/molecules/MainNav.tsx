import { NavLink } from './NavLink';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/prestations', label: 'Prestations' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/securite-privee-paris', label: 'Paris / IDF' },
  { href: '/securite-privee-marseille', label: 'Marseille' },
  { href: '/securite-privee-montpellier', label: 'Montpellier' },
  { href: '/securite-privee-nimes', label: 'Nîmes / Gard' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export function MainNav() {
  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href} label={item.label} />
      ))}
    </nav>
  );
}