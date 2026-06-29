# AGENTS.md — Richard Richter CV Page

This file contains project-specific guidance for AI coding agents working on this repository.

## Project Overview

This is a static, single-page personal CV/resume website for Richard Richter. It is built with [Eleventy](https://www.11ty.dev/) (v3) and uses Nunjucks templates. The design is Apple-inspired, using only free fonts (Inter via CDN plus system fonts) and [Bootstrap Icons](https://icons.getbootstrap.com/).

The site is data-driven: almost all CV content is read from `src/_data/cv.json` and rendered through `src/index.njk`. The final static site is output to `_site/`.

## Technology Stack

- **Build tool**: Eleventy 3.0 (`@11ty/eleventy`)
- **Template engine**: Nunjucks (`.njk`)
- **Runtime**: Node.js, ESM (`"type": "module"` in `package.json`)
- **Styling**: Plain CSS, no preprocessor
- **Icons**: Bootstrap Icons (`bootstrap-icons` dependency)
- **Fonts**: Inter from `https://rsms.me/inter/inter.css`
- **Data format**: JSON + a small Node.js data file

## Project Structure

```
.
├── eleventy.config.js      # Eleventy configuration (ESM)
├── package.json            # Node dependencies and scripts
├── data.txt                # LinkedIn URL, parsed at build time
├── src/
│   ├── _data/
│   │   ├── cv.json         # Main CV content (edit here)
│   │   └── meta.js         # Parses data.txt and exposes meta.linkedin
│   ├── _includes/
│   │   └── base.njk        # HTML page shell / layout
│   ├── assets/
│   │   ├── Lebenslauf Richard_Richter Lehramt.pdf
│   │   ├── profile.jpg
│   │   └── profilfoto_neu-min (1).JPG
│   ├── styles/
│   │   └── main.css        # Apple-inspired styles
│   └── index.njk           # Homepage template, renders CV sections
└── _site/                  # Build output (gitignored)
```

### Key Data Flow

1. `src/_data/cv.json` is automatically loaded by Eleventy as the `cv` global data variable.
2. `src/_data/meta.js` is automatically loaded as the `meta` global; it reads `data.txt`, extracts the `LINKEDIN="..."` value, and exposes `meta.linkedin`.
3. `src/index.njk` uses `layout: base.njk`, loops over `cv.sections`, and renders experience, education, certifications, abroad, languages, and other sections.
4. `src/_includes/base.njk` wraps the content with the HTML shell, navigation, and footer.

## Build, Development, and Deployment

### Available Scripts

```bash
# Install dependencies
npm install

# Start local dev server with watch (default: http://localhost:8080)
npm start

# Build for production; output goes to _site/
npm run build

# Serve the built site without watch
npm run serve
```

### Build Configuration

See `eleventy.config.js`:

- Input directory: `src`
- Output directory: `_site`
- Includes directory: `src/_includes`
- Data directory: `src/_data`
- Passthrough copies: `src/styles`, `src/assets`, and `node_modules/bootstrap-icons/font` → `_site/styles/bootstrap-icons`
- Watches `src/styles/` for changes during development
- Template formats: `njk`, `md`, `html`
- HTML template engine: `njk`

### Deployment

The contents of `_site/` are a fully static website and can be deployed to any static host (GitHub Pages, Netlify, Vercel, etc.). There is no CI/CD configuration in this repository; deploy by uploading or pointing the host at the `_site/` folder.

## Code Style Guidelines

### Templates

- Use Nunjucks for HTML templates.
- The base layout is `src/_includes/base.njk`; new pages should set `layout: base.njk` in front matter.
- A reusable Nunjucks macro `cta_link` is defined in `src/index.njk`.
- Global data is accessed via `cv` and `meta`.

### CSS

- Plain CSS in `src/styles/main.css`.
- Class naming follows a BEM-like convention: `.block`, `.block__element`, `.block--modifier`.
- CSS custom properties (variables) are defined on `:root`.
- The design uses large rounded corners, subtle gradients, backdrop-filter for the nav, and responsive breakpoints at `1024px`, `900px`, and `768px`.
- Print styles are included under `@media print`.

### Content Updates

- Update CV text in `src/_data/cv.json`, not directly in templates.
- Update the LinkedIn URL in `data.txt` as `LINKEDIN="..."`; `src/_data/meta.js` will pick it up.
- The CV is organized into sections. `src/index.njk` accesses sections by their array index (`cv.sections[0]` through `cv.sections[5]`). If you add, remove, or reorder sections, update the corresponding indices and section IDs in `index.njk`.

## Testing

There is no automated test framework configured for this project. Verify changes by:

1. Running `npm start` and checking the site in a browser.
2. Running `npm run build` and inspecting the generated `_site/index.html`.

## Security Considerations

- No server-side code or secrets are committed. `data.txt` only contains a public LinkedIn URL.
- `.env` and `.venv*` are gitignored; do not commit environment files.
- `node_modules/` and `_site/` are gitignored.
- External resources are loaded from trusted CDNs (`rsms.me` for Inter). Keep `rel="noopener"` on any new `target="_blank"` links.
