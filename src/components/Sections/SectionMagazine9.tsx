import type { FC } from 'react';
import React from 'react';

import Card9 from '@/components/Card9/Card9';
import Card15Podcast from '@/components/Card15Podcast/Card15Podcast';
import Heading from '@/components/Heading/Heading';
import { DEMO_POSTS_AUDIO } from '@/data/posts';
import type { PostDataType } from '@/data/types';

const postsDemo: PostDataType[] = DEMO_POSTS_AUDIO.filter(
  (_, i) => i > 0 && i < 10,
);

export interface SectionMagazine9Props {
  posts?: PostDataType[];
  className?: string;
  gapClassName?: string;
  heading?: string;
}

const SectionMagazine9: FC<SectionMagazine9Props> = ({
  posts = postsDemo,
  className = '',
  gapClassName = 'gap-6 md:gap-8',
  heading = 'Listen to audio live',
}) => {
  return (
    <div className={`SectionMagazine9 relative ${className}`}>
      {heading && (
        <Heading desc="Click on music icon and enjoy music or podcast">
          {heading}
        </Heading>
      )}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${gapClassName}`}
      >
        {posts[0] && <Card9 ratio="aspect-w-4 aspect-h-3" post={posts[0]} />}
        {posts[1] && <Card9 ratio="aspect-w-4 aspect-h-3" post={posts[1]} />}
        {posts[2] && <Card9 ratio="aspect-w-4 aspect-h-3" post={posts[2]} />}
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${gapClassName} mt-8`}
      >
        {posts
          .filter((_, i) => i > 2)
          .map((p, index) => (
            <Card15Podcast key={index} post={p} />
          ))}
      </div>
    </div>
  );
};

export default SectionMagazine9;
