import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Input, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './motion-utils';

// Module-scoped (not per-instance): every Reveal in the tree shares one registration
// check, so `gsap.registerPlugin(ScrollTrigger)` runs exactly once no matter how many
// directive instances mount.
let pluginRegistered = false;

/** Scroll-triggered fade + slide reveal. `<div [appReveal]="0.15">...</div>` (input is an optional delay in seconds). */
@Directive({
  selector: '[appReveal]',
})
export class Reveal implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private tween?: gsap.core.Tween;

  @Input('appReveal') delay: number | '' = 0;
  @Input() revealY = 24;

  ngOnInit(): void {
    if (!this.isBrowser) return;

    const node = this.el.nativeElement;

    if (prefersReducedMotion()) {
      gsap.set(node, { opacity: 1, y: 0 });
      return;
    }

    if (!pluginRegistered) {
      gsap.registerPlugin(ScrollTrigger);
      pluginRegistered = true;
    }

    gsap.set(node, { opacity: 0, y: this.revealY });

    this.tween = gsap.to(node, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: this.delay === '' ? 0 : this.delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: node,
        start: 'top 88%',
        toggleActions: 'play none none reverse',
      },
    });
  }

  ngOnDestroy(): void {
    this.tween?.scrollTrigger?.kill();
    this.tween?.kill();
  }
}
