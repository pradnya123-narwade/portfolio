import React from 'react';

const statsData = [
  {
    value: '96.60%',
    label: 'SSC · Nirmala Convent',
  },
  {
    value: '86.60%',
    label: '12th · HPT & RYK',
  },
  {
    value: '3rd',
    label: 'Year · B.Tech AI & DS',
  },
  {
    value: '06+',
    label: 'Projects & Ideas',
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-title reveal">
          <span>01 — ABOUT ME</span>
          <h2>A little about me.</h2>
          <p>Beyond the code, there is a curious human being.</p>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I'm <span className="highlight">Pradnya Narwade</span>, a
              third-year B.Tech student specializing in{' '}
              <span className="highlight">
                Artificial Intelligence & Data Science
              </span>{' '}
              at VESIT, Mumbai.
            </p>

            <p>
              My academic journey started at{' '}
              <span className="highlight">Nirmala Convent High School</span>,
              where I completed my SSC with{' '}
              <span className="highlight">96.60%</span>. I then pursued my
              higher secondary education at{' '}
              <span className="highlight">
                HPT Arts & RYK Science College
              </span>
              , scoring <span className="highlight">86.60%</span> in 12th.
            </p>

            <p>
              Today, I'm exploring the world of{' '}
              <span className="highlight">
                Artificial Intelligence, Machine Learning, Web Development and
                App Development
              </span>{' '}
              through hands-on projects.
            </p>

            <p>
              From building <span className="highlight">Synapse</span>, a legal
              case management application, to{' '}
              <span className="highlight">SkinSight AI</span>, an AI-based skin
              condition detection application, I enjoy turning real-world
              problems into technology-driven solutions.
            </p>
          </div>

          <div className="about-info reveal">
            {statsData.map((stat, index) => (
              <div className="info-card" key={index}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
