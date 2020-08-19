import app from "./App.vue";
import Vue from "vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import "material-icons/iconfont/material-icons.css";
import VideoBackground from "vue-responsive-video-background-player";
import { Plugin } from "vue-responsive-video-background-player";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import VueRouter from "vue-router";
import Profile from "./components/Profile/Profile.vue";
import Home from "./components/Home.vue";
import LoginSM from "./components/LoginSM.vue";

Vue.component("video-background", VideoBackground, MenuIcon);
Vue.use(VueMaterial);
Vue.use(Plugin);
Vue.use(Vuesax, {});
Vue.use(VueRouter);

const routes = [
  { path: "/profile", component: Profile },
  { path: "/", component: Home },
  { path: "/login", component: LoginSM },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(app),
}).$mount("#app");
