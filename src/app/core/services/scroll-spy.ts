import { PLATFORM_ID, Injectable, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollSpy {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;

  readonly activeId = signal<string>('');

  watch(sectionIds: string[]): void {
    // The IntersectionObserver check isn't just old-browser defense — jsdom (the
    // Vitest unit-test environment) doesn't implement it either, and would throw here
    // without this guard.
    if (!this.isBrowser || typeof IntersectionObserver === 'undefined') return;
    this.observer?.disconnect();

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          this.activeId.set(visible[0].target.id);
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    }
  }

  destroy(): void {
    this.observer?.disconnect();
    this.observer = undefined;
  }
}
