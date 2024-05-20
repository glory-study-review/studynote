import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/studynote/",

  lang: "zh-CN",
  title: "Glory学习笔记",
  description: "学习笔记文档汇总",

  theme,
  port:8081,
  markdown: {
    headers: {
      // 用到哪一级就提取哪一级
      level: [2, 3, 4,],
    },
  },
  

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
