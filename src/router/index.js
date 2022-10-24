import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GenerosView from "../views/GenerosView.vue";
import FilmesView from "../views/FilmesView.vue";
import DetalhesView from "../views/DetalhesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/generos",
      name: "generos",
      component: GenerosView,
      props: true,
    },
    {
      path: "/filmes/:id",
      name: "filmes",
      component: FilmesView,
      props: true,
    },
    {
      path: "/detalhes/:id",
      name: "detalhes",
      component: DetalhesView,
      props: true,
    },
  ],
});

export default router;
