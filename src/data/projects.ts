import type { Project } from '../types/project';
import tarifeaiScreenshot from '../assets/projects/tarifeai-screenshot.png';
import spectraScreenshot from '../assets/projects/spectra-screenshot.png';
import applypilotScreenshot from '../assets/projects/applypilot-screenshot.png';

// Content carried over unchanged from the legacy homepage (Featured Projects).
// Screenshots are captured from the running apps: ApplyPilot with fictional
// demo data, TarifeAI in its initial state (refreshed 2026-10-16), Spectra
// reviewing a public-domain dashcam clip with plates and VIN blurred (2026-10-21).
export const featuredProjects: Project[] = [
  {
    name: 'TarifeAI',
    tagline: 'Mobile plan comparison assistant',
    description:
      'A RAG assistant that compares Turkish mobile plans, grounding every answer in retrieved plan data with FastAPI, PostgreSQL + pgvector, and BGE-M3 embeddings.',
    media: {
      kind: 'screenshot',
      src: tarifeaiScreenshot,
      alt: 'TarifeAI start screen in Turkish with Turkcell, Vodafone and Türk Telekom chips, four suggested plan searches, the question input and a conversation sidebar.',
    },
    primaryLink: { label: 'GitHub', href: 'https://github.com/kaanddemir/tarife-ai-rag' },
  },
  {
    name: 'Spectra',
    tagline: 'Evidence-based dashcam review',
    description:
      'A dashcam review tool that flags rapid approaches, lane cut-ins, and possible impacts, backing each one with evidence from object detection, tracking, and lane segmentation.',
    media: {
      kind: 'screenshot',
      src: spectraScreenshot,
      alt: 'Spectra review screen for a highway dashcam clip, with two tracked trucks and lane lines overlaid on the video, a rapid approach proposal marked uncertain, and the event timeline.',
    },
    primaryLink: { label: 'GitHub', href: 'https://github.com/kaanddemir/spectra-vision' },
  },
  {
    name: 'ApplyPilot',
    tagline: 'Job tracking with AI fit analysis',
    description:
      'A job application tracker that organizes your search on a Kanban board and compares your CV with each posting, backing every requirement with evidence.',
    media: {
      kind: 'screenshot',
      src: applypilotScreenshot,
      alt: 'ApplyPilot Kanban board with nine fictional job applications sorted into Saved, Applied, Interview, Offer and Rejected columns.',
    },
    primaryLink: { label: 'GitHub', href: 'https://github.com/kaanddemir/applypilot' },
  },
];
