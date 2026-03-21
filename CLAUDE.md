# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML website project with no build system or dependencies. All files are plain HTML/CSS/JavaScript served directly.

## Structure

- `index.html` / `page2.html` — Bootstrap 5.3.0 pages (Russian language, linked to each other)
- `Сайт` — Combined file containing a multi-page Italian restaurant website template (index.html, menu.html, contacts.html + styles.css)

## Development

No build step required. Open HTML files directly in a browser or serve with any static file server:

```bash
python3 -m http.server 8000
```

## Key Details

- Bootstrap 5.3.0 loaded via CDN (no local install needed)
- The restaurant template in `Сайт` includes a contact form with JavaScript validation and a Google Maps iframe
- External images referenced from Pixabay
- No tests, no CI/CD, no package manager
