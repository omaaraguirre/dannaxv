import tailwind from "@astrojs/tailwind"
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import path from "node:path"

const folderName = path.basename(process.cwd());
const mode = process.env.NODE_ENV;
const base = mode === "production" ? `/${folderName}/` : "/";

// https://astro.build/config
export default defineConfig({
  base,
  mode,
  envDir: "../",
  publicDir: "./public",
  build: {
    outDir: "../dist",
    assetsDir: "./"
  },
  integrations: [icon(), tailwind()],
  server: {
    host: true,
    port: 80
  }
});
