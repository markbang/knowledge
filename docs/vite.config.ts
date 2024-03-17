//vite.config.ts
import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";
import flexSearchIndexOptions from "flexsearch";
//default options
const options = {
  ...flexSearchIndexOptions,
  previewLength: 50, //搜索结果预览长度
  buttonLabel: "搜索",
  placeholder: "请输入关键词",
};

export default defineConfig({
  plugins: [SearchPlugin(options)],
});