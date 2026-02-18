# heykaan.dev

<div align="center">
  <img src="./assets/icons/og-image.png" alt="heykaan.dev Hero" width="100%" style="border-radius: 12px; margin-bottom: 24px;">
  <p align="center">
    <strong>Chrome extensions and developer tools for the modern web</strong><br>
    <em>Explore readability analysis, UX heatmaps and smart visual redaction tools built to analyze web content in your browser.</em>
  </p>
  <p align="center">
    <a href="https://heykaan.dev"><strong>Live Site</strong></a> •
    <a href="#projects"><strong>Projects</strong></a> •
    <a href="#tech-stack"><strong>Tech Stack</strong></a> •
    <a href="#optimization--web-standards"><strong>Optimization</strong></a> •
    <a href="#connect"><strong>Connect</strong></a>
  </p>
</div>

---

## Overview

**heykaan.dev** is a platform designed to showcase functional web tools and experimental projects. It serves as the primary home for my browser extensions and web applications, focused on providing clear, functional, and effective user experiences directly in the browser.

### Core Philosophy
- **Privacy First**: No tracking—all logic runs locally within the user's environment.
- **Visual Excellence**: Modern aesthetics featuring glassmorphism and smooth micro-interactions.
- **Optimized Experience**: Built for high responsiveness and modern browser standards.
- **Universal Accessibility**: Semantic HTML and multi-mode theming support.

---

## Projects

### Browser Extensions
| Icon | Project | Description | Status |
| :---: | :--- | :--- | :--- |
| <img src="./assets/images/soft_blackout_logo.png" width="40"> | **[Soft Blackout](https://chromewebstore.google.com/detail/soft-blackout/oeefplhfabbdadpicjbgbiapoadppkpo)** | Intelligent redaction modes to hide sensitive content locally. | [Live] |
| <img src="./assets/images/readscore_logo.png" width="40"> | **[ReadScore](https://chromewebstore.google.com/detail/readscore/ocklmdaccbpakdjnkhckobkoochkajeg)** | Deep readability analysis with transparent SEO/UX metrics. | [Live] |
| <img src="./assets/images/ux_heatgrid_logo.png" width="40"> | **[UX HeatGrid](https://chromewebstore.google.com/detail/ux-heatgrid/apdgicimbpoimklcanijmfbpfkekiajn)** | Real-time page attention heatmaps for designers and devs. | [Live] |

### Featured Websites
| Icon | Project | Description | Status |
| :---: | :--- | :--- | :--- |
| <img src="./assets/images/zanaat_logo.png" width="40"> | **[Zanaat.app](https://zanaat.app)** | Interactive AI alchemy experience with stunning visuals. | [Live] |
| <img src="./assets/images/studyhub_logo.png" width="40"> | **[StudyHub](https://github.com/kaanddemir/studyhub)** | A comprehensive personal study dashboard system. | [Repo] |

---

## Tech Stack

- **Frontend**: HTML5, Vanilla JavaScript (ES6+)
- **Styling**: Tailwind CSS (CDN-based for modular simplicity)
- **Typography**: Inter (UI), Space Mono (Code)
- **Deployment**: Static hosting via GitHub Pages

---

## Brand Identity & Palettes

Distinct visual identities for each tool, focused on clarity and functional contrast:

| Project | Brand Color (Primary) | Accent / Secondary | Primary Background |
| :--- | :--- | :--- | :--- |
| **heykaan.dev** | Emerald Green `#34D399` | Mint Hover `#6EE7B7` | Deep Forest `#030F05` |
| **ReadScore** | Royal Blue `#2563EB` | Sky Accent `#60A5FA` | Midnight Slate `#0F172A` |
| **UX HeatGrid** | Amber Gold `#FEBC2E` | Heatmap Red `#FF5B3A` | Dark Space `#101622` |
| **Soft Blackout** | Minimal Onyx `#1E1E1E` | Cream White `#F7F5E7` | Absolute Black `#000000` |

---

## Project Structure

```bash
heykaan.dev/
├── index.html              # Main Hub & Portfolio
├── readscore/              # ReadScore Directory
│   └── index.html          # ReadScore Product Page
├── soft-blackout/          # Soft Blackout Directory
│   └── index.html          # Soft Blackout Product Page
├── ux-heatgrid/            # UX HeatGrid Directory
│   └── index.html          # UX HeatGrid Product Page
├── 404.html                # Custom Branding Error Page
├── manifest.json           # PWA Configuration
├── sitemap.xml             # Search Engine Optimization
├── robots.txt              # Crawler Directives
└── assets/                 # Centralized Media Repository
    ├── icons/              # Logic & Meta Icons
    └── images/             # Product Showcase Logos
```

---

## Optimization & Web Standards

The platform is built with a focus on discoverability, accessibility, and high standards:

- **Search Visibility**: Includes comprehensive meta-tag optimization, Schema.org structured data, and canonical mapping.
- **Responsiveness**: Implements resource preloading and lazy-loading strategies for efficient asset delivery.
- **Accessibility**: Uses semantic HTML and ARIA-compliant structures to ensure a universal user experience.
- **Security**: Hardened with Content Security Policy (CSP) and local-first data principles for privacy.

---

## Local Development

To preview the site locally, clone the repository and run a simple HTTP server:

```bash
# Clone
git clone https://github.com/kaanddemir/heykaan.dev.git
cd heykaan.dev

# Run with Python
python -m http.server 8000

# or Node.js
npx http-server
```

---

## Connect

- **GitHub**: [@kaanddemir](https://github.com/kaanddemir)
- **X (Twitter)**: [@heykaandev](https://x.com/heykaandev)
- **Product Hunt**: [@heykaandev](https://www.producthunt.com/@heykaandev)

---

## License

This project is open-source and released under the [MIT License](LICENSE).

<p align="right">
  Built with love by <strong><a href="https://heykaan.dev">Kaan Demir</a></strong>
</p>
