import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { profile } from '../../../content/profile';

// TODO: replace with the real deployed domain once one is chosen.
const SITE_URL = 'https://iam-akhlaque.netlify.app';
const OG_IMAGE = `${SITE_URL}/images/akhlaque-01.jpg`;

@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  init(): void {
    const pageTitle = `${profile.name} — ${profile.role}`;
    const description = profile.summary;

    this.title.setTitle(pageTitle);

    this.meta.addTags([
      { name: 'description', content: description },
      { name: 'author', content: profile.name },
      {
        name: 'keywords',
        content:
          'Akhlaque Ahmad, Angular Developer, Node.js Engineer, AI Full Stack Engineer, Bengaluru, Frontend Architecture, Agentic AI',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: profile.name },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:url', content: SITE_URL },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: OG_IMAGE },
    ]);

    this.setCanonical(SITE_URL);
    this.injectJsonLd();
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private injectJsonLd(): void {
    const id = 'person-jsonld';
    if (this.document.getElementById(id)) return;

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      jobTitle: profile.role,
      description: profile.summary,
      email: `mailto:${profile.email}`,
      telephone: profile.phone,
      address: { '@type': 'PostalAddress', addressLocality: profile.location },
      url: SITE_URL,
      sameAs: [profile.github, profile.linkedin],
    });
    this.document.head.appendChild(script);
  }
}
