import type { FC } from 'react';
import React from 'react';

export interface PlayIconProps {
  className?: string;
}

const PlayIcon: FC<PlayIconProps> = ({ className = '' }) => {
  return (
    <div
      className={`PlayIcon bg-white bg-opacity-30 backdrop-filter backdrop-blur rounded-full w-20 h-20 p-3 lg:w-52 lg:h-52 lg:p-12 ${className}`}
    >
      <div className="w-full h-full bg-white rounded-full text-primary-500 relative">
        <span className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-8 h-8 md:w-12 md:h-12 rtl:rotate-180"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default PlayIcon;
