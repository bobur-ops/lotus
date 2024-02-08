import "./assets/main.css";
//
import "./vendor/jquery/jquery.min.js";

import "./assets/js/custom.js";
import "./assets/js/owl.js";
import "./assets/js/slick.js";
import "./assets/js/accordions.js";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.mount("#app");
