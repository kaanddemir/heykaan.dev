// About content carried over unchanged from the legacy /about/ page.

export const bio =
  'I am a recent Management Information Systems graduate focused on data analysis. I build interactive dashboards, data projects, browser extensions, and web applications that translate complex datasets into clear, actionable insights.';

export const skillsIntro =
  'Technical proficiencies and frameworks developed through academic study and hands-on project experience.';

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { category: 'Programming & Databases', skills: ['Python', 'SQL', 'C#'] },
  {
    category: 'Data Analytics & Visualization',
    skills: ['Pandas', 'NumPy', 'OpenCV', 'Power BI (DAX)', 'Microsoft Excel'],
  },
  { category: 'Web', skills: ['JavaScript', 'HTML', 'CSS'] },
  {
    category: 'Cloud & Tools',
    skills: ['Microsoft Azure', 'Google Cloud Platform (GCP)', 'Linux', 'Git', 'GitHub'],
  },
];
