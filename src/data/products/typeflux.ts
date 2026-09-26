import type { ProductPage } from '../../types/product';
import { extensions } from '../extensions';
import screenshot from '../../assets/products/typeflux-screenshot.png';

// Content from the legacy /typeflux/ page, checked against the extension
// source (v1.0.0). Dropped legacy claims: 1000+ fonts (the list has 30), a
// ratio scale system and alignment control (neither exists), and reusable
// settings (nothing is saved or exported). The screenshot combines two captures
// from one session of the real extension on a sample page: the page with the
// changes applied, and the popup opened from the toolbar, placed where Chrome
// anchors it.

const extension = extensions.find((item) => item.name === 'TypeFlux');
if (!extension) throw new Error('TypeFlux is missing from src/data/extensions.ts');

export const typeflux: ProductPage = {
  extension,
  heading: { first: 'Type', second: 'Flux' },
  lead: 'Preview typography live on any website.',
  description:
    'Test fonts, weights, heading sizes and spacing directly on the page, without DevTools or writing CSS.',
  screenshot: {
    src: screenshot,
    alt: 'The TypeFlux popup on a sample gardening article, with the font set to Playfair Display, H1 at 56 pixels and line height at 1.7, and the article shown in Playfair Display with the larger headline.',
  },
  features: [
    {
      title: 'Google Fonts',
      description:
        'Search 30 curated Google Fonts, including Inter, Playfair Display and Space Grotesk, and apply one to the page. Each font loads on demand with weights from 100 to 900.',
    },
    {
      title: 'Weight control',
      description:
        'Set the weight for all text, headings only or body text only, from Thin (100) to Black (900).',
    },
    {
      title: 'Heading sizes',
      description:
        'Set H1 to H6 individually with sliders or by typing a value. H4 to H6 are under Show More.',
    },
    {
      title: 'Body style',
      description:
        'Adjust body font size, line height and letter spacing. A warning appears when a value goes outside the recommended range.',
    },
    {
      title: 'Element selection',
      description:
        'Click any text element on the page to style it on its own, without changing the rest of the page. Images, video and other non-text elements are skipped.',
    },
  ],
  steps: [
    {
      title: 'Open TypeFlux',
      description:
        'Open TypeFlux from the toolbar on any page. It reads the current heading and body values from the page.',
    },
    {
      title: 'Adjust the typography',
      description:
        'Choose a font and weight, and adjust heading sizes and body spacing for the whole page, or pick one element to style on its own.',
    },
    {
      title: 'Preview and reset',
      description:
        'Changes appear on the page instantly as temporary CSS. Reset a section or everything, or refresh the page to restore the original design.',
    },
  ],
  requirements: [
    {
      title: 'Browser support',
      description: 'Chrome and Chromium-based browsers, including Edge, Brave and Vivaldi.',
    },
    {
      title: 'Google Fonts',
      description: 'Fonts load from Google Fonts, so applying one needs an internet connection.',
    },
    {
      title: 'Temporary changes',
      description:
        'Nothing is saved or exported. Refreshing the page restores the original design.',
    },
    {
      title: 'Supported pages',
      description: 'TypeFlux does not run on Chrome’s internal pages or in the Chrome Web Store.',
    },
  ],
  privacy: {
    description:
      'All changes run locally in your browser. TypeFlux collects no personal data; its only connection is to Google Fonts, to load the font you choose.',
    policyUrl: 'https://github.com/kaanddemir/typeflux/blob/main/PRIVACY_POLICY.md',
  },
  closing: 'Install TypeFlux and test typography directly on any live page.',
  seo: {
    title: 'TypeFlux | Browser Extension for Live Typography Preview',
    description:
      'Live typography preview for any website. Test fonts, spacing, and hierarchy with instant results directly on the page.',
    socialTitle: 'TypeFlux | Live Typography Preview',
    socialDescription:
      'Live typography preview for any website. Test fonts, spacing, and hierarchy with instant results.',
  },
};
