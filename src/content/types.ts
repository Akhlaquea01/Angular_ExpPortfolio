export interface Profile {
  name: string;
  firstName: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  photo: string;
  /** ISO date the professional experience clock starts counting from. */
  experienceStartDate: string;
  summary: string;
  hobby: string;
}

export interface ExperienceRole {
  title: string;
  employmentType: string;
  tenure: string;
  duration: string;
  location: string;
  responsibilities: string[];
  accomplishments: string[];
  /** Derived from this role's own responsibilities — not invented. */
  skills: string[];
}

export interface ExperienceCompany {
  company: string;
  logo: string;
  active: boolean;
  roles: ExperienceRole[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface TechStackItem {
  name: string;
  icon: string;
  category: string;
}

export interface AchievementStat {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface AchievementEntry {
  title: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  status: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  date: string;
  content: string;
}

export interface Testimonial {
  name: string;
  company: string;
  message: string;
  image: string;
}

export interface BlogPost {
  title: string;
  summary: string;
  date: string;
  url: string;
}

export interface OpenSourceItem {
  name: string;
  description: string;
  url: string;
}

export interface HeroStat {
  label: string;
  value: string | number;
  dynamicValue?: 'experienceYears' | 'totalRoles';
  suffix: string;
}

export interface HeroContent {
  greeting: string;
  descriptionSuffix: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  stats: HeroStat[];
}
