'use client';

import Link from 'next/link';
import type { FC } from 'react';
import React, { useState } from 'react';

import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList';
import PostCardMetaV2 from '@/components/PostCardMeta/PostCardMetaV2';
import PostCardSaveAction from '@/components/PostCardSaveAction/PostCardSaveAction';
import PostFeaturedMedia from '@/components/PostFeaturedMedia/PostFeaturedMedia';
import type { PostDataType } from '@/data/types';

export interface Card10Props {
  className?: string;
  post: PostDataType;
}

const Card10: FC<Card10Props> = ({ className = 'h-full', post }) => {
  const { href, categories } = post;
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`Card10 relative flex flex-col ${className}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link href={href} className="absolute inset-0" />
      <div className="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-9 aspect-h-7 sm:aspect-h-9 overflow-hidden z-0">
        <div>
          <PostFeaturedMedia post={post} isHover={isHover} />
        </div>

        <Link
          href={href}
          className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <div className="absolute top-3 inset-x-3 flex justify-between items-start space-x-4 rtl:space-x-reverse z-10">
        <CategoryBadgeList categories={categories} />
        <PostCardSaveAction hidenReadingTime />
      </div>

      <div className="space-y-2.5 rtl:space-x-reverse mt-4">
        <PostCardMetaV2 meta={post} />
      </div>
    </div>
  );
};

export default Card10;
