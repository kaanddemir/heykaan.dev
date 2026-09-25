import type { SiteConfig } from '../types/site';

// Values carried over unchanged from the legacy homepage metadata.
export const site: SiteConfig = {
  name: 'heykaan.dev',
  author: 'Kaan Demir',
  url: 'https://heykaan.dev/',
  title: 'heykaan.dev | Kaan Demir',
  description:
    'Portfolio of Kaan Demir, a recent MIS graduate focused on data analysis. Turning complex datasets into clear dashboards, insights, and data-driven web tools with Python, SQL, and Power BI.',
  socialTitle: 'heykaan.dev · Kaan Demir',
  socialDescription:
    'Recent MIS graduate focused on data analysis. Dashboards, insights, and data-driven web tools built with Python, SQL, and Power BI.',
  ogImage: 'https://heykaan.dev/assets/icons/og-image.png',
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
