import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.sass";
import { createRouter, createWebHistory } from "vue-router";

import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.js";
// import { BModal, VBModal } from 'bootstrap-vue'

// import App from './App.vue'
import IntroSection from "./IntroPage.vue";
import ContactSection from "./ContactPage.vue";
import SkillSection from "./SkillPage.vue";

import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: "IntroSection", component: IntroSection },
    { path: "/skill", component: "SkillSection", component: SkillSection },
    {
      path: "/contact",
      component: "ContactSection",
      component: ContactSection,
    },
  ],
});

library.add(fas, far, fab)

createApp(App).use(bootstrap).use(router).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
