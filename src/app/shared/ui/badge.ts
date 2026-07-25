import { Directive } from '@angular/core';

/** Small pill used for skill/tech tags. `<span appBadge>Angular</span>`. */
@Directive({
  selector: '[appBadge]',
  host: {
    class:
      'inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-fg-muted transition-colors hover:text-fg hover:border-border-strong',
  },
})
export class Badge {}
