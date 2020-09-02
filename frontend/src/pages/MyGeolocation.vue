<template>
  <div class="sear" v-if="ready">
    <div class="page-header page-header-small ">
      <parallax
        class="page-header-image"
        style="background-image:url('img/header.jpg')"
      ></parallax>
      <main-navbar />
      <div class="content-center">
        <h1>Tunisia Travels</h1>
      </div>
    </div>
    <vs-row class="cont">
      <vs-col >
        <div class="row">
          <h5>
            There is {{ numberOfHouses }} House in {{ coordinates.locality }}
          </h5>
          <h4>
            Available : From {{ coordinates.start }} To {{ coordinates.end }}
          </h4>
          <h3>
            Guests Number :{{
              coordinates.guestsNum[0] +
                coordinates.guestsNum[1] +
                coordinates.guestsNum[2]
            }}
          </h3>
        </div>
        <div class="row">
          <div class="card-body" v-for="(one, index) in arr" :key="index">
            <div class="row">
              <div class="col-md-5">
                <div >
                  
                   <img src="../assets/images/ferrr.png" @click="redirectfunc(one._id)" alt />


                  
                </div>
              </div>
              <div class="container col-md-7">
                <h3 class="card-title">
                  <a @click="$router.push('/SelectedHouse')"
                    >{{ one.houseName }}, {{ one.typeOfPlace }}
                  </a>
                </h3>
                <p class="card-description">
                  {{ one.description }}
                </p>
                <p class="phone">Phone: {{ one.hostPhone }}</p>
                <span class="span">{{ one.price }} euro/night</span>
              </div>
            </div>
          </div>
        </div>
        <!-- <n-button type="primary" round simple>Price</n-button>
        <n-button type="primary" round simple>Pets allowed</n-button>
        <n-button type="primary" round simple>Host Language</n-button>
        <n-button type="primary" round simple>Type of place</n-button>-->
       
      </vs-col>
      <vs-col vs-lg="3">
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
import MainNavbar from "./MainNavbar"
import GmapMarker from "vue2-google-maps/src/components/marker";
import Button from "../components/Button.vue";
import axios from "axios";
export default {
  name: "MyGeolocation",
  components: { GmapMarker, [Button.name]: Button, MainNavbar },
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
      }
    });
    this.ready = true;
  },
};
</script>
<style scoped>
.vue-map-container {
  /* position: fixed; */
  height: 100vh !important;
  /* float: right !important; */
}
.vs-col--w-12 {
  width: 50% !important;
}
.cont {
  margin-left: 80px;
  margin-top: 40px;
}
.span {
  float: right;
  font-size: 130%;
  font-weight: bold;
  margin-bottom: auto;
}
.card-body {
  padding-right: 50px;
  border-top: solid 1px;
}
img{
  border-radius: 20px !important;
  width: 150px !important;
  cursor: pointer;
  transition: transform .2s;
} 
img:hover {
    transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
.container{
  padding-top:30px;
  padding-left:0px;
}
.page-header {
  border-bottom-right-radius: 200px;
  border-bottom-left-radius: 200px;
  min-height: 30vh;
}

</style>
