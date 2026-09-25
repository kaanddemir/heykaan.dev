import type { Extension } from '../types/project';
import uxHeatgridIcon from '../assets/extensions/ux-heatgrid-icon.png';
import readscoreIcon from '../assets/extensions/readscore-icon.png';
import typefluxIcon from '../assets/extensions/typeflux-icon.png';
import softBlackoutIcon from '../assets/extensions/soft-blackout-icon.png';

// Content, order and destinations carried over unchanged from the legacy
// homepage (Browser Extensions).
export const extensions: Extension[] = [
  {
    name: 'UX HeatGrid',
    tagline: 'Real-time attention mapping',
    description:
      'Real-time UX heatmap and attention analysis to visualize focus and layout structure.',
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
    tagline: 'Explainable readability insights',
    description:
      'Analyze web page readability with transparent, explainable metrics and clear sentence level insights.',
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
    name: 'TypeFlux',
    tagline: 'Live typography preview',
    description:
      'Live typography preview for any website. Test fonts, spacing, and hierarchy with instant results.',
    icon: typefluxIcon,
    primaryLink: { label: 'TypeFlux', href: '/typeflux/' },
    links: [
      {
        label: 'Chrome Web Store',
        href: 'https://chromewebstore.google.com/detail/typeflux/nemkilhkadhfoafhdbmomnoaanodeehh',
      },
      { label: 'GitHub', href: 'https://github.com/kaanddemir/typeflux' },
      {
        label: 'Product Hunt',
        href: 'https://www.producthunt.com/products/typeflux?launch=typeflux',
      },
    ],
  },
  {
    name: 'Soft Blackout',
    tagline: 'Focused visual redaction',
    description:
      'Add a visual blackout overlay to web pages for focused screen sharing and content control.',
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
