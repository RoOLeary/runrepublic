'use client';

import React, { useState } from 'react';

import CardLarge1 from '@/components/CardLarge1/CardLarge1';
import Heading from '@/components/Heading/Heading';
import type { PostDataType } from '@/data/types';

export interface SectionLargeSliderProps {
  className?: string;
  heading?: string;
  posts: PostDataType[];
}

const SectionLargeSlider = ({
  posts,
  heading = "Editor's pick",
  className = '',
}: SectionLargeSliderProps) => {
  const [indexActive, setIndexActive] = useState(0);

  const handleClickNext = () => {
    setIndexActive((state) => {
      if (state >= posts.length - 1) {
        return 0;
      }
      return state + 1;
    });
  };

  const handleClickPrev = () => {
    setIndexActive((state) => {
      if (state === 0) {
        return posts.length - 1;
      }
      return state - 1;
    });
  };

  return (
    <div className={`SectionLargeSlider relative ${className}`}>
      {!!heading && <Heading>{heading}</Heading>}
      {posts.map((item, index) => {
        if (indexActive !== index) return null;
        return (
          <CardLarge1
            key={index}
            onClickNext={handleClickNext}
            onClickPrev={handleClickPrev}
            post={item}
          />
        );
      })}
    </div>
  );
};

export default SectionLargeSlider;
