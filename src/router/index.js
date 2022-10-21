import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import AlgoVisualizer from '../views/AlgoVisualizer.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/algovisualizer",
    name: "AlgoVisualizer",
    component: AlgoVisualizer,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
