import type { SiteConfig } from '../types/site';

export const site: SiteConfig = {
  name: 'heykaan.dev',
  author: 'Kaan Demir',
  url: 'https://heykaan.dev/',
  title: 'Kaan Demir | heykaan.dev',
  description:
    'Portfolio of Kaan Demir, an MIS graduate focused on data analysis, building dashboards, data projects, browser extensions and web applications with Python, SQL and Power BI.',
  socialTitle: 'Kaan Demir | heykaan.dev',
  socialDescription:
    'MIS graduate focused on data analysis. Dashboards, data projects, browser extensions and web applications.',
  heroCaption: 'Building digital experiences through data, design & technology.',
  // Phase 6C: set ogImage to the new 1200x630 image once it exists in public/.
  email: 'heykaan.dev@gmail.com',
  social: [
    { label: 'GitHub', href: 'https://github.com/kaanddemir' },
    { label: 'Product Hunt', href: 'https://www.producthunt.com/@heykaandev' },
    { label: 'X (Twitter)', href: 'https://x.com/heykaandev' },
  ],
  nav: [
    { label: 'Work', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
};
