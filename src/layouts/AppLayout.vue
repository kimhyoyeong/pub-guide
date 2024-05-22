<!-- AppLayout.vue -->
<template>
  <div>
    <TopMenu />
      <div style="display: flex">
        <LeftMenu />
        <router-view style="border:2px solid #eee;width:100%;"/>
      </div>
  </div>
</template>

<script>
import TopMenu from "@/components/TopMenu.vue";
import LeftMenu from "@/components/LeftMenu.vue";

export default {
  components: { TopMenu, LeftMenu },
};
</script>
