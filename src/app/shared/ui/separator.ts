import { Directive, Input, computed, signal } from '@angular/core';

@Directive({
  selector: '[appSeparator]',
  host: {
    role: 'separator',
    '[class]': 'classes()',
  },
})
export class Separator {
  private readonly orientation = signal<'horizontal' | 'vertical'>('horizontal');

  @Input('appSeparator') set orientationInput(value: 'horizontal' | 'vertical' | '' | undefined) {
    if (value) this.orientation.set(value);
  }

  protected readonly classes = computed(() =>
    this.orientation() === 'vertical' ? 'block w-px self-stretch bg-border' : 'block h-px w-full bg-border',
  );
}
