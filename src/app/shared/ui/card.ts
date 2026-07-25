import { Directive, Input, computed, signal } from '@angular/core';

/** Neomorphic surface wrapper. `<div appCard>` or `<div appCard="glass">`. */
@Directive({
  selector: '[appCard]',
  host: {
    '[class]': 'classes()',
  },
})
export class Card {
  private readonly variant = signal<'solid' | 'glass'>('solid');

  @Input('appCard') set variantInput(value: 'solid' | 'glass' | '' | undefined) {
    if (value) this.variant.set(value);
  }

  protected readonly classes = computed(() =>
    this.variant() === 'glass'
      ? 'surface-glass rounded-2xl p-6'
      : 'surface-neo rounded-2xl p-6 transition-transform duration-300',
  );
}
