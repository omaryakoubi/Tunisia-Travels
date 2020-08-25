<template>
  <div
    class="section section-signup"
    style="background-image: url('img/login.jpg'); background-size: cover; min-height: 100vh;"
  >
    <div class="container">
      <div class="row">
        <card class="card-signup" header-classes="text-center" color="gray">
          <template slot="header">
            <h3 class="card-title title-up">SignUp</h3>
          </template>
          <template>
            <fg-input
              class="no-border"
              placeholder="Fullname . . ."
              type="text"
              addon-left-icon="now-ui-icons users_circle-08"
              v-model="name"
            >
            </fg-input>
            <fg-input
              class="no-border"
              placeholder="Username . . ."
              type="text"
              addon-left-icon="now-ui-icons users_circle-08"
              v-model="username"
            >
            </fg-input>

            <fg-input
              class="no-border"
              type="email"
              placeholder="Email..."
              addon-left-icon="now-ui-icons ui-1_email-85"
              v-model="email"
            >
            </fg-input>

            <fg-input
              class="no-border"
              type="password"
              placeholder="Password . . ."
              addon-left-icon="now-ui-icons ui-1_lock-circle-open"
              v-model="password"
            >
            </fg-input>
            <fg-input
              class="no-border"
              type="password"
              placeholder="Confirm Password . . ."
              addon-left-icon="now-ui-icons ui-1_lock-circle-open"
              v-model="cpassword"
            >
            </fg-input>
            <fg-input
              class="no-border"
              type="number"
              placeholder="Age..."
              addon-left-icon="now-ui-icons media-2_sound-wave"
              v-model="age"
            >
            </fg-input>
            <fg-input
              class="no-border"
              type="text"
              placeholder="Phone..."
              addon-left-icon="now-ui-icons tech_mobile"
              v-model="phone"
            >
            </fg-input>
          </template>
          <div class="card-footer text-center">
            <a
              @click="signup"
              class="btn btn-primary btn-round btn-lg btn-block"
              >SignUp</a
            >
           <router-link to="/login" class="link">
              You already have an account?
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
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      name: "",
      username: "",
      email: "",
      password: "",
      cpassword: "",
      age: "",
      phone: "",
    };
  },
  methods: {
    signup() {
      axios
        .post("http://localhost:5000/api/users/signup", {
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password,
          cpassword: this.cpassword,
          age: this.age,
          phone: this.phone,
        
        })
        .then((res) => {
          window.location.href = "/login"
          console.log("axios", res);
        });
    },
  },
};
</script>
<style>
.card-signup {
  opacity: 0.87;
}
</style>
