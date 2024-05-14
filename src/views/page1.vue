<template>
  <div class="q-pa-md items-start">
    <!-- 작업 충돌 방지:작업완료 후 현페이지에 옮길 예정  -->
    <Content1 />
    <Content2 />
    <Content3 />
    <Content4 />
    <Content5 />
    <Content6 />
  </div>
</template>

<script setup>
/* 작업 충돌 방지:작업완료 후 현페이지에 옮길 예정 */
import Content1 from "@/views/page1/content1.vue";
import Content2 from "@/views/page1/content2.vue";
import Content3 from "@/views/page1/content3.vue";
import Content4 from "@/views/page1/content4.vue";
import Content5 from "@/views/page1/content5.vue";
import Content6 from "@/views/page1/content6.vue";
/* //작업 충돌 방지 */
import { useStore } from "vuex";

const store = useStore();

const sideMenuItems = [
  { label: "대체 텍스트", id: "content1" },
  { label: "멀티미디어 대체 수단", id: "content2" },
  { label: "적응성", id: "content3" },
  { label: "명료성", id: "content4" },
];

store.commit("setSideMenuItems", sideMenuItems);
</script>
