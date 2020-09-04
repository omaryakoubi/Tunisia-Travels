<template>
  <div>
    <div class="page-header page-header-small ">
      <parallax class="page-header-image"></parallax>
      <main-navbar />
      <div class="content-center title">
        <h1>{{ hostName }}, {{ governate }}</h1>
      </div>
    </div>
    <Caroussel />
    <body>
      <div>
        <h2>Host name : {{ hostName }}</h2>
        <h3>Governate : {{ governate }}</h3>
        <h4>City : {{ city }}</h4>
        <h4>Place : {{ typeOfPlace }}</h4>
        <option value="optionPet">{{ pets }}</option>
        <h5>Description : {{ description }}</h5>
        <div class="price">
          <h3>{{ price }}/night</h3>
          <div class="info">
            <div class="dateInfo" @click="handleClick">
              <DatePicker :hidden="hide" />
              {{ start }} / {{ end }} <br />Change dates
            </div>
            <div class="guestsNum">Travelers : {{ guestAccepted }}</div>
          </div>
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
import GmapMarker from "vue2-google-maps/src/components/marker";
import axios from "axios";
import router from "../router";
import Caroussel from "./components/CarousselSection";
import MainNavbar from "./MainNavbar";

export default {
  name: "selectedHouse",
  components: {
    DatePicker,
    GmapMarker,
    MainNavbar,
    Caroussel,
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
            (this.governate = response.governorate),
            (this.city = response.city),
            (this.start = response.start),
            (this.end = response.end),
            (this.description = response.description),
            (this.price = response.price);
          this.typeOfPlace = response.typeOfPlace;
          response.images.forEach((houseUrls) => {
            this.images.push(houseUrls.url);
          });
          this.coordinates.lat = response.marker.lat;
          this.coordinates.lng = response.marker.lng;
          this.guestAccepted = response.guests;
          console.log("hh", this.governate);
          if (response.optionPet === true) {
            this.pets = "Pets are allowed";
          } else {
            this.pets = "Pets are not allowed";
          }
        })
        .catch((err) => console.log(err));
    },
    

  

   
    handleClick() {
      this.hide = !this.hide;
    },
  },
};
</script>

<style scoped>

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
.page-header-image {
  background-image: url("../../public/img/header.jpg");
   border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  min-height: 30vh !important;
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
}</style
>>
