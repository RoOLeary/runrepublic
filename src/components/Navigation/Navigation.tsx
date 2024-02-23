import type { FC } from 'react';
import React from 'react';

import { NAVIGATION_MAIN } from '@/data/navigation';

import NavigationItem from './NavigationItem';

interface Props {
  className?: string;
}

const Navigation: FC<Props> = ({ className = 'flex' }) => {
  return (
    <ul className={`Navigation items-center nav-z ${className}`}>
      {NAVIGATION_MAIN.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
};

export default Navigation;
