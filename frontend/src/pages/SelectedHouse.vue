<template>
  <div>
    <div class="page-header page-header-small ">
      <parallax class="page-header-image"></parallax>
      <main-navbar />
      <div class="content-center title">
        <h1>{{ hostName }}, {{ governate }}</h1>
      </div>
    </div>
    <div class="col-md-16 ml-auto mr-auto">
      <Caroussel />
    </div>
    <body>
      <div class="col-md-10 ml-auto mr-auto">
        <div class="row collections">
          <div class="col-md-8 inpt">
            <h3>
              <b>Entire condominium hosted by {{ hostName }}</b>
            </h3>
            <h6><b>Location : </b></h6>
            <h5>{{ city }},{{ governate }}</h5>
            <h6><b>Place : </b></h6>
            <h5>{{ typeOfPlace }}</h5>
            <h6><b>Description : </b></h6>
            <h5>{{ description }}</h5>
            <option value="optionPet">{{ pets }}</option>
          </div>

          <div class="cardi col-md-4">
            <div class="content">
              <div class="price">
                <h3>{{ price }} €/night</h3>
                <div class="dateInfo">{{ start }} / {{ end }}</div>
                <div class="guestsNum">Travelers : {{ guestAccepted }}</div>
              </div>
              <div class="center">
                <vs-button @click="redirectfunc(id)" block>
                  <i class="bx bxs-paint-roll"></i>Book
                </vs-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-10 ml-auto mr-auto">
        <div class="map">
          <h3>
            <b>Mapping</b>
          </h3>
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
      </div>
    </body>
  </div>
</template>

<script>
import GmapMarker from "vue2-google-maps/src/components/marker";
import axios from "axios";
import router from "../router";
import Caroussel from "./components/CarousselSection";
import MainNavbar from "./MainNavbar";
export default {
  name: "selectedHouse",
  components: {
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
    this.axios.get("http://localhost:5000/travelinfo").then((data) => {
      console.log(data.data);
      this.start = data.data[data.data.length - 1].check.start;
      this.end = data.data[data.data.length - 1].check.end;
      this.guestAccepted =
        data.data[data.data.length - 1].guestsNum[0] +
        data.data[data.data.length - 1].guestsNum[1] +
        data.data[data.data.length - 1].guestsNum[2];
      localStorage.setItem("start", this.start);
      localStorage.setItem("end", this.end);
    });
  },
  created() {
    this.id = this.$route.params.id;
  },
  methods: {
    redirectfunc(id) {
      localStorage;
      this.$router.push(`/payment/${id}`);
    },
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
            // (this.start = response.start),
            // (this.end = response.end),
            (this.description = response.description),
            (this.price = response.price);
          this.typeOfPlace = response.typeOfPlace;
          response.images.forEach((houseUrls) => {
            this.images.push(houseUrls.url);
          });
          localStorage.setItem("price", this.price);
          this.coordinates.lat = response.marker.lat;
          this.coordinates.lng = response.marker.lng;
          // this.guestAccepted = response.guests;
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
.page-header-image {
  background-image: url("../../public/img/header.jpg");
}
.page-header {
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
  margin-bottom: 40px;
  margin-left: 13%;
}

.dateInfo {
  text-align: center;
}
.cardi {
  background-color: gainsboro;
  border-radius: 15px 50px 30px;
  padding: 10px;
}
.content-center {
  z-index: 0;
}

.collections {
  margin-top: 50px;
  border: 1px solid black;
  padding: 30px;
  border-radius: 30px;
}
</style>
