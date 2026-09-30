export type AccentColor = "purple" | "red" | "teal" | "gold" | "blue";

export interface SocialLinks {
  linkedin: string;
  email: string;
  phone: string;
  whatsapp: string;
}

export interface PersonalInfo {
  name: string;
  displayName: string;
  headline: string;
  shortIntro: string;
  aboutIntro: string;
  careerInterests: string[];
  strengths: string[];
  location: string;
  profileImage: string;
  resumeUrl: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  accent: AccentColor;
}

export interface ProjectDetailSection {
  overview: string;
  problem: string;
  solution: string;
  role: string;
  frontend: string;
  backend: string;
  database: string;
  apis: string;
  mainFeatures: string[];
  userWorkflow: string[];
  processFlow: string[];
}

export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  /** Full, clear bullets of your own work — shown in the Experience section. */
  whatIDid: string[];
  /** Basic one-line summary — shown on the project card. */
  cardSummary: string;
  /** Basic short bullets — shown on the project card. */
  cardHighlights: string[];
  technologies: string[];
  mainFeatures: string[];
  role: string;
  image: string;
  featured: boolean;
  isPrivate: boolean;
  detail: ProjectDetailSection;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  /** Slugs of projects (from `projects`) built in this role. */
  projectSlugs: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  details: string[];
  accent: AccentColor;
}

export interface HobbyEntry {
  title: string;
  description: string;
  accent: AccentColor;
}

export interface PortfolioData {
  personal: PersonalInfo;
  social: SocialLinks;
  skills: SkillCategory[];
  projects: Project[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
  hobbies: HobbyEntry[];
}
