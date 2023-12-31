import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cesium from "vite-plugin-cesium";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cesium()],
  // server: {
  //   open: true,
  //   proxy: {
  //     "/api": {
  //       target: "http://119.29.18.111",
  //       // target: "http://192.168.0.11:8080",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },

  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
