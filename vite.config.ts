import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tsconfigPaths()],
  server: {
    host: true,
    port: 8084,
    strictPort: true,
    open: false,
    origin: "http://localhost::8084",
  },
});
