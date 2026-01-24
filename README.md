# heykaan.dev

Portfolio of Kaan, a developer specializing in modern websites, Chrome extensions, and interactive web experiences. This project showcases a clean, minimal UI with robust localization and theme management.

## Features

- **Dynamic Dark/Light Mode**: Automatically detects system preference and allows manual toggling. Persists preference via `localStorage`.
- **Localization (i18n)**: Full support for English and Turkish languages with instant content updates without page reload.
- **Modern Design**: Clean, minimal aesthetics with subtle glassmorphism effects and smooth animations.
- **Responsive Layout**: Fully responsive design adapting from mobile to large desktop screens.
- **Smooth Animations**: Custom Tailwind animations for blobs, text shimmering, and fade-in effects.

## Projects

### Browser Extensions

| Project | Description | Status |
| :--- | :--- | :--- |
| **[Soft Blackout](https://chromewebstore.google.com/detail/soft-blackout/oeefplhfabbdadpicjbgbiapoadppkpo)** | Selectively redact text on web pages. | Live |
| **ReadScore** | Analyze the readability of web pages with transparent, explainable metrics. | Coming Soon |

### Websites

| Project | Description | Status |
| :--- | :--- | :--- |
| **[Zanaat.app](https://zanaat.app)** | Craft is an interactive experience combining AI's limitless creativity with alchemy logic. | Live |
| **[StudyHub](https://github.com/kaanddemir/studyhub)** | A personal study dashboard designed to help students track habits, manage courses, calculate grades, and boost productivity. | Live |

## Design System & Color Palette

The project uses a curated color palette primarily based on Tailwind CSS colors.

### Primary Colors (Emerald)
Used for headings, primary buttons, and interactions.

| Class | Hex | Usage |
| :--- | :--- | :--- |
| `emerald-50` | `#ecfdf5` | Background tints & subtles |
| `emerald-400` | `#34d399` | Dark mode accents |
| `emerald-500` | `#10b981` | Button hover states |
| `emerald-600` | `#059669` | Primary buttons & selection |
| `emerald-950` | `#022c22` | Headings & Logo (Light Mode) |

### Accent Colors (Cyan)
Used for badges, secondary gradients, and decorations.

| Class | Hex | Usage |
| :--- | :--- | :--- |
| `cyan-50` | `#ecfeff` | Badge backgrounds (Light Mode) |
| `cyan-200` | `#a5f3fc` | Badge borders (Light Mode) |
| `cyan-600` | `#0891b2` | Badge text (Light Mode) |
| `cyan-950` | `#083344` | Badge backgrounds (Dark Mode) |

### Neutral Colors
Used for text, backgrounds, and borders.

| Class | Hex | Usage |
| :--- | :--- | :--- |
| `slate-50` | `#f8fafc` | Frame backgrounds (Light Mode) |
| `slate-300` | `#cbd5e1` | Frame borders (Light Mode) |
| `slate-600` | `#475569` | Body Text (Light Mode) |
| `zinc-900` | `#18181b` | Dark Mode Card Hover Backgrounds |
| `zinc-950` | `#09090b` | Dark Mode Page Background |

### Glassmorphism Utilities

Custom CSS classes defined in `<head>`:

**`.glass-card`**
- **Light**: `bg-white/65`, `backdrop-blur-md`, `border-white/50`
- **Dark**: `bg-zinc-950/60`, `border-white/5`

**`.glass-nav`**
- **Light**: `bg-white/5`, `backdrop-blur-sm`
- **Dark**: `bg-black/60`, `border-white/3`

## Tech Stack

- **HTML5**: Semantic markup.
- **Tailwind CSS**: Utility-first CSS framework (loaded via CDN for portability).
- **JavaScript (Vanilla)**: For theme toggling and localization logic.
- **Inter Font**: Google Fonts.

## Installation & Usage

Since this is a static site using Tailwind CDN:

1.  Clone the repository or download the files.
2.  Open `index.html` in any modern web browser.
3.  No build step or node_modules required.

## File Structure

```
heykaan.dev/
├── index.html          # Main HTML file
├── README.md           # Project documentation
├── CNAME               # Custom domain configuration
├── og-image.jpg        # Open Graph image for social sharing
├── assets/
│   └── images/
│       ├── readscore_logo.png
│       ├── soft_blackout_logo.png
│       ├── studyhub_logo.png
│       └── zanaat_logo.png
└── .git/               # Git repository
```

---
© 2026 heykaan.dev
