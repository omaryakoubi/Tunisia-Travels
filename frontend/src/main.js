import app from "./App.vue";
import Vue from "vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";

// import "material-icons/iconfont/material-icons.css";
Vue.use(Vuesax, {});
new Vue({
  render: (h) => h(app),
}).$mount("#app");