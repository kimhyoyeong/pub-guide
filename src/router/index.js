import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/index.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/page1",
    name: "page1",
    component: () => import("@/views/page1.vue"),
  },
  {
    path: "/page2",
    name: "page2",
    component: () => import("@/views/page2.vue"),
  },
  {
    path: "/page3",
    name: "page3",
    component: () => import("@/views/page3.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
