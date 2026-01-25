import React from 'react';
import HorizontalScroll from './components/Layout/HorizontalScroll';
import Section from './components/Layout/Section';

import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
import Freelance from './components/Freelance/Freelance';
import Contact from './components/Contact/Contact';

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
          <Contact />
        </Section>

      </HorizontalScroll>
    </div>
  );
}

export default App;
