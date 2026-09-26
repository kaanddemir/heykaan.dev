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
  ogImage: {
    path: '/assets/og/og-home.png',
    width: 1200,
    height: 630,
    alt: 'Kaan Demir, heykaan.dev',
  },
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
