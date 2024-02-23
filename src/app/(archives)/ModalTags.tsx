'use client';

import { ChevronDownIcon } from '@heroicons/react/24/solid';
import type { FC } from 'react';
import React from 'react';

import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import Tag from '@/components/Tag/Tag';
import type { TaxonomyType } from '@/data/types';

export interface ModalTagsProps {
  tags: TaxonomyType[];
}

const ModalTags: FC<ModalTagsProps> = ({ tags }) => {
  const renderModalContent = () => {
    return (
      <div className="flex flex-wrap dark:text-neutral-200">
        {tags.map((tag) => (
          <Tag key={tag.id} tag={tag} className="me-2 mb-2" />
        ))}
      </div>
    );
  };

  return (
    <div className="ModalTags">
      <Modal
        contentExtraClass="max-w-screen-md"
        renderTrigger={(openModal) => (
          <Button
            pattern="third"
            fontSize="text-sm font-medium"
            onClick={openModal}
          >
            <div>
              <span className="hidden sm:inline">Other</span> Tags
            </div>
            <ChevronDownIcon
              className="w-4 h-4 ms-2 -me-1"
              aria-hidden="true"
            />
          </Button>
        )}
        modalTitle="Discover other tags"
        renderContent={renderModalContent}
      />
    </div>
  );
};

export default ModalTags;
