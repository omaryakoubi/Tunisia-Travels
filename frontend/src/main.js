import app from "./App.vue";
import Vue from "vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import "material-icons/iconfont/material-icons.css";
import VueRouter from "vue-router";
// import Profile from "./components/Profile.vue";
// import Home from "./components/Home.vue";
import LoginSM from "./components/LoginSM.vue";
import ResetPassword from "./components/ResetPassword";
import App from "./App.vue";
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'vuesax/dist/vuesax.css'
import * as GmapVue from 'gmap-vue'
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from "./router";
import NowUiKit from "./plugins/now-ui-kit";

Vue.config.productionTip = false;

Vue.use(NowUiKit);
Vue.use(VueAxios, axios)
Vue.use(Vuesax)
Vue.use(GmapVue, {
  load: {
    key: 'AIzaSyA5B4dM3gNQRexvjz3ge2mGewwYBWMOJo0',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'gmap-vue/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then set installComponents to 'false'.
  //// If you want to automatically install all the components this property must be set to 'true':
  installComponents: true
})


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
