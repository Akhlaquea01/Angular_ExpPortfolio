import { Component } from '@angular/core';

/** Decorative floating gradient-mesh orbs used behind hero-like sections. Purely CSS-animated. */
@Component({
  selector: 'app-animated-background',
  template: `
    <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        class="animate-float absolute -left-24 -top-24 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style="background: radial-gradient(circle, var(--accent), transparent 70%)"
      ></div>
      <div
        class="animate-float-slow absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl"
        style="background: radial-gradient(circle, var(--accent-2), transparent 70%)"
      ></div>
      <div
        class="animate-float absolute bottom-0 left-1/3 h-80 w-80 rounded-full opacity-15 blur-3xl"
        style="background: radial-gradient(circle, var(--accent), transparent 70%); animation-delay: -3s"
      ></div>
    </div>
  `,
})
export class AnimatedBackground {}
