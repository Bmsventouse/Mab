import type { ReactNode } from 'react';
import clsx from 'clsx';

type TextVariant = 'body' | 'muted' | 'caption';

interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  className?: string;
}

export function Text({ children, variant = 'body', className }: TextProps) {
  const base = 'text-sm';
  const variants: Record<TextVariant, string> = {
    body: 'text-slate-200',
    muted: 'text-slate-400',
    caption: 'text-xs text-slate-500',
  };

  return <p className={clsx(base, variants[variant], className)}>{children}</p>;
}