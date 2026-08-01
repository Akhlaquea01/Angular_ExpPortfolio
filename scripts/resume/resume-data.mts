import { profile } from '../../src/content/profile';
import { experience } from '../../src/content/experience';
import { skillGroups } from '../../src/content/skills';
import { projects } from '../../src/content/projects';
import { education } from '../../src/content/education';
import { certifications } from '../../src/content/certifications';
import { achievements, achievementStats } from '../../src/content/achievements';
import type { ResumeData } from './resume-types';

const MAX_BULLETS_RECENT_ROLE = 5;
const MAX_BULLETS_OLDER_ROLE = 3;
const RECENT_ROLE_COUNT = 2;
const MAX_ITEMS_PER_SKILL_CATEGORY = 8;
const MAX_ACHIEVEMENTS = 2;
const MAX_PROJECTS = 3;

/**
 * Bridges the site's live content (src/content/*.ts) into a curated, print-ready
 * shape. This is the ONLY place resume-specific trimming happens — the site itself
 * is untouched — so the PDF and the live site never fall out of sync on facts,
 * only on how much detail is shown.
 */
export function buildResumeData(): ResumeData {
  return {
    name: profile.name,
    role: profile.role,
    tagline: profile.tagline,
    contact: {
      location: profile.location,
      email: profile.email,
      phone: profile.phone,
      github: profile.github,
      linkedin: profile.linkedin,
    },
    impactStats: achievementStats.map((stat) => ({
      value: `${stat.value}${stat.suffix}`,
      label: stat.label,
    })),
    summary: profile.summary,
    companies: experience.map((company) => ({
      company: company.company,
      roles: company.roles.map((role, index) => {
        const maxBullets = index < RECENT_ROLE_COUNT ? MAX_BULLETS_RECENT_ROLE : MAX_BULLETS_OLDER_ROLE;
        // Substantive day-to-day work reads stronger on a resume than minor accomplishments
        // (internal course completions, monthly recognitions already covered in Achievements),
        // so responsibilities fill the bullet budget first.
        const bullets = [...role.responsibilities, ...role.accomplishments].slice(0, maxBullets);
        return {
          title: role.title,
          tenure: role.tenure,
          location: role.location,
          bullets,
        };
      }),
    })),
    skillGroups: skillGroups.map((group) => ({
      category: group.category,
      items: group.items.slice(0, MAX_ITEMS_PER_SKILL_CATEGORY).map((item) => item.name),
    })),
    projects: projects.slice(0, MAX_PROJECTS).map((project) => ({
      name: project.name,
      description: project.description,
      tech: project.tech,
    })),
    education: education.map((item) => ({
      title: item.title,
      institution: item.institution,
      date: item.date,
    })),
    certifications: certifications.map((cert) => ({
      name: cert.name,
      issuer: cert.issuer,
      status: cert.status,
    })),
    achievements: achievements.slice(0, MAX_ACHIEVEMENTS).map((achievement) => ({
      title: achievement.title,
      description: achievement.description,
    })),
  };
}
