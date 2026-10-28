import React from 'react';

const projectsData = [
  {
    number: 'PROJECT 01 · FEATURED',
    title: 'Synapse — Legal Case Management',
    description:
      'A legal case management application designed to organize and simplify the management of legal cases, clients, documents and important case-related information in one place.',
    tech: ['Flutter', 'Dart', 'Firebase', 'UI/UX'],
  },
  {
    number: 'PROJECT 02 · AI',
    title: 'SkinSight AI',
    description:
      'An AI-powered skin condition detection application that explores image-based analysis to help identify possible skin conditions and provide useful information to users.',
    tech: ['Python', 'AI / ML', 'Computer Vision', 'App Development'],
  },
  {
    number: 'PROJECT 03 · MACHINE LEARNING',
    title: 'Sleep Health Predictor',
    description:
      'A machine learning project exploring the relationship between lifestyle factors and sleep health using predictive modelling.',
    tech: ['Python', 'Machine Learning', 'Random Forest', 'Kaggle'],
  },
  {
    number: 'PROJECT 04 · AI',
    title: 'Scam Detector',
    description:
      'A concept for detecting potentially suspicious or scam messages using machine learning and natural language processing techniques.',
    tech: ['Python', 'NLP', 'Machine Learning'],
  },
  {
    number: 'PROJECT 05 · APP',
    title: 'Campus Lost & Found',
    description:
      'A student-focused application concept designed to make reporting and finding lost items within a college campus easier.',
    tech: ['Flutter', 'Firebase', 'UI/UX'],
  },
  {
    number: 'PROJECT 06 · AI',
    title: 'Mental Dump AI',
    description:
      'An AI-based concept designed around organizing thoughts digitally and creating a more interactive way for users to reflect and manage their ideas.',
    tech: ['AI', 'Python', 'Web'],
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-title reveal">
          <span>03 — PROJECTS</span>
          <h2>Things I've built.</h2>
          <p>Turning ideas into practical solutions through technology.</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card reveal" key={index}>
              <div className="project-number">{project.number}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech">
                {project.tech.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
