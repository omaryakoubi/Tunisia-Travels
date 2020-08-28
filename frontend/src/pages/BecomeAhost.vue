  <template>
  <form enctype="multipart/form-data">
    <div>
      <vs-pagination progress v-model="page" :length="3" />
      <div id="center">
        <div v-show="div1">
          <vs-input label-placeholder="Host Name" v-model="hostName" id="content" />
          <br />
          <vs-input label-placeholder="Host Phone" v-model="hostPhone" id="content" />
          <br />
          <vs-input label-placeholder="Governorate" v-model="governorate" id="content" />
          <br />
          <vs-input label-placeholder="City" v-model="city" id="content" />
          <br />
          <vs-input label-placeholder="Street Adress" v-model="adress" id="content" />
          <br />
          <br />
          <vs-select placeholder="Guests allowed" v-model="guests" id="content">
            <vs-option label="1" value="1">1</vs-option>
            <vs-option label="2" value="2">2</vs-option>
            <vs-option label="3" value="3">3</vs-option>
            <vs-option label="4" value="4">4 +</vs-option>
          </vs-select>
          <br />
          <vs-select placeholder="Type of Place" v-model="typeOfPlace" id="content">
            <vs-option label="Entire Place" value="Entire Place">Entire Place</vs-option>
            <vs-option label="Private Room" value="Private Room">Private Room</vs-option>
            <vs-option label="Shared Room" value="Shared Room">Shared Room</vs-option>
          </vs-select>
          <vs-checkbox v-model="optionPet" id="content">Pets Allowed</vs-checkbox>
          <vs-button id="content2" flat :active="active == 0" @click="toPage2">Get Started</vs-button>
        </div>
      </div>
      <br />
      <br />
      <div v-show="div2" id="p2">
        <vs-input label-placeholder="Name of The house" v-model="houseName" id="content" />
        <br />
        <vs-input label-placeholder="Describe your house" v-model="description" id="content" />
        <br />
        <vs-input v-model="price" placeholder="Price per Night" id="content">
          <template #icon>
            <span class="material-icons">euro</span>
          </template>
        </vs-input>
        <label id="content">Availability from</label>
        <vs-input type="date" v-model="start" id="content"></vs-input>
        <br />
        <br />
        <label id="content">Availability to</label>
        <vs-input type="date" v-model="end" id="content"></vs-input>
        <br />
        <br />
        <label id="content">Upload Photos of your house</label>
        <vs-input id="content" type="file"></vs-input>
        <br />
        <vs-button id="content3" flat :active="active == 0" @click="toPage3">Next</vs-button>
      </div>
      <br />
      <br />
      <div v-show="div3" id="p3">
        <label id="content">Upload Your CIN</label>
        <vs-input id="content" type="file"></vs-input>
        <br />
        <br />
        <label id="content">Upload Your Passport</label>
        <vs-input id="content" type="file"></vs-input>
        <br />
        <br />
        <label id="content">Upload Your MELKYA</label>
        <vs-input id="content" type="file"></vs-input>
        <br />
        <vs-button id="content2" flat :active="active == 0" @click="postToDB">Submit to BACK</vs-button>
      </div>
    </div>
  </form>
</template>
  <script>
import DatePicker from "./DatePicker";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import { vsButton, vsSelect, vsPopup } from "vuesax";
export default {
  name: "BecomeAhost",
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
  }),
  methods: {
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
    postToDB() {
      let obj = {};
      obj.hostName = this.hostName;
      obj.hostPhone = this.hostPhone;
      obj.governorate = this.governorate;
      obj.city = this.city;
      obj.adress = this.adress;
      obj.guests = this.guests;
      obj.typeOfPlace = this.typeOfPlace;
      obj.optionPet = this.optionPet;
      obj.houseName = this.houseName;
      obj.start = this.start;
      obj.end = this.end;
      obj.description = this.description;
      obj.price = this.price;
      console.log(obj);
      this.axios.post("http://localhost:5000/houses", obj).then((house) => {
        console.log(house);
      });
    },
  },
};
</script>
<style  scoped>
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