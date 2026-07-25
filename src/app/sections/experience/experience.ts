import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  PLATFORM_ID,
  ViewChild,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { LucideBriefcase, LucideCalendar, LucideMapPin } from '@lucide/angular';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experience } from '../../../content/experience';
import { ExperienceRole } from '../../../content/types';
import { Reveal } from '../../shared/directives/reveal';
import { Badge } from '../../shared/ui/badge';
import { Card } from '../../shared/ui/card';

interface FlatRole extends ExperienceRole {
  company: string;
}

@Component({
  selector: 'app-experience',
  imports: [Reveal, Card, Badge, LucideBriefcase, LucideCalendar, LucideMapPin],
  templateUrl: './experience.html',
})
export class Experience {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  @ViewChild('lineTrack') private lineTrack?: ElementRef<HTMLElement>;
  @ViewChild('lineFill') private lineFill?: ElementRef<HTMLElement>;

  protected readonly roles: FlatRole[] = experience.flatMap((company) =>
    company.roles.map((role) => ({ ...role, company: company.company })),
  );

  private readonly expandedIndices = signal<ReadonlySet<number>>(new Set([0]));

  constructor() {
    // afterNextRender is the SSR-safe, browser-only render hook — it never runs during
    // prerendering, and (unlike ngOnInit + a manual isPlatformBrowser check) guarantees
    // the DOM is actually laid out, which setupStepperLine needs for `track.offsetHeight`.
    afterNextRender(() => this.setupStepperLine());
  }

  isExpanded(index: number): boolean {
    return this.expandedIndices().has(index);
  }

  toggle(index: number): void {
    this.expandedIndices.update((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  private setupStepperLine(): void {
    if (!this.isBrowser || !this.lineTrack || !this.lineFill) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const track = this.lineTrack.nativeElement;
    const fill = this.lineFill.nativeElement;

    gsap.fromTo(
      fill,
      { height: 0 },
      {
        height: track.offsetHeight,
        ease: 'none',
        scrollTrigger: {
          trigger: track,
          start: 'top 75%',
          end: 'bottom 60%',
          scrub: 0.6,
        },
      },
    );
  }
}
