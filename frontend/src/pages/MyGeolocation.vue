<template>
  <div>
    <GmapMap
      ref="map"
      :center="coordinates"
      :zoom="15"
      style="width:640px ; height:360px"
      map-type-id="terrain"
    >
      <GmapMarker :position="coordinates" :clickable="true" :draggable="true" />
    </GmapMap>
  </div>
</template>
<script>
import GmapMarker from "vue2-google-maps/src/components/marker";
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
</style>  

