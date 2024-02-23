import type { FC } from 'react';
import React from 'react';

export interface LabelProps {
  className?: string;
  children: React.ReactNode;
}

const Label: FC<LabelProps> = ({ className = '', children }) => {
  return (
    <span
      className={`Label ${className} text-neutral-800 font-medium text-sm dark:text-neutral-300`}
      data-id="Label"
    >
      {children}
    </span>
  );
};

export default Label;
