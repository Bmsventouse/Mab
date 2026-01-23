import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Layout container aligned with the existing `.section-inner` utility.
 * Can be used in new components while keeping visual consistency.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className ?? ''}`}>
      {children}
    </div>
  );
}