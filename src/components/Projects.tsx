import React from 'react';

interface Project {
  name: string;
  tagline: string;
  stack: string;
  url: string;
  urlLabel: string;
}

const projects: Project[] = [
  {
    name: 'TastEZ',
    tagline: 'Recipe & drink-pairing mobile app (CSUN senior capstone)',
    stack: 'Flutter · Dart · Spoonacular API · Google Maps API',
    url: 'https://github.com/GreenNovaStar/TastEZ',
    urlLabel: 'github.com/GreenNovaStar/TastEZ',
  },
  {
    name: 'MyAnimeList Client',
    tagline: 'Unofficial cross-platform MyAnimeList app',
    stack: 'Flutter · Dart · REST API',
    url: 'https://github.com/GreenNovaStar/MyAnimeList_Client',
    urlLabel: 'github.com/GreenNovaStar/MyAnimeList_Client',
  },
  {
    name: 'MoChinko',
    tagline: 'Playable browser Pachinko game',
    stack: 'JavaScript · Phaser.js · HTML · CSS',
    url: 'https://greennovastar.github.io/MoChinko/',
    urlLabel: 'greennovastar.github.io/MoChinko',
  },
];

export const Projects: React.FC = () => (
  <div className="whitespace-pre-wrap mt-4" style={{ lineHeight: 'normal' }}>
    <div className="mb-4">
      <span className="text-light-yellow dark:text-dark-yellow">PROJECTS</span>
      {'\n  ══════════════════════════════════════════════════════'}
    </div>
    {projects.map((project, i) => (
      <div key={i} className="mb-4">
        <div>
          {'  '}
          <span className="text-light-green dark:text-dark-green">
            {project.name}
          </span>
        </div>
        <div>
          {'  '}
          {project.tagline}
        </div>
        <div>
          {'  '}
          {project.stack}
        </div>
        <div>
          {'  '}
          <a
            className="text-light-blue dark:text-dark-blue underline"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.urlLabel}
          </a>
        </div>
      </div>
    ))}
    <div>
      {'  See more on my portfolio: '}
      <a
        className="text-light-blue dark:text-dark-blue underline"
        href="https://brianyip.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        brianyip.dev
      </a>
    </div>
  </div>
);

export default Projects;
