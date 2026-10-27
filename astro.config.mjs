import { defineConfig } from "astro/config";

// Served by GitHub Pages as a project site, so every URL sits under /landing.
// ponytail: drop `base` and change `site` when a custom domain points here.
export default defineConfig({
  site: "https://ravefort.github.io",
  base: "/landing",
});
