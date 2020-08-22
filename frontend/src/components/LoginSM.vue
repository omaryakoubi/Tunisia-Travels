<template>
  <center>
    <div id="Form">
      <vs-input
        style="width: 33.5em;"
        label-placeholder="Email"
        v-model="Email"
      />
      <vs-input
        style="width: 33.5em;"
        label-placeholder="Password"
        type="password"
        v-model="Password"
      />
      <vs-button class="Button" color="primary" type="filled"
        >Primary</vs-button
      >
      <vs-button
        href="http://localhost:5000/auth/google"
        class="Button"
        color="danger"
        type="filled"
        >Google+</vs-button
      >
      <FacebookLogin />
    </div>
  </center>
</template>

<script>
import FacebookLogin from "./FacebookLogin";
export default {
  name: "LoginSM",
  components: {
    FacebookLogin,
  },
  data() {
    return {
      Email: "",
      Password: "",
    };
  },
};
</script>

<style scoped>
#Form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#Button {
  margin-top: 7px;
  width: 40em;
}
</style>
