import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import { BootstrapVue } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.use(Vuetify);
new Vue({
  render: (h) => h(App),
  vuetify: new Vuetify(),
  icons: {
    iconfont: "md" || "fa",
  },
}).$mount("#app");
