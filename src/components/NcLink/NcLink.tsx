import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import React from 'react';

import type { Route } from '@/routers/types';

export interface NcLinkProps {
  className?: string;
  colorClass?: string;
  href: Route;
  children: ReactNode;
}

const NcLink: FC<NcLinkProps> = ({
  className = 'font-medium',
  colorClass = 'text-primary-6000 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-6000',
  children,
  href,
}) => {
  return (
    <Link className={`NcLink ${colorClass} ${className}`} href={href}>
      {children}
    </Link>
  );
};

export default NcLink;
