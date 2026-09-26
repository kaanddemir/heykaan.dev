import type { ProductPage } from '../../types/product';
import { extensions } from '../extensions';
import screenshot from '../../assets/products/soft-blackout-screenshot.png';

// Content from the legacy /soft-blackout/ page, checked against the extension
// source (v1.1.1). Dropped legacy claims: blur, custom styles and hidden modes
// (redaction is always a solid black block), and "click" to redact elements
// (only selected text is redacted). The screenshot combines two captures from
// one session of the real extension on a sample article: the page after Quick
// Redact in Poetry mode, and the popup's settings view, placed where Chrome
// anchors it.

const extension = extensions.find((item) => item.name === 'Soft Blackout');
if (!extension) throw new Error('Soft Blackout is missing from src/data/extensions.ts');

export const softBlackout: ProductPage = {
  extension,
  heading: { first: 'Soft', second: 'Blackout' },
  lead: 'Control what stays visible.',
  description:
    'Black out text on any web page, by hand or automatically, to hide private details, remove distractions or make blackout poetry. Everything runs locally in your browser.',
  screenshot: {
    src: screenshot,
    alt: 'Soft Blackout on a sample short story: most of the text is covered by solid black bars, leaving a few words and the names Mara and Harbor Point visible, beside the Redaction Settings popup with Poetry mode, Medium intensity, and Proper Nouns and Long Words kept visible.',
  },
  features: [
    {
      title: 'Manual Mode',
      description:
        'Turn on Manual Mode and select text with the mouse to black it out. Links and buttons do not respond while it is on.',
    },
    {
      title: 'Quick Redact',
      description:
        'Black out text automatically in one of three modes: Poetry leaves a scattered trail of words for blackout poetry, Privacy targets names and numbers, and Random hides words at random.',
    },
    {
      title: 'Intensity and filters',
      description:
        'Choose Light, Medium or Heavy intensity, and keep proper nouns, long words (4+ characters) or numbers and dates visible.',
    },
    {
      title: 'Blackout All and Reset',
      description:
        'Cover all the text on the page in one click, or remove every blackout at once.',
    },
    {
      title: 'Undo, Redo and reveal',
      description:
        'Step back or forward through up to 50 changes, or double-click a black bar to reveal the text underneath.',
    },
  ],
  steps: [
    {
      title: 'Open Soft Blackout',
      description: 'Open Soft Blackout from the toolbar on the page you want to edit.',
    },
    {
      title: 'Black out text',
      description:
        'Turn on Manual Mode and select text, or use Quick Redact with the mode, intensity and filters from the settings.',
    },
    {
      title: 'Adjust the result',
      description:
        'Undo, redo or double-click a bar to reveal it. Refreshing the page restores the original text.',
    },
  ],
  requirements: [
    {
      title: 'Browser support',
      description: 'Chrome and Chromium-based browsers, including Edge, Brave and Vivaldi.',
    },
    {
      title: 'Languages',
      description: 'English and Turkish, chosen automatically from your browser language.',
    },
    {
      title: 'Visual only',
      description:
        'Blackouts change only how the page looks in your browser. They are not saved, and the website itself is not changed.',
    },
    {
      title: 'Supported pages',
      description:
        'Soft Blackout does not run on browser pages such as chrome://, on local files or in the Chrome Web Store. Code blocks and editable fields are skipped.',
    },
  ],
  privacy: {
    description:
      'Everything runs locally in your browser. Soft Blackout collects no personal data and sends nothing to external servers; it only stores whether Manual Mode is on for a tab.',
    policyUrl: 'https://github.com/kaanddemir/soft-blackout/blob/main/PRIVACY_POLICY.md',
  },
  closing: 'Install Soft Blackout and control what stays visible on any page.',
  seo: {
    title: 'Soft Blackout | Browser Extension for Instant Visual Redaction',
    description:
      'Soft Blackout is a privacy-first browser extension that lets you obscure text directly in your browser. Redact sensitive content instantly.',
    socialTitle: 'Soft Blackout | Instant Visual Redaction for Chrome',
    socialDescription:
      'A privacy-first browser extension that lets you obscure text directly in your browser. Redact sensitive content instantly — runs 100% locally.',
  },
  ogImage: {
    path: '/assets/og/og-soft-blackout.png',
    width: 1200,
    height: 630,
    alt: 'Soft Blackout, a Chrome extension by heykaan.dev',
  },
};
