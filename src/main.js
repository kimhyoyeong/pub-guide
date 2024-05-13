import { createApp } from "vue";
import { Quasar } from "quasar";
import router from "./router";
import App from "./App.vue";
import store from "@/store/store.js";
const app = createApp(App);
import "@quasar/extras/material-icons/material-icons.css";

import "quasar/dist/quasar.css";

app.use(Quasar, {
  plugins: {},
});
app.use(store);
app.use(router);
app.mount("#app");
