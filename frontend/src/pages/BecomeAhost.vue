  <template>
  <div>
    <vs-pagination progress v-model="page" :length="3" />
    <br />

    <div id="center">
      <div v-show="div1">
        <vs-input label-placeholder="Governorate" v-model="Governorate" id="content" />
        <br />
        <vs-input label-placeholder="City" v-model="city" id="content" />
        <br />
        <vs-input label-placeholder="Street Adress" v-model="adress" id="content" />
        <br />
        <br />
        <vs-select placeholder="Guests" v-model="guests" id="content">
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
        <vs-button id="content2" flat :active="active == 0" @click="fn">Get Started</vs-button>
      </div>
    </div>
    <br />
    <br />
    <div v-show="div2" id="p2">
      <vs-input label-placeholder="Name of The house" v-model="houseName" id="content" />
      <br />
      <br />
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
      <vs-button id="content3" flat :active="active == 0" @click="fn2">Next</vs-button>
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
      <vs-button id="content2" flat :active="active == 0" @click="submit">Submit To Admin</vs-button>
    </div>
  </div>
</template>
  <script>
import DatePicker from "./DatePicker";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import { vsButton, vsSelect, vsPopup } from "vuesax";
export default {
  name: "BecomeAhost",
  data: () => ({
    page: 1,
    city: "",
    active: true,
    guests: 0,
    typeOfPlace: "",
    optionPet: false,
    adress: "",
    Governorate: "",
    houseName: "",
    start: "",
    end: "",
    div1: true,
    div2: false,
    div3: false,
  }),
  methods: {
    fn() {
      this.page++;
      this.div1 = false;
      this.div2 = true;
      this.div3 = false;
    },
    fn2() {
      this.page++;
      this.div1 = false;
      this.div2 = false;
      this.div3 = true;
    },
    submit() {
      console.log("submitted");
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
  margin-top: -60px;
}
</style>