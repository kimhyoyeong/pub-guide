<template>
  <q-layout view="hHh lpR lFf" class="inner-wrap">
    <q-header bordered class="text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title
          ><router-link to="/">웹접근성 가이드 v1</router-link></q-toolbar-title
        >
      </q-toolbar>

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

    <SideMenu
      v-model="store.state.leftDrawerOpen"
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

const pages = computed(() => store.state.pages);
const activeIndex = computed(() => store.state.activeIndex);

watch(
  () => router.currentRoute.value.query.activeIndex,
  (queryActiveIndex) => {
    store.commit(
      "setActiveIndex",
      queryActiveIndex ? parseInt(queryActiveIndex) : 0
    );
  }
);

const filteredMenuItems = computed(() => {
  const currentPageItem = pages.value.find(
    (item) => item.path === router.currentRoute.value.path
  );
  store.commit("setCurrentPage", router.currentRoute.value.path);
  return currentPageItem?.sideMenuItems || [];
});

function toggleLeftDrawer() {
  store.commit("toggleLeftDrawer");
}

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
