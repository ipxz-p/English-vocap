import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import router from "./router";
import "./assets/global.css";
import "./assets/style.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import VueCookies from "vue-cookies";
import * as labs from "vuetify/labs/components";

const vuetify = createVuetify({
  cons: {
    defaultSet: "mdi",
  },
  components: {
    ...labs,
  },
  directives,
});

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App)
.use(VueSweetalert2)
.use(VueCookies)
  .use(vuetify)
  .use(router)
  .use(store)
  .mount("#app");
