import Image from 'next/image';
import { Link } from "next-view-transitions";
import type { FC } from 'react';
import React from 'react';

import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList';
import PostCardLikeAndComment from '@/components/PostCardLikeAndComment/PostCardLikeAndComment';
import PostCardSaveAction from '@/components/PostCardSaveAction/PostCardSaveAction';
import PostFeaturedMedia from '@/components/PostFeaturedMedia/PostFeaturedMedia';
import PostTypeFeaturedIcon from '@/components/PostTypeFeaturedIcon/PostTypeFeaturedIcon';
import type { PostDataType } from '@/data/types';

export interface Card19Props {
  className?: string;
  ratio?: string;
  titleClass?: string;
  post: PostDataType;
  hoverClass?: string;
  showCategories?: boolean;
}

const Card19: FC<Card19Props> = ({
  className = 'h-full',
  titleClass = 'text-xl sm:text-2xl xl:text-3xl',
  ratio = 'aspect-w-4 sm:aspect-w-3 aspect-h-3',
  post,
  hoverClass = '',
  showCategories = true,
}) => {
  const { title, href, featuredImage, categories, postType } = post;

  const renderMeta = () => {
    return (
      <div className="inline-flex items-center text-xs text-neutral-300">
        <h2 className={`block  font-semibold text-white ${titleClass}`}>
          {title}
        </h2>
      </div>
    );
  };

  return (
    <div
      className={`Card19 relative flex flex-col group rounded-xl overflow-hidden ${hoverClass} ${className}`}
      data-id="Card19"
    >
      <div className="absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300">
        <PostCardLikeAndComment className="relative" />
        <PostCardSaveAction className="relative" />
      </div>
      <div className={`flex items-start relative w-full ${ratio}`} />
      {postType === 'audio' ? (
        <div className="absolute inset-0">
          <PostFeaturedMedia post={post} />
        </div>
      ) : (
        <Link href={href}>
          <Image
            sizes="(max-width: 600px) 480px, 800px"
            className="object-cover w-full h-full rounded-xl"
            src={featuredImage}
            alt="post"
            fill
          />
          <PostTypeFeaturedIcon
            className="absolute top-3 left-3 group-hover:hidden"
            postType={postType}
            wrapSize="w-7 h-7"
            iconSize="w-4 h-4"
          />
          <span className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      )}
      <Link
        href={href}
        className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black opacity-80"
      />
      <div className="absolute bottom-0 inset-x-0 p-5 sm:p-10 flex flex-col flex-grow">
        <Link href={href} className="absolute inset-0" />
        {showCategories && (
          <div className="mb-3">
            <CategoryBadgeList categories={categories} />
          </div>
        )}
        {renderMeta()}
      </div>
    </div>
  );
};

export default Card19;
