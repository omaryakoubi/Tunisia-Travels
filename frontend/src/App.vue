<template>
  <div id="app">
    <Home v-on:destination="getDestination($event)" />
  </div>
</template>
<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
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
