import React from 'react';
import HorizontalScroll from './components/Layout/HorizontalScroll';
import Section from './components/Layout/Section';

import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
import Freelance from './components/Freelance/Freelance';

import './App.scss';

function App() {
  return (
    <div className="App">
      <HorizontalScroll>

        <Section className="sec-hero">
          <Hero />
        </Section>

        <Section className="sec-services">
          <Services />
        </Section>

        <Section className="sec-experience">
          <Experience />
        </Section>

        <Section className="sec-works">
          <Works />
        </Section>

        <Section className="sec-freelance">
          <Freelance />
        </Section>

        <Section className="sec-contact">
          <div className="w-full min-h-screen lg:h-full bg-[#f0f0f0] flex flex-col items-center justify-center text-center p-6 sm:p-8 lg:p-16">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-[#0a0a0a]">
              Let's Work<br />Together
            </h2>
            <p className="mt-6 lg:mt-8 text-base lg:text-xl max-w-xl font-medium text-gray-700 leading-relaxed">
              Open for Freelance Projects in AI, Full Stack Development, and DevOps.
            </p>
            <a
              href="mailto:contact@kiranchoudhari.com"
              className="mt-8 lg:mt-12 text-lg lg:text-2xl font-bold underline decoration-2 underline-offset-8 hover:text-gray-600 transition-colors text-[#0a0a0a]"
            >
              Get in Touch
            </a>
          </div>
        </Section>

      </HorizontalScroll>
    </div>
  );
}

export default App;
