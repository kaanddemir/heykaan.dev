import type { Project } from '../types/project';
import tarifeaiLogo from '../assets/projects/tarifeai-logo.png';
import spectraLogo from '../assets/projects/spectra-logo.png';
import applypilotScreenshot from '../assets/projects/applypilot-screenshot.png';
import studyhubScreenshot from '../assets/projects/studyhub-screenshot.png';

// Content carried over unchanged from the legacy homepage (Featured Projects).
// Logos stand in until real screenshots are available. Screenshots are
// captured from the running apps with fictional demo data.
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
    media: {
      kind: 'screenshot',
      src: applypilotScreenshot,
      alt: 'ApplyPilot Kanban board with eight job applications sorted into Saved, Applied, Interview, Offer and Rejected columns.',
    },
    primaryLink: { label: 'GitHub', href: 'https://github.com/kaanddemir/applypilot' },
  },
  {
    name: 'StudyHub',
    tagline: 'Student study dashboard',
    description:
      'A local-first study dashboard for tracking courses, exams, grades and habits, with a Pomodoro timer, digital notebook and customizable widgets.',
    media: {
      kind: 'screenshot',
      src: studyhubScreenshot,
      alt: 'StudyHub dashboard with course list, study-hours chart, daily habits, to-do list, calendar, weekly schedule, focus timer and grade calculator.',
    },
    primaryLink: { label: 'GitHub', href: 'https://github.com/kaanddemir/studyhub' },
  },
];
