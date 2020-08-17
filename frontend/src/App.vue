<template>
  <div id="app">
    <Home />
    <!-- <SelectionPage /> -->
    <!-- <NearBy /> -->
  </div>
</template>
<script>
import Home from "./components/Home.vue";
// import SelectionPage from "./components/SelectionPage.vue";
// import NearBy from "./components/NearBy";

export default {
  name: "App",
  components: {
    Home,
    // NearBy,
    // SelectionPage,
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
