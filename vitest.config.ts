import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths()],

  test: {
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],

    // Disable watch mode for routine and CI.
    watch: false,

    // Run setup file before tests.
    setupFiles: ["vitest.setup.ts"],

    // Allow tests to pass even if no test files are found.
    passWithNoTests: true,

    // Resolve path aliases for test files, similar to tsconfig-paths.
    alias:
      // biome-ignore format: added alignment for clarity.
      {
        "@src/"       : new URL("./src/",             import.meta.url).pathname,
        "@app/"       : new URL("./src/app/",         import.meta.url).pathname,
        "@components/": new URL("./src/components/",  import.meta.url).pathname,
        "@contexts/"  : new URL("./src/contexts/",    import.meta.url).pathname,
        "@hooks/"     : new URL("./src/hooks/",       import.meta.url).pathname,
        "@lib/"       : new URL("./src/lib/",         import.meta.url).pathname,
        "@utils/"     : new URL("./src/utils/",       import.meta.url).pathname,
    }
  }
});