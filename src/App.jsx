import React from 'react';
import HorizontalScroll from './components/Layout/HorizontalScroll';
import Section from './components/Layout/Section';

import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Works from './components/Works/Works';

import './App.scss';

function App() {
  return (
    <div className="App">
      <HorizontalScroll>

        {/* Section 1: Introduction */}
        <Section className="sec-hero">
          <Hero />
        </Section>

        {/* Section 2: Core Competencies */}
        <Section className="sec-services" style={{ background: '#0a0a0a' }}>
          <Services />
        </Section>

        {/* Section 3: Works */}
        <Section className="sec-works">
          <Works />
        </Section>

        {/* Section 4: Contact / Footer */}
        <Section className="sec-contact" style={{ background: '#f0f0f0', color: '#050505' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h2 style={{ fontSize: '5rem', textTransform: 'uppercase', lineHeight: 1 }}>Let's Work<br />Together</h2>
            <p style={{ marginTop: '2rem', fontSize: '1.2rem', maxWidth: '600px' }}>
              Open for Freelance Projects in AI, Full Stack Development, and DevOps.
            </p>
            <a href="mailto:contact@kiranchoudhari.com" style={{
              marginTop: '3rem',
              fontSize: '1.5rem',
              textDecoration: 'underline',
              fontWeight: 'bold'
            }}>
              Get in Touch
            </a>
          </div>
        </Section>

      </HorizontalScroll>
    </div>
  );
}

export default App;
