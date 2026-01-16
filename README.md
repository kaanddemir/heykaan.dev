# HeyKaan.dev

Portfolio of Kaan, a developer specializing in modern websites and powerful Chrome extensions. This project showcases a clean, glassmorphism-inspired UI with robust localization and theme management.

## Features

- **Dynamic Dark/Light Mode**: Automatically detects system preference and allows manual toggling. Persists preference via `localStorage`.
- **Localization (i18n)**: Full support for English and Turkish languages with instant content updates without page reload.
- **Glassmorphism Design**: Custom CSS classes for frosted glass effects on cards and navigation.
- **Responsive Layout**: Fully responsive design adapting from mobile to large desktop screens.
- **Smooth Animations**: Custom Tailwind animations for blobs, text shimmering, and fade-in effects.

## Portfolio Highlights

The portfolio currently showcases the following projects (in development):

- **Soft Blackout**: Selectively redact text on web pages.

## Design System & Color Palette

The project uses a curated color palette primarily based on Tailwind CSS colors, with custom extensions for glassmorphism.

### Primary Colors (Emerald)
Used for primary actions, branding, and active states.

| Class | Hex Code | Usage |
| :--- | :--- | :--- |
| `emerald-50` | `#ecfdf5` | Light Mode Background (with opacity) |
| `emerald-100` | `#d1fae5` | Light Mode Icon Backgrounds |
| `emerald-400` | `#34d399` | Dark Mode Text Accent, Animated Blobs |
| `emerald-600` | `#059669` | Primary Buttons, Light Mode Text Accent |
| `emerald-950` | `#022c22` | Light Mode Headings, Dark Mode Background Hover |

### Neutral Colors
Used for text, backgrounds, and borders.

| Class | Hex Code | Usage |
| :--- | :--- | :--- |
| `slate-600` | `#475569` | Body Text (Light Mode) |
| `slate-400` | `#94a3b8` | Subtitles, "Coming Soon" Text |
| `zinc-300` | `#d4d4d8` | Body Text (Dark Mode) |
| `zinc-800` | `#27272a` | Dark Mode Hover States |
| `zinc-900` | `#18181b` | Dark Mode Card Hover Backgrounds |
| `zinc-950` | `#09090b` | Dark Mode Page Background |

### Accent Colors
Used for specific project cards and animated background blobs.

- **Teal**: `teal-400` (#2dd4bf), `teal-600` (#0d9488)
- **Cyan**: `cyan-400` (#22d3ee), `cyan-500` (#06b6d4)
- **Lime**: `lime-600` (#65a30d)

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

---
&copy; 2026 HeyKaan.dev
