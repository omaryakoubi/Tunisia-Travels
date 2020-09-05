<template>
  <div class="sear" v-if="ready">
    <div class="page-header page-header-small">
      <parallax class="page-header-image" style="background-image:url('img/header.jpg')"></parallax>
      <main-navbar />
      <div class="content-center title">
        <h1>
          <span style="color: red">T</span>unisia
          <span style="color: red">T</span>ravels
        </h1>
      </div>
    </div>
    <vs-row class="cont">
      <vs-col>
                  <div class="row">

          <h5>There is <b>{{ numberOfHouses }} </b>house(s) in <b>{{ coordinates.locality }}</b></h5>
                  </div>
                  <div class="row">

          <h5>
            There is <b>{{ availableHouses }}</b> house(s) available from
           <b> {{ coordinates.start }}</b> to <b>{{ coordinates.end }}</b>
          </h5>
                  </div>
                  <div class="row">


          <h5>
            Traveler number :<b>{{
            coordinates.guestsNum[0] +
            coordinates.guestsNum[1] +
            coordinates.guestsNum[2]
            }}</b>
          </h5>
                  </div>
        <n-button
          type="primary"
          size="sm"
          round
          @click="showAllHouses"
        >Show all houses in {{ coordinates.locality }}</n-button>
        <div class="row">
          <div class="card-body" v-for="(one, index) in arr" :key="index">
            <div class="line"></div>
            <div class="row insi">
              <div class="col-md-4">
                <img
                  :src="`${one.images[one.images.length - 1].url}`"
                  @click="redirectfunc(one._id)"
                  alt
                />
              </div>
              <div class="col-md-7">
                <h3 class="card-title">
                  <a
                    @click="$router.push('/SelectedHouse')"
                  >{{ one.houseName }}, {{ one.typeOfPlace }}</a>
                </h3>
                <p class="card-description">{{ one.description }}</p>
                <p class="card-description">{{ petMessage }}</p>
                <p class="phone">Phone: {{ one.hostPhone }}</p>
                <p class="span">{{ one.price }} euro/night</p>
              </div>
            </div>
          </div>
        </div>
      </vs-col>
      <vs-col vs-lg="3">
        <GmapMap
          ref="map"
          :center="coordinates"
          :zoom="12"
          style="width:640px ; height:360px"
          map-type-id="terrain"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m"
            :clickable="true"
            :draggable="true"
            @mouseover="display(m)"
          />
        </GmapMap>
      </vs-col>
    </vs-row>
    <!-- GmapMarker hover -->
    <modal :show.sync="modals.gmark" headerClasses="justify-content-center">
      <template slot="header">
        <h2 slot="header" class="title title-up">{{ toShow.houseName }}, {{ toShow.typeOfPlace }}</h2>
      </template>
      <div class="card-body" v-if="hovered">
        <div class="row">
          <img
            style="max-height:200px; max-width:400px; margin-left:20%"
            :src="`${toShow.images[toShow.images.length - 1].url}`"
            @click="redirectfunc(toShow._id)"
          />
        </div>
        <br />
        <p class="card-description">{{ toShow.description }}</p>
        <br />
        <div class="row">
          <h5 class="card-description">{{ petMessage }}</h5>
          <br />
        </div>

        <div class="row">
          <h5 class="phone"><b>Phone: </b>{{ toShow.hostPhone }}</h5>
        </div>

        <div class="row">
          <p class="span" style="margin-left:80%">{{ toShow.price }} TND/Night</p>
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
import MainNavbar from "./MainNavbar";
import GmapMarker from "vue2-google-maps/src/components/marker";
import Button from "../components/Button.vue";
import axios from "axios";
import Modal from "./components/Modal2";
import { Tooltip } from "element-ui";

export default {
  name: "MyGeolocation",
  components: {
    GmapMarker,
    [Button.name]: Button,
    MainNavbar,
    Modal,
    [Tooltip.name]: Tooltip,
  },
  data() {
    return {
      toShow: {},
      hovered: false,
      modals: {
        gmark: false,
      },
      petMessage: "",
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
        start: "",
        end: "",
      },
      availableHouses: 0,
      numberOfHouses: 0,
      arr: [],
      id: "",
    };
  },
  methods: {
    showAllHouses() {
      this.axios.get("http://localhost:5000/houses").then((data) => {
        this.arr = [];
        for (let i = 0; i < data.data.length; i++) {
          if (
            data.data[i].governorate == this.coordinates.locality ||
            this.coordinates.locality.includes(data.data[i].governorate) ||
            data.data[i].governorate.includes(this.coordinates.locality)
          ) {
            this.arr.push(data.data[i]);
            this.markers.push(data.data[i].marker);
          }
        }
      });
    },
    redirectfunc(id) {
      this.$router.push(`/selectedHouse/${id}`);
    },
    display(id) {
      for (let i = 0; i < this.arr.length; i++) {
        if (
          this.arr[i].marker.lat == id.lat &&
          this.arr[i].marker.lng == id.lng
        ) {
          this.toShow = this.arr[i];
        }
      }
      this.hovered = true;
      this.modals.gmark = true;
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
    });
    await axios.get("http://localhost:5000/houses").then((data) => {
      for (let i = 0; i < data.data.length; i++) {
        if (
          data.data[i].governorate == this.coordinates.locality ||
          this.coordinates.locality.includes(data.data[i].governorate) ||
          data.data[i].governorate.includes(this.coordinates.locality)
        ) {
          this.numberOfHouses++;
          let hostStart = new Date(data.data[i].start).getTime();
          let hostEnd = new Date(data.data[i].end).getTime();
          let travellerStart = new Date(this.coordinates.start).getTime();
          let travellerEnd = new Date(this.coordinates.start).getTime();
          if (
            hostStart <= travellerStart &&
            travellerStart <= hostEnd &&
            travellerEnd >= travellerStart
          ) {
            this.availableHouses++;
            this.arr.push(data.data[i]);
            this.markers.push(data.data[i].marker);
          }
          if (data.data[i].optionPet === true) {
            this.petMessage = "Pets are welcomed in this house";
          } else {
            this.petMessage = "Pets are not allowed";
          }
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
  float: right !important;
  font-size: 130%;
  font-weight: bold;
  margin-bottom: auto;
}

img {
  border-radius: 20px !important;
  width: 100vh !important;
  cursor: pointer;
  transition: transform 0.2s;
}
img:hover {
  transform: scale(
    1.1
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
.container {
  padding-top: 30px;
  padding-left: 0px;
}
.page-header {
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  min-height: 30vh;
}
.content-center {
  z-index: 0;
}
.title {
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 22px;
}
.line {
  width: 70%;
  margin-left: 15%;
  border-bottom: 1px solid black;
  /* position: absolute; */
}
.insi {
  padding-top: 50px;
}
.tooltip-buttons {
  margin-left: 3px;
}
</style>
