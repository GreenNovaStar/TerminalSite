// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import { getCommandHistory } from '../commandHistory';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// Portfolio
export const portfolio = async (args: string[]): Promise<string> => {
  window.open(`${config.portfolio_url}`, '_blank');
  return `Opening portfolio at ${config.portfolio_url}...`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I'm ${config.name} — a Software Development Engineer at Amazon Web Services.

I currently build AI-powered migration assessment agents on the AWS Transform
team. Previously, I worked on AWS Transfer Family where I led AS2 protocol
certifications and built the B2B Data Interchange console.

I enjoy working across the stack — from React frontends to distributed cloud
services — and I'm always looking for interesting problems to solve.

You're on my terminal site. For the full experience, type 'portfolio' or
visit ${config.portfolio_url}.

Get to know me:
'experience' - my work experience.
'skills' - my technical skills.
'projects' - things I build on the side.
'portfolio' - my full portfolio site.
'contact' - how to reach me.
'resume' - my latest resume.`;
};

// Whoami-style one-liner
export const whois = async (args: string[]): Promise<string> => {
  return `${config.name} — Software Development Engineer @ AWS. Type 'about' for more.`;
};

// Education
export const education = async (args: string[]): Promise<string> => {
  return `EDUCATION
  ══════════════════════════════════════════════════════
  B.S. Computer Science
  California State University, Northridge (CSUN) — 2021`;
};

// Tools & setup
export const uses = async (args: string[]): Promise<string> => {
  return `WHAT I USE
  ══════════════════════════════════════════════════════
  Editor    VS Code
  Languages TypeScript, Python, Java
  Frontend  React, Tailwind CSS
  Cloud     AWS (Lambda, ECS, DynamoDB, S3)
  AI/ML     Strands Agents
  Shell     zsh`;
};

// Command history
export const history = async (args: string[]): Promise<string> => {
  const entries = getCommandHistory();
  if (entries.length === 0) {
    return 'No commands in history yet.';
  }
  return entries.map((cmd, i) => `${(i + 1).toString().padStart(4)}  ${cmd}`).join('\n');
};

// Optional one-line descriptions for `man`. This is just flavor text — the set
// of valid commands is always derived from `bin` (see below), so adding a new
// command needs no edit here; it will work in `man` with a generic message
// until you add a description.
const descriptions: Record<string, string> = {
  about: 'Print a short bio.',
  banner: 'Display the ASCII art banner.',
  cd: 'Change directory (for show only).',
  clear: 'Clear the terminal.',
  contact: 'Show ways to reach me.',
  cowsay: 'Make a cow say something. Usage: cowsay [text]',
  date: 'Print the current date and time.',
  duckduckgo: 'Search DuckDuckGo. Usage: duckduckgo [query]',
  echo: 'Print the given text. Usage: echo [text]',
  education: 'Show my education background.',
  email: 'Open a mailto link to my email.',
  emacs: 'A friendly editor opinion.',
  exit: 'Attempt to leave. (you cannot)',
  experience: 'Show my work experience.',
  fortune: 'Print a random programming fortune.',
  github: 'Open my GitHub profile.',
  google: 'Search Google. Usage: google [query]',
  help: 'List all available commands.',
  history: 'Show previously entered commands.',
  linkedin: 'Open my LinkedIn profile.',
  ls: 'List directory contents (for show only).',
  man: 'Show the manual for a command. Usage: man [command]',
  matrix: 'Follow the white rabbit.',
  neofetch: 'Display a system-info-style summary.',
  nvim: 'A friendly editor opinion.',
  portfolio: 'Open my portfolio site.',
  projects: 'Show side projects I have built.',
  pwd: 'Print the working directory.',
  repo: 'Open my GitHub repositories.',
  resume: 'Open my latest resume.',
  skills: 'Show my technical skills.',
  sl: 'You meant ls, right?',
  sudo: 'Try to gain superpowers.',
  sumfetch: 'Display a system-info-style summary.',
  theme: 'Change the color theme. Usage: theme [name]',
  uses: 'Show the tools and tech I use.',
  vi: 'A friendly editor opinion.',
  vim: 'A friendly editor opinion.',
  weather: 'Show the weather for a city. Usage: weather [city]',
  whois: 'Print a one-line bio.',
};

// The authoritative command set: everything exported to `bin`, plus 'clear'
// (which is handled directly in the shell, not as a bin command).
const knownCommands = (): string[] => ['clear', ...Object.keys(bin)];

export const man = async (args: string[]): Promise<string> => {
  const name = args[0]?.toLowerCase();
  if (!name) {
    return 'What manual page do you want? Usage: man [command]';
  }
  if (knownCommands().indexOf(name) === -1) {
    return `No manual entry for ${name}. Type 'help' to see available commands.`;
  }
  return `${name} - ${descriptions[name] ?? 'No description available.'}`;
};

// Experience
export { experienceCommand as experience } from './experienceCommand';

// Skills
export { skillsCommand as skills } from './skillsCommand';

// Projects
export { projectsCommand as projects } from './projectsCommand';

// Contact
export { contactCommand as contact } from './contactCommand';

// Theme
export { themeCommand as theme } from './themeCommand';

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.`;
};

export const pwd = async (args: string[]): Promise<string> => {
  return `/home/${config.ps1_username}`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const exit = async (args?: string[]): Promise<string> => {
  return `there is no escape. (nice try, though)`;
};

// Fun / gags
const fortunes: string[] = [
  'The best way to predict the future is to implement it.',
  'A user interface is like a joke. If you have to explain it, it’s not that good.',
  'There are two hard things in CS: cache invalidation, naming things, and off-by-one errors.',
  'Weeks of coding can save you hours of planning.',
  'It works on my machine. ¯\\_(ツ)_/¯',
  'Deleted code is debugged code.',
];

export const fortune = async (args?: string[]): Promise<string> => {
  const i = Math.floor(new Date().getTime() / 1000) % fortunes.length;
  return fortunes[i];
};

export const cowsay = async (args: string[]): Promise<string> => {
  const text = (args.join(' ') || 'moo').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const top = ' ' + '_'.repeat(text.length + 2);
  const bottom = ' ' + '-'.repeat(text.length + 2);
  return `${top}
< ${text} >
${bottom}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;
};

export const sl = async (args?: string[]): Promise<string> => {
  return `You typed 'sl' instead of 'ls'. Here comes the train:

      ====        ________                ___________
  _D _|  |_______/        \\__I_I_____===__|_________|
   |(_)---  |   H\\________/ |   |        =|___ ___|
   /     |  |   H  |  |     |   |         ||_| |_||
  |      |  |   H  |__--------------------| [___] |
  | ________|___H__/__|_____/[][]~\\_______|       |
  |/ |   |-----------I_____I [][] []  D   |=======|__`;
};

export const matrix = async (args?: string[]): Promise<string> => {
  return `Wake up, Neo...

  01001000 01100101 01101100 01101100 01101111
  01010111 01101111 01110010 01101100 01100100

  (the terminal has you)`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ███████████             ███                          █████ █████  ███
 ░░███░░░░░███           ░░░                          ░░███ ░░███  ░░░
  ░███    ░███ ████████  ████   ██████   ████████      ░░███ ███   ████  ████████
  ░██████████ ░░███░░███░░███  ░░░░░███ ░░███░░███      ░░█████   ░░███ ░░███░░███
  ░███░░░░░███ ░███ ░░░  ░███   ███████  ░███ ░███       ░░███     ░███  ░███ ░███
  ░███    ░███ ░███      ░███  ███░░███  ░███ ░███        ░███     ░███  ░███ ░███
  ███████████  █████     █████░░████████ ████ █████       █████    █████ ░███████
 ░░░░░░░░░░░  ░░░░░     ░░░░░  ░░░░░░░░ ░░░░ ░░░░░       ░░░░░    ░░░░░  ░███░░░
                                                                         ░███
                                                                         █████
                                                                        ░░░░░
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'experience' to see my work experience.
`;
};
