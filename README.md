# heykaan.dev

Source for [heykaan.dev](https://heykaan.dev), the portfolio of Kaan Demir: featured projects, four Chrome extensions, an about section and contact details.

## Stack

- [Astro](https://astro.build) 7, static output
- TypeScript (strict)
- Vanilla CSS with design tokens in `src/styles/tokens.css`
- Geist, self-hosted at build time through Astro's font API
- Shared light and dark themes with a System / Light / Dark toggle

There is no client-side framework. The only runtime JavaScript is the theme toggle and its pre-paint bootstrap.

## Pages

| Route | Source |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/readscore/` | `src/pages/readscore/index.astro` |
| `/ux-heatgrid/` | `src/pages/ux-heatgrid/index.astro` |
| `/typeflux/` | `src/pages/typeflux/index.astro` |
| `/soft-blackout/` | `src/pages/soft-blackout/index.astro` |
| `/about/` | `src/pages/about.astro`, an instant redirect to `/#about` |
| 404 | `src/pages/404.astro`, built as `404.html` and excluded from indexing |

### Product pages

The four extension pages share `src/layouts/ProductLayout.astro` and the components in `src/components/product/`. Each page passes one typed data file from `src/data/products/` (type: `src/types/product.ts`) and renders the same sections in the same order: hero, What it does, How it works, Before you install, and a closing install link. Store, GitHub and Product Hunt links come from `src/data/extensions.ts`, which the homepage also uses.

Product screenshots in `src/assets/products/` are captures of the real extensions; each data file notes how its screenshot was made.

## Project structure

```text
src/
  assets/        Images processed by Astro (project, extension and product images)
  components/    Shared header, footer, headings and theme toggle
    home/        Homepage sections
    product/     Product page sections
  data/          Site, project, extension and product content
  layouts/       BaseLayout (head, SEO, theme bootstrap) and ProductLayout
  pages/         Routes
  scripts/       Theme toggle logic
  styles/        Tokens, base styles and global layout
  types/         Content types
public/          Files copied unchanged: CNAME, robots.txt, sitemap.xml,
                 manifest.json, favicon.svg, site icons and social images
```

## Development

Requires Node.js 22.19.0 or later (`package.json` `engines`); `.nvmrc` pins 22.23.3.

```sh
npm install
npm run dev       # development server
npm run check     # Astro and TypeScript diagnostics
npm run build     # astro check, then a production build into dist/
npm run preview   # serve the production build locally
```

## Output and publishing

`npm run build` writes a fully static site to `dist/`, with one `index.html` per route directory, hashed assets in `dist/_astro/`, self-hosted fonts, and the files from `public/`. All links and asset paths are root-relative, for serving from the domain root.

The live site is still the previous static version, published by GitHub Pages from the `main` branch. Moving publishing to this Astro build is pending. The legacy `index.html` and `main/` at the repository root belong to that previous version and are not part of the Astro build.

## License

MIT. See [LICENSE](LICENSE).
