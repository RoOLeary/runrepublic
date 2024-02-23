import Image from 'next/image';
import React from 'react';

import ArchiveFilterListBox from '@/components/ArchiveFilterListBox/ArchiveFilterListBox';
import BackgroundSection from '@/components/BackgroundSection/BackgroundSection';
import ButtonPrimary from '@/components/Button/ButtonPrimary';
import ButtonSecondary from '@/components/Button/ButtonSecondary';
import Card11 from '@/components/Card11/Card11';
import Pagination from '@/components/Pagination/Pagination';
import SectionGridCategoryBox from '@/components/SectionGridCategoryBox/SectionGridCategoryBox';
import SectionSliderNewAuthors from '@/components/SectionSliderNewAthors/SectionSliderNewAuthors';
import SectionSubscribe2 from '@/components/SectionSubscribe2/SectionSubscribe2';
import { DEMO_AUTHORS } from '@/data/authors';
import { DEMO_POSTS } from '@/data/posts';
import { DEMO_CATEGORIES, DEMO_TAGS } from '@/data/taxonomies';
import type { PostDataType } from '@/data/types';

import ModalCategories from '../../ModalCategories';
import ModalTags from '../../ModalTags';

// Tag and category have same data type - we will use one demo data
const posts: PostDataType[] = DEMO_POSTS.filter((_, i) => i < 16);

const PageArchive = ({}) => {
  const FILTERS = [
    { name: 'Most Recent' },
    { name: 'Curated by Admin' },
    { name: 'Most Appreciated' },
    { name: 'Most Discussed' },
    { name: 'Most Viewed' },
  ];

  return (
    <div className="PageArchive">
      {/* HEADER */}
      <div className="w-full px-2 xl:max-w-screen-2xl mx-auto">
        <div className="relative aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 overflow-hidden z-0">
          <Image
            alt="archive"
            fill
            src="https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=875&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE3MDUwOTk3NzI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1240"
            className="object-cover w-full h-full"
            sizes="(max-width: 1280px) 100vw, 1536px"
          />
          <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
            <h2 className="inline-block align-middle text-5xl font-semibold md:text-7xl ">
              Latest Tech News
            </h2>
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      <div className="container pt-10 pb-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <div>
          <div className="flex flex-col sm:justify-between sm:flex-row">
            <div className="flex space-x-2.5 rtl:space-x-reverse">
              <ModalCategories categories={DEMO_CATEGORIES} />
              <ModalTags tags={DEMO_TAGS} />
            </div>
            <div className="block my-4 border-b w-full border-neutral-300 dark:border-neutral-500 sm:hidden" />
            <div className="flex justify-end">
              <ArchiveFilterListBox lists={FILTERS} />
            </div>
          </div>

          {/* LOOP ITEMS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
            {posts.map((post) => (
              <Card11 key={post.id} post={post} />
            ))}
          </div>

          {/* PAGINATIONS */}
          <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary>Show me more</ButtonPrimary>
          </div>
        </div>

        {/* MORE SECTIONS */}
        {/* === SECTION 5 === */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridCategoryBox
            categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
          />
          <div className="text-center mx-auto mt-10 md:mt-16">
            <ButtonSecondary loading>Show me more</ButtonSecondary>
          </div>
        </div>

        {/* === SECTION 5 === */}
        <SectionSliderNewAuthors
          heading="Top elite authors"
          subHeading="Discover our elite writers"
          authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
        />

        {/* SUBCRIBES */}
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageArchive;
