import { sidebar } from "vuepress-theme-hope";
import  spring  from "./sidebars/spring.js";
import  redis  from "./sidebars/redis.js";

export default sidebar({
  "/":[""],
  "/spring/":spring,
  "/redis/":redis,
});
