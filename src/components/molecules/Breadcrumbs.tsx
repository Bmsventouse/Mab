import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  href: string;
  label: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Small breadcrumb navigation component (fil d'Ariane).
 * Used on service and local pages to clarify the position in the site.
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items.length) return null;

  return (
    <nav aria-label="Fil d'Ariane" className="mb-3 text-xs text-slate-400">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.href}-${item.label}`} className="flex items-center gap-1">
              {isLast ? (
                <span aria-current="page" className="text-slate-300">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-emerald-300">
                  {item.label}
                </Link>
              )}
              {!isLast && <ChevronRight className="h-3 w-3 text-slate-500" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}