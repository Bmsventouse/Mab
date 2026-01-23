'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface NavLinkProps {
  href: string;
  label: string;
}

export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={clsx(
        'relative rounded-full px-3 py-2 text-xs font-medium transition-colors',
        isActive
          ? 'text-emerald-400'
          : 'text-slate-300 hover:bg-slate-800 hover:text-slate-50',
      )}
    >
      {label}
      {isActive && (
        <span className="absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-emerald-500" />
      )}
    </Link>
  );
}