import type { Project } from '../types/project';
import tarifeaiScreenshot from '../assets/projects/tarifeai-screenshot.png';
import spectraScreenshot from '../assets/projects/spectra-screenshot.png';
import applypilotScreenshot from '../assets/projects/applypilot-screenshot.png';

// Content carried over unchanged from the legacy homepage (Featured Projects).
// Screenshots are captured from the running apps: ApplyPilot with fictional
// demo data, TarifeAI and Spectra in their initial state (refreshed 2026-10-16).
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
    tagline: 'Driving video risk analysis',
    description:
      'A Python/OpenCV dashboard combining object detection, lane detection, depth estimation, and optical flow to assess driving risk and estimate time-to-collision.',
    media: {
      kind: 'screenshot',
      src: spectraScreenshot,
      alt: 'Spectra dashboard before a video is uploaded, with an empty video area, event timeline and risk analysis panel for time to collision and risk score.',
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
