import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import terser from "@rollup/plugin-terser";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/test-of-vite/",
  plugins: [react(), visualizer(), terser()],
  build: {
    minify: true,
  },
});
