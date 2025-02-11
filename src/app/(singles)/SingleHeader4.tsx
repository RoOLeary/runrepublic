import type { FC } from 'react';
import React from 'react';

import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList';
import NcImage from '@/components/NcImage/NcImage';
import PostMeta2 from '@/components/PostMeta2/PostMeta2';
import { DEMO_CATEGORIES } from '@/data/taxonomies';

import SingleMetaAction2 from './SingleMetaAction2';
import SingleTitle from './SingleTitle';

export interface SingleHeader4Props {
  hiddenDesc?: boolean;
  className?: string;
}

const SingleHeader4: FC<SingleHeader4Props> = ({
  hiddenDesc = false,
  className = '',
}) => {
  return (
    <div className={`SingleHeader4 ${className}`}>
      <div className="max-w-5xl mx-auto space-y-5 dark">
        <CategoryBadgeList
          itemClass="!px-3"
          categories={[DEMO_CATEGORIES[1]]}
        />
        <SingleTitle
          mainClass="text-neutral-900 font-bold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl 2xl:text-6xl dark:text-neutral-100"
          title="Trending web & landing page designs in 2025"
        />
        {!hiddenDesc && (
          <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis tempora obcaecati error ipsum voluptatibus sed adipisci
            ut maiores nesciunt quam.
          </span>
        )}
      </div>

      {/* FEATURED IMAGE */}
      <NcImage
        alt="post"
        containerClassName="my-10 relative"
        className="object-cover w-full rounded-lg shadow-xl"
        src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg"
        width={1260}
        height={750}
        sizes="(max-width: 1024px) 100vw, 1280px"
      />

      <div className=" space-y-10">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5 rtl:space-x-reverse">
          <PostMeta2
            size="large"
            className="leading-none flex-shrink-0"
            hiddenCategories
            avatarRounded="rounded-full shadow-inner"
          />
          <SingleMetaAction2 />
        </div>
        <div className="w-full border-b border-neutral-100 dark:border-neutral-800" />
      </div>
    </div>
  );
};

export default SingleHeader4;
