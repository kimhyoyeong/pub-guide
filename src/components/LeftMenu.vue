<template>
  <div class="left-menu">
    <p>Selected Top Menu: {{ state.selectedTopMenu ? state.selectedTopMenu.name : 'None' }}</p>
    <ul v-if="state.selectedTopMenu && state.selectedTopMenu.children.length">
      <li v-for="child in state.selectedTopMenu.children" :key="child.path">
        <router-link :to="child.path">11{{ child.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import menuStore from '@/store/menuStore';
const { state } = menuStore;
</script>

<script>
export default {
  name: "LeftMenu",
};
</script>

<style>
.left-menu ul{list-style: none;padding-left:0;}
.left-menu a{display: block;;padding:10px;color:#f00}
</style>
