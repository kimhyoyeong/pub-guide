<template>
  <div class="q-pa-md items-start">
    <!-- title-link -->
    <h2 id="content1" class="text-h5 q-py-lg q-mb-none">1. 가독성</h2>
    <!-- //title-link -->
    <!-- card -->
    <q-card flat bordered class="my-card q-mb-lg">
      <q-card-section>
        <h3 class="text-h6">1-1. 기본 언어 표시</h3>
        <div class="absolute-right q-pa-xs">
          <q-chip dense color="dark" text-color="white"
            ><q-icon name="done" />퍼블</q-chip
          >
        </div>
        <div class="text-subtitle q-mt-sm">
          주로 사용하는 언어를 명시해야 한다.
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
  { label: "가독성", id: "content1" },
  { label: "예측 가능성", id: "content2" },
  { label: "입력 도움", id: "content3" },
];

store.commit("setSideMenuItems", sideMenuItems);
</script>
