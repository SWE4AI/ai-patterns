import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/ai-patterns/" : "/",
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: '',
  rollupOptions: {
    output: {
      entryFileNames: `assets/ai-patterns/[name].js`,
      chunkFileNames: `assets/ai-patterns/[name].js`,
      assetFileNames: `assets/ai-patterns/[name].[ext]`
    }
  }
});
