import { reactive } from "vue";

export const topMenuItems = [
  {
    name: "index",
    path: "/",
    children: [
      { name: "index Item 1", path: "/index/item1" },
      { name: "index Item 2", path: "/index/item2" },
    ],
  },
  {
    name: "About",
    path: "/about/item1",
    children: [
      { name: "about Item 1", path: "/about/item1" },
      { name: "about Item 2", path: "/about/item2" },
    ],
  },
  {
    name: "Dashboard",
    path: "/dashboard/item1",
    children: [
      { name: "Dashboard Item 1", path: "/dashboard/item1" },
      { name: "Dashboard Item 2", path: "/dashboard/item2" },
    ],
  },
  {
    name: "Profile",
    path: "/profile/item1",
    children: [
      { name: "Profile Item 1", path: "/profile/item1" },
      { name: "Profile Item 2", path: "/profile/item2" },
    ],
  },
];

const state = reactive({
  selectedTopMenu: null,
  topMenuItems: topMenuItems,
});

const selectTopMenu = (menu) => {
  state.selectedTopMenu = menu;
};

export default {
  state,
  selectTopMenu,
};
