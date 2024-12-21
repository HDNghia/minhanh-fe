import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure the base path matches your deployment settings
  build: {
    outDir: "dist", // Ensure this matches your deployment tool
  },
  server: {
    host: true, // Allow external access for testing
  },
});
