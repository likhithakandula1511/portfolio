export interface SocialLinks {
  github: string;
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
  architectureDiagram: string;
}

export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  technologies: string[];
  mainFeatures: string[];
  role: string;
  githubUrl: string;
  liveUrl: string;
  image: string;
  featured: boolean;
  screenshots: string[];
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
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  details: string[];
}

export interface HobbyEntry {
  title: string;
  description: string;
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
