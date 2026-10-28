import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:yourmail@example.com',
    icon: <FiMail />,
    isExternal: false,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/',
    icon: <FiGithub />,
    isExternal: true,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: <FiLinkedin />,
    isExternal: true,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/',
    icon: <FiInstagram />,
    isExternal: true,
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-box reveal">
          <div className="section-title">
            <span>06 — CONTACT</span>
            <h2>Let's build something.</h2>
          </div>

          <p>
            Whether it's a project idea, collaboration, hackathon, internship
            opportunity or simply a conversation about technology — I'd love to
            connect.
          </p>

          <div className="socials">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.isExternal ? '_blank' : '_self'}
                rel={social.isExternal ? 'noopener noreferrer' : undefined}
              >
                {social.icon} {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
