import React from 'react';

import BackgroundSection from '@/components/BackgroundSection/BackgroundSection';
import BgGlassmorphism from '@/components/BgGlassmorphism/BgGlassmorphism';
import SectionHero from '@/components/SectionHero/SectionHero';
import SectionSubscribe2 from '@/components/SectionSubscribe2/SectionSubscribe2';
import rightImg from '@/images/about-hero-right.png';

import SectionFounder from './SectionFounder';
import SectionStatistic from './SectionStatistic';

const PageAbout = ({}) => {
  return (
    <div className="PageAbout relative">
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 About Us."
          btnText=""
          subHeading="We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world."
        />

        <SectionFounder />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionStatistic />
        </div>

        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageAbout;
