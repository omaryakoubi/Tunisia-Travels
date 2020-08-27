<template>
  <div class="xdee">
    <vue-google-autocomplete
      :country="['TN']"
      types="(cities)"
      id="destination"
      class="form-control"
      placeholder="Choose a destination"
      v-on:placechanged="getFromAddress"
      v-on:error="handleError"
    ></vue-google-autocomplete>
  </div>
</template>

<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
export default {
  name: "AutoComplete",
  components: { VueGoogleAutocomplete },
  props: ["dest"],
  data: function () {
    return {
      destination: {},
    };
  },
  methods: {
    getFromAddress(destination) {
      this.destination = destination;
      this.$emit("travelDestination", this.destination);
    },
    handleError(error) {
      alert(error);
    },
  },
};
</script>
<style  scoped>
.form-control {
  height: 42px !important;
}
.xdee{
  border-radius: 25px !important;
}
</style>