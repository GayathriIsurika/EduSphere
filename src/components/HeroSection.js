import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            The Future of Tuition in Sri Lanka is Here
          </h1>
          <p className="hero-subtitle">
            AI-powered matching, verified tutors, and real-time progress tracking. All in one place.
          </p>
          <div className="hero-buttons">
            <button className="btn-solid btn-lg">Find a Verified Tutor</button>
            <button className="btn-outlined btn-lg">Become a Tutor</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;