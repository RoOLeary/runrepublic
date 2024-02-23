'use client';

import type { FC } from 'react';
import React, { useEffect, useRef } from 'react';

import SingleCommentForm from '@/app/(singles)/SingleCommentForm';
import Modal from '@/components/Modal/Modal';

export interface ModalEditCommentProps {
  show: boolean;
  onCloseModalEditComment: () => void;
}

const ModalEditComment: FC<ModalEditCommentProps> = ({
  show,
  onCloseModalEditComment,
}) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        const element: HTMLTextAreaElement | null = textareaRef.current;
        if (element) {
          (element as HTMLTextAreaElement).focus();
          (element as HTMLTextAreaElement).setSelectionRange(
            (element as HTMLTextAreaElement).value.length,
            (element as HTMLTextAreaElement).value.length,
          );
        }
      }, 400);
    }
  }, [show]);

  const renderContent = () => {
    return (
      <SingleCommentForm
        className="mt-0"
        onClickCancel={onCloseModalEditComment}
        onClickSubmit={onCloseModalEditComment}
        defaultValue="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequuntur perferendis maxime quia, quisquam eveniet asperiores fuga laudantium necessitatibus assumenda!"
        textareaRef={textareaRef}
        rows={8}
      />
    );
  };

  const renderTrigger = () => {
    return null;
  };

  return (
    <Modal
      isOpenProp={show}
      onCloseModal={onCloseModalEditComment}
      contentExtraClass="max-w-screen-md"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle="Editing comment"
    />
  );
};

export default ModalEditComment;
