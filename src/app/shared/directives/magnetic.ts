import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, HostListener, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import gsap from 'gsap';
import { prefersReducedMotion } from './motion-utils';

/** Subtly pulls an element toward the cursor on hover. Meant for primary CTA buttons. */
@Directive({
  selector: '[appMagnetic]',
})
export class Magnetic implements OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private quickX?: (value: number) => void;
  private quickY?: (value: number) => void;

  constructor() {
    if (this.isBrowser) {
      this.quickX = gsap.quickTo(this.el.nativeElement, 'x', { duration: 0.5, ease: 'power3.out' });
      this.quickY = gsap.quickTo(this.el.nativeElement, 'y', { duration: 0.5, ease: 'power3.out' });
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isBrowser || prefersReducedMotion()) return;
    const rect = this.el.nativeElement.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    this.quickX?.(relX * 0.3);
    this.quickY?.(relY * 0.3);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.quickX?.(0);
    this.quickY?.(0);
  }

  ngOnDestroy(): void {
    if (this.isBrowser) gsap.killTweensOf(this.el.nativeElement);
  }
}
