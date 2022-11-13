import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App).use(router).mount("#app");
