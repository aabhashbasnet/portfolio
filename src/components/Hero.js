import React from 'react';
import { Link } from 'react-router-dom';  // Import Link
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-container">
          <h1 className="cyber-glitch">
            <span className="gradient-text">Hi, I'm Aabhash Basnet</span>
            <span className="subtitle">Software Developer & AI Enthusiast</span>
          </h1>
          <p className="tagline">Building intelligent solutions with AI, Data, and Web Development</p>
          <div className="cta-container">
            {/* Use Link for navigation */}
            <Link to="/projects">
              <button className="cta-btn holographic">View My Work</button>
            </Link>
            <Link to="/contact">
              <button className="cta-btn holographic">Contact Me</button>
            </Link>
            {/* Download Resume Button */}
            <a 
              href="/assets/Aabhash_Basnet_Resume.pdf"  // Adjust path to your file
              download="AabhashBasnet.pdf"
            >
              <button className="cta-btn holographic">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="particle-animation"></div>
        <div className="grid-mesh"></div>
      </div>
    </section>
  );
};

export default Hero;
