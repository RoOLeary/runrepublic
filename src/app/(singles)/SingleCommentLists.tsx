import type { FC } from 'react';
import React from 'react';

import ButtonPrimary from '@/components/Button/ButtonPrimary';
import CommentCard from '@/components/CommentCard/CommentCard';

export interface SingleCommentListsProps {}

const SingleCommentLists: FC<SingleCommentListsProps> = ({}) => {
  return (
    <ul className="SingleCommentLists space-y-5">
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />

      <ButtonPrimary className="dark:bg-primary-700 w-full">
        View full comments (+117 comments)
      </ButtonPrimary>
    </ul>
  );
};

export default SingleCommentLists;
