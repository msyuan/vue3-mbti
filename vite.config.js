/*
 * @Description: Description
 * @Author: laoyuan
 * @Date: 2024-05-26 16:47:47
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 本地服务配置
  server: {
    // 默认启用并允许任何源
    // cors: true,
    // 在服务器启动时是否自动在浏览器中打开应用程序
    // open: true,
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
