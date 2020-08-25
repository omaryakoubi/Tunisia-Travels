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
        <vs-select placeholder="Tell us about your place" v-model="type">
          <vs-option label="Entire Place" value="1">Entire Place</vs-option>
          <vs-option label="Private room" value="2">Private room</vs-option>
          <vs-option label="Shared room" value="3">Shared room</vs-option>
        </vs-select>
        <vs-button flat :active="active == 0" @click="fn">Get Started</vs-button>
      </div>
    </div>
    <br />
    <br />
    <div v-show="!show">
      <div class="center content-inputs">
        <vs-input label-placeholder="Street Adress" />
        <br />
        <vs-input label-placeholder="Phone Number" />
        <br />
        <vs-input label-placeholder="ZIP Code" />
        <br />
        <vs-input type="date" label="Disponibility From" />
        <br />
        <vs-input type="date" label="To" />
        <br />
        <input type="file" style="background: transparent" />
        <br />
        <!-- <vs-button flat :active="active == 0" @click="fn">Get Started</vs-button> -->
      </div>
    </div>
    <br />
    <br />
  </div>
</template>
  <script>
import DatePicker from "./DatePicker";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; //Vuesax style
export default {
  name: "BecomeAhost",
  components: {},
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