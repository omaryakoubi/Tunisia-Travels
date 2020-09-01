<template>
  <!-- <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
  </div>-->
  <MultipleUpload />
</template>
<script>
import MultipleUpload from "./pages/MultipleUpload.vue";
export default {
  name: "App",
  components: { MultipleUpload },
};
</script>
