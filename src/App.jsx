import React from 'react';
import HorizontalScroll from './components/Layout/HorizontalScroll';
import Section from './components/Layout/Section';

import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';


import './App.scss';

function App() {
  return (
    <div className="App">
      <HorizontalScroll>

        {/* Section 1: Hero */}
        <Section className="sec-hero">
          <Hero />
        </Section>

        {/* Section 2: Core Competencies */}
        <Section className="sec-services">
          <Services />
        </Section>

        {/* Section 3: Journey / Experience */}
        <Section className="sec-experience">
          <Experience />
        </Section>

        {/* Section 4: Works */}
        <Section className="sec-works">
          <Works />
        </Section>

        {/* Section 5: Contact */}
        <Section className="sec-contact">
          <div
            className="bg-[#f0f0f0] flex flex-col items-center justify-center text-center"
            style={{ position: 'absolute', inset: 0, padding: 'clamp(2rem, 5vw, 5rem)' }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-[#0a0a0a]">
              Let's Work<br />Together
            </h2>
            <p className="mt-8 text-lg md:text-2xl max-w-2xl font-medium text-gray-700 leading-relaxed">
              Open for Freelance Projects in AI, Full Stack Development, and DevOps.
            </p>
            <a
              href="mailto:contact@kiranchoudhari.com"
              className="mt-12 text-xl md:text-3xl font-bold underline decoration-2 underline-offset-8 hover:text-gray-600 transition-colors text-[#0a0a0a]"
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
