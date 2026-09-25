export interface SocialLink {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
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
  ogImage: string;
  email: string;
  social: SocialLink[];
  nav: NavLink[];
}
