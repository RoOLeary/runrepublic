import type { FC } from 'react';
import React from 'react';

import Logo from '@/components/Logo/Logo';
import MenuBar from '@/components/MenuBar/MenuBar';
import Navigation from '@/components/Navigation/Navigation';
import SwitchDarkMode from '@/components/SwitchDarkMode/SwitchDarkMode';

import Button from '../Button/Button';
import SearchModal from './SearchModal';

export interface MainNav1Props {}

const MainNav1: FC<MainNav1Props> = ({}) => {
  return (
    <div className="MainNav1 relative z-10 bg-white dark:bg-slate-900 ">
      <div className="container">
        <div className="h-20 py-5 flex justify-between items-center">
          <div className="flex items-center lg:hidden flex-1">
            <MenuBar />
          </div>

          <div className="flex justify-center lg:justify-start flex-1 items-center space-x-4 sm:space-x-10 2xl:space-x-14 rtl:space-x-reverse">
            <Logo />
            <Navigation className="hidden lg:flex" />
          </div>

          <div className="flex-1 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1 rtl:space-x-reverse">
            <div className="hidden items-center lg:flex">
              <SwitchDarkMode />
              <SearchModal />
              <div className="px-1" />
              <Button
                sizeClass="py-3 px-4 sm:px-6"
                href="/login"
                pattern="primary"
              >
                Sign up
              </Button>
            </div>
            <div className="flex items-center lg:hidden">
              <SwitchDarkMode />
              <SearchModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav1;
