import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/frosty-paper/",
  build: {
    rollupOptions: {
      external: [], // Leave empty or specify dependencies you truly want externalized
    },
  },
});
