// Theme switching after load. The initial mode is applied by the inline
// bootstrap in BaseLayout.astro; keep the storage rules in sync with it.

export type ThemeMode = 'system' | 'light' | 'dark';
type ResolvedTheme = 'light' | 'dark';

const MODE_KEY = 'theme-mode';
// Key from the old site; always holds the resolved theme.
const LEGACY_KEY = 'theme';
const ORDER: ThemeMode[] = ['system', 'light', 'dark'];

const root = document.documentElement;
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

function isMode(value: string | undefined): value is ThemeMode {
  return value === 'system' || value === 'light' || value === 'dark';
}

export function getMode(): ThemeMode {
  const mode = root.dataset.themeMode;
  return isMode(mode) ? mode : 'system';
}

function resolve(mode: ThemeMode): ResolvedTheme {
  if (mode !== 'system') return mode;
  return darkQuery.matches ? 'dark' : 'light';
}

function store(key: string, value: string): void {
  try {
    if (localStorage.getItem(key) !== value) localStorage.setItem(key, value);
  } catch {
    // Storage unavailable (private mode, blocked): the theme still applies for this page view.
  }
}

// Browser UI color follows the page background, including manual overrides.
function syncThemeColor(): void {
  const bg = getComputedStyle(root).getPropertyValue('--color-bg').trim();
  if (!bg) return;
  document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]').forEach((meta) => {
    meta.content = bg;
  });
}

export function setMode(mode: ThemeMode): void {
  const resolved = resolve(mode);
  root.dataset.themeMode = mode;
  root.dataset.theme = resolved;
  store(MODE_KEY, mode);
  store(LEGACY_KEY, resolved);
  syncThemeColor();
}

export function nextMode(mode: ThemeMode): ThemeMode {
  return ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length] ?? 'system';
}

darkQuery.addEventListener('change', () => {
  if (getMode() === 'system') setMode('system');
});

syncThemeColor();
