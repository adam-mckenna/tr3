// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.adamcantrun.com",
  integrations: [
    mdx(),
    sitemap(),
    react({
      include: ["**/react/*"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
