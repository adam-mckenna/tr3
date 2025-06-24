import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";
import path from "path";

type GenerateSitemapArgs = {
  VITE_CONTENTFUL_SPACE_ID: string;
  VITE_CONTENTFUL_ACCESS_TOKEN: string;
};

const generateSitemap = async ({
  VITE_CONTENTFUL_SPACE_ID,
  VITE_CONTENTFUL_ACCESS_TOKEN,
}: GenerateSitemapArgs) => {
  try {
    const { createClient } = await import("contentful");

    const client = createClient({
      space: VITE_CONTENTFUL_SPACE_ID!,
      accessToken: VITE_CONTENTFUL_ACCESS_TOKEN!,
    });

    const response = await client.getEntries({
      content_type: "article",
    });

    const staticRoutes = ["/", "/about"];
    const articleRoutes = response.items.map(
      ({ fields }) => `/articles/${(fields as { slug: string }).slug}`,
    );
    const allRoutes = [...staticRoutes, ...articleRoutes];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>https://adamcantrun.com${route}</loc>
    <changefreq>${route === "/" ? "daily" : "weekly"}</changefreq>
    <priority>${route === "/" ? "1.0" : "0.7"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

    const robotsTxt = `User-agent: *
Allow: /

# Sitemap location
Sitemap: https://adamcantrun.com/sitemap.xml
`;

    const outDir = path.join(process.cwd(), "dist");
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap);
    fs.writeFileSync(path.join(outDir, "robots.txt"), robotsTxt);

    console.log(`✅ Sitemap generated`);
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);

    // Fallback to static routes only
    const staticRoutes = ["/", "/about"];
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map(
    (route) => `  <url>
    <loc>https://adamcantrun.com${route}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

    const outDir = path.join(process.cwd(), "dist");
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap);
  }
};

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "generate-sitemap",
        closeBundle: () => generateSitemap(process.env as GenerateSitemapArgs),
      },
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
};
