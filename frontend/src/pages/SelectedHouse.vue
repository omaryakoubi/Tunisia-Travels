<template>
<div>
  <header>
    <div class="slides">
      <h1>{{hostName}}</h1>
      <image-slider>
        <img
          :src="images[Math.abs(currentNumber) % images.length]"
          v-on:mouseover="stopRotation"
          v-on:mouseout="startRotation"
          style="height:500px; width:85%; margin-left:50px; border-radius:30px"
        />
        <p style="margin-left: 40%">
          <a @click="prev">Previous</a> ||
          <a @click="next">Next</a>
        </p>
      </image-slider>
    </div>
  </header>
  <body>
    <div>
      <h3>{{description}}/ {{governate}}/{{city}}/{{typeOfPlace}}</h3>
      <h3>{{hostName}}</h3>
      <option value="optionPet">{{pets}}</option>
      <div class="price">
        <h3>{{price}}/night</h3>
        <div class="info">
          <div class="dateInfo" @click="handleClick">
            <DatePicker :hidden="hide" />
            {{start}} / {{end}}
            <br />Change dates
          </div>
          <div class="guestsNum">{{guestAccepted}}</div>
        </div>
        <!-- <Guests /> -->
        <div class="center">
          <vs-button @click="$router.push('/payment')" block>
            <i class="bx bxs-paint-roll"></i>Book
          </vs-button>
        </div>
      </div>
    </div>

    <div class="map">
      Geolocation
      <GmapMap
        ref="map"
        :center="coordinates"
        :zoom="15"
        style="width:80% ; height:400px"
        map-type-id="terrain"
      >
        <GmapMarker
          :icon="{ url: require('../../src/assets/images/gmap2.png') }"
          :position="coordinates"
          :clickable="true"
          :draggable="true"
        />
      </GmapMap>
    </div>
  </body>
</div>
</template>

<script>
import DatePicker from "./DatePicker";
// import Guests from './Guests'
import GmapMarker from "vue2-google-maps/src/components/marker";
import axios from "axios";
import router from "../router";

export default {
  name: "selectedHouse",
  components: {
    DatePicker,
    // Guests,
    GmapMarker,
  },
  data() {
    return {
      images: [],
      currentNumber: 0,
      timer: null,
      guestAccepted: 0,
      pets: "",
      coordinates: {
        lat: 0,
        lng: 0,
        locality: "",
        start: "",
        end: "",
      },
      hide: true,
      hostName: "",
      hostPhone: "",
      governate: "",
      city: "",
      start: "",
      end: "",
      description: "",
      typeOfPlace: "",
      price: "",
      id: "",
    };
  },

  mounted() {
    this.startRotation();
    this.getInfo();
  },
  created() {
    this.id = this.$route.params.id;
  },

  methods: {
    getInfo() {
      axios
        .get(`http://localhost:5000/houseSelected/${this.id}`)
        .then((res) => {
          console.log("res", res);
          let response = res.data;
          (this.hostName = response.hostName),
            (this.hostPhone = response.hostPhone),
            (this.governate = response.governate),
            (this.city = response.city),
            (this.start = response.start),
            (this.end = response.end),
            (this.description = response.description),
            (this.price = response.price);
          response.images.forEach((houseUrls) => {
            this.images.push(houseUrls.url);
          });
          this.coordinates.lat = response.marker.lat;
          this.coordinates.lng = response.marker.lng;
          this.guestAccepted = response.guests;
          if (response.optionPet === true) {
            this.pets = "Pets are allowed";
          } else {
            this.pets = "Pets are not allowed";
          }
        })
        .catch((err) => console.log(err));
    },
    startRotation: function () {
      this.timer = setInterval(this.next, 3000);
    },

    stopRotation: function () {
      clearTimeout(this.timer);
      this.timer = null;
    },

    next: function () {
      this.currentNumber += 1;
    },
    prev: function () {
      this.currentNumber -= 1;
    },
    handleClick() {
      this.hide = !this.hide;
    },
  },
};
</script>

<style  scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  visibility: hidden;
}
.price {
  position: relative;
  margin-left: 65%;
  width: 400px;
  height: 500px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  padding: 24px;
}
.slides {
  margin-left: 10%;
  margin-top: 5%;
  width: 80%;
}
.map {
  margin-top: 40px;
  margin-left: 15%;
}
.info {
  margin: auto;
  width: 75%;
  height: 100px;
  border: gray 2px solid;
  border-radius: 10px;
}
.dateInfo {
  text-align: center;
  padding: 3px 10px;
  width: 100%;
  height: 50px;
  /* background: linear-gradient(gray, gray) no-repeat center/2px 100%; */
  border: 1px gray solid;
  border-radius: 10px;
}
</style>>
