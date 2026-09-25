import type { ImageMetadata } from 'astro';

export interface ProjectLink {
  label: string;
  href: string;
}

/**
 * Visual for a project. A "logo" is shown small and centered in the media
 * frame as a stand-in; a "screenshot" fills the frame. Swapping one for the
 * other changes only this field, never the surrounding layout.
 */
export interface ProjectMedia {
  kind: 'logo' | 'screenshot';
  src: ImageMetadata;
}

export interface Project {
  name: string;
  /** Short category line shown under the title. */
  tagline: string;
  description: string;
  media: ProjectMedia;
  /** Destination of the project title. */
  primaryLink: ProjectLink;
  /** Further destinations listed under the description. */
  links?: ProjectLink[];
}
