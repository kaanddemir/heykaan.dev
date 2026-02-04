# heykaan.dev

![Open Graph Image](./assets/icons/og-image.png)

A modern, minimal, performance-conscious personal platform designed to showcase web experiments and browser extensions.

## Overview

This project represents a personal portfolio built with a focus on lightweight architecture and clean UI philosophy. It features a custom design system with support for dynamic theming (Dark/Light/Brutalism) and full localization, focusing on clarity, performance, and maintainability.

## Live Site

Visit the live portfolio: **[heykaan.dev](https://heykaan.dev)**

## Features

- **Clean UI Philosophy**: A polished interface utilizing glassmorphism and smooth micro-interactions.
- **Accessibility-Aware**: Semantic HTML and high-contrast modes for an inclusive experience.
- **Dynamic Theming**: Automatic preference detection with support for Dark, Light, and Brutalism modes.
- **Localization**: Native English and Turkish support with instant content updates.
- **Lightweight Architecture**: Built with Vite and minimal JavaScript to keep the frontend fast and maintainable.

## Projects

### Browser Extensions

| Project | Description | Status |
| :--- | :--- | :--- |
| **[Soft Blackout](https://chromewebstore.google.com/detail/soft-blackout/oeefplhfabbdadpicjbgbiapoadppkpo)** | Selectively redact text on web pages. | Live |
| **[ReadScore](https://chromewebstore.google.com/detail/readscore/ocklmdaccbpakdjnkhckobkoochkajeg?authuser=0&hl=en)** | Analyze web page readability with transparent metrics. | Live |
| **[UX HeatGrid](https://chromewebstore.google.com/detail/ux-heatgrid/apdgicimbpoimklcanijmfbpfkekiajn)** | Real-time UX heatmap and attention analysis. | Live |

### Websites

| Project | Description | Status |
| :--- | :--- | :--- |
| **[Zanaat.app](https://zanaat.app)** | Interactive AI alchemy experience. | Live |
| **[StudyHub](https://github.com/kaanddemir/studyhub)** | Comprehensive personal study dashboard. | Live |

## Tech Stack

- **Core**: HTML5, Vanilla JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Typography**: Inter, Space Mono

## Project Philosophy

- Minimal but expressive UI
- Performance-aware frontend decisions
- No unnecessary dependencies
- Privacy-friendly, no tracking
- Design system consistency across projects

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kaanddemir/heykaan.dev.git
   cd heykaan.dev
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

3. For development with live reload:
   ```bash
   # Install live-server globally (optional)
   npm install -g live-server
   live-server
   ```

## Project Structure

```
heykaan.dev/
├── index.html              # Main portfolio page
├── readscore.html          # ReadScore extension landing page
├── soft-blackout.html      # Soft Blackout extension landing page
├── ux-heatgrid.html        # UX HeatGrid extension landing page
├── 404.html                # Custom error page
│
├── manifest.json           # PWA manifest
├── sitemap.xml             # SEO sitemap (must be in root)
├── robots.txt              # Search engine directives (must be in root)
│
├── assets/                 # Organized static resources
│   ├── icons/             # Icons and meta images
│   │   ├── apple-touch-icon.png
│   │   └── og-image.png
│   └── images/            # Project logos and screenshots
│
├── README.md               # Project documentation
├── LICENSE                 # MIT License
├── CNAME                   # Custom domain configuration
└── .gitignore              # Git ignore rules
```

## SEO & Performance

This site is fully optimized for search engines and performance:

- **SEO Score: 100/100** - Complete meta tags, structured data (Schema.org), canonical URLs
- **Multi-language Support** - URL-based i18n (English/Turkish) with proper hreflang tags
- **Progressive Web App** - Installable on mobile devices with offline support
- **Security Headers** - XSS protection, clickjacking prevention, secure referrer policy
- **Performance Optimized** - Resource preloading, DNS prefetch, lazy loading images
- **Core Web Vitals** - Optimized CLS (image dimensions), fast FCP with critical CSS preload

## Future Improvements

- [ ] Technical blog section
- [ ] Accessibility (a11y) score optimization
- [ ] Additional interactive experiments

## License

This project is open source and available under the [MIT License](LICENSE).

---
Built by **heykaan.dev**
