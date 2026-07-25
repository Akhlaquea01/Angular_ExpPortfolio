import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Input, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './motion-utils';

// Module-scoped (not per-instance) — see reveal.ts for why.
let pluginRegistered = false;

/** Light vertical parallax drift as the host's parent scrolls through the viewport. */
@Directive({
  selector: '[appParallax]',
})
export class Parallax implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private tween?: gsap.core.Tween;

  @Input('appParallax') speed: number | '' = 0.3;

  ngOnInit(): void {
    if (!this.isBrowser) return;
    if (prefersReducedMotion()) return;

    if (!pluginRegistered) {
      gsap.registerPlugin(ScrollTrigger);
      pluginRegistered = true;
    }

    const node = this.el.nativeElement;
    const speed = this.speed === '' ? 0.3 : this.speed;

    this.tween = gsap.to(node, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: node.parentElement ?? node,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  ngOnDestroy(): void {
    this.tween?.scrollTrigger?.kill();
    this.tween?.kill();
  }
}
