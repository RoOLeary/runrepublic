/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
import type { FC } from 'react';
import React from 'react';

import type { SocialType } from '@/components/SocialsShare/SocialsShare';
import { SOCIALS_DATA } from '@/components/SocialsShare/SocialsShare';

export interface SocialsListProps {
  className?: string;
  itemClass?: string;
  socials?: SocialType[];
}

const socialsDemo: SocialType[] = SOCIALS_DATA;

export const SOCIALS_2 = socialsDemo;

const SocialsList: FC<SocialsListProps> = ({
  className = '',
  itemClass = 'block',
  socials = socialsDemo,
}) => {
  return (
    <nav
      className={`SocialsList flex space-x-3 text-2xl text-neutral-6000 dark:text-neutral-300 ${className}`}
    >
      {socials.map((item, i) => (
        <a
          key={i}
          className={`${itemClass}`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
        >
          <div dangerouslySetInnerHTML={{ __html: item.icon || '' }} />
        </a>
      ))}
    </nav>
  );
};

export default SocialsList;
