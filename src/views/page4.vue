<template>
  <div class="q-pa-md items-start">
    <!-- title-link -->
    <h2 id="content1" class="text-h5 q-py-lg q-mb-none">1. 문법 준수</h2>
    <!-- //title-link -->
    <!-- card -->
    <q-card flat bordered class="my-card q-mb-lg">
      <q-card-section>
        <h3 class="text-h6">1-1. 마크업 오류 방지</h3>
        <div class="absolute-right q-pa-xs">
          <q-chip dense color="dark" text-color="white"
            ><q-icon name="done" />퍼블</q-chip
          >
        </div>
        <div class="text-subtitle q-mt-sm">
          마크업 언어의 요소는 열고 닫음, 중첩 관계및 속성 선언에 오류가 없어야 한다.
        </div>
      </q-card-section>
      <q-separator />
      <q-img
        src="images/@test.png"
        :ratio="16 / 9"
        fit="contain"
        class="bg-grey-2"
      >
        <div class="absolute-top">준수 사례</div>
      </q-img>
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
  { label: "문법 준수", id: "content1" },
  { label: "웹 애플리케이션 접근성", id: "content2" },
];

store.commit("setSideMenuItems", sideMenuItems);
</script>
