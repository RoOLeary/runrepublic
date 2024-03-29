import React from 'react';

import SingleHeader4 from '@/app/(singles)/SingleHeader4';

const PageSingleTemp4Sidebar = ({}) => {
  return (
    <>
      <div className="absolute top-0 inset-x-0 bg-neutral-900 dark:bg-black/30 h-[480px] md:h-[600px] lg:h-[700px] xl:h-[95vh]" />

      <header className="container pt-10 lg:pt-16 rounded-xl relative z-10">
        <SingleHeader4 />
      </header>
    </>
  );
};

export default PageSingleTemp4Sidebar;
