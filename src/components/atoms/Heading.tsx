import type { ReactNode } from 'react';
import clsx from 'clsx';

type HeadingLevel = 1 | 2 | 3 | 4;

interface HeadingProps {
  level?: HeadingLevel;
  children: ReactNode;
  className?: string;
}

const base = 'font-semibold tracking-tight text-slate-50 scroll-m-20';

const levelStyles: Record<HeadingLevel, string> = {
  1: 'text-3xl sm:text-4xl lg:text-5xl font-bold',
  2: 'text-2xl sm:text-3xl',
  3: 'text-xl sm:text-2xl',
  4: 'text-lg sm:text-xl',
};

export function Heading({ level = 1, children, className }: HeadingProps) {
  const Tag = `h${level}` as const;
  return <Tag className={clsx(base, levelStyles[level], className)}>{children}</Tag>;
}