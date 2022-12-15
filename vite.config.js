import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import fg from "fast-glob";
import CustomHmr from "./hmr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), CustomHmr()],
  server: {
    port: 3000,
  },
});
