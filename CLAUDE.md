# CLAUDE.md

This file describes the structure, conventions, and development workflow for this repository. It is intended to help AI assistants understand the codebase quickly and accurately.

---

## Project Overview

This is a **static HTML/CSS website** written entirely in Russian. It appears to be an educational or template project demonstrating multi-page website construction with Bootstrap and custom CSS.

There is no build system, package manager, server, or test framework — all files are served as-is by any static file host or opened directly in a browser.

---

## Repository Structure

```
/
├── index.html      # Main landing page (page 1 of 2)
├── page2.html      # Secondary page (page 2 of 2)
├── Сайт            # Combined CSS + HTML reference templates (see note below)
└── README.md       # Contains minified HTML scraped from an external Russian news article (not project docs)
```

### File Details

| File | Purpose |
|------|---------|
| `index.html` | Bootstrap 5.3.0-based welcome page. Links to `page2.html`. |
| `page2.html` | Secondary Bootstrap page. Links back to `index.html`. |
| `Сайт` | A combined file: the first ~118 lines are a CSS stylesheet (`styles.css`), followed by multiple HTML page templates concatenated together (home, menu ×2, contacts). This is a reference/scratch file, **not a standalone webpage**. |
| `README.md` | Minified HTML from an RBC news article. Not project documentation. |

> **Note on `Сайт`:** The filename means "Website" in Russian. The file mixes a `styles.css` block with three HTML documents appended after it. The embedded HTML templates describe a multi-page **Italian restaurant** site (`Итальянский Ресторан`) with pages: Home (`index.html`), Menu (`menu.html`), and Contacts (`contacts.html`). These pages reference `styles.css` which corresponds to the CSS portion at the top of `Сайт`. The restaurant site pages are templates only — they are not present as separate files in the repo.

---

## Technologies Used

| Technology | Version / Source | Role |
|------------|-----------------|------|
| HTML5 | — | Page structure |
| CSS3 | — | Custom styling (`Сайт`) |
| Bootstrap | 5.3.0 via jsDelivr CDN | Responsive layout, buttons |
| Russian (Cyrillic) | — | All user-visible text |

No JavaScript frameworks, build tools, or server-side code are used. The contacts page template inside `Сайт` has a small inline `<script>` for client-side form validation.

---

## Color Palette & Design Conventions

The CSS in `Сайт` defines the following palette:

| Role | Color | Hex |
|------|-------|-----|
| Page background | Cream | `#fffaf0` |
| Header / Footer background | Dark green | `#004d40` |
| Headings (`h1`, `h2`) | Deep red | `#b71c1c` |
| Primary button / hover accent | Bright red | `#e53935` |
| Body text | Dark grey | `#333` |
| Nav links | White | `#ffffff` |

Fonts: `Arial` (body), `Georgia` (headings).

---

## Page Architecture

### `index.html` (Bootstrap site)
- `lang="ru"`, `charset="UTF-8"`
- Loads Bootstrap 5.3.0 CSS and JS from CDN
- Single `.container` div with an `<h1>`, a `<p>`, and a button link to `page2.html`
- No custom stylesheet linked

### `page2.html` (Bootstrap site)
- Mirror structure of `index.html`
- Button links back to `index.html`
- No custom stylesheet linked

### Italian Restaurant templates (inside `Сайт`)
- Three separate HTML documents: Home, Menu, Contacts
- All link to `styles.css` (the CSS block at the top of `Сайт`)
- Navigation bar: `Главная` → `index.html`, `Меню` → `menu.html`, `Контакты` → `contacts.html`
- Menu page uses `<article class="menu-item">` with external Pixabay images
- Contacts page embeds a Google Maps `<iframe>` and a feedback form with JS validation

---

## Development Workflow

There is no build step. To work on this project:

1. **Edit files** directly — HTML and CSS changes are immediately reflected on reload.
2. **Preview** by opening `index.html` in a browser, or using any static file server:
   ```bash
   # Python (no install required)
   python3 -m http.server 8080
   # Then open http://localhost:8080
   ```
3. **No linting, testing, or compilation** is configured. There are no npm scripts to run.

---

## Conventions for AI Assistants

- **Language:** All content (comments, UI text, page titles) is in Russian. Keep new content in Russian unless the user requests otherwise.
- **Encoding:** Always use `UTF-8`. Cyrillic filenames (e.g., `Сайт`) are valid and intentional.
- **Bootstrap:** The live pages (`index.html`, `page2.html`) rely solely on Bootstrap CDN classes. Avoid adding a separate stylesheet link unless explicitly requested.
- **Restaurant templates:** The HTML inside `Сайт` after line 118 is template/reference code concatenated to the stylesheet. Do not treat these as deployed pages.
- **No bundler:** Do not introduce npm, webpack, Vite, or any build tooling unless explicitly asked.
- **Minimal changes:** This is a simple project. Prefer small, targeted edits over restructuring.
- **README.md:** The existing README contains external scraped content, not documentation. Do not rely on it for project information.

---

## Git Branch

Active development branch: `claude/claude-md-mmkwhx14jxr2prf9-7BTh1`
Default branch: `master`
