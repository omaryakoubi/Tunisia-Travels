<template>
  <div>
    <vs-row>
      <vs-col vs-lg="8">
        <h2>There is N House in {{coordinates.locality}}</h2>
        <h3>Available : From {{coordinates.start}} To {{coordinates.end}}</h3>
        <!-- <n-button type="primary" round simple>Price</n-button>
        <n-button type="primary" round simple>Pets allowed</n-button>
        <n-button type="primary" round simple>Host Language</n-button>
        <n-button type="primary" round simple>Type of place</n-button>-->
        <vs-card>
          <template #title>
            <h3>"House NAME"</h3>
            <h3>"House TYPE"</h3>
          </template>
          <template #img>
            <img src="../assets/images/ferrr.png" alt />
          </template>
          <template #text>
            <p>"COMMENT FROM HOST ABOUT HIS HOUSE AND DETAILS"</p>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <i class="bx">Contact"NAME"</i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <span class="span">"PRICE PER NIGHT"</span>
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
        locality: "",
        start: "",
        end: "",
      },
    };
  },
  mounted() {
    this.axios.get("http://localhost:5000/travelinfo").then((data) => {
      console.log("dataHou", data.data[data.data.length - 1]);
      this.coordinates.lat = data.data[data.data.length - 1].dest.latitude;
      this.coordinates.lng = data.data[data.data.length - 1].dest.longitude;
      this.coordinates.locality = data.data[data.data.length - 1].dest.locality;
      this.coordinates.start = data.data[data.data.length - 1].check.start;
      this.coordinates.end = data.data[data.data.length - 1].check.end;
    });
    this.axios.get("http://localhost:5000/houses").then((data) => {
      // console.log("LOCALITY", data.data[0].governorate);
      // console.log("Start", data.data[0].start);
      // console.log("End", data.data[0].end);
      // console.log("Houses Array", data.data[0]);
      // console.log("House Name", data.data[0].houseName);
      // console.log("House Type", data.data[0].typeOfPlace);
      // console.log("IMAGE", data.data[0]); SAFA WORKING ON MULTER
      //console.log("ABOUT HOUSE" ,data.data[0]) ADD COMMENT WHEN HOSTING
      //console.log("HOST NAME" ,data.data[0]) ADD NAME WHEN HOSTING
      //console.log("PRICE PER NIGHT" , data.data[0])
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

