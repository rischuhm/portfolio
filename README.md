# Richard Richter — CV Page

A clean, Apple-inspired CV page built with [Eleventy](https://www.11ty.dev/). Uses only free fonts (Inter via CDN plus system fonts).

## Update your CV

All CV content lives in **`src/_data/cv.json`**. Edit this file to update:

- Contact details
- Work experience
- Education
- Certifications
- Languages
- Other information

The LinkedIn URL is read from `data.txt` — update it there or directly in `cv.json`.

## Development

```bash
# Install dependencies
npm install

# Start local dev server
npm start

# Build for production
npm run build
```

The built site is output to `_site/`.

## Structure

```
src/
├── _data/cv.json       # CV content (edit here)
├── _includes/base.njk  # HTML page shell
├── index.njk           # CV layout
└── styles/main.css     # Apple-inspired styles
```
