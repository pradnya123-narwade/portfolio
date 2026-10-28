import React from 'react';

const skillsData = [
  {
    name: 'HTML / CSS',
    percentage: 90,
  },
  {
    name: 'JavaScript',
    percentage: 80,
  },
  {
    name: 'Python',
    percentage: 85,
  },
  {
    name: 'Flutter / Dart',
    percentage: 75,
  },
  {
    name: 'React / Node.js',
    percentage: 70,
  },
  {
    name: 'AI / Machine Learning',
    percentage: 75,
  },
  {
    name: 'Canva & Visual Editing',
    percentage: 90,
  },
  {
    name: 'UI / Creative Design',
    percentage: 85,
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-title reveal">
          <span>02 — SKILLS</span>
          <h2>Things I work with.</h2>
          <p>Technologies, tools and creative skills I'm learning and building with.</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card reveal" key={index}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
