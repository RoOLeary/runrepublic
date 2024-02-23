'use client';

import type { FC } from 'react';
import React from 'react';

import CardAuthorBox2 from '@/components/CardAuthorBox2/CardAuthorBox2';
import Heading from '@/components/Heading/Heading';
import MySlider from '@/components/MySlider';
import type { PostAuthorType } from '@/data/types';

export interface SectionSliderNewAuthorsProps {
  className?: string;
  heading: string;
  subHeading: string;
  authors: PostAuthorType[];
  itemPerRow?: number;
}

const SectionSliderNewAuthors: FC<SectionSliderNewAuthorsProps> = ({
  heading = 'Suggestions for discovery',
  subHeading = 'Popular places to recommends for you',
  className = '',
  authors,
  itemPerRow = 5,
}) => {
  return (
    <div className={`SectionSliderNewAuthors ${className}`}>
      <Heading desc={subHeading} isCenter>
        {heading}
      </Heading>
      <MySlider
        itemPerRow={itemPerRow}
        data={authors}
        renderItem={(item, index) => (
          <CardAuthorBox2 key={index} author={item} />
        )}
      />
    </div>
  );
};

export default SectionSliderNewAuthors;
