import type { ProductPage } from '../../types/product';
import { extensions } from '../extensions';
import screenshot from '../../assets/products/readscore-screenshot.png';

// Content from the legacy /readscore/ page, checked against the extension
// source (v1.1.1). The screenshot combines two captures from one session of
// the real extension on a sample article: the page with Reading Guide on, and
// the popup opened from the toolbar, placed where Chrome anchors it.

const extension = extensions.find((item) => item.name === 'ReadScore');
if (!extension) throw new Error('ReadScore is missing from src/data/extensions.ts');

export const readscore: ProductPage = {
  extension,
  heading: { first: 'Read', second: 'Score' },
  lead: 'Analyze, summarize, and read any page better.',
  description:
    'Readability insights, AI summaries and focused reading tools for any web page. Analysis runs locally in your browser.',
  screenshot: {
    src: screenshot,
    alt: 'The ReadScore popup on a sample article about community gardens, showing a Medium readability score, 15 words per sentence and 285 total words, with Reading Guide turned on and highlighting one line of the article.',
  },
  features: [
    {
      title: 'Readability score',
      description:
        'A readability level based on the Flesch-Kincaid grade, with words per sentence and the total word count.',
    },
    {
      title: 'Selection analysis',
      description:
        'Select a passage to analyze only that text. Selections need at least 50 characters.',
    },
    {
      title: 'AI summary',
      description:
        'A summary of the page in a draggable on-page panel, as bullet points or an overview, in short, medium or long length.',
    },
    {
      title: 'Reading tools',
      description:
        'Focus Mode rebuilds the page with a clean layout and larger text, Tracking Assist adds spacing for easier line and word tracking, and Reading Guide adds a line-by-line focus ruler.',
    },
  ],
  steps: [
    {
      title: 'Extract the main text',
      description:
        'ReadScore finds the readable content in the current tab and filters out navigation, banners and sidebars.',
    },
    {
      title: 'Analyze readability',
      description:
        'It calculates the readability level, sentence length and word count locally, for the whole page or for the text you selected.',
    },
    {
      title: 'Summarize and read',
      description:
        'Generate a summary with Chrome’s built-in AI when it is available, or turn on Focus Mode, Tracking Assist or Reading Guide.',
    },
  ],
  requirements: [
    {
      title: 'Browser support',
      description: 'Chrome and Chromium-based browsers, including Edge, Brave and Vivaldi.',
    },
    {
      title: 'AI summaries',
      description:
        'Need Chrome’s built-in summarizer (Chrome 138 or later, where available). All other features work without it.',
    },
    {
      title: 'Supported pages',
      description: 'ReadScore does not run on Chrome’s internal pages or in the Chrome Web Store.',
    },
  ],
  privacy: {
    description:
      'Analysis, reading tools and summary preparation run locally in your browser. ReadScore does not collect personal data or run its own server.',
    policyUrl: 'https://github.com/kaanddemir/readscore/blob/main/PRIVACY_POLICY.md',
  },
  closing: 'Improve your comprehension and focus with fast, privacy-first reading tools.',
  seo: {
    title: 'ReadScore | Browser Extension for Readability & AI Summary',
    description: 'Analyze readability, generate AI summaries, and use focused reading tools.',
  },
  ogImage: {
    path: '/assets/og/og-readscore.png',
    width: 1200,
    height: 630,
    alt: 'ReadScore, a Chrome extension by heykaan.dev',
  },
};
