<template>
  <div id="app">
    <!-- <Home v-on:destination="getDestination($event)" /> -->
    <Home/>
    <!-- <LoginSM /> -->
  </div>
</template>

<script>
import Home from "./components/Home.vue";
// import LoginSM from "./components/LoginSM";

export default {
  name: "App",
  components: {
    Home,
    // LoginSM,
  },
  methods: {
    getDestination(destination) {
      console.log("destination", destination);
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
