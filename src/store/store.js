import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      leftDrawerOpen: true,
      activeIndex: 0,
      currentPage: "/",
      pages: [
        {
          path: "/",
          label: "소개",
          sideMenuItems: [],
        },
        {
          path: "/page1",
          label: "인식의 용이성",
          sideMenuItems: [],
        },
        {
          path: "/page2",
          label: "운용의 용이성",
          sideMenuItems: [],
        },
        {
          path: "/page3",
          label: "이해의 용이성",
          sideMenuItems: [],
        },
        {
          path: "/page4",
          label: "견고성",
          sideMenuItems: [],
        },
      ],
    };
  },
  mutations: {
    toggleLeftDrawer(state) {
      state.leftDrawerOpen = !state.leftDrawerOpen;
    },
    setActiveIndex(state, index) {
      state.activeIndex = index;
    },
    setSideMenuItems(state, sideMenuItems) {
      const currentPage = state.pages.find(
        (page) => page.path === state.currentPage
      );
      if (currentPage) {
        currentPage.sideMenuItems = sideMenuItems;
      }
    },
    setCurrentPage(state, page){
      state.currentPage = page;
    }
  },
});

export default store;
