import React from 'react';
import config from '../../config.json';

interface ContactLink {
  label: string;
  url: string;
  display: string;
}

const links: ContactLink[] = [
  {
    label: 'Email',
    url: `mailto:${config.email}`,
    display: config.email,
  },
  {
    label: 'GitHub',
    url: `https://github.com/${config.social.github}`,
    display: `github.com/${config.social.github}`,
  },
  {
    label: 'LinkedIn',
    url: `https://linkedin.com/in/${config.social.linkedin}`,
    display: `linkedin.com/in/${config.social.linkedin}`,
  },
];

export const Contact: React.FC = () => (
  <div className="whitespace-pre-wrap mt-4" style={{ lineHeight: 'normal' }}>
    <div className="mb-4">
      <span className="text-light-yellow dark:text-dark-yellow">CONTACT</span>
      {'\n  ══════════════════════════════════════════════════════'}
    </div>
    {links.map((link, i) => (
      <div key={i} className="mb-2">
        {'  '}
        <span className="text-light-green dark:text-dark-green">
          {link.label}
        </span>
        {'  '}
        <a
          className="text-light-blue dark:text-dark-blue underline"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.display}
        </a>
      </div>
    ))}
  </div>
);

export default Contact;
