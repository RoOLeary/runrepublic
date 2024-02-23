import type { FC } from 'react';
import React from 'react';

export interface LoadingVideoProps {
  className?: string;
  chilClassName?: string;
}

const LoadingVideo: FC<LoadingVideoProps> = ({
  className = '',
  chilClassName = 'bg-white',
}) => {
  return (
    <div className={`LoadingVideo lds-ellipsis ${className}`}>
      <div className={chilClassName} />
      <div className={chilClassName} />
      <div className={chilClassName} />
      <div className={chilClassName} />
    </div>
  );
};

export default LoadingVideo;
