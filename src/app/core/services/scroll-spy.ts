import { PLATFORM_ID, Injectable, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollSpy {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;
  private sectionRatios = new Map<string, number>();

  readonly activeId = signal<string>('');

  watch(sectionIds: string[]): void {
    if (!this.isBrowser || typeof IntersectionObserver === 'undefined') return;
    this.observer?.disconnect();
    this.sectionRatios.clear();

    this.observer = new IntersectionObserver(
      (entries) => {
        // Update ratios for any sections that changed intersection
        for (const entry of entries) {
          this.sectionRatios.set(entry.target.id, entry.intersectionRatio);
        }

        let bestId = this.activeId();
        let maxRatio = -1;

        // Find the section with the highest intersection ratio (most visible in detection zone)
        for (const id of sectionIds) {
          const ratio = this.sectionRatios.get(id) || 0;
          if (ratio > maxRatio) {
            maxRatio = ratio;
            bestId = id;
          }
        }

        // Fallback: if scrolled to the absolute bottom, select the last section
        // Math.ceil handles sub-pixel scrolling differences on some monitors
        const isAtBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10;
        if (isAtBottom && sectionIds.length > 0) {
          bestId = sectionIds[sectionIds.length - 1];
        }

        this.activeId.set(bestId);
      },
      // Detection zone: top 40% of viewport. Sections are "active" as they scroll into the top area.
      { rootMargin: '0px 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        this.sectionRatios.set(id, 0);
        this.observer.observe(el);
      }
    }
  }

  destroy(): void {
    this.observer?.disconnect();
    this.observer = undefined;
    this.sectionRatios.clear();
  }
}
