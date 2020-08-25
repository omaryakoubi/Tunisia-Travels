<template>
  <div>
    <vs-col id="red" vs-lg="8">
      <div class="row">
        <button>Filter1</button>
        <button>Filter1</button>
        <button>Filter1</button>
        <button>Filter1</button>
      </div>
      <div>House details</div>
      <div>House details</div>
      <div>House details</div>
      <div>House details</div>
      <div>House details</div>
      <div>House details</div>
      <div>House details</div>
      <div>House details</div>
      <div>House details</div>
      <div>House details</div>
      <div>House details</div>
      <div>House details</div>
      <div>House details</div>
      <div>House details</div>
      <div>House details</div>
      <div>House details</div>
    </vs-col>
    <vs-col vs-lg="4">
      <GmapMap
        ref="map"
        :center="coordinates"
        :zoom="15"
        style="width:640px ; height:360px"
        map-type-id="terrain"
      >
        <GmapMarker :position="coordinates" :clickable="true" :draggable="true" />
      </GmapMap>
    </vs-col>
  </div>
</template>
<script>
import GmapMarker from "vue2-google-maps/src/components/marker";
import { vsSelect, vsOption } from "vuesax";
export default {
  name: "MyGeolocation",
  components: { GmapMarker },
  data() {
    return {
      coordinates: {
        lat: 0,
        lng: 0,
      },
    };
  },
  mounted() {
    this.axios.get("http://localhost:5000/travelinfo").then((data) => {
      this.coordinates.lat = data.data[data.data.length - 1].dest.latitude;
      this.coordinates.lng = data.data[data.data.length - 1].dest.longitude;
    });
  },
};
</script>
<style scoped>
.vue-map-container {
  width: 640px !important;
  height: 900px !important;
  float: right !important;
}
#red {
  background-color: red;
}
</style>  

