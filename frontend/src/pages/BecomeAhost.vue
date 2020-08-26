  <template>
  <div class="center con-pagination">
    <vs-pagination progress v-model="page" :length="2" />
    <br />
    <div v-show="show">
      <div class="center content-inputs">
        <vs-input label-placeholder="State" v-model="state" />
        {{state}}
        <br />
        <vs-input label-placeholder="City" v-model="city" />
        {{city}}
        <br />
        <vs-input label-placeholder="Street Adress" v-model="adress" />
        {{adress}}
        <br />
      </div>
      <br />
      <div class="center">
        {{guests}}
        <vs-select placeholder="Guests" v-model="guests">
          <vs-option label="1" value="1">1</vs-option>
          <vs-option label="2" value="2">2</vs-option>
          <vs-option label="3" value="3">3</vs-option>
          <vs-option label="4" value="4">4 +</vs-option>
        </vs-select>
        <br />
        {{typeOfPlace}}
        <vs-select placeholder="Type of Place" v-model="typeOfPlace">
          <vs-option label="Entire Place" value="Entire Place">Entire Place</vs-option>
          <vs-option label="Private Room" value="Private Room">Private Room</vs-option>
          <vs-option label="Shared Room" value="Shared Room">Shared Room</vs-option>
        </vs-select>
        {{optionPet}}
        <div class="center con-checkbox">
          <vs-checkbox v-model="optionPet">Pets Allowed</vs-checkbox>
        </div>
        <vs-button flat :active="active == 0" @click="fn">Get Started</vs-button>
      </div>
    </div>
    <br />
    <br />
    <div v-show="!show">
      <vs-input label-placeholder="Name of The house" v-model="houseName" />
      <label>Availability from</label>
      <vs-input type="date"></vs-input>
      <label>Availability from</label>
      <vs-input type="date"></vs-input>
      <vs-button flat :active="active == 0" @click="fn2">Submit</vs-button>
    </div>
    <br />
    <br />
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
    show: true,
    guests: 0,
    typeOfPlace: "",
    optionPet: false,
    adress: "",
    state: "",
    houseName: "",
  }),
  methods: {
    fn() {
      this.active = !this.active;
      this.page++;
      this.show = !this.show;
    },
    fn2() {
      alert("submit");
    },
  },
};
</script>
<style  scoped>
.container {
  position: relative;
}

.child {
  width: 50px;
  height: 50px;
  background-color: red;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
}
</style>