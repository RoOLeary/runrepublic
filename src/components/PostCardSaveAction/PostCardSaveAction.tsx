import type { FC } from 'react';
import React from 'react';

import Bookmark from '../Bookmark/Bookmark';

export interface PostCardSaveActionProps {
  className?: string;
  bookmarkClass?: string;
  readingTime?: number;
  hidenReadingTime?: boolean;
}

const PostCardSaveAction: FC<PostCardSaveActionProps> = ({
  className = '',
  bookmarkClass,
  hidenReadingTime = true,
  readingTime = 3,
}) => {
  return (
    <div
      className={`PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ${className}`}
    >
      {!hidenReadingTime && !!readingTime && (
        <span>{readingTime} min read</span>
      )}

      <Bookmark containerClassName={bookmarkClass} />
    </div>
  );
};

export default PostCardSaveAction;
