import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({ hostname: "https://adamcantrun.com", generateRobotsTxt: true }),
  ],
  server: {
    host: "0.0.0.0",
    strictPort: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
    },
  },
});
