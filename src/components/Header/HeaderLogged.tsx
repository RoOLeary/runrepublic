import type { FC } from 'react';
import React from 'react';

import MainNav2Logged from './MainNav2Logged';

export interface HeaderLoggedProps {}

const HeaderLogged: FC<HeaderLoggedProps> = () => {
  return (
    <div className="HeaderLogged sticky top-0 w-full z-40 mb-2">
      <MainNav2Logged />
    </div>
  );
};

export default HeaderLogged;
