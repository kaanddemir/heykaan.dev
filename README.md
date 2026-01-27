# heykaan.dev

Portfolio of Kaan, a developer specializing in modern websites, Chrome extensions, and simple, useful web tools.

## Overview

This project serves as my personal portfolio, designed to showcase my work in a clean, interactive, and user-friendly environment. It features a custom design system with support for dynamic theming (Dark/Light/Brutalism) and full localization (English/Turkish), all built without heavy frameworks or build steps.

## Live Site

Visit the live portfolio: **[heykaan.dev](https://heykaan.dev)**

## Features

- **Dynamic Theme System**: Automatically detects system preference and supports manual toggling between **Light**, **Dark**, and a special **Brutalism** mode.
- **Localization (i18n)**: Native support for English and Turkish with instant content updates (no page reload).
- **Glassmorphism UI**: Custom CSS utilities for frosted glass effects (`.glass-card`, `.glass-nav`).
- **Responsive Design**: Fluid layout that adapts perfectly from mobile phones to large desktop screens.
- **Zero Build Step**: Built with pure HTML, Tailwind CSS (via CDN), and Vanilla JS for maximum portability and simplicity.

## Projects

### Browser Extensions

| Project | Description | Status |
| :--- | :--- | :--- |
| **[Soft Blackout](https://chromewebstore.google.com/detail/soft-blackout/oeefplhfabbdadpicjbgbiapoadppkpo)** | Selectively redact text on web pages. | Live |
| **[ReadScore](https://chromewebstore.google.com/detail/readscore/ocklmdaccbpakdjnkhckobkoochkajeg?authuser=0&hl=en)** | Analyze the readability of web pages with transparent metrics. | Live |

### Websites

| Project | Description | Status |
| :--- | :--- | :--- |
| **[Zanaat.app](https://zanaat.app)** | An interactive experience combining AI's creativity with alchemy logic. | Live |
| **[StudyHub](https://github.com/kaanddemir/studyhub)** | A personal study dashboard for tracking habits and managing courses. | Live |

## Design System

The project uses a curated color palette and custom utility classes.

### Colors
- **Primary**: Emerald (`emerald-600`, `emerald-950`) - Used for main actions and branding.
- **Accent**: Cyan (`cyan-50`, `cyan-600`) - Used for badges and secondary highlights.
- **Neutral**: Slate (`slate-600`) & Zinc (`zinc-950`) - Used for text and dark mode backgrounds.

### Typography
- **Primary Font**: `Inter` (Clean, modern sans-serif).
- **Brutalism Font**: `Space Mono` (Monospace for the brutalist theme).

## Tech Stack

- **Core**: HTML5, Vanilla JavaScript (ES6+)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) (CDN)
- **Fonts**: Google Fonts (Inter, Space Mono)
- **Icons**: SVG Icons (Heroicons style)

## Performance & Philosophy

This project is built on the philosophy of **simplicity and raw performance**.
- **No Build Tools**: No Webpack, Vite, or complex node_modules dependencies.
- **Instant Load**: The site loads almost instantly due to minimal blocking resources.
- **Accessibility**: Semantic HTML and high-contrast colors ensure the content is accessible.

## Installation

Since this project uses no build tools, running it is extremely simple:

1.  Clone the repository:
    ```bash
    git clone https://github.com/kaanddemir/heykaan.dev.git
    ```
2.  Navigate to the project folder:
    ```bash
    cd heykaan.dev
    ```
3.  Open `index.html` in your browser.

## File Structure

```
heykaan.dev/
├── index.html          # Main application file (HTML + embedded JS/CSS logic)
├── README.md           # Documentation
├── CNAME               # Custom domain configuration
├── og-image.png        # Social sharing preview image
└── assets/
    └── images/         # Project logos and static assets
```

## Future Improvements

- [ ] Add a dedicated blog section for technical writing.
- [ ] Improve accessibility (a11y) scores.
- [ ] Add more interactive experiments.

## License

This project is open source and available under the [MIT License](LICENSE).

---
Built by **heykaan.dev**
