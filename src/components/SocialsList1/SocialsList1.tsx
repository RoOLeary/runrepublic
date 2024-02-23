import type { FC } from 'react';
import React from 'react';

import { SOCIALS_2 } from '@/components/SocialsList/SocialsList';
import type { SocialType } from '@/components/SocialsShare/SocialsShare';

export interface SocialsList1Props {
  className?: string;
}

const socials: SocialType[] = SOCIALS_2;

const SocialsList1: FC<SocialsList1Props> = ({ className = 'space-y-2.5' }) => {
  const renderItem = (item: SocialType, index: number) => {
    return (
      <a
        href={item.href}
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-3 rtl:space-x-reverse"
        key={index}
      >
        <div dangerouslySetInnerHTML={{ __html: item.icon || '' }} />
        <span className="hidden lg:block text-sm">{item.name}</span>
      </a>
    );
  };

  return (
    <div className={`SocialsList1 ${className}`} data-id="SocialsList1">
      {socials.map(renderItem)}
    </div>
  );
};

export default SocialsList1;
