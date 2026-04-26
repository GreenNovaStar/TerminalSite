module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      light: {
        background: 'var(--light-background)',
        foreground: 'var(--light-foreground)',
        yellow: 'var(--light-yellow)',
        green: 'var(--light-green)',
        gray: 'var(--light-gray)',
        blue: 'var(--light-blue)',
        red: 'var(--light-red)',
      },
      dark: {
        background: 'var(--dark-background)',
        foreground: 'var(--dark-foreground)',
        yellow: 'var(--dark-yellow)',
        green: 'var(--dark-green)',
        gray: 'var(--dark-gray)',
        blue: 'var(--dark-blue)',
        red: 'var(--dark-red)',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
