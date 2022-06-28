import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import AOS from 'aos';
import Head from 'next/head';
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
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });
  return (
    <div className="font-inter antialiased bg-gray-900 text-gray-200 tracking-tight">
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="grow">
          {/*  Page illustration */}
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

        {/*  Site footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
