import { createApp } from "vue";
import { Quasar } from "quasar";
import router from "./router";
import App from "./App.vue";
import store from "@/store/store.js";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.css";
import { VCodeBlock } from '@wdns/vue-code-block';

createApp(App)
  .use(Quasar, {
    plugins: {},
  })
  .component('VCodeBlock', VCodeBlock)
  .use(store)
  .use(router)
  .mount("#app");
