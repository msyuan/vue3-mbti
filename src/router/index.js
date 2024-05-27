/*
 * @Description: 路由列表
 * @Author: laoyuan
 * @Date: 2024-05-26 16:47:47
 */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home.vue";
// const Result = () => import("../views/result.vue");
// const Text = () => import("../views/text.vue");
import Result from "../views/result.vue";
import Text from "../views/text.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/result",
      name: "result",
      component: Result,
    },
    {
      path: "/text",
      name: "text",
      component: Text,
    },
  ],
});

export default router;
