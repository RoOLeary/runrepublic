import type { FC } from 'react';
import React from 'react';

export interface SkeletonProps {
  className?: string;
}

const Skeleton: FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <span
      className={`Skeleton bg-neutral-400 inline-flex ${className}`}
      data-id="Skeleton"
    />
  );
};

export default Skeleton;
