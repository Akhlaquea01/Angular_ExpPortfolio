import type { ResumeData } from './resume-types';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function bulletList(items: string[]): string {
  if (items.length === 0) return '';
  return `<ul class="bullet-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

function renderHeader(data: ResumeData): string {
  const { contact } = data;
  return `
    <header class="resume-header">
      <h1 class="resume-name">${escapeHtml(data.name)}</h1>
      <p class="resume-role-line">${escapeHtml(data.role)}</p>
      <p class="resume-tagline">${escapeHtml(data.tagline)}</p>
      <p class="resume-contact">
        <span>${escapeHtml(contact.location)}</span>
        <span>${escapeHtml(contact.email)}</span>
        <span>${escapeHtml(contact.phone)}</span>
        <span>${escapeHtml(contact.linkedin.replace(/^https?:\/\//, ''))}</span>
        <span>${escapeHtml(contact.github.replace(/^https?:\/\//, ''))}</span>
      </p>
    </header>`;
}

function renderImpactStrip(data: ResumeData): string {
  if (data.impactStats.length === 0) return '';
  const items = data.impactStats
    .map((stat) => `<span><span class="impact-value">${escapeHtml(stat.value)}</span> ${escapeHtml(stat.label)}</span>`)
    .join('');
  return `<div class="impact-strip">${items}</div>`;
}

function renderSummary(data: ResumeData): string {
  return `
    <section class="resume-section">
      <h2 class="section-heading">Summary</h2>
      <p class="summary-text">${escapeHtml(data.summary)}</p>
    </section>`;
}

function renderExperience(data: ResumeData): string {
  const companies = data.companies
    .map((company) => {
      const roles = company.roles
        .map(
          (role) => `
        <div class="role-block">
          <div class="role-header">
            <span class="role-title">${escapeHtml(role.title)}</span>
            <span class="role-meta">${escapeHtml(role.tenure)}</span>
          </div>
          <div class="role-location">${escapeHtml(role.location)}</div>
          ${bulletList(role.bullets)}
        </div>`,
        )
        .join('');
      return `
      <div class="company-block">
        <p class="company-name">${escapeHtml(company.company)}</p>
        ${roles}
      </div>`;
    })
    .join('');
  return `
    <section class="resume-section">
      <h2 class="section-heading">Experience</h2>
      ${companies}
    </section>`;
}

function renderSkills(data: ResumeData): string {
  const rows = data.skillGroups
    .map(
      (group) => `
      <div class="skill-row">
        <span class="skill-category">${escapeHtml(group.category)}:</span>
        <span class="skill-items">${escapeHtml(group.items.join(', '))}</span>
      </div>`,
    )
    .join('');
  return `
    <section class="resume-section">
      <h2 class="section-heading">Technical Skills</h2>
      <div class="skills-grid">${rows}</div>
    </section>`;
}

function renderProjects(data: ResumeData): string {
  if (data.projects.length === 0) return '';
  const items = data.projects
    .map(
      (project) => `
      <div class="project-block">
        <div class="project-name">${escapeHtml(project.name)}</div>
        <div class="project-tech">${escapeHtml(project.tech.join(' · '))}</div>
        <p class="project-description">${escapeHtml(project.description)}</p>
      </div>`,
    )
    .join('');
  return `
    <section class="resume-section">
      <h2 class="section-heading">Selected Projects</h2>
      ${items}
    </section>`;
}

function renderEducation(data: ResumeData): string {
  const items = data.education
    .map(
      (item) => `
      <div class="line-item">
        <span class="line-item-title">${escapeHtml(item.title)}</span>
        — <span class="line-item-meta">${escapeHtml(item.institution)} · ${escapeHtml(item.date)}</span>
      </div>`,
    )
    .join('');
  return `
    <section class="resume-section">
      <h2 class="section-heading">Education</h2>
      ${items}
    </section>`;
}

function renderCertifications(data: ResumeData): string {
  if (data.certifications.length === 0) return '';
  const items = data.certifications
    .map(
      (cert) => `
      <div class="line-item">
        <span class="line-item-title">${escapeHtml(cert.name)}</span>
        — <span class="line-item-meta">${escapeHtml(cert.issuer)} · ${escapeHtml(cert.status)}</span>
      </div>`,
    )
    .join('');
  return `
    <section class="resume-section">
      <h2 class="section-heading">Certifications</h2>
      ${items}
    </section>`;
}

function renderAchievements(data: ResumeData): string {
  if (data.achievements.length === 0) return '';
  const items = data.achievements
    .map(
      (achievement) => `
      <div class="achievement-block">
        <div class="achievement-title">${escapeHtml(achievement.title)}</div>
        <p class="achievement-description">${escapeHtml(achievement.description)}</p>
      </div>`,
    )
    .join('');
  return `
    <section class="resume-section">
      <h2 class="section-heading">Achievements</h2>
      ${items}
    </section>`;
}

export function renderResumeHtml(data: ResumeData, css: string): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>${escapeHtml(data.name)} — Resume</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
      rel="stylesheet"
    />
    <style>${css}</style>
  </head>
  <body>
    ${renderHeader(data)}
    ${renderImpactStrip(data)}
    ${renderSummary(data)}
    ${renderExperience(data)}
    ${renderSkills(data)}
    ${renderProjects(data)}
    ${renderEducation(data)}
    ${renderCertifications(data)}
    ${renderAchievements(data)}
  </body>
</html>`;
}
