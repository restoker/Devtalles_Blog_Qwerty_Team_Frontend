'use client';
import { cn } from '@/lib/utils';
import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  position?: 'left' | 'right';
  colorClassName?: string;
};

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  children,
  position = 'right',
  colorClassName = 'bg-primary',
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';

  const borderPositionClass = position === 'left' ? '-bottom-1 -left-1' : '-bottom-1 -right-1';
  const hoverTranslateClass = position === 'left' ? 'group-hover:-translate-y-1 group-hover:translate-x-1' : 'group-hover:-translate-y-1 group-hover:-translate-x-1';

  return (
    <Component
      className={cn(
        'relative group w-full',
        className
      )}
      {...(rest as any)}
    >
      <span className={cn(
        "absolute z-0 h-[calc(100%+4px)] w-[calc(100%+4px)] rounded-lg",
        borderPositionClass,
        colorClassName
      )}></span>
      <span className={cn(
        "relative z-10 flex items-center justify-center rounded-lg bg-[#2d2d2d] px-4 py-3 text-white transition-transform duration-200",
        hoverTranslateClass
      )}>
        {children}
      </span>
    </Component>
  );
};

export default StarBorder;
