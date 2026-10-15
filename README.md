# Rudra Chinhara Portfolio

React portfolio and blog built with Vite. The site is published at [https://rpchinhara.github.io](https://rpchinhara.github.io) using the `gh-pages` package.

## Requirements

- Node.js and npm
- Git, configured with access to `RPChinhara/RPChinhara.github.io`

## Run the site locally

From the project folder:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). The dev server is for local preview; it does not publish changes to the live site.

To make a production build and preview it locally:

```sh
npm run build
npm run preview
```

## Update the live GitHub Pages site

Commit and push the source changes to `main`, then publish the built site:

```sh
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

`npm run deploy` runs the configured `predeploy` step first, which builds the site, then publishes `dist/` to the `gh-pages` branch. GitHub Pages serves that branch at [https://rpchinhara.github.io](https://rpchinhara.github.io). Allow a short time for GitHub Pages to finish updating after deployment.

## Useful commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and publish `dist/` to GitHub Pages |

## Where to edit content

- `src/App.jsx` — profile, education, experience, projects, publications, skills, positions, and awards
- `src/BlogPage.jsx` and `public/blog-posts.json` — blog page and its posts
- `src/index.css` — site styles
