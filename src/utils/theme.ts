import themes from '../../themes.json';

export type ThemeName = keyof typeof themes;

let currentTheme = localStorage.getItem('theme') || 'dracula';

export const getThemeNames = (): string[] => Object.keys(themes);

export const getCurrentTheme = (): string => currentTheme;

export const applyTheme = (name: string): boolean => {
  const theme = themes[name as ThemeName];
  if (!theme) return false;

  const root = document.documentElement;
  const mode = root.classList.contains('dark') ? 'dark' : 'light';
  const colors = theme[mode as 'light' | 'dark'];

  Object.keys(colors).forEach((key) => {
    root.style.setProperty(
      `--light-${key}`,
      theme.light[key as keyof typeof theme.light],
    );
    root.style.setProperty(
      `--dark-${key}`,
      theme.dark[key as keyof typeof theme.dark],
    );
  });

  currentTheme = name;
  localStorage.setItem('theme', name);
  return true;
};

export const initTheme = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    document.documentElement.classList.add('dark');
  }

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      document.documentElement.classList.toggle('dark', e.matches);
    });

  if (currentTheme !== 'dracula') {
    applyTheme(currentTheme);
  }
};
