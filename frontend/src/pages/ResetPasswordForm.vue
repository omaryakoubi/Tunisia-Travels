<template>
  <center>
    <div id="form">
      <fg-input
        class="no-border"
        type="text"
        placeholder="New Password"
        addon-left-icon="now-ui-icons users_circle-08"
        v-model="password"
      >
      </fg-input>

      <fg-input
        class="no-border"
        type="text"
        placeholder="Confirm Password"
        addon-left-icon="now-ui-icons users_circle-08"
        v-model="confirmedPassword"
      >
      </fg-input>

      <a class="btn btn-primary btn-round btn-lg btn-block">Submit</a>
    </div>
  </center>
</template>

<script>
import FormGroupInput from "../components/formGroupInput.vue";
import axios from 'axios';
export default {
  name: "ResetPasswordForm",
  data() {
    return {
      password: "",
      confirmedPassword: "",
    };
  },
  components: {
    [FormGroupInput.name]: FormGroupInput,
  },
  
  mounted() {
      axios.get('')
  }
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
