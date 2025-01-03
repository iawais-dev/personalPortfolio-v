import React from "react";
import Link from "next/link";
import "@/Components/Hero/HeroSection.css";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="content">
        <h1>
          Hi, I'm Awais<span className="highlight">!</span>
        </h1>
        <p className="subtitle">
          A passionate <span className="bold">Web Developer</span> dedicated to building modern, user-friendly, and scalable web applications.
        </p>
        <div className="buttons">
          <Link href="#projects" className="btn primary">
            View My Work
          </Link>
          <Link href="#contact" className="btn secondary">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="floating-circle"></div>
    </section>
  );
};

export default HeroSection;
