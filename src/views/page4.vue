<template>
  <div class="q-pa-md items-start">
    <q-card id="page2-1" flat bordered class="my-card q-mt-md">
      <q-card-section>
        <h3 class="text-h6 q-mb-none">2-1) alt 제공</h3>
      </q-card-section>

      <q-img src="images/@test.png" :ratio="16 / 9" fit="contain">
        <div class="absolute-top bg-primary">준수 사례</div>
      </q-img>

      <q-card-section> alt에는 적절한 대체 텍스트를 제공한다. </q-card-section>
    </q-card>
  </div>
</template>


<script setup>
import { useStore } from "vuex";

const store = useStore();

const sideMenuItems = [
      { label: "8.키보드 사용 보장", id: "page4-1" },
    ];

store.commit("setSideMenuItems", sideMenuItems);
</script>
