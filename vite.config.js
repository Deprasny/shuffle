import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/shuffle/" : "/",
  publicDir: "public",
  server: {
    port: 5173,
    open: true
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./public")
    }
  },
  build: {
    assetsInclude: ["**/*.ttf"]
  }
}));
