import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/shuffle/" : "/",
  publicDir: "public",
  server: {
    port: 5173,
    open: true
  }
}));
