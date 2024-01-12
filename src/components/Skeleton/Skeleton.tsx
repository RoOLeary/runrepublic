import React, { FC } from "react";

export interface SkeletonProps {
  className?: string;
}

const Skeleton: FC<SkeletonProps> = ({ className = "" }) => {
  return (
    <span
      className={`Skeleton bg-neutral-400 inline-flex ${className}`}
      data-id="Skeleton"
    ></span>
  );
};

export default Skeleton;
