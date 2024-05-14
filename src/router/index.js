import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/store.js";
import Index from "@/views/index.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
  ...store.state.pages.slice(1).map(page => ({
    path: page.path,
    name: page.label,
    component: () => import(`@/views${page.path}.vue`),
  }))
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
