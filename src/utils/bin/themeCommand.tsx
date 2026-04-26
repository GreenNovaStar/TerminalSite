import React from 'react';
import { getThemeNames, applyTheme, getCurrentTheme } from '../theme';

const ThemeList: React.FC = () => {
  const names = getThemeNames();
  const current = getCurrentTheme();
  return (
    <div className="whitespace-pre-wrap mt-2" style={{ lineHeight: 'normal' }}>
      <div>Usage: theme {'<name>'}</div>
      <div className="mt-2">
        <span className="text-light-yellow dark:text-dark-yellow">Current theme:</span> {current}
      </div>
      <div className="mt-2">
        <span className="text-light-yellow dark:text-dark-yellow">Available themes:</span>
      </div>
      {names.map((name, i) => (
        <div key={i}>{'  '}{name === current ? `* ${name}` : `  ${name}`}</div>
      ))}
    </div>
  );
};

export const themeCommand = async (args: string[]): Promise<React.ReactNode | string> => {
  if (args.length === 0 || !args[0]) {
    return <ThemeList />;
  }

  const name = args[0].toLowerCase();
  const themes = getThemeNames();
  const match = themes.find((t) => t.toLowerCase() === name);

  if (!match) {
    return `Theme '${args[0]}' not found. Type 'theme' to see available themes.`;
  }

  applyTheme(match);
  return `Theme changed to '${match}'.`;
};
