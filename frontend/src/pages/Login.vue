<template>
  <div class="page-header clear-filter" filter-color="black">
    <div
      class="page-header-image"
      style="background-image: url('img/login.jpg')"
    ></div>
    <div class="container">
      <div class="col-md-5 ml-auto mr-auto">
        <card type="login" plain>
          <template slot="header">
            <h3 class="card-title title-up">Login</h3>
            <div class="social-line">
              <a
                href="#pablo"
                class="btn btn-neutral btn-facebook btn-icon btn-round"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
              <a
                href="#pablo"
                class="btn btn-neutral btn-google btn-icon btn-lg btn-round"
              >
                <i class="fab fa-google-plus"></i>
              </a>
              <a
                href="#pablo"
                class="btn btn-neutral btn-twitter btn-icon btn-round"
              >
                <i class="fab fa-twitter"></i>
                </a>
            </div>
          </template>

          <fg-input
            class="no-border"
            type="text"
            placeholder="Username..."
            addon-left-icon="now-ui-icons users_circle-08"
            v-model="username"
          >
          </fg-input>

          <fg-input
            class="no-border"
            type="password"
            placeholder="Password..."
            addon-left-icon="now-ui-icons ui-1_lock-circle-open"
            v-model="password"
          >
          </fg-input>

          <div class="card-footer text-center">
            <a
              @click="login"
              class="btn btn-primary btn-round btn-lg btn-block"
              >Login</a
            >
          </div>

          <div class="pull-left">
            <router-link to="/fpassword" class="link">
              Forget Password?
            </router-link>
          </div>
          <div class="pull-right">
            <router-link to="/signup" class="link">
              Create account?
            </router-link>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "../components/Card.vue";
import Button from "../components/Button.vue";
import FormGroupInput from "../components/formGroupInput.vue";
import axios from "axios";

export default {
  name: "login-page",
  bodyClass: "login-page",
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
   data() {
    return {
      username: "",
      password: "",
    };
  },
  methods:{
    login(){
       axios
        .post("http://localhost:5000/api/users/login", {
          username:this.username,
          password:this.password
        })
        .then((res) => {
          console.log("axios", res);
        }).catch(() =>{
          alert('Wrong password or username')
        })
    }
  }
};
</script>
<style>
.container {
  background-color: transparent;
}
</style>
