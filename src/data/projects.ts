import type { Project } from '../types/project';
import tarifeaiLogo from '../assets/projects/tarifeai-logo.png';
import spectraLogo from '../assets/projects/spectra-logo.png';
import applypilotLogo from '../assets/projects/applypilot-logo.png';
import studyhubLogo from '../assets/projects/studyhub-logo.png';

// Content carried over unchanged from the legacy homepage (Featured Projects).
// Logos stand in until real screenshots are available.
export const featuredProjects: Project[] = [
  {
    name: 'TarifeAI',
    tagline: 'Retrieval-augmented assistant',
    description:
      'A RAG assistant that compares Turkish mobile plans, grounding every answer in retrieved plan data with FastAPI, PostgreSQL + pgvector, and BGE-M3 embeddings.',
    media: { kind: 'logo', src: tarifeaiLogo },
    primaryLink: { label: 'GitHub', href: 'https://github.com/kaanddemir/tarife-ai-rag' },
  },
  {
    name: 'Spectra',
    tagline: 'Driving video risk analysis',
    description:
      'A Python/OpenCV dashboard combining object detection, lane detection, depth estimation, and optical flow to assess driving risk and estimate time-to-collision.',
    media: { kind: 'logo', src: spectraLogo },
    primaryLink: { label: 'GitHub', href: 'https://github.com/kaanddemir/spectra-vision' },
  },
  {
    name: 'ApplyPilot',
    tagline: 'AI job application tracker',
    description:
      'A job application tracker with AI-assisted CV review, cover-letter drafting, and focused job-search chat.',
    media: { kind: 'logo', src: applypilotLogo },
    primaryLink: { label: 'GitHub', href: 'https://github.com/kaanddemir/applypilot' },
  },
  {
    name: 'StudyHub',
    tagline: 'Learning platform',
    description:
      'A modern learning web app that generates study materials and course aware answers, with a chat interface and local model integration.',
    media: { kind: 'logo', src: studyhubLogo },
    primaryLink: { label: 'GitHub', href: 'https://github.com/kaanddemir/studyhub' },
  },
];
