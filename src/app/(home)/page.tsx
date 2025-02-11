import React from 'react';

import SectionAds from "@/components/Sections/SectionAds"; 
import SectionLatestPosts from '@/components/Sections/SectionLatestPosts';
import SectionMagazine2 from '@/components/Sections/SectionMagazine2';
import SectionMagazine9 from '@/components/Sections/SectionMagazine9';
import SectionMagazine10 from '@/components/Sections/SectionMagazine10';
import SectionMagazine11 from '@/components/Sections/SectionMagazine11';
import { DEMO_POSTS_NEWS } from '@/data/posts';

//
const MAGAZINE1_POSTS = DEMO_POSTS_NEWS.filter((_, i) => i >= 8 && i < 16);
const MAGAZINE2_POSTS = DEMO_POSTS_NEWS.filter((_, i) => i >= 0 && i < 7);
//

const PageHome = () => {
  return (
    <div className="PageHome relative [ section-rounded-md ]">
      <div className="relative overflow-hidden">
        <div className="container relative mt-2">
          <SectionMagazine10 posts={MAGAZINE1_POSTS} />

          <SectionMagazine2
            className="pt-8 lg:pt-16 pb-8"
            heading="Latest Articles"
            posts={MAGAZINE2_POSTS}
          />

          <SectionMagazine9
            gapClassName="gap-6"
            className="pt-12 lg:pt-10"
            posts={DEMO_POSTS_NEWS.filter((_, i) => i >= 6 && i < 18)}
          />

          <SectionAds className="pt-16 lg:pt-24" />

          {/* === SECTION 11 === */}
          <SectionMagazine11 className="py-16 lg:py-24" />
        </div>

        {/* === SECTION 11 === */}
        <div className="dark bg-neutral-900 dark:bg-black dark:bg-opacity-20 text-neutral-100">
          <div className="relative container">
            <SectionLatestPosts
              heading="Latest Articles"
              className="py-16 lg:py-24"
              posts={DEMO_POSTS_NEWS.filter((_, i) => i > 7 && i < 18)}
              postCardName="card4"
              gridClass="sm:grid-cols-2 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHome;
