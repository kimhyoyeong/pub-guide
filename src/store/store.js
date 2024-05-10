import { createStore } from "vuex";
import { useRoute } from 'vue-router';

// 현재 경로를 가져옵니다.
const route = useRoute();

const store = createStore({
  state() {
    return {
      // 사이드 메뉴 여닫는 플래그
      leftDrawerOpen: true,
      // 활성 페이지의 인덱스
      activeIndex: 0,
      // 페이지 객체의 배열
      pages: [
        {
          path: "/",
          label: "소개",
          sideMenuItems: [], // 사이드 메뉴 각 페이지에서 불러옴
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
      ],
    };
  },
  mutations: {
    // 사이드 메뉴 열기/닫기 토글 함수
    toggleLeftDrawer(state) {
      state.leftDrawerOpen = !state.leftDrawerOpen;
    },
    // 사이드 메뉴 클릭시 active
    setActiveIndex(state, index) {
      state.activeIndex = index;
    },
    // 현재 페이지 맞는 좌측 메뉴를 설정
    setSideMenuItems(state, sideMenuItems) {
      //현재 경로에 해당하는 페이지를 찾음
      const currentPage = state.pages.find(
        (page) => page.path === window.location.pathname
      );

     // console.log(currentPage)
      //사이드 메뉴 업데이트
      if (currentPage) {
        currentPage.sideMenuItems = sideMenuItems;
      }
      console.log(state.pages, window.location.pathname);

     // console.log(currentPage)

    },
  },
  actions: {
    // 쿼리 매개변수에 기반하여 활성 인덱스를 설정하는 액션
    setQueryActiveIndex({ commit }, queryActiveIndex) {
      // 쿼리 매개변수를 정수로 파싱
      const index = queryActiveIndex ? parseInt(queryActiveIndex) : 0;
      // 파싱된 인덱스로 setActiveIndex 뮤테이션을 호출
      commit("setActiveIndex", index);
    },
  },
});

export default store;
