import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/",
      },
      {
        find: "@/lib/(.*)",
        replacement: "lib/$1",
      },
    ],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
    include: ["**/*.test.ts", "**/*.test.tsx"],
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
