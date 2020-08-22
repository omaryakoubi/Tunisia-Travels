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
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from "./router";
import NowUiKit from "./plugins/now-ui-kit";

Vue.config.productionTip = false;

Vue.use(NowUiKit);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
