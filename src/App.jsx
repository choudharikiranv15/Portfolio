import React from 'react';
import { motion } from 'framer-motion';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import HorizontalScroll from './components/Layout/HorizontalScroll';
import Section from './components/Layout/Section';

import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
import Freelance from './components/Freelance/Freelance';
import Contact from './components/Contact/Contact';

import './App.scss';

import FloatingDock from './components/Layout/FloatingDock';

function App() {
  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <SpeedInsights />
      <Analytics />
      <HorizontalScroll>

        <Section id="hero" className="sec-hero">
          <Hero />
        </Section>

        <Section id="services" className="sec-services">
          <Services />
        </Section>

        <Section id="experience" className="sec-experience">
          <Experience />
        </Section>

        <Section id="works" className="sec-works">
          <Works />
        </Section>

        <Section id="freelance" className="sec-freelance">
          <Freelance />
        </Section>

        <Section id="contact" className="sec-contact">
          <Contact />
        </Section>

      </HorizontalScroll>
    </motion.div>
  );
}

export default App;
