import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import type { TaxonomyType } from '@/data/types';

export interface TagProps {
  className?: string;
  tag: TaxonomyType;
  hideCount?: boolean;
}

const Tag: FC<TagProps> = ({ className = '', tag, hideCount = false }) => {
  return (
    <Link
      className={`Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 ${className}`}
      href={tag.href}
    >
      {`${tag.name}`}
      {!hideCount && (
        <span className="text-xs font-normal"> ({tag.count})</span>
      )}
    </Link>
  );
};

export default Tag;
