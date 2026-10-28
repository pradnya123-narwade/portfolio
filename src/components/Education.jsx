import React from 'react';

const educationData = [
  {
    period: '2024 — PRESENT',
    degree: 'B.Tech — Artificial Intelligence & Data Science',
    institution:
      "Vivekanand Education Society's Institute of Technology (VESIT), Mumbai",
    description: (
      <>
        Currently in <strong>3rd Year</strong>, exploring Artificial
        Intelligence, Machine Learning, Data Science, Web Development and
        Application Development.
      </>
    ),
  },
  {
    period: '12th · 86.60%',
    degree: 'Higher Secondary Education',
    institution: 'HPT Arts & RYK Science College, Nashik',
    description: (
      <>
        Completed Higher Secondary Education with <strong>86.60%</strong>.
      </>
    ),
  },
  {
    period: 'SSC · 96.60%',
    degree: 'Secondary School Certificate',
    institution: 'Nirmala Convent High School, Nashik',
    description: (
      <>
        Completed SSC with an academic score of <strong>96.60%</strong>.
      </>
    ),
  },
];

const activitiesData = [
  {
    icon: '🤝',
    title: 'NSS',
    description:
      'Participating in social initiatives, volunteering activities and community-oriented events.',
  },
  {
    icon: '🌱',
    title: 'Gender Champions Club',
    description:
      'Contributing to student-led initiatives promoting awareness, inclusion and positive change.',
  },
  {
    icon: '🎨',
    title: 'Creative Side',
    description:
      'Reading, painting, writing, Canva editing and exploring creative ideas beyond technology.',
  },
];

const Education = () => {
  return (
    <>
      {/* =====================================================
           EDUCATION SECTION
      ===================================================== */}
      <section id="education">
        <div className="container">
          <div className="section-title reveal">
            <span>04 — EDUCATION</span>
            <h2>My academic journey.</h2>
            <p>
              From school to AI & Data Science — every step has shaped me.
            </p>
          </div>

          <div className="timeline">
            {educationData.map((item, index) => (
              <div className="timeline-item reveal" key={index}>
                <span>{item.period}</span>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
           BEYOND CODE (ACTIVITIES)
      ===================================================== */}
      <section>
        <div className="container">
          <div className="section-title reveal">
            <span>05 — BEYOND CODE</span>
            <h2>More than academics.</h2>
            <p>
              Things that make my college journey more meaningful.
            </p>
          </div>

          <div className="activities">
            {activitiesData.map((activity, index) => (
              <div className="activity-card reveal" key={index}>
                <div className="activity-icon">{activity.icon}</div>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
