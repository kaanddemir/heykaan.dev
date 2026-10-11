import type { Extension } from '../types/project';
import uxHeatgridIcon from '../assets/extensions/ux-heatgrid-icon.png';
import readscoreIcon from '../assets/extensions/readscore-icon.png';
import softBlackoutIcon from '../assets/extensions/soft-blackout-icon.png';

// Order and destinations carried over unchanged from the legacy homepage
// (Browser Extensions). Copy updated for 2.0.0.
export const extensions: Extension[] = [
  {
    name: 'UX HeatGrid',
    tagline: 'Control prominence and session maps',
    description:
      'Predict which controls stand out on a page, record your own session, and inspect both on the page.',
    icon: uxHeatgridIcon,
    primaryLink: { label: 'UX HeatGrid', href: '/ux-heatgrid/' },
    links: [
      {
        label: 'Chrome Web Store',
        href: 'https://chromewebstore.google.com/detail/ux-heatgrid/apdgicimbpoimklcanijmfbpfkekiajn',
      },
      { label: 'GitHub', href: 'https://github.com/kaanddemir/ux-heatgrid' },
      { label: 'Product Hunt', href: 'https://www.producthunt.com/products/ux-heatgrid' },
    ],
  },
  {
    name: 'ReadScore',
    tagline: 'Focused, comfortable reading',
    description:
      'Highlight one paragraph at a time, adjust text spacing and size, and calm busy pages as you read.',
    icon: readscoreIcon,
    primaryLink: { label: 'ReadScore', href: '/readscore/' },
    links: [
      {
        label: 'Chrome Web Store',
        href: 'https://chromewebstore.google.com/detail/readscore/ocklmdaccbpakdjnkhckobkoochkajeg',
      },
      { label: 'GitHub', href: 'https://github.com/kaanddemir/readscore' },
      { label: 'Product Hunt', href: 'https://www.producthunt.com/products/readscore' },
    ],
  },
  {
    name: 'Soft Blackout',
    tagline: 'Visual text masking',
    description:
      'Mask the text you select, compose blackout poems, or mask email addresses, links and phone numbers.',
    icon: softBlackoutIcon,
    primaryLink: { label: 'Soft Blackout', href: '/soft-blackout/' },
    links: [
      {
        label: 'Chrome Web Store',
        href: 'https://chromewebstore.google.com/detail/soft-blackout/oeefplhfabbdadpicjbgbiapoadppkpo',
      },
      { label: 'GitHub', href: 'https://github.com/kaanddemir/soft-blackout' },
      { label: 'Product Hunt', href: 'https://www.producthunt.com/products/soft-blackout' },
    ],
  },
];
