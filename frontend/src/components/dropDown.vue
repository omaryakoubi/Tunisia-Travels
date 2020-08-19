<template>
  <form class="container mt-3">
    <md-menu md-size="medium" md-align-trigger>
      <span class="material-icons">menu</span>
      <md-button class="md-icon-button" md-menu-trigger>
        <md-avatar>
          <!-- <img src="../assets/images/ferrr.png" alt="Avatar" /> -->
        </md-avatar>
      </md-button>
      <md-menu-content :class="menuOpen ? 'block' : 'hidden'">
        <md-menu-item>
          <span>Login</span>
        </md-menu-item>
        <md-menu-item>
          <!-- <modal-register /> -->
          <span>SignUp</span>
        </md-menu-item>
        <md-menu-item>
          <span>Host your home</span>
        </md-menu-item>
      </md-menu-content>
    </md-menu>
  </form>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import login from "./loginModal.vue";
import signup from "./signupModal.vue";

export default {
  name: "dropDown",
  component: { login, signup },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  margin-left: 90%;
  max-width: 120px;
  padding: 5px;
  background-color: white;
  font-family: Helvetica;
  border-radius: 100px;
}
.container .material-icons {
  margin-top: 12%;
  padding-right: 15px;
}
</style>
