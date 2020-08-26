<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
    <!-- <tabs/> -->
  </div>
</template>
<script>
// import Tabs from "./pages/components/Tabs.vue";
export default {
  name: "App",
  // components: { Tabs },
};
</script>
