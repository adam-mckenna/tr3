import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { VitePluginSitemap } from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    VitePluginSitemap({
      hostname: 'https://adamcantrun.com',
      dynamicRoutes: ['/about', '/'],
      exclude: ['/404'],
    })
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
