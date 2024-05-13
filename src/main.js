import { createApp } from "vue";
import { Quasar } from "quasar";
import router from "./router";
import App from "./App.vue";
import store from "@/store/store.js";
import "@quasar/extras/material-icons/material-icons.css";

import "quasar/dist/quasar.css";

createApp(App)
  .use(Quasar, {
    plugins: {},
  })
  .use(store) // Vuex store 등록
  .use(router) // 라우터 등록
  .mount("#app");
