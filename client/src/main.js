import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router.js'
import Vuetify from "vuetify"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import "vuetify/dist/vuetify.min.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "material-design-icons-iconfont/dist/material-design-icons.css"
import Vuesax from 'vuesax'
import App from './App.vue'
import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax)
Vue.use(BootstrapVue)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  vuetify: new Vuetify(),
  icons: {
    iconfont: "md" || "fa",
  },
}).$mount('#app')
