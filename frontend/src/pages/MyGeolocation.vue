<template>
  <div v-if="ready">
    <vs-row>
      <vs-col vs-lg="8">
        <h2>There is N House in {{ coordinates.locality }}</h2>
        <h4>Available : From {{ coordinates.start }} To {{ coordinates.end }}</h4>
        <h6>Guests Number : "GUEST NUMBER"</h6>
        <vs-card vs-lg="4" v-for="(one,index) in arr" :key="index">
          <!-- <n-button type="primary" round simple>Price</n-button>
        <n-button type="primary" round simple>Pets allowed</n-button>
        <n-button type="primary" round simple>Host Language</n-button>
          <n-button type="primary" round simple>Type of place</n-button>-->
          <template #title>
            <h3>{{ one.houseName }}</h3>
            <h5>{{ one.typeOfPlace }}</h5>
          </template>
          <template #img>
            <img src="../assets/images/ferrr.png" alt @click="$router.push('/SelectedHouse')" />
          </template>
          <template #text>
            <p>{{ one.description }}</p>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <i class="bx">
                {{ one.hostName }}
                <br />
                {{ one.hostPhone }}
              </i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <span class="span">{{ one.price }} euro/night</span>
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
import axios from "axios";
export default {
  name: "MyGeolocation",
  components: { GmapMarker, [Button.name]: Button },
  data() {
    return {
      ready: false,
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
      numberOfHouses: "",
      arr: [],
    };
  },
  async beforeMount() {
    await axios.get("http://localhost:5000/travelinfo").then((data) => {
      this.coordinates.lat = data.data[data.data.length - 1].dest.latitude;
      this.coordinates.lng = data.data[data.data.length - 1].dest.longitude;
      this.coordinates.locality = data.data[data.data.length - 1].dest.locality;
      this.coordinates.start = data.data[data.data.length - 1].check.start;
      this.coordinates.end = data.data[data.data.length - 1].check.end;
    });
    await axios.get("http://localhost:5000/houses").then((data) => {
      // console.log("myHouses", data.data);
      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].governorate == this.coordinates.locality) {
          this.arr.push(data.data[i]);
        }
      }
    });
    this.ready = true;
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
