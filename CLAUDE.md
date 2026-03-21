# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML/CSS website project — no build tools, package managers, or frameworks. Files are served directly by a web server.

## Development

There are no build, lint, or test commands. To preview the site locally, serve the files with any static HTTP server, e.g.:

```bash
python3 -m http.server 8080
```

## Repository Structure

- `index.html` / `page2.html` — Two-page Bootstrap 5.3 site (loaded via CDN)
- `Сайт` — A more complete Italian restaurant website (home, menu, contacts pages) stored as a single file containing embedded CSS and multiple HTML sections
- `README.md` — Contains the Italian restaurant website source code (CSS + 4 HTML pages)

## Architecture Notes

The Italian restaurant website (in `Сайт` and `README.md`) uses:
- Color scheme: dark green `#004d40`, red `#b71c1c`, cream `#fffaf0`
- Images from Pixabay CDN
- Embedded Google Maps iframe on the contacts page
- Client-side form validation via vanilla JavaScript
