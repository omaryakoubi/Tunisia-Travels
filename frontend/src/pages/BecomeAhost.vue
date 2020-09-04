<template>
<div>
<main-navbar style="background: black" />
  <form enctype="multipart/form-data">
    <div>
      <div id="center">
        <div v-show="div1">
          <p>We are going to guide you to host your house</p>
          <p>Please fill correctly your information</p>
          <p>to facilitate the contact with the traveler</p>
          <vs-input label-placeholder="Host Name" v-model="hostName" class="col-8" />
          <br />
          <vs-input label-placeholder="Host Phone" v-model="hostPhone" class="col-8" />
          <br />
          <vs-select placeholder="Guests allowed" v-model="guests" class="col-6">
            <vs-option label="1" value="1">1</vs-option>
            <vs-option label="2" value="2">2</vs-option>
            <vs-option label="3" value="3">3</vs-option>
            <vs-option label="4" value="4">4 +</vs-option>
          </vs-select>
          <br />
          <vs-select placeholder="Type of Place" v-model="typeOfPlace" class="col-6">
            <vs-option label="Entire Place" value="Entire Place">Entire Place</vs-option>
            <vs-option label="Private Room" value="Private Room">Private Room</vs-option>
            <vs-option label="Shared Room" value="Shared Room">Shared Room</vs-option>
          </vs-select>
          <br />
          <vs-checkbox v-model="optionPet" class="col-8">Pets Allowed</vs-checkbox>
          <vs-button id="content2" flat :active="active == 0" @click.prevent="toPage2">Get Started</vs-button>
        </div>
      </div>
      <div v-show="div2" id="p2">
        <p>Please tell us more about your house</p>
        <vs-input label-placeholder="Name of The house" v-model="houseName" class="col-8" />
        <br />
        <vs-input label-placeholder="Describe your house" v-model="description" class="col-8" />
        <br />
        <vs-input v-model="price" placeholder="Price per Night" class="col-8">
          <template #icon>
            <span class="material-icons">euro</span>
          </template>
        </vs-input>
        <br />
        <label class="col-8">Availability from</label>
        <vs-input type="date" v-model="start" class="col-8"></vs-input>
        <br />
        <label class="col-8">Availability to</label>
        <vs-input type="date" v-model="end" class="col-8"></vs-input>
        <vs-button id="content3" flat :active="active == 0" @click.prevent="toPage3">Next</vs-button>
      </div>
      <br />
      <br />
      <br />
      <div v-show="div3" id="p3">
        <p>Please fill the adress of your house</p>
        <vue-google-autocomplete
          :country="['TN']"
          types="(cities)"
          id="governorate"
          class="content vs-input"
          placeholder="Choose a governorate"
          v-on:error="handleError"
        ></vue-google-autocomplete>
        <br />
        <vue-google-autocomplete
          :country="['TN']"
          id="adress"
          class="content vs-input"
          v-on:placechanged="getStreetAdress"
          placeholder="Choose an adress"
        ></vue-google-autocomplete>
        <br />
        <p>Or use the automatic detection</p>
        <vs-button
          id="content3"
          flat
          :active="active == 0"
          @click.prevent="getMyPosition"
        >AutoDetect</vs-button>
        <GmapMap
          ref="map"
          :center="houseCoordinates"
          :zoom="14"
          style="width:640px ; height:360px"
          map-type-id="terrain"
        >
          <GmapMarker
            :position="houseCoordinates"
            :clickable="true"
            :draggable="true"
            :icon="{ url: require('../../src/assets/images/gmap2.png') }"
          />
        </GmapMap>

        <vs-button id="content3" flat :active="active == 0" @click.prevent="toPage4">Next</vs-button>
      </div>
      <br />
      <br />
      <br />
      <div v-show="div4" id="p4">
        <p>Your informations will be sent to the ADMIN</p>
        <p>Send us your CIN , passport , Melkeya and the photo of your houses</p>
        <vs-card-group>
          <vs-card v-for="(image, index) in imagesResp" :key="index">
            <template #img>
              <img :src="`${image.url}`" alt id="hi" />
            </template>
          </vs-card>
        </vs-card-group>
        <!-- <div v-for="(image, index) in imagesResp" :key="index">
          <img :src="`${image.url}`" />
        </div>-->
        <form enctype="multipart/form-data">
          <input multiple type="file" ref="files" @change="selectFile" class="file-input" />
          <div v-for="(file, index) in files" :key="index" class="level">
            <div class="level-left">
              <div class="level-item">{{ file.name }}</div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <a @click.prevent.prevent="files.splice(index, 1)" class="delete">Delete</a>
              </div>
            </div>
          </div>
          <button @click.prevent.prevent="sendFile">Save your photos</button>
        </form>
        <vs-button
          id="content2"
          flat
          :active="active == 0"
          @click.prevent="postToDB"
        >Submit you informations</vs-button>
      </div>
    </div>
    <vs-pagination progress v-model="page" :length="4" />
  </form>
  </div>
</template>
<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
import AutoComplete from "./AutoComplete.vue";
import DatePicker from "./DatePicker";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import { vsButton, vsSelect, vsPopup } from "vuesax";
import MainNavbar from "./MainNavbar"

export default {
  name: "BecomeAhost",
  components: { VueGoogleAutocomplete, 
    [MainNavbar.name] : MainNavbar
  },
  data: () => ({
    files: [],
    message: "",
    imagesResp: [],
    nbrOfImages: 0,
    hostName: "",
    hostPhone: "",
    governorate: "",
    city: "",
    adress: "",
    guests: 0,
    typeOfPlace: "",
    optionPet: false,
    houseName: "",
    description: "",
    price: "",
    start: "",
    end: "",
    page: 1,
    active: true,
    div1: true,
    div2: false,
    div3: false,
    div4: false,
    houseCoordinates: {
      lat: 0,
      lng: 0,
      locality: "",
      postal_code: " ",
      route: "",
      street_number: "",
    },
  }),
  methods: {
    handleClick() {
      alert("gey");
    },
    selectFile() {
      const files = this.$refs.files.files;
      this.files = [...this.files, ...files];
      console.log(this.count++);
    },
    async sendFile() {
      const formData = new FormData();
      this.files.forEach((file) => {
        formData.append("files", file);
      });

      await this.axios
        .post("http://localhost:5000/multiple", formData)
        .then((data) => {
          console.log(data.data);
          this.imagesResp = data.data;
          this.nbrOfImages = this.imagesResp.length;
        });
    },
    getStreetAdress(adress, placeResultData, id) {
      this.houseCoordinates.locality = adress.locality;
      this.houseCoordinates.lat = adress.latitude;
      this.houseCoordinates.lng = adress.longitude;
      this.houseCoordinates.postal_code = adress.postal_code;
      this.houseCoordinates.route = adress.route;
      this.houseCoordinates.street_number = adress.street_number;
    },
    handleError(error) {
      alert(error);
    },
    toPage2() {
      this.page++;
      this.div1 = false;
      this.div2 = true;
      this.div3 = false;
    },
    toPage3() {
      this.page++;
      this.div1 = false;
      this.div2 = false;
      this.div3 = true;
    },
    toPage4() {
      this.page++;
      this.div1 = false;
      this.div2 = false;
      this.div3 = false;
      this.div4 = true;
    },
    getMyPosition() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("GET MY POSITION LATITUDE", position.coords.latitude);
          console.log("GET MY POSITION Longitude", position.coords.longitude);
          this.houseCoordinates.lat = position.coords.latitude;
          this.houseCoordinates.lng = position.coords.longitude;
          let lat = position.coords.latitude;
          let long = position.coords.longitude;
          let url = "https://api.opencagedata.com/geocode/v1/json?";
          this.axios
            .get(
              `${url}q=${lat}%2C%20${long}&key=6d49bc35522047ef8dbb6e5b60acc0c3&language=fr&pretty=1`
            )
            .then((res) => {
              this.houseCoordinates.locality =
                res.data.results[0].components.state;
            });
        },
        (error) => {
          console.log(error.message);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    },
    postToDB() {
      let obj = {};
      obj.hostName = this.hostName;
      obj.hostPhone = this.hostPhone;
      obj.governorate = this.houseCoordinates.locality;
      obj.city = this.houseCoordinates.locality;
      obj.adress = this.houseCoordinates.route;
      obj.guests = this.guests;
      obj.typeOfPlace = this.typeOfPlace;
      obj.optionPet = this.optionPet;
      obj.houseName = this.houseName;
      obj.start = this.start;
      obj.end = this.end;
      obj.description = this.description;
      obj.price = this.price;
      obj.marker = this.houseCoordinates;
      obj.images = this.imagesResp;
      console.log("this.imagesRresp", this.imagesResp);
      console.log("obj.images", obj.images);
      console.log("to  DB", obj.marker);
      this.axios.post("http://localhost:5000/houses", obj).then((house) => {
        console.log("hedhi", house);
      });
    },
  },
};
</script>
<style scoped>
/* .content {
  align-content: center !important;
  margin-left: 650px;
  border-radius: 14px;
}
#center {
  margin-top: 150px;
  align-content: center !important;
}

#content2 {
  align-content: center !important;
  margin-left: 690px;
}
#content3 {
  align-content: center !important;
  margin-left: 720px;
}
#p2 {
  margin-top: -90px;
}
#p3 {
  margin-top: -61px;
} */

#hi {
  max-width: 350px;
  max-height: 350px;
}
</style>
