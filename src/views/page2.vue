<template>
  <div class="q-pa-md items-start">
    <!-- title-link -->
    <h2 id="content1" class="text-h5 q-py-lg q-mb-none">1. 입력 장치 접근성</h2>
    <!-- //title-link -->
   <!-- card -->
   <q-card flat bordered class="my-card q-mb-lg">
      <q-card-section>
        <h3 class="text-h6">1-1. 적절한 대체 텍스트 제공</h3>
        <div class="absolute-right q-pa-xs">
          <q-chip dense color="dark" text-color="white"
            ><q-icon name="done" />퍼블</q-chip
          >
        </div>
        <div class="text-subtitle q-mt-sm">
          텍스트 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를
          제공해야 한다.
        </div>
      </q-card-section>
      <q-separator />
      <div class="row">
        <div class="col">
          <q-img
            src="images/@test.png"
            :ratio="4 / 3"
            fit="contain"
            class="bg-grey-2"
          >
            <div class="absolute-top bg-negative">오류 사례</div>
          </q-img>
        </div>
        <div class="col">
          <q-img
            src="images/@test.png"
            :ratio="4 / 3"
            fit="contain"
            class="bg-grey-2"
          >
            <div class="absolute-top">준수 사례</div>
          </q-img>
        </div>
      </div>
      <q-separator />
      <q-card-section>
        <q-chip
          color="red"
          text-color="white"
          label="소스코드"
          class="q-mb-sm"
        />
        <VCodeBlock
          code="<a>텍스트</a>"
          highlightjs
          lang="html"
          theme="panda-syntax-light"
        />
        <q-chip
          color="primary"
          text-color="white"
          label="해결방안"
          class="q-mb-sm"
        />
        <VCodeBlock
          code='<a href="#">텍스트</a>'
          highlightjs
          lang="html"
          theme="panda-syntax-light"
        />
      </q-card-section>
    </q-card>
    <!-- //card -->
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const sideMenuItems = [
  { label: "입력 장치 접근성", id: "content1" },
  { label: "충분한 시간 제공", id: "content2" },
  { label: "광 과민성 발작 예방", id: "content3" },
  { label: "쉬운 내비게이션", id: "content4" },
  { label: "입력 방식", id: "content5" },
];

store.commit("setSideMenuItems", sideMenuItems);
</script>
