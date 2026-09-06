import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" keeps all asset URLs relative so the built app can be bundled
// into a single HTML file and served from any path inside the sandboxed preview.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
