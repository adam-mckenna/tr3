// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

const isProd = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  site: isProd ? "https://www.adamcantrun.com" : "http://localhost:4321",
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
