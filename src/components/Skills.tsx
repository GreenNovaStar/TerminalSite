import React from 'react';

interface SkillCategory {
  name: string;
  items: string[];
}

const categories: SkillCategory[] = [
  {
    name: 'Languages',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Redux'],
  },
  {
    name: 'Cloud',
    items: [
      'AWS CDK',
      'CloudFormation',
      'CloudWatch',
      'DynamoDB',
      'EC2',
      'ECS Fargate',
      'EventBridge',
      'Lambda',
      'SQS',
    ],
  },
  {
    name: 'AI/ML',
    items: ['Strands Agents'],
  },
  {
    name: 'Tools',
    items: ['Git', 'Docker', 'Linux', 'MySQL', 'REST APIs', 'CI/CD'],
  },
  {
    name: 'Testing',
    items: ['pytest', 'Jest', 'JUnit'],
  },
];

export const Skills: React.FC = () => (
  <div className="whitespace-pre-wrap mt-4" style={{ lineHeight: 'normal' }}>
    <div className="mb-4">
      <span className="text-light-yellow dark:text-dark-yellow">SKILLS</span>
      {'\n  ══════════════════════════════════════════════════════'}
    </div>
    {categories.map((category, i) => (
      <div key={i} className="mb-2">
        <span className="text-light-green dark:text-dark-green">
          {'  '}
          {category.name}
        </span>
        {'\n  ──────────────────────────────────────────────────────\n'}
        {'  '}
        {category.items.join(' · ')}
      </div>
    ))}
  </div>
);

export default Skills;
