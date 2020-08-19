import app from "./App.vue";
import Vue from "vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import "material-icons/iconfont/material-icons.css";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// import Profile from "./components/Profile.vue";
// import Home from "./components/Home.vue";
// import LoginSM from "./components/LoginSM.vue";
Vue.component( MenuIcon);
Vue.use(VueMaterial);
Vue.use(Vuesax, {});
Vue.use(VueRouter);

// const routes = [
//   { path: "/profile", component: Profile },
//   { path: "/", component: Home },
//   { path: "/login", component: LoginSM },
// ];

// const router = new VueRouter({
//   routes,
//   mode: "history",
// });

new Vue({
  // router,
  render: (h) => h(app),
}).$mount("#app");
