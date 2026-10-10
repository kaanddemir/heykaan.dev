import type { ProductPage } from '../../types/product';
import { extensions } from '../extensions';
import screenshot from '../../assets/products/ux-heatgrid-screenshot.png';

// Content checked against the extension README, changelog and privacy policy
// (v2.0.0). 2.0 replaced the 1.x popup, always-on attention heatmap and UX
// Score with a side panel for Predict, Record and Inspect. The screenshot
// combines two real 2.0 captures from the same moment of one recorded session
// on the Store demo page (UX HeatGrid Store/source/captures): the page with
// Show on page on, and the Record view of the side panel. They sit in a plain
// browser-style frame with a side-panel header (extension icon, name, close).
// The page is cropped on the right, before its on-page toolbar.

const extension = extensions.find((item) => item.name === 'UX HeatGrid');
if (!extension) throw new Error('UX HeatGrid is missing from src/data/extensions.ts');

export const uxHeatgrid: ProductPage = {
  extension,
  heading: { first: 'UX', second: 'HeatGrid' },
  lead: 'See what stands out on a page, and how you use it.',
  description:
    'A side-panel inspector for people who design and review web pages. It estimates which controls stand out, records your own session, and shows both on the page. Everything stays in your browser.',
  screenshot: {
    src: screenshot,
    alt: 'UX HeatGrid on a sample product landing page: a recorded session drawn on the page as a soft heatmap with click markers and an on-page toolbar for Heatmap, Clicks and Scroll Depth, beside the side panel’s Record view showing 21 seconds, 6 clicks, 100% scroll and 6 interacted elements, with lists of Interacted Elements and controls with No Interaction.',
  },
  features: [
    {
      title: 'Predict',
      description:
        'Ranks every button, link and control into High, Medium and Low structural prominence, based on size, position, visual style, text contrast, nearby competing controls and page context. It estimates what stands out visually, not where people will look or click.',
    },
    {
      title: 'Record',
      description:
        'Captures your own session on the page: clicks, hover, focus, time in view and scroll depth. Controls that were in view but never used are listed separately. It records you, in your browser, not a site’s visitors.',
    },
    {
      title: 'Inspect',
      description:
        'Expand any result to see the evidence behind it, from the measured factors in Predict to the clicks and time in view in Record. The matching element is highlighted on the live page.',
    },
    {
      title: 'Reasons and confidence',
      description:
        'Each prediction lists Positive and Negative factors written from measured values, such as a control’s size, its contrast ratio or the number of nearby controls. Confidence shows how settled the band is.',
    },
    {
      title: 'On-page overlays',
      description:
        'Show on page outlines predicted controls by band, or draws a recording as a heatmap, click markers and scroll depth, each with its own toggle.',
    },
  ],
  steps: [
    {
      title: 'Open the side panel',
      description:
        'Click the UX HeatGrid icon in the toolbar. The side panel opens with Overview, Predict and Record views.',
    },
    {
      title: 'Run Predict',
      description:
        'Press Start under Predict to rank the page’s controls. No recording is needed, and results are marked as stale when the page changes.',
    },
    {
      title: 'Record a session',
      description:
        'Press Start under Record, use the page as usual, then press Stop. The session continues across same-site navigations and reloads.',
    },
    {
      title: 'Review on the page',
      description:
        'Press Show on page in either view to draw the results on the page, then expand a result to inspect it.',
    },
  ],
  requirements: [
    {
      title: 'Browser support',
      description: 'Chrome 116 or newer, with the side panel.',
    },
    {
      title: 'What the results mean',
      description:
        'Predict reads page structure, not people. Record covers only your own session and does not track other visitors.',
    },
    {
      title: 'Supported pages',
      description:
        'Works on regular websites, but not on Chrome’s own pages or in the Chrome Web Store. Content inside cross-origin iframes is not analyzed or recorded.',
    },
  ],
  privacy: {
    description:
      'UX HeatGrid has no accounts, servers, analytics or tracking, and makes no network requests. It never reads form values or the keys you type, and recordings are cleared when you reset them, close the tab or end the browser session.',
    policyUrl: 'https://github.com/kaanddemir/ux-heatgrid/blob/main/PRIVACY_POLICY.md',
  },
  closing: 'Install UX HeatGrid and inspect any page’s controls from Chrome’s side panel.',
  seo: {
    title: 'UX HeatGrid | Browser Extension for UX Inspection & Heatmaps',
    description:
      'Predict which controls stand out on a page, record your own session as an on-page heatmap, and inspect the evidence. Runs locally in Chrome.',
    socialTitle: 'UX HeatGrid | Predict, Record & Inspect',
    socialDescription:
      'Predict which controls stand out on a page, record your own session, and inspect the results directly on the page.',
  },
  ogImage: {
    path: '/assets/og/og-ux-heatgrid.png',
    width: 1200,
    height: 630,
    alt: 'UX HeatGrid, a Chrome extension by heykaan.dev',
  },
};
