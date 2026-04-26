# TerminalSite

A terminal-styled personal portfolio website built with React, Vite, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Commands

| Command | Description |
|---------|-------------|
| `help` | List all available commands |
| `about` | About me |
| `experience` | Work experience |
| `skills` | Technical skills |
| `contact` | Contact info with clickable links |
| `projects` | GitHub repos sorted by stars |
| `sumfetch` / `neofetch` | System-style summary with ASCII art |
| `theme` | List themes |
| `theme <name>` | Switch theme (dracula, Nord, Solarized, OneDark, etc.) |
| `resume` | Open resume |
| `readme` | Display GitHub README |
| `weather <city>` | Show weather |
| `repo` | Open GitHub repo |

## Customization

### config.json

Edit `config.json` to update your name, social links, email, and default colors.

### Themes

9 built-in themes in `themes.json`. Themes can be switched at runtime via the `theme` command and persist across sessions via localStorage.

### Banner

Update the ASCII banner in `src/utils/bin/commands.ts`.

## Build

```bash
npm run build
npm run preview
```

## Deploy

Deploy as a static site on Vercel, Netlify, or any static hosting provider.

## Credit

Based on [LiveTerm](https://github.com/Cveinnt/LiveTerm) by Cveinnt, which was based on [Terminal](https://github.com/m4tt72/terminal) by M4TT72.
