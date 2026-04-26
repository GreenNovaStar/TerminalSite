import React from 'react';
import config from '../../config.json';

const G: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-light-green dark:text-dark-green">{children}</span>
);

const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-light-gray dark:text-dark-gray">{children}</span>
);

const Link: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    className="text-light-blue dark:text-dark-blue underline"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const Y: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-light-yellow dark:text-dark-yellow">{children}</span>
);

const ColorBlock: React.FC<{ className: string }> = ({ className }) => (
  <span className={className}>{'██'}</span>
);

const art: React.ReactNode[] = [
  null,
  <>{' '}<G>{'  '}</G>{'     '}<G>##########</G>{'    '}<P>#####</P>{'       '}<P>#####</P></>,
  <>{' '}<G>{'  '}</G>{' '}<G>################</G>{'   '}<P>#####</P>{'     '}<P>#####</P></>,
  <>{' '}<G>###########</G>{'   '}<G>######</G>{'  '}<P>#####</P>{'   '}<P>#####</P></>,
  <>{'  '}<G>####</G>{' '}<G>####</G>{'   '}<G>######</G>{'    '}<P>##### #####</P></>,
  <>{'      '}<G>############</G>{'       '}<P>#########</P></>,
  <>{'     '}<G>#############</G>{'        '}<P>######</P></>,
  <>{'    '}<G>#####</G>{'     '}<G>######</G>{'     '}<P>######</P></>,
  <>{'   '}<G>#####</G>{'     '}<G>######</G>{'     '}<P>######</P></>,
  <>{'  '}<G>###############</G>{'      '}<P>######</P></>,
  <>{' '}<G>#############</G>{'        '}<P>######</P></>,
  null,
  null,
];

const info: React.ReactNode[] = [
  <>sumfetch</>,
  <><Y>-----------</Y></>,
  <><Y>ABOUT</Y></>,
  <>{config.name}</>,
  <>SDE @ AWS</>,
  <>B.S. CS @ CSUN '21</>,
  <><Y>-----------</Y></>,
  <><Y>CONTACT</Y></>,
  <><Link href={`mailto:${config.email}`}>{config.email}</Link></>,
  <><Link href={`https://github.com/${config.social.github}`}>{'github.com/' + config.social.github}</Link></>,
  <><Link href={`https://linkedin.com/in/${config.social.linkedin}`}>{'linkedin.com/in/' + config.social.linkedin}</Link></>,
  <><Y>-----------</Y></>,
  <><ColorBlock className="text-light-green dark:text-dark-green" /> <ColorBlock className="text-light-yellow dark:text-dark-yellow" /> <ColorBlock className="text-light-blue dark:text-dark-blue" /> <ColorBlock className="text-light-gray dark:text-dark-gray" /> <ColorBlock className="text-light-red dark:text-dark-red" /> <ColorBlock className="text-light-foreground dark:text-dark-foreground" /></>,
];

export const Sumfetch: React.FC = () => (
  <div className="whitespace-pre mt-4" style={{ lineHeight: 'normal' }}>
    {art.map((line, i) => (
      <div key={i} className="flex">
        <span className="inline-block" style={{ width: '45ch' }}>{line ?? ' '}</span>
        <span>{info[i]}</span>
      </div>
    ))}
  </div>
);

export default Sumfetch;
