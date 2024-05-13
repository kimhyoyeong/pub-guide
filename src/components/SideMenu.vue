<template>
  <q-drawer show-if-above bordered class="bg-grey-1" :width="240">
    <q-scroll-area class="fit">
      <q-list padding>
        <q-item v-for="(item, index) in props.menuItems" :key="index">
          <q-item-section>
            <button
              type="button"
              @click.prevent="scrollToMenuItem(item, index)"
              class="q-item__btn"
              :class="{ active: index === props.activeIndex }"
            >
              {{ item.label }}
            </button>
          </q-item-section>
        </q-item>

        <q-separator class="q-mt-md q-mb-xs" />

        <q-item class="justify-center">
          <q-avatar>
            <img src="@/assets/signon.svg" alt="CONCENTRIX" />
          </q-avatar>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  menuItems: {
    type: Array,
    required: true,
  },
  activeIndex: {
    type: Number,
    required: true,
  },
});

function scrollToMenuItem(item, index) {
  const element = document.getElementById(item.id);
  const header = document.querySelector(".q-header");
  if (element) {
    window.scrollTo({
      top: element.offsetTop - header.offsetHeight,
      behavior: "smooth",
    });

    router.push({ query: { activeIndex: index } });
  }
}
</script>

<script>
import { defineProps } from "vue";

export default {
  name: "SideMenu",
};
</script>
