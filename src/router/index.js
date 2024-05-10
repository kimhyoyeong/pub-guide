import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/index.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    props: parseActiveIndex,
  },
  {
    path: "/page1",
    name: "page1",
    component: () => import("@/views/page1.vue"),
    props: parseActiveIndex,
  },
  {
    path: "/page2",
    name: "page2",
    component: () => import("@/views/page2.vue"),
    props: parseActiveIndex,
  },
  {
    path: "/page3",
    name: "page3",
    component: () => import("@/views/page3.vue"),
    props: parseActiveIndex,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//주소 표시줄에서 activeIndex 값을 읽어와서 페이지에 전달
function parseActiveIndex(route) {
  return { activeIndex: parseInt(route.query.activeIndex) || 0 };
}

export default router;
