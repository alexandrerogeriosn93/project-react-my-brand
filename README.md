# React My Brand

A responsive landing page built with React and Vite. It includes a navigation
menu, hero section, feature cards, testimonials, pricing, and a footer.

## Preview

![Project preview](.github/preview.png)

## Technologies

- **React 19** for the UI and component state.
- **Vite 8** for the development server and production build.
- **Tailwind CSS 4** for utility-first styling, integrated through the Vite
  plugin.
- **Framer Motion** for animated elements.
- **Lucide React** for icons.
- **ESLint** with React Hooks and React Refresh plugins for code linting.
- **Prettier** with import-sorting and Tailwind CSS plugins for formatting.

## Project structure

```text
project-react-my-brand/
├── .github/
│   └── preview.png          # Project screenshot
├── public/
│   ├── favicon.svg          # Browser favicon
│   └── icons.svg            # Public SVG icons
├── src/
│   ├── assets/
│   │   ├── hero.png         # Landing page image asset
│   │   ├── react.svg        # React asset
│   │   └── vite.svg         # Vite asset
│   ├── App.jsx              # Landing page UI and interactions
│   ├── index.css            # Tailwind import and global styles
│   └── main.jsx             # React application entry point
├── .editorconfig            # Editor configuration
├── .gitignore               # Git ignore rules
├── .prettierrc              # Prettier configuration
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML entry point
├── package-lock.json        # Locked npm dependency versions
├── package.json             # Dependencies and npm scripts
└── vite.config.js           # Vite, React, and Tailwind plugin setup
```

## Getting started

### Requirements

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

### Build for production

```bash
npm run build
```

The optimized static files are generated in the `dist/` directory.

### Preview the production build locally

```bash
npm run preview
```

### Run the linter

```bash
npm run lint
```
