import React from 'react';

interface Role {
  company: string;
  title: string;
  date: string;
  location: string;
  bullets: string[];
}

const roles: Role[] = [
  {
    company: 'Amazon Web Services',
    title: 'SDE, AWS Transform',
    date: 'Jan 2026 - Present',
    location: 'Boston, MA',
    bullets: [
      'Building AI-powered migration assessment agents using Strands Agents',
      'Developing compute and business agents for migration cost analysis',
      'Implementing agent evaluation framework for quality validation',
    ],
  },
  {
    company: 'Amazon Web Services',
    title: 'SDE, AWS Transfer Family',
    date: 'July 2022 - December 2025',
    location: 'Santa Monica, CA',
    bullets: [
      'Led 5 Drummond AS2 interoperability certifications',
      'Built B2B Data Interchange console (React/Redux)',
      'Shipped AI-powered Generative Mapping for EDI transformation',
      'Designed AS2 scalability and large file restart capabilities',
    ],
  },
];

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-4">
    <span className="text-light-yellow dark:text-dark-yellow">{children}</span>
    {'\n  ══════════════════════════════════════════════════════'}
  </div>
);

const RoleEntry: React.FC<{ role: Role }> = ({ role }) => (
  <div className="mb-6">
    <div>
      {'  '}
      <span className="text-light-green dark:text-dark-green">{role.company}</span>
      {'  '}
      {role.date}
    </div>
    <div>{'  '}{role.title}{'  '}{role.location}</div>
    <div>{'  ──────────────────────────────────────────────────────'}</div>
    {role.bullets.map((bullet, i) => (
      <div key={i}>{'  • '}{bullet}</div>
    ))}
  </div>
);

export const Experience: React.FC = () => (
  <div className="whitespace-pre-wrap mt-4" style={{ lineHeight: 'normal' }}>
    <SectionHeader>EXPERIENCE</SectionHeader>
    {roles.map((role, i) => (
      <RoleEntry key={i} role={role} />
    ))}
    <SectionHeader>EDUCATION</SectionHeader>
    <div>{'  B.S. Computer Science | GPA: 3.70 | Dec 2021'}</div>
    <div>{'  California State University, Northridge'}</div>
  </div>
);

export default Experience;
