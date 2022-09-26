import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TrendingView from "../views/TrendingView.vue";
import GenerosView from "../views/GenerosView.vue";
import AutoresView from "../views/AutoresView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/emalta",
      name: "trending",
      component: TrendingView,
    },
    {
      path: "/generos",
      name: "generos",
      component: GenerosView,
    },
    {
      path: "/autores",
      name: "autores",
      component: AutoresView,
    },
  ],
});

export default router;
