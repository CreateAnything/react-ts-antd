import react from "@vitejs/plugin-react";
import path from "path";
import {defineConfig} from "vite";
import eslint from "vite-plugin-eslint";
import createStyleImportPlugin, {AntdResolve} from "vite-plugin-style-import";
export default defineConfig({
  plugins: [
    react(),
    eslint({
      //配置eslint检测文件
      include: ["src/*.tsx", "src/*.ts", "src/**/*.ts", "src/**/*.tsx"],
      exclude: ["node_modules"],
      cache: false,
    }) as Plugin,
    createStyleImportPlugin({
      //按需加载antd样式
      resolves: [AntdResolve()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
