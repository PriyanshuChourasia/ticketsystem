import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tsconfigPaths()],
  resolve:{
    alias:{
      "@": path.resolve(__dirname,"./src")
    },
  },
  server: {
    host: true,
    port: 8084,
    strictPort: true,
    open: false,
    origin: "http://localhost::8084",
  },
});
