import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Input, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './motion-utils';

// Module-scoped (not per-instance) — see reveal.ts for why.
let pluginRegistered = false;

/** Animates the host's text content from 0 up to a target number once it scrolls into view. */
@Directive({
  selector: '[appCounter]',
})
export class Counter implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private tween?: gsap.core.Tween;

  @Input('appCounter') value = 0;
  @Input() decimals = 0;
  @Input() suffix = '';

  ngOnInit(): void {
    const node = this.el.nativeElement;

    if (!this.isBrowser || prefersReducedMotion()) {
      node.textContent = `${this.value}${this.suffix}`;
      return;
    }

    if (!pluginRegistered) {
      gsap.registerPlugin(ScrollTrigger);
      pluginRegistered = true;
    }

    const counter = { val: 0 };
    node.textContent = `0${this.suffix}`;

    this.tween = gsap.to(counter, {
      val: this.value,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: node,
        start: 'top 88%',
        once: true,
      },
      onUpdate: () => {
        node.textContent = `${counter.val.toFixed(this.decimals)}${this.suffix}`;
      },
    });
  }

  ngOnDestroy(): void {
    this.tween?.scrollTrigger?.kill();
    this.tween?.kill();
  }
}
