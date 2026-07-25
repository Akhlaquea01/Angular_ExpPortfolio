// jsdom (used by the Vitest unit-test runner) doesn't implement matchMedia. GSAP's
// ScrollTrigger calls it unconditionally on registration, so tests need a stub.
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = ((query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as unknown as MediaQueryList) as typeof window.matchMedia;
}

// Components (e.g. the Projects section) make real network calls for progressive
// enhancement in the browser. Stub fetch so unit tests stay deterministic and never
// depend on external services being reachable.
globalThis.fetch = (async () => new Response(JSON.stringify([]), { status: 200 })) as typeof fetch;
