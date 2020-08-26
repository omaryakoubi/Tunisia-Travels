<template>
  <div>
    <el-popover
      ref="popover4"
      popper-class="popover"
      placement="bottom"
      width="200"
      trigger="click"
    >
      <div class="popover-body">
        <Guests v-on:numberOfGuests="guests" />
      </div>
    </el-popover>
    <div class="row">
      <div class="col-sm-4">
        <AutoComplete v-on:travelDestination="placeToTravel" />
      </div>
      <div class="col-sm-4">
        <DatePicker v-on:dateToParent="dateOfTravel" />
      </div>

      <div class="col-sm-4">
        <n-button v-popover:popover4 type="neutral">Guest</n-button>
      </div>
    </div>
    <router-link to="/MyGeolocation">
      <button @click="postTravelInformations">Submit</button>
    </router-link>
  </div>
</template>
<script>
// import Card from "../components/Card";
// import Tabs from "../components/Tabs2";
import AutoComplete from "../AutoComplete";
import DatePicker from "../DatePicker.vue";
import Guests from "../Guests.vue";
import { Popover } from "element-ui";
import Button from "../../components/Button";

export default {
  components: {
    // Card,
    // Tabs,
    Guests,
    AutoComplete,
    DatePicker,
    [Popover.name]: Popover,
    [Button.name]: Button,
  },
  data() {
    return {
      check: [],
      dest: [],
      guestsNum: [],
      active1: true,
    };
  },
  methods: {
    dateOfTravel(value) {
      this.check.push(value);
    },
    placeToTravel(value) {
      this.dest.push(value);
    },
    guests(value) {
      this.guestsNum.push(value);
    },
    postTravelInformations() {
      let check = this.check[0];
      let dest = this.dest[0];
      let guestsNum = this.guestsNum[this.guestsNum.length - 1];
      this.axios
        .post("http://localhost:5000/travelinfo", { check, dest, guestsNum })
        .then((res) => {
          console.log("axios LANDING", res);
        });
    },
  },
};
</script>
<style>
.tab-content.tab-content-padding {
  padding: 20px;
}
</style>
