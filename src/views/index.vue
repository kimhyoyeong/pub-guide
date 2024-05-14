<template>
  <div class="q-pa-md items-start">
    <q-card flat bordered class="my-card q-mt-md q-pa-md">
      <div class="column items-center">
        <img src="@/assets/signon.svg" alt="CONCENTRIX" style="width: 300px" />
        <div class="text-h5 q-pb-md">콘센트릭스 웹접근성 가이드</div>
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const sideMenuItems = [
  { label: "용어 정의", id: "index1" },
  { label: "인증 프로세스", id: "index2" },
  { label: "자가진단 도구", id: "index3" },
];

store.commit("setSideMenuItems", sideMenuItems);
</script>
