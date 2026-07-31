import { Type } from '@angular/core';
import { About } from './about/about';
import { Achievements } from './achievements/achievements';
import { Blog } from './blog/blog';
import { Certifications } from './certifications/certifications';
import { Contact } from './contact/contact';
import { Education } from './education/education';
import { Experience } from './experience/experience';
import { Hero } from './hero/hero';
import { OpenSource } from './open-source/open-source';
import { Projects } from './projects/projects';
import { Resume } from './resume/resume';
import { Skills } from './skills/skills';
import { Testimonials } from './testimonials/testimonials';

export interface SectionConfig {
  id: string;
  label: string;
  component: Type<unknown>;
  enabled: boolean;
  /**
   * Set to false to keep a section on the page but out of the navbar. Defaults to
   * true. Used for Hero/About: both stay on the page, but the nav doesn't need a link
   * to "Home" (the logo already does that) or "About" (it's right below the hero).
   */
  inNav?: boolean;
}

/**
 * Single ordered registry driving both the page composition (app.html renders every
 * enabled section via NgComponentOutlet) and the navbar links. To add a new section
 * later: create content/<name>.ts + sections/<name>/, then add one entry here.
 */
export const sections: SectionConfig[] = [
  { id: 'hero', label: 'Home', component: Hero, enabled: true, inNav: false },
  { id: 'about', label: 'About', component: About, enabled: true, inNav: false },
  { id: 'experience', label: 'Experience', component: Experience, enabled: true },
  { id: 'projects', label: 'Projects', component: Projects, enabled: true },
  { id: 'skills', label: 'Skills', component: Skills, enabled: true },
  { id: 'achievements', label: 'Achievements', component: Achievements, enabled: true, inNav: false },
  { id: 'certifications', label: 'Certifications', component: Certifications, enabled: true, inNav: false },
  { id: 'testimonials', label: 'Testimonials', component: Testimonials, enabled: true, inNav: false },
  { id: 'education', label: 'Education', component: Education, enabled: true, inNav: false },
  { id: 'resume', label: 'Resume', component: Resume, enabled: true },
  { id: 'contact', label: 'Contact', component: Contact, enabled: true },
  { id: 'blog', label: 'Writing', component: Blog, enabled: false },
  { id: 'open-source', label: 'Open Source', component: OpenSource, enabled: false },
];

export const enabledSections: SectionConfig[] = sections.filter((section) => section.enabled);

export const navSections: SectionConfig[] = enabledSections.filter((section) => section.inNav !== false);
