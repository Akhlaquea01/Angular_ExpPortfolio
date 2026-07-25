/** Safe to call outside real browsers (e.g. jsdom in unit tests) where matchMedia may be absent. */
export function prefersReducedMotion(): boolean {
  return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
