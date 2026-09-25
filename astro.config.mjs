// @ts-check
import { defineConfig } from 'astro/config';

// Static site served from the domain root by GitHub Pages.
// Legacy product pages and root files live in public/ and are copied
// to the output unchanged, so their public URLs stay the same.
export default defineConfig({
  site: 'https://heykaan.dev',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
