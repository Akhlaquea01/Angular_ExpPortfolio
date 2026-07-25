import { Directive, Input, computed, signal } from '@angular/core';
import { ButtonVariants, buttonVariants } from './button-variants';

// This and the other shared/ui primitives (Card, Badge, Separator) are deliberately
// host-binding *attribute* directives, not wrapper components — applied straight to a
// native <a>/<button>/<div> so semantics and attributes (href, type, disabled...) stay
// native. It mirrors spartan-ng/shadcn's "own the styled layer" approach without
// pulling in spartan's Nx-only generator CLI, which doesn't fit a plain Angular CLI
// workspace.
/** Shared button/link styling. `<a appBtn="primary" btnSize="lg" appMagnetic>`. */
@Directive({
  selector: '[appBtn]',
  host: {
    '[class]': 'classes()',
  },
})
export class Btn {
  private readonly variant = signal<NonNullable<ButtonVariants['variant']>>('primary');
  private readonly size = signal<NonNullable<ButtonVariants['size']>>('md');

  @Input('appBtn') set variantInput(value: ButtonVariants['variant'] | '' | undefined) {
    if (value) this.variant.set(value);
  }

  @Input() set btnSize(value: ButtonVariants['size'] | undefined) {
    if (value) this.size.set(value);
  }

  protected readonly classes = computed(() =>
    buttonVariants({ variant: this.variant(), size: this.size() }),
  );
}
