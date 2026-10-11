import type { ProductPage } from '../../types/product';
import { extensions } from '../extensions';
import screenshot from '../../assets/products/soft-blackout-screenshot.png';

// Content checked against the extension README, changelog and privacy policy
// (v2.0.0). 2.0 replaced the 1.x redaction tool (Quick Redact, Blackout All,
// Privacy and Random modes, intensity levels) with Manual, Poetry and Pattern
// Mask, which only mask what you choose. The screenshot combines two real 2.0
// captures from the same moment on the Store demo article (Soft Blackout
// Store/source/captures): the page with a poem applied, and the popup in
// Poetry mode, placed where Chrome anchors it.

const extension = extensions.find((item) => item.name === 'Soft Blackout');
if (!extension) throw new Error('Soft Blackout is missing from src/data/extensions.ts');

export const softBlackout: ProductPage = {
  extension,
  heading: { first: 'Soft', second: 'Blackout' },
  lead: 'Mask text on any page, your way.',
  description:
    'Cover the text you select, compose blackout poems from articles, or mask email addresses, links and phone numbers. Masks are visual, local and only appear when you ask for them.',
  screenshot: {
    src: screenshot,
    alt: 'Soft Blackout on a sample essay, Notes from a lighthouse keeper: the first paragraphs are covered by dark bars except for kept phrases such as “the lamp was lit” and “the sea answered”, beside the popup in Poetry mode with Apply composition, the Solid and Marker styles, five colours, Undo, Redo and Reset page.',
  },
  features: [
    {
      title: 'Manual',
      description:
        'Select text on the page and choose Mask. Select inside a mask and choose Reveal to remove just that part, or turn on Mask on select to skip the confirmation.',
    },
    {
      title: 'Poetry',
      description:
        'Choose the words to keep and apply the composition to hide the rest of each paragraph. Soft Blackout never picks words for you, and an applied poem can be edited.',
    },
    {
      title: 'Pattern Mask',
      description:
        'Scan the page for email addresses, URLs and, optionally, phone numbers, check the counts, then apply masks. Scanning never masks anything on its own.',
    },
    {
      title: 'Styles and colours',
      description:
        'Solid covers text with a block of colour and Marker draws a thick band through it, in ink black, warm white, terracotta, taupe or sage. Changing either restyles every mask on the page.',
    },
    {
      title: 'Undo, Redo and Reset',
      description:
        'One history covers all three modes, and Reset page removes every mask at once. The popup and on-page controls follow a System, Light or Dark theme.',
    },
  ],
  steps: [
    {
      title: 'Open Soft Blackout',
      description:
        'Click the Soft Blackout icon on the page you want to mask. It runs on a page only after you use it there.',
    },
    {
      title: 'Choose a mode',
      description:
        'Pick Manual, Poetry or Pattern Mask, then a style and colour. Masks appear on the page right away.',
    },
    {
      title: 'Adjust or reset',
      description:
        'Undo, Redo or Reset page at any time. Masks disappear when you reload the page or navigate away.',
    },
  ],
  requirements: [
    {
      title: 'Browser support',
      description: 'Chrome 116 or newer.',
    },
    {
      title: 'Visual only',
      description:
        'Masks are drawn over the page and do not remove the original text. It stays in the page, and copying masked text copies the original, so do not rely on masks to redact sensitive information.',
    },
    {
      title: 'Pattern matching',
      description:
        'Pattern Mask is deliberately conservative and is not full personal-data detection. Phone numbers without separators and other formats are not matched.',
    },
    {
      title: 'Supported pages',
      description:
        'Works on regular websites, but not on Chrome’s own pages, local files or in the Chrome Web Store. Text in form fields, buttons and frames is not masked.',
    },
  ],
  privacy: {
    description:
      'Soft Blackout has no accounts, servers, analytics or tracking, and makes no network requests. Page text is processed in the tab and never stored or sent anywhere; only your settings are saved, on this device.',
    policyUrl: 'https://github.com/kaanddemir/soft-blackout/blob/main/PRIVACY_POLICY.md',
  },
  closing: 'Install Soft Blackout and choose what stays visible on any page.',
  seo: {
    title: 'Soft Blackout | Browser Extension for Visual Text Masking',
    description:
      'Mask selected text, compose blackout poems, and cover email addresses, links and phone numbers on any web page. Runs locally in Chrome.',
    socialTitle: 'Soft Blackout | Manual, Poetry & Pattern Mask',
    socialDescription:
      'Mask the text you choose, compose blackout poems, or mask contact details on any web page.',
  },
  ogImage: {
    path: '/assets/og/og-soft-blackout.png',
    width: 1200,
    height: 630,
    alt: 'Soft Blackout, a Chrome extension by heykaan.dev',
  },
};
