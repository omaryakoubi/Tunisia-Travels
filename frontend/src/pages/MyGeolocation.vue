<template>
  <div>
    <vs-row>
      <vs-col vs-lg="8">
        <h2>Stays in House Name</h2>
        <h3>Checkin Date -- Chekout date</h3>
        <h3>Price per night</h3>
        <p>Information Travel</p>
        <!-- <n-button type="primary" round simple>Price</n-button>
        <n-button type="primary" round simple>Pets allowed</n-button>
        <n-button type="primary" round simple>Host Language</n-button>
        <n-button type="primary" round simple>Type of place</n-button>-->
        <vs-card>
          <template #title>
            <h3>Love House</h3>
          </template>
          <template #img>
            <img src="../assets/images/ferrr.png" alt />
          </template>
          <template #text>
            <p>A beautiful place to say</p>
          </template>
          <template #interactions>
            <vs-button class="btn-chat" shadow primary>
              <span class="span">Contact</span>
            </vs-button>
          </template>
        </vs-card>
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
    </vs-row>
  </div>
</template>
<script>
import GmapMarker from "vue2-google-maps/src/components/marker";
import Button from "../components/Button.vue";

export default {
  name: "MyGeolocation",
  components: { GmapMarker, [Button.name]: Button },
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
  height: 900px !important;
  float: right !important;
}
.vs-col--w-12 {
  width: 50% !important;
}
</style>  

