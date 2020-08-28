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
            <h3>{{response.houseName}}</h3>
            <h3>{{response.typeOfPlace}}</h3>
          </template>
          <template #img>
            <img src="../assets/images/ferrr.png" alt />
          </template>
          <template #text>
            <p>{{response.description}}</p>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <i class="bx">{{response.hostName}} :{{response.hostPhone}}</i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <span class="span">Price : {{response.price}}/night</span>
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
      response: {
        houseName: "",
        typeOfPlace: "",
        description: "",
        price: "",
        hostName: "",
        hostPhone: "",
      },
    };
  },
  mounted() {
    this.axios.get("http://localhost:5000/travelinfo").then((data) => {
      this.coordinates.lat = data.data[data.data.length - 1].dest.latitude;
      this.coordinates.lng = data.data[data.data.length - 1].dest.longitude;
      this.coordinates.locality = data.data[data.data.length - 1].dest.locality;
      this.coordinates.start = data.data[data.data.length - 1].check.start;
      this.coordinates.end = data.data[data.data.length - 1].check.end;
    });
    this.axios.get("http://localhost:5000/houses").then((data) => {
      console.log("all data for a house response ", data.data);
      // console.log("IMAGE", data.data[0]); SAFA WORKING ON MULTER
      this.response.hostPhone = data.data[0].hostPhone;
      this.response.description = data.data[0].description;
      this.response.hostName = data.data[0].hostName;
      this.response.price = data.data[0].price;
      this.response.houseName = data.data[0].houseName;
      this.response.typeOfPlace = data.data[0].typeOfPlace;
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

