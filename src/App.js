import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  // Toggle dark/light theme
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      if (nextTheme === 'light') {
        document.body.classList.add('light');
      } else {
        document.body.classList.remove('light');
      }
      return nextTheme;
    });
  };

  // Scroll reveal observer
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const handleReveal = () => {
      const windowHeight = window.innerHeight;
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleReveal);
    handleReveal(); // Trigger once on mount

    return () => window.removeEventListener('scroll', handleReveal);
  }, []);

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
