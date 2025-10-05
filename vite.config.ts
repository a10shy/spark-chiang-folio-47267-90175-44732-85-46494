import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", // ✅ Ensures correct routing on Render
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      "spark-chiang-folio-47267-90175-44732-85.onrender.com", "www.aloyise.com", "aloyise.com", // ✅ Add Render domain
    ],
  },
  preview: {
    port: 8080,
    host: true,
  },
}));
