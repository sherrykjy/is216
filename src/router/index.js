import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import AlgoVisualizer from '../views/AlgoVisualizer.vue';
import LandingPage from "../views/LandingHomePage.vue";
import quizPage from '../views/quizPage.vue'
const routes = [
  {
    path: "/",
    name: "home",
    component: LandingPage,
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
  },
  {
    path: "/quiz",
    name: "Quizzes",
    component: quizPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
