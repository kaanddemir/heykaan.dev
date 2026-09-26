import type { ProductPage } from '../../types/product';
import { extensions } from '../extensions';
import screenshot from '../../assets/products/ux-heatgrid-screenshot.png';

// Content from the legacy /ux-heatgrid/ page, checked against the extension
// source (v1.1.1). The legacy "scroll depth" claim is dropped: scrolling only
// slows heat gain. The screenshot combines two captures from one session of the
// real extension on a sample page: the page with the heatmap shown, and the
// popup opened from the toolbar, placed where Chrome anchors it.

const extension = extensions.find((item) => item.name === 'UX HeatGrid');
if (!extension) throw new Error('UX HeatGrid is missing from src/data/extensions.ts');

export const uxHeatgrid: ProductPage = {
  extension,
  heading: { first: 'UX', second: 'HeatGrid' },
  lead: 'Visualize UX attention in real time.',
  description:
    'A live attention heatmap and a rule-based UX score for any web page, calculated locally in your browser.',
  screenshot: {
    src: screenshot,
    alt: 'UX HeatGrid on a sample library events page: an orange attention heatmap over the headline, text, buttons and links, and the popup showing a UX Score of 70, Good, with readability 81%, complexity 17, white space 100% and content density 23%.',
  },
  features: [
    {
      title: 'Attention heatmap',
      description:
        'A color-coded overlay built from two heat sources: how long elements stay in view and how close they are to the cursor, within 150 pixels. It is drawn on a 15-pixel grid and updated every half second.',
    },
    {
      title: 'UX Score',
      description:
        'A score from 0 to 100, graded Excellent (85+), Good (70+), Average (55+), Dense (40+) or Fatiguing (below 40).',
    },
    {
      title: 'Content density and white space',
      description:
        'Two of the four score categories, 25 points each. Density measures how much of the page and the first screen is covered by content, and how evenly. White space measures the real pixel gaps between text blocks.',
    },
    {
      title: 'Complexity and readability',
      description:
        'The other two categories, 25 points each. Complexity counts the elements per screen. Readability checks font size, line height, line length and text contrast.',
    },
    {
      title: 'Review and pinned panel',
      description:
        'A review lists strengths, suggestions and issues for the page. The score and metrics can also be pinned to a panel on the page.',
    },
  ],
  steps: [
    {
      title: 'Start the analysis',
      description:
        'Open UX HeatGrid on a page and press Start. It finds the text, headings, links and buttons without changing the page.',
    },
    {
      title: 'Build the heatmap',
      description:
        'Visible elements heat up slowly, and twice as fast under the cursor. Fast scrolling reduces heat gain by up to 90%, and buttons and links heat up fastest.',
    },
    {
      title: 'Score the layout',
      description:
        'It measures density, white space, complexity and readability on the live page and combines them into the UX Score.',
    },
    {
      title: 'Review the results',
      description:
        'Show or hide the heatmap, pause tracking, open the review, or pin the panel to the page.',
    },
  ],
  requirements: [
    {
      title: 'Browser support',
      description: 'Chrome and Chromium-based browsers, including Edge, Brave and Vivaldi.',
    },
    {
      title: 'What the heatmap shows',
      description:
        'Attention is modeled from your own pointer and what is visible on your screen. It does not record other visitors.',
    },
    {
      title: 'Supported pages',
      description:
        'UX HeatGrid does not run on browser pages such as chrome:// or in the Chrome Web Store and Edge Add-ons store.',
    },
  ],
  privacy: {
    description:
      'All analysis runs locally in your browser. UX HeatGrid collects no personal data and sends nothing to external servers.',
    policyUrl: 'https://github.com/kaanddemir/ux-heatgrid/blob/main/PRIVACY_POLICY.md',
  },
  closing: 'Install UX HeatGrid and visualize attention and layout balance directly in your browser.',
  seo: {
    title: 'UX HeatGrid | Browser Extension for Real-Time UX Heatmaps',
    description:
      'Visualize UX attention in real time. Generate heatmaps, a UX score and layout analysis directly on live web pages with UX HeatGrid.',
    socialTitle: 'UX HeatGrid | Real-Time UX Heatmaps',
    socialDescription:
      'Visualize UX attention in real time. Generate heatmaps, a UX score and layout analysis directly on live web pages.',
  },
};
