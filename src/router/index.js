import { createRouter, createWebHistory } from "vue-router";
import About from "../views/AboutView.vue";
import AlgoVisualizer from '../views/AlgoVisualizer.vue';
import LandingPage from "../views/LandingHomePage.vue";
import quizPage from '../views/quizPage.vue'
import countingPage from '../views/countingPage.vue'
import complexityPage from '../views/complexityPage.vue'
import iterationPage from '../views/iterationPage.vue'
import videosPage from '../views/videosView.vue'

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
    component: quizPage,
  },
  {
    path: '/counting',
    name: 'Counting',
    component: countingPage,
  },
  {
    path: '/complexity',
    name: 'Complexity',
    component: complexityPage,
  },
  {
    path: '/iteration',
    name: 'Iteration',
    component: iterationPage,
  },
  {
    path: '/videos',
    name: 'Videos',
    component: videosPage,
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
