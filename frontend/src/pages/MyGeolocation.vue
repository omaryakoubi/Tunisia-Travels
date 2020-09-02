<template>
  <div v-if="ready">
    <vs-row>
      <vs-col vs-lg="8">
        <h5>There is {{ numberOfHouses }} House in {{ coordinates.locality }}</h5>
        <h5>Available : From {{ coordinates.start }} To {{ coordinates.end }}</h5>
        <h5>
          Guests Number :{{
          coordinates.guestsNum[0] +
          coordinates.guestsNum[1] +
          coordinates.guestsNum[2]
          }}
        </h5>
        <!-- <n-button type="primary" round simple>Price</n-button>
        <n-button type="primary" round simple>Pets allowed</n-button>
        <n-button type="primary" round simple>Host Language</n-button>
        <n-button type="primary" round simple>Type of place</n-button>-->
        <vs-card vs-lg="4" v-for="(one, index) in arr" :key="index">
          <template #title>
            <h3>{{ one.houseName }}</h3>
            <h5>{{ one.typeOfPlace }}</h5>
          </template>
          <template #img>
            <img :src="`${one.images[0].url}`" @click="redirectfunc(one._id)" alt />
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
          :zoom="13"
          style="width:640px ; height:360px"
          map-type-id="terrain"
        >
          <GmapMarker
            :key="index"
            v-for="(m,index) in markers "
            :position="m"
            :clickable="true"
            :draggable="true"
            @mouseover="display"
          />
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
        guestsNum: [],
      },
      markers: [],
      response: {
        houseName: "",
        typeOfPlace: "",
        description: "",
        price: "",
        hostName: "",
        hostPhone: "",
      },
      numberOfHouses: 0,
      arr: [],
      id: "",
    };
  },
  methods: {
    redirectfunc(id) {
      this.$router.push(`/selectedHouse/${id}`);
    },
    display() {
      alert("heeeee");
    },
  },
  async beforeMount() {
    await axios.get("http://localhost:5000/travelinfo").then((data) => {
      this.coordinates.lat = data.data[data.data.length - 1].dest.latitude;
      this.coordinates.lng = data.data[data.data.length - 1].dest.longitude;
      this.coordinates.locality = data.data[data.data.length - 1].dest.locality;
      this.coordinates.start = data.data[data.data.length - 1].check.start;
      this.coordinates.end = data.data[data.data.length - 1].check.end;
      this.coordinates.guestsNum.push(
        data.data[data.data.length - 1].guestsNum[0],
        data.data[data.data.length - 1].guestsNum[1],
        data.data[data.data.length - 1].guestsNum[2]
      );
      this.markers.push(this.coordinates);
    });
    await axios.get("http://localhost:5000/houses").then((data) => {
      for (let i = 0; i < data.data.length; i++) {
        if (
          data.data[i].governorate == this.coordinates.locality ||
          this.coordinates.locality.includes(data.data[i].governorate) ||
          data.data[i].governorate.includes(this.coordinates.locality)
        ) {
          this.numberOfHouses++;
          this.arr.push(data.data[i]);
          this.markers.push(data.data[i].marker);
        }
        console.log("houhouhouh", data.data[i]);
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
