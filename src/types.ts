export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  startYear: number;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}
export interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface ResumeProfileData {
  name: string;
  title: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedInUrl: string;
  summary: string;
  strengths: string[];
  skills: Skill[];
  experience: Experience[];
  education: Education;
  projects: Project[];
}
...
  selectedSkillLabel: string;
  clearFilter: string;
  skillAnalyticsTitle: string;
  qrCodeShareTitle: string;
  timelineViewTitle: string;
}

  category: string;
  description: string;
  link: string;
  imageUrl: string;
}

export interface AppCopy {
  experienceNav: string;
  skillsNav: string;
  studyNav: string;
  contactNav: string;
  settingsNav: string;
  shareContentDescription: string;
  settingsKicker: string;
  settingsTitle: string;
  generalSection: string;
  languageLabel: string;
  englishLanguage: string;
  traditionalChineseLanguage: string;
  interfaceThemeLabel: string;
  lightTheme: string;
  darkTheme: string;
  advancedSection: string;
  exportResumePdf: string;
  exportResumeSuccess: string;
  exportResumeFailure: string;
  clearApplicationCache: string;
  clearCacheSuccess: string;
  clearCacheFailure: string;
  resumeEngineLabel: string;
  resumeEngineStatus: string;
  footerRole: string;
  professionalExperienceTitle: string;
  experienceSection: string;
  educationSection: string;
  skillsTitle: string;
  skillsDescription: string;
  technicalStackSection: string;
  studyTitle: string;
  studyDescription: string;
  visitWebsite: string;
  contactInfoSection: string;
  downloadResume: string;
  textDirectionLabel: string;
  ltrLayout: string;
  rtlLayout: string;
  pdfCustomizationTitle: string;
  pdfShowSummaryLabel: string;
  pdfShowEducationLabel: string;
  pdfShowSkillsLabel: string;
  projectsTabTitle: string;
  viewOnGithub: string;
  filterAllYears: string;
  filterSince2024: string;
  filterSince2022: string;
  filterSince2020: string;
  selectedSkillLabel: string;
  clearFilter: string;
}
