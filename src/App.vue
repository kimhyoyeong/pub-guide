<template>
  <q-layout view="hHh lpR lFf" class="inner-wrap">
    <q-header bordered class="text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title
          ><router-link to="/">웹접근성 가이드 v1</router-link></q-toolbar-title
        >
      </q-toolbar>

      <!-- 페이지 탭 -->
      <q-tabs align="left">
        <q-route-tab
          v-for="page in pages"
          :key="page.path"
          :to="page.path"
          :label="page.label"
          @click="pageScrollTop"
        />
      </q-tabs>
    </q-header>

    <!-- SideMenu 컴포넌트에 현재 페이지 정보 전달 -->
    <SideMenu
      v-model="isDrawerOpen"
      :menuItems="filteredMenuItems"
      :activeIndex="activeIndex"
    />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { computed, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import SideMenu from "@/components/SideMenu.vue";
const router = useRouter();
const store = useStore();

// 전체 페이지 및 메뉴 아이템
const pages = computed(() => store.state.pages);
const activeIndex = computed(() => store.state.activeIndex);
const isDrawerOpen = computed(() => store.state.leftDrawerOpen);

// 페이지 라우터의 쿼리 파라미터에서 activeIndex 값을 감시하고, 변경 사항을 반영하는 watch 함수
watch(
  // 감시할 대상: router의 currentRoute 객체에서 query의 activeIndex 값
  () => router.currentRoute.value.query.activeIndex,
  // 감시 대상이 변경될 때 호출되는 콜백 함수
  (queryActiveIndex) => {
    // Vuex store를 업데이트하는 mutation 호출
    store.commit(
      // Vuex store의 setActiveIndex mutation 호출
      "setActiveIndex",
      // 페이지 라우터의 queryActiveIndex 값이 존재하면 정수로 변환하여 전달, 그렇지 않으면 기본값 0 전달
      queryActiveIndex ? parseInt(queryActiveIndex) : 0
    );
  }
);

// 현재 페이지에 해당하는 메뉴 아이템들을 반환하는 computed 속성
const filteredMenuItems = computed(() => {
  // 현재 페이지의 정보를 가져옵니다.
  const currentPageItem = pages.value.find(
    // 현재 라우터 경로와 일치하는 페이지를 찾음
    (item) => item.path === router.currentRoute.value.path
  );
  // 만약 현재 페이지의 정보가 존재한다면 해당 페이지의 sideMenuItems를 반환하고, 그렇지 않으면 빈 배열을 반환
  return currentPageItem?.sideMenuItems || [];
});

// 사이드 메뉴 열기/닫기 토글 함수
function toggleLeftDrawer() {
  store.commit("toggleLeftDrawer");
}

//탭 메뉴 변경시 상단으로 스크롤
function pageScrollTop() {
  window.scrollTo(0, 0);
}
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");
$color: #003d5b;
a {
  text-underline-position: under;
}
.q-layout {
  font-family: "Noto Sans KR", sans-serif;
  .q-drawer {
    a,
    button {
      display: block;
      color: $color;
    }
    button {
      background: none;
      border: none;
      cursor: pointer;
    }
  }
  .q-toolbar__title {
    padding-left: 0;
    a {
      display: block;
      color: #fff;
      text-decoration: none;
    }
  }
  .q-header {
    background: $color;
    .q-btn {
      margin-right: 12px;
    }
  }
  .q-avatar {
    width: 100px;
  }
  .q-item__label {
    color: $color;
  }
  .q-item__btn {
    display: block;
    width: 100%;
    text-align: left;
    &.active {
      font-weight: 700;
    }
  }
  [class^="text-"] {
    font-weight: 500;
    line-height: 1.45;
    &:first-child {
      margin-top: 0;
    }
  }
  .text-h2 {
    font-size: 22px;
    color: $color;
  }
  .text-h3 {
    font-size: 20px;
    font-weight: 700;
  }
  .text-h4 {
    font-size: 18px;
  }
}
.q-page-container {
  max-width: 1240px;
  height: 100vh;
  margin: 0 auto;
}
.q-splitter {
  height: 100%;
}
aside.q-drawer {
  position: fixed;
}

body.q-body--prevent-scroll {
  position: relative !important;
}
</style>
