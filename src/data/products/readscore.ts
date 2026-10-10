import type { ProductPage } from '../../types/product';
import { extensions } from '../extensions';
import screenshot from '../../assets/products/readscore-screenshot.png';

// Content checked against the extension README and changelog (v2.0.0). 2.0
// replaced the readability score, Selection Analysis and AI Summary with the
// Focus, Comfort and Calm reading modes. The screenshot combines two real 2.0
// captures from the same moment on the Store demo article (ReadScore
// Store/source/captures): the page with all three modes on, and the popup,
// placed where Chrome anchors it.

const extension = extensions.find((item) => item.name === 'ReadScore');
if (!extension) throw new Error('ReadScore is missing from src/data/extensions.ts');

export const readscore: ProductPage = {
  extension,
  heading: { first: 'Read', second: 'Score' },
  lead: 'Make existing web pages easier to read.',
  description:
    'Reading tools that work on the page you already have open. Highlight one paragraph at a time, adjust text spacing, font and size, and calm busy pages, without replacing their content.',
  screenshot: {
    src: screenshot,
    alt: 'The ReadScore popup on a sample essay about slow walks, with Focus, Comfort and Calm all turned on: the first paragraph is highlighted in yellow, the text is set larger with extra spacing, and the article and sidebar images are blurred.',
  },
  features: [
    {
      title: 'Focus',
      description:
        'Highlights one paragraph at a time. Move with J and K, or let the highlight follow the middle of the screen as you scroll. The highlight can be yellow, blue, green or dark.',
    },
    {
      title: 'Comfort',
      description:
        'Adjusts reading text without changing the page’s layout: Relaxed, Roomy or custom line, letter, word and paragraph spacing, a choice of fonts including Atkinson Hyperlegible, and a minimum text size of 18, 20 or 22 pixels.',
    },
    {
      title: 'Calm',
      description:
        'Reduce Motion makes animations finish instantly and pauses muted background videos; videos you start keep playing. Blur Images blurs large images and videos until you hover over or Tab to them.',
    },
    {
      title: 'Combine and keep',
      description:
        'The three modes work independently and can be used together. Your settings are saved and sync across your Chrome browsers when Chrome sync is on.',
    },
  ],
  steps: [
    {
      title: 'Open ReadScore',
      description:
        'Click the ReadScore icon on the page you want to read. It runs only on pages where you open it.',
    },
    {
      title: 'Choose your modes',
      description:
        'Turn on Focus, Comfort or Calm and adjust their settings. Changes apply to the page right away.',
    },
    {
      title: 'Reapply or reset',
      description:
        'Effects end when you reload or leave the page. Open ReadScore again to reapply your saved settings, or use Reset All to restore the defaults.',
    },
  ],
  requirements: [
    {
      title: 'Browser support',
      description: 'Chrome 116 or newer.',
    },
    {
      title: 'Keyboard shortcuts',
      description:
        'J and K are ignored while you type or use a form control. On sites that use these keys themselves, choose Follow Scroll instead.',
    },
    {
      title: 'Supported pages',
      description:
        'Works on regular websites, but not on Chrome’s own pages or in the Chrome Web Store. Focus works best on article-like text.',
    },
  ],
  privacy: {
    description:
      'ReadScore has no accounts, servers, analytics or tracking, and makes no network requests. Page text and images are processed in the tab and never stored or sent anywhere.',
    policyUrl: 'https://github.com/kaanddemir/readscore/blob/main/PRIVACY_POLICY.md',
  },
  closing: 'Install ReadScore and adjust any page for more comfortable reading.',
  seo: {
    title: 'ReadScore | Browser Extension for Focused, Comfortable Reading',
    socialTitle: 'ReadScore | Focus, Comfort & Calm',
    description:
      'Highlight one paragraph at a time, adjust text spacing, font and size, and reduce motion and distractions on existing web pages.',
  },
  ogImage: {
    path: '/assets/og/og-readscore.png',
    width: 1200,
    height: 630,
    alt: 'ReadScore, a Chrome extension by heykaan.dev',
  },
};
