import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import imgAdsDef from '@/images/ads.png';

export interface SectionAdsProps {
  className?: string;
  imgAds?: string | StaticImageData;
}

const SectionAds: FC<SectionAdsProps> = ({
  className = '',
  imgAds = imgAdsDef,
}) => {
  return (
    <a
      href="/#"
      className={`SectionAds block text-center mx-auto ${className}`}
    >
      <span className="text-xs text-neutral-500">- Advertisement -</span>
      <Image className="mx-auto" src={imgAds} alt="ads" />
    </a>
  );
};

export default SectionAds;
