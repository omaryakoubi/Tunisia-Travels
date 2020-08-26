  <template>
  <div class="center con-pagination">
    <vs-pagination progress v-model="page" :length="2" />
    <br />
    <div v-show="show">
      <div class="center content-inputs">
        <vs-input label-placeholder="City" v-model="city" />
        {{city}}
      </div>
      <br />
      <div class="center">
        <vs-select placeholder="Guests" v-model="guests">
          {{guests}}
          <vs-option label="1" value="1">1</vs-option>
          <vs-option label="2" value="2">2</vs-option>
          <vs-option label="3" value="3">3</vs-option>
          <vs-option label="4" value="4">4 +</vs-option>
        </vs-select>
        <br />
        <vs-button flat :active="active == 0" @click="fn">Get Started</vs-button>
      </div>
    </div>
    <br />
    <br />
    <div v-show="!show">
      <vs-input type="text"></vs-input>
      <label>Availability from</label>
      <vs-input type="date"></vs-input>
      <label>Availability from</label>
      <vs-input type="date"></vs-input>
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
    value: "",
    city: "",
    active: true,
    show: true,
    adress: "",
    guests: "",
  }),
  methods: {
    fn() {
      this.active = !this.active;
      this.page++;
      this.show = !this.show;
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