export interface ResumeContact {
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface ResumeImpactStat {
  value: string;
  label: string;
}

export interface ResumeRole {
  title: string;
  tenure: string;
  location: string;
  bullets: string[];
}

export interface ResumeCompany {
  company: string;
  roles: ResumeRole[];
}

export interface ResumeSkillGroup {
  category: string;
  items: string[];
}

export interface ResumeProject {
  name: string;
  description: string;
  tech: string[];
}

export interface ResumeEducationItem {
  title: string;
  institution: string;
  date: string;
}

export interface ResumeCertification {
  name: string;
  issuer: string;
  status: string;
}

export interface ResumeAchievement {
  title: string;
  description: string;
}

export interface ResumeData {
  name: string;
  role: string;
  tagline: string;
  contact: ResumeContact;
  impactStats: ResumeImpactStat[];
  summary: string;
  companies: ResumeCompany[];
  skillGroups: ResumeSkillGroup[];
  projects: ResumeProject[];
  education: ResumeEducationItem[];
  certifications: ResumeCertification[];
  achievements: ResumeAchievement[];
}
