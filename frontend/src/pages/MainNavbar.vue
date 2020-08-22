<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">Tunisia Travels</router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">Designed In RBK</div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <drop-down tag="li" title="Hit Me" icon="now-ui-icons travel_istanbul" class="nav-item">
        <nav-link to="/landing">
          <i class="now-ui-icons education_paper"></i> Become a Host
        </nav-link>
        <nav-link to="/login">
          <i class="now-ui-icons users_circle-08"></i> Login
        </nav-link>
        <nav-link to="/signup">
          <i class="now-ui-icons users_single-02"></i> SignUp
        </nav-link>
      </drop-down>
      <drop-down tag="li" title icon="now-ui-icons location_world" class="nav-item">
        <nav-link to="/landing">
          <i class="now-ui-icons education_paper"></i> Currency
        </nav-link>
        <nav-link to="/login">
          <i class="now-ui-icons users_circle-08"></i> Languages
        </nav-link>
      </drop-down>
    </template>
  </navbar>
</template>

<script>
import DropDown from "../components/Dropdown";
import Navbar from "../components/Navbar";
import NavLink from "../components/NavLink";
import { Popover } from "element-ui";

export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover,
  },
};
</script>

<style scoped></style>
