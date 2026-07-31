import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'dark' | 'light';

export interface ThemeColor {
  id: string;
  name: string;
  dark: { accent: string; accent2: string };
  light: { accent: string; accent2: string };
}

export const THEME_COLORS: ThemeColor[] = [
  {
    id: 'purple',
    name: 'Purple',
    dark: { accent: '#7c6cff', accent2: '#22d3ee' },
    light: { accent: '#5b3df0', accent2: '#0891b2' },
  },
  {
    id: 'blue',
    name: 'Blue',
    dark: { accent: '#3b82f6', accent2: '#8b5cf6' },
    light: { accent: '#2563eb', accent2: '#7c3aed' },
  },
  {
    id: 'emerald',
    name: 'Emerald',
    dark: { accent: '#10b981', accent2: '#3b82f6' },
    light: { accent: '#059669', accent2: '#2563eb' },
  },
  {
    id: 'rose',
    name: 'Rose',
    dark: { accent: '#f43f5e', accent2: '#facc15' },
    light: { accent: '#e11d48', accent2: '#ca8a04' },
  },
  {
    id: 'orange',
    name: 'Orange',
    dark: { accent: '#f97316', accent2: '#eab308' },
    light: { accent: '#ea580c', accent2: '#ca8a04' },
  },
];

const STORAGE_KEY = 'portfolio-theme';
const STORAGE_COLOR_KEY = 'portfolio-color';

@Injectable({ providedIn: 'root' })
export class Theme {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly mode = signal<ThemeMode>('dark');
  readonly color = signal<ThemeColor>(THEME_COLORS[0]);

  constructor() {
    if (this.isBrowser) {
      const storedMode = localStorage.getItem(STORAGE_KEY);
      if (storedMode === 'light' || storedMode === 'dark') {
        this.mode.set(storedMode);
      } else {
        const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
        this.mode.set(prefersLight ? 'light' : 'dark');
      }

      const storedColor = localStorage.getItem(STORAGE_COLOR_KEY);
      if (storedColor) {
        const found = THEME_COLORS.find((c) => c.id === storedColor);
        if (found) {
          this.color.set(found);
        }
      }
    }

    // Effect syncs both mode and color to DOM and localStorage
    effect(() => {
      const mode = this.mode();
      const color = this.color();
      
      if (!this.isBrowser) return;
      
      // Update Mode
      document.documentElement.classList.toggle('light', mode === 'light');
      document.documentElement.classList.toggle('dark', mode === 'dark');
      localStorage.setItem(STORAGE_KEY, mode);
      
      // Update Color Variables
      const palette = mode === 'dark' ? color.dark : color.light;
      document.documentElement.style.setProperty('--accent', palette.accent);
      document.documentElement.style.setProperty('--accent-2', palette.accent2);
      localStorage.setItem(STORAGE_COLOR_KEY, color.id);
    });
  }

  toggle(): void {
    this.mode.update((mode) => (mode === 'dark' ? 'light' : 'dark'));
  }

  setColor(id: string): void {
    const found = THEME_COLORS.find((c) => c.id === id);
    if (found) {
      this.color.set(found);
    }
  }
}
