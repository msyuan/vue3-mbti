/*
 * @Description: Description
 * @Author: laoyuan
 * @Date: 2024-05-26 16:47:47
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), "") || {};
  console.log("================================", env.VITE_BASE_PATH);
  return {
    base: env.VITE_BASE_PATH,
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
  };
});
