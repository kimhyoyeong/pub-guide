<template>
  <div class="q-pa-md items-start">
    <q-card id="page1-1" flat bordered class="my-card q-mt-md">
      <q-card-section>
        <h3 class="text-h6 q-mb-none">1) alt 제공</h3>
      </q-card-section>

      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="16 / 9" fit="contain">
        <div class="absolute-top bg-primary">준수 사례</div>
      </q-img>

      <q-card-section> alt에는 적절한 대체 텍스트를 제공한다. </q-card-section>
    </q-card>

    <q-card id="page1-2" flat bordered class="my-card q-mt-md">
      <q-card-section>
        <h3 class="text-h6 q-mb-none">2) IR 기법</h3>
      </q-card-section>
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="16 / 9" fit="contain">
        <div class="absolute-top bg-negative">오류 사례</div>
      </q-img>
      <q-card-section
        >특수문자, 기호 포함, 조직도, 차트 등 복잡한 콘텐츠의 경우 숨김 처리로
        대체 텍스트를 제공한다.
      </q-card-section>
    </q-card>

    <q-card id="page1-3" flat bordered class="my-card q-mt-md">
      <q-card-section>
        <h3 class="text-h6 q-mb-none">3) IR 기법</h3>
      </q-card-section>
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="16 / 9" fit="contain">
        <div class="absolute-top ">오류 사례</div>
      </q-img>
      <q-card-section
        >특수문자, 기호 포함, 조직도, 차트 등 복잡한 콘텐츠의 경우 숨김 처리로
        대체 텍스트를 제공한다.
      </q-card-section>
    </q-card>

    <q-card id="page1-4" flat bordered class="my-card q-mt-md">
      <q-card-section>
        <h3 class="text-h6 q-mb-none">4) IR 기법</h3>
      </q-card-section>
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="16 / 9" fit="contain">
        <div class="absolute-top ">오류 사례</div>
      </q-img>
      <q-card-section
        >특수문자, 기호 포함, 조직도, 차트 등 복잡한 콘텐츠의 경우 숨김 처리로
        대체 텍스트를 제공한다.
      </q-card-section>
    </q-card>

    <q-card id="page1-5" flat bordered class="my-card q-mt-md">
      <q-card-section>
        <h3 class="text-h6 q-mb-none">5) IR 기법</h3>
      </q-card-section>
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="16 / 9" fit="contain">
        <div class="absolute-top ">오류 사례</div>
      </q-img>
      <q-card-section
        >특수문자, 기호 포함, 조직도, 차트 등 복잡한 콘텐츠의 경우 숨김 처리로
        대체 텍스트를 제공한다.
      </q-card-section>
    </q-card>

    <q-card id="page1-6" flat bordered class="my-card q-mt-md">
      <q-card-section>
        <h3 class="text-h6 q-mb-none">6) IR 기법</h3>
      </q-card-section>
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="16 / 9" fit="contain">
        <div class="absolute-top ">오류 사례</div>
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

const sideMenuItems="";

store.commit("setSideMenuItems", sideMenuItems);
</script>
