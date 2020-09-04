<template>
  <center>
    <div id="form">
      <fg-input
        class="no-border"
        type="text"
        placeholder="Adress-Mail"
        addon-left-icon="now-ui-icons users_circle-08"
        v-model="adressMail"
      ></fg-input>

      <a @click="resetPassword" class="btn btn-primary btn-round btn-lg btn-block">Login</a>
    </div>
    <p v-if="toggle">Email has been send to {{ adressMail }} Please Check Your Email</p>
  </center>
</template>

<script>
import FormGroupInput from "../components/formGroupInput.vue";
import axios from "axios";
export default {
  name: "ResetPassword",
  data() {
    return {
      toggle: false,
      adressMail: "",
    };
  },

  components: {
    [FormGroupInput.name]: FormGroupInput,
  },

  methods: {
    resetPassword() {
      this.toggle = true;
      axios
        .post("http://localhost:5000/api/users/reset", {
          email: this.adressMail,
        })
        .then(() => {
          res.send("success");
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    },
  },
};
</script>

<style scoped>
#form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
