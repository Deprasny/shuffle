import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/shuffle/" : "/",
  publicDir: "public",
  server: {
    port: 5173,
    open: true
  }
});
