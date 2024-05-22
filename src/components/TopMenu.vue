<!-- TopMenu.vue -->
<template>
  <div class="top-menu">
    <router-link
      v-for="(item, index) in state.topMenuItems"
      :key="index"
      :to="item.path"
      @click="selectTopMenu(item)"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<script setup>
import menuStore from '@/store/menuStore';
const { state, selectTopMenu } = menuStore;
</script>

<script>
export default {
  name: "TopMenu",
};
</script>

<style>
.top-menu a {
  display: inline-block;
  padding: 20px;
  color: #00f;
}
</style>
