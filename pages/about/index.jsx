import React from 'react';
import Header from '../../components/Header';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';
import PageIllustration from '../../components/PageIllustration';
import HeroAbout from '../../components/HeroAbout';
import TeamImages from '../../components/TeamImages';
import Timeline from '../../components/Timeline';
import Team from '../../components/Team';
import TestimonialsCarousel from '../../components/TestimonialsCarousel';
import Career from '../../components/Career';
import Clients from '../../components/Clients';
function About() {
  return (
    <main className="grow">
      {/*  Page illustration */}
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true">
        <PageIllustration />
      </div>

      <HeroAbout />
      <TeamImages />
      <Timeline />
      <Team />
      <TestimonialsCarousel />
      <Career />
      <Clients />
      <Newsletter />
    </main>
  );
}
About.title = 'About';
export default About;
