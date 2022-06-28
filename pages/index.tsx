import React, { useEffect } from 'react';
import type { NextPage } from 'next';

import Image from 'next/image';
import Header from '../components/Header';
import PageIllustration from '../components/PageIllustration';
import HeroHome from '../components/HeroHome';
import Process from '../components/Process';
import FeaturesHome from '../components/FeaturesHome';
import Tabs from '../components/Tabs';
import Target from '../components/Target';
import News from '../components/News';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <main className="grow">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <Process />
        <FeaturesHome />
        <Tabs />
        <Target />
        <News />
        <Newsletter />
      </main>
    </>
  );
};
Home.title = 'Homepage';
export default Home;
