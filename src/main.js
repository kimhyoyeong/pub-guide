import { createApp } from "vue";
import { Quasar } from "quasar";
import router from "./router";
import App from "./App.vue";
import store from "@/store/store.js";
const app = createApp(App);
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/dist/quasar.css";

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});
app.use(store);
app.use(router);
app.mount("#app");
