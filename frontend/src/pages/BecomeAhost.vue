  <template>
  <form enctype="multipart/form-data">
    <div>
      <vs-pagination progress v-model="page" :length="4" />
      <div id="center">
        <div v-show="div1">
          <vs-input label-placeholder="Host Name" v-model="hostName" id="content" />
          <vs-input label-placeholder="Host Phone" v-model="hostPhone" id="content" />
          <vs-select placeholder="Guests allowed" v-model="guests" id="content">
            <vs-option label="1" value="1">1</vs-option>
            <vs-option label="2" value="2">2</vs-option>
            <vs-option label="3" value="3">3</vs-option>
            <vs-option label="4" value="4">4 +</vs-option>
          </vs-select>
          <vs-select placeholder="Type of Place" v-model="typeOfPlace" id="content">
            <vs-option label="Entire Place" value="Entire Place">Entire Place</vs-option>
            <vs-option label="Private Room" value="Private Room">Private Room</vs-option>
            <vs-option label="Shared Room" value="Shared Room">Shared Room</vs-option>
          </vs-select>
          <vs-checkbox v-model="optionPet" id="content">Pets Allowed</vs-checkbox>
          <vs-button id="content2" flat :active="active == 0" @click="toPage2">Get Started</vs-button>
        </div>
      </div>
      <div v-show="div2" id="p2">
        <vs-input label-placeholder="Name of The house" v-model="houseName" id="content" />
        <vs-input label-placeholder="Describe your house" v-model="description" id="content" />
        <vs-input v-model="price" placeholder="Price per Night" id="content">
          <template #icon>
            <span class="material-icons">euro</span>
          </template>
        </vs-input>
        <label id="content">Availability from</label>
        <vs-input type="date" v-model="start" id="content"></vs-input>
        <label id="content">Availability to</label>
        <vs-input type="date" v-model="end" id="content"></vs-input>
        <vs-button id="content3" flat :active="active == 0" @click="toPage3">Next</vs-button>
      </div>
      <br />
      <br />
      <br />
      <div v-show="div3" id="p3">
        <vue-google-autocomplete
          :country="['TN']"
          types="(cities)"
          id="governorate"
          class="content vs-input"
          placeholder="Choose a governorate"
          v-on:error="handleError"
        ></vue-google-autocomplete>
        <!-- <vs-input label-placeholder="City" v-model="city" id="content" /> -->
        <!-- <vs-input label-placeholder="Street Adress" v-model="adress" id="content" /> -->
        <vue-google-autocomplete
          :country="['TN']"
          id="adress"
          class="content vs-input"
          v-on:placechanged="getStreetAdress"
          placeholder="Choose an adress"
        ></vue-google-autocomplete>
        <vs-button
          id="content3"
          flat
          :active="active == 0"
          @click="getMyPosition"
        >Or Detect My Position</vs-button>
        <vs-button id="content3" flat :active="active == 0" @click="toPage4">Next</vs-button>
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
            :icon="{ url: require('../../src/assets/images/google-maps-google-map-maker-computer-icons-house-png-favpng-e46wqcvLcMYam3a7sGYU3K5ws.jpg')}"
          />
        </GmapMap>
      </div>
      <br />
      <br />
      <br />
      <div v-show="div4" id="p4">
        <label id="content">Upload Photos of your house</label>
        <vs-input id="content" type="file"></vs-input>
        <label id="content">Upload Your CIN</label>
        <vs-input id="content" type="file"></vs-input>
        <label id="content">Upload Your Passport</label>
        <vs-input id="content" type="file"></vs-input>
        <label id="content">Upload Your MELKYA</label>
        <vs-input id="content" type="file"></vs-input>
        <vs-button id="content2" flat :active="active == 0" @click="postToDB">Submit to BACK</vs-button>
      </div>
    </div>
  </form>
</template>
  <script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
import AutoComplete from "./AutoComplete.vue";
import DatePicker from "./DatePicker";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import { vsButton, vsSelect, vsPopup } from "vuesax";
export default {
  name: "BecomeAhost",
  components: { VueGoogleAutocomplete },
  data: () => ({
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
          // console.log("here", position.coords);
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
      console.log(obj);
      this.axios.post("http://localhost:5000/houses", obj).then((house) => {
        console.log("hedhi", house);
      });
    },
  },
};
</script>
<style  scoped>
.content {
  align-content: center !important;
  margin-left: 650px;
  border-radius: 14px;
}
#center {
  margin-top: 150px;
  align-content: center !important;
}
#content {
  align-content: center !important;
  margin-left: 650px;
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
}
</style>