// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// Static site served from the domain root by GitHub Pages.
// Every page is built from src/pages; public/ holds only root files (CNAME,
// robots.txt, sitemap.xml, manifest.json, favicon.svg) and site icons and
// social images, which are copied to the output unchanged.
export default defineConfig({
  site: 'https://heykaan.dev',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  // Geist is downloaded at build time and self-hosted from /_astro/fonts/.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Geist',
      cssVariable: '--font-geist',
      weights: ['100 900'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
      display: 'swap',
    },
  ],
});
