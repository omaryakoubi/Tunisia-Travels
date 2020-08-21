<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
    <!-- <AutoComplete /> -->
    <!-- <Guests /> -->
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
