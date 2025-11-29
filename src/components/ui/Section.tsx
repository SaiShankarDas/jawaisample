import React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
  fullWidth?: boolean;
}

export const Section = ({ className, containerClassName, children, fullWidth = false, ...props }: SectionProps) => {
  return (
    <section className={cn('py-16 md:py-24', className)} {...props}>
      <div className={cn('mx-auto px-4 md:px-6', fullWidth ? 'w-full' : 'max-w-7xl', containerClassName)}>
        {children}
      </div>
    </section>
  );
};
