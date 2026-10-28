import React, { useState, useEffect } from 'react';

const words = [
  'Developer',
  'AI Enthusiast',
  'Problem Solver',
  'Creative Thinker',
  'Student',
];

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1200);
          return;
        }
      } else {
        setCurrentText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const speed = isDeleting ? 60 : 100;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content reveal">
          <div className="badge">
            ✦ B.Tech AI & Data Science · 3rd Year
          </div>

          <h1>
            Hi, I'm
            <br />
            <span className="gradient">Pradnya.</span>
          </h1>

          <h2>
            I'm a <span id="typing">{currentText}</span>
          </h2>

          <p>
            A curious Artificial Intelligence & Data Science student who loves
            turning ideas into meaningful digital experiences. I enjoy
            exploring technology, building projects and creating things that
            solve real-world problems.
          </p>

          <div className="buttons">
            <a
              href="#projects"
              className="btn primary-btn"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('projects');
              }}
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="btn outline-btn"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
            >
              Let's Connect
            </a>
          </div>
        </div>

        <div className="profile-card reveal">
          <div className="profile-circle">PN</div>
          <div className="card-tag">AI × Creativity × Code</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
