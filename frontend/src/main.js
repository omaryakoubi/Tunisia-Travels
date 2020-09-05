import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import Vuesax from "vuesax";
import "material-icons/iconfont/material-icons.css";
import VueRouter from "vue-router";
import VueGeolocation from "vue-browser-geolocation";
import VueAxios from "vue-axios";
import "vuesax/dist/vuesax.css";
import router from "./router";
import NowUiKit from "./plugins/now-ui-kit";
import * as VueGoogleMaps from "vue2-google-maps";
import Vuetify from "vuetify";
import VueToast from "vue-toast-notification";

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueToast);
Vue.use(NowUiKit);
Vue.use(VueAxios, axios);
Vue.use(Vuesax);
Vue.use(VueGeolocation);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyA5B4dM3gNQRexvjz3ge2mGewwYBWMOJo0",
    libraries: "places",
  },
  installComponents: true,
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
