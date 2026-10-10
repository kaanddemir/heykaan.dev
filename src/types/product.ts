import type { ImageMetadata } from 'astro';
import type { Extension, ProjectLink } from './project';
import type { OgImage } from './site';

/** One hairline-separated row in a product section. */
export interface ProductRow {
  title: string;
  description: string;
  /** Optional inline link after the description, e.g. a policy or source. */
  link?: ProjectLink;
}

/**
 * Content of an extension's product page. Every page renders the same
 * sections in the same order (hero, What it does, How it works, Before you
 * install, closing call to action); product-specific detail goes into the
 * rows, or into a section's slot when rows are not enough.
 */
export interface ProductPage {
  /** Homepage entry: name, icon and the Chrome Web Store, GitHub and Product Hunt links. */
  extension: Extension;
  /** Product name split over the two heading lines, e.g. "Read" / "Score". */
  heading: {
    first: string;
    second: string;
    /** Glyph side bearings in em; see SectionHeading. */
    firstBearing?: number;
    secondBearing?: number;
  };
  /** One-sentence headline beside the name. */
  lead: string;
  description: string;
  screenshot: {
    src: ImageMetadata;
    alt: string;
  };
  features: ProductRow[];
  steps: ProductRow[];
  requirements: ProductRow[];
  /** Always the last "Before you install" row. */
  privacy: {
    description: string;
    policyUrl: string;
  };
  /** Line above the closing "Add … to Chrome" link; unused without a store link. */
  closing: string;
  seo: {
    title: string;
    description: string;
    socialTitle?: string;
    socialDescription?: string;
  };
  /** Product-specific social image (1200×630, public/assets/og/). */
  ogImage: OgImage;
}
