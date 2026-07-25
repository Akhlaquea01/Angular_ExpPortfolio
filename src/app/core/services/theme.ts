import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'dark' | 'light';

const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class Theme {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly mode = signal<ThemeMode>('dark');

  constructor() {
    if (this.isBrowser) {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        this.mode.set(stored);
      } else {
        const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
        this.mode.set(prefersLight ? 'light' : 'dark');
      }
    }

    // Single place that syncs `mode` to the DOM class + localStorage. Guarded by
    // isBrowser because document/localStorage don't exist during SSR/prerendering.
    effect(() => {
      const mode = this.mode();
      if (!this.isBrowser) return;
      document.documentElement.classList.toggle('light', mode === 'light');
      document.documentElement.classList.toggle('dark', mode === 'dark');
      localStorage.setItem(STORAGE_KEY, mode);
    });
  }

  toggle(): void {
    this.mode.update((mode) => (mode === 'dark' ? 'light' : 'dark'));
  }
}
