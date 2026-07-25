import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: ['src/test-setup.ts'],
    // Single spec file today; serial execution avoids fork-pool instability seen in
    // constrained/sandboxed environments with the newer Vitest-based Angular runner.
    fileParallelism: false,
    testTimeout: 15000,
  },
});
