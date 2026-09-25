export interface SocialLink {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}

/** Social-sharing image. `path` is root-relative to public/, e.g. '/assets/og/home.png'. */
export interface OgImage {
  path: string;
  width: number;
  height: number;
  alt: string;
}

export interface SiteConfig {
  name: string;
  author: string;
  url: string;
  title: string;
  description: string;
  /** Shorter description used for Open Graph and Twitter cards. */
  socialDescription: string;
  socialTitle: string;
  /** Supporting line beside the hero name. */
  heroCaption: string;
  /** Omitted until a real asset exists; image tags are only emitted when set. */
  ogImage?: OgImage;
  email: string;
  social: SocialLink[];
  nav: NavLink[];
}
