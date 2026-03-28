# Ravindra IAS Website

Modern UPSC coaching landing page built with React, Vite, and Tailwind CSS.

## Features
- Dark theme with gradient accents and glassmorphism cards
- Sticky responsive navbar with mobile menu
- Animated hero, course cards, and results section
- FAQ accordion, resource search, and enrollment form with validation
- Dark/light mode toggle and toast notifications

## Run locally
1. Install Node.js (LTS) if not already installed.
2. Open the project folder in a terminal.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local development URL shown by Vite.

## Project Structure
- `index.html` — main HTML entry
- `src/main.jsx` — React entry point
- `src/App.jsx` — main application layout
- `src/index.css` — Tailwind and custom styling
- `src/components/` — reusable UI sections
- `src/data/content.js` — course, student, FAQ, and resource data

## Notes
- The website is ready to run once Node.js/npm is installed.
- Deploy to Netlify or Vercel with the included `netlify.toml` and `vercel.json` files.

## Deploy
- Netlify: connect the repo and use `npm run build` with `dist` as the publish directory.
- Vercel: import the project and Vercel will use `vercel.json` automatically.
