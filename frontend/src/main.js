import app from "./App.vue";
import Vue from "vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import "material-icons/iconfont/material-icons.css";
import VueRouter from "vue-router";
import Profile from "./components/Profile.vue";
import Home from "./components/Home.vue";
import LoginSM from "./components/LoginSM.vue";
import ResetPassword from "./components/ResetPassword";

Vue.use(VueRouter);

const routes = [
  { path: "/profile", component: Profile },
  { path: "/", component: Home },
  { path: "/login", component: LoginSM },
  { path: "/hello", component: ResetPassword },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.use(Vuesax);
new Vue({
  router,
  render: (h) => h(app),
}).$mount("#app");
