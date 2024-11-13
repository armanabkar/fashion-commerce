import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["**/*.test.ts"],
    timeout: 30000, // 30 seconds
    threads: true,
    concurrency: 5,
    coverage: {
      reporter: ["text", "lcov", "clover"],
      threshold: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
    },
  },
});
