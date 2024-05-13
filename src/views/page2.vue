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

    <q-card id="page2-2" flat bordered class="my-card q-mt-md">
      <q-card-section>
        <h3 class="text-h6 q-mb-none">2-2) IR 기법</h3>
      </q-card-section>
      <q-img src="images/@test.png" :ratio="16 / 9" fit="contain">
        <div class="absolute-top bg-negative">오류 사례</div>
      </q-img>
      <q-card-section
        >특수문자, 기호 포함, 조직도, 차트 등 복잡한 콘텐츠의 경우 숨김 처리로
        대체 텍스트를 제공한다.
      </q-card-section>
    </q-card>
  </div>
</template>


<script setup>
import { useStore } from "vuex";

const store = useStore();

const sideMenuItems = [
      { label: "8.키보드 사용 보장", id: "page2-1" },
      { label: "9.초점 이동", id: "page2-2" },
      { label: "10.조작 가능", id: "page2-3" },
      { label: "11.응답 시간 조절", id: "page2-4" },
      { label: "12.정지 기능 제공", id: "page2-5" },
    ];

store.commit("setSideMenuItems", sideMenuItems);
</script>
