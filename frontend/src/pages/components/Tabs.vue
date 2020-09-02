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
        <n-button v-popover:popover4 type="neutral">Select guests</n-button>
      </div>
    </div>
    <br />
    <br />
    <div class="row" style="margin-left:43%">
      <n-button @click="postTravelInformations" type="danger" round>
        <i class="fa fa-search"></i> Search
      </n-button>
    </div>
  </div>
</template>
<script>
import AutoComplete from "../AutoComplete";
import DatePicker from "../DatePicker.vue";
import Guests from "../Guests.vue";
import { Popover } from "element-ui";
import Button from "../../components/Button";

export default {
  components: {
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
          this.$router.push("/MyGeolocation").catch(() => {});
        });
    },
  },
};
</script>
<style scoped>
.tab-content.tab-content-padding {
  padding: 20px;
}
.col-sm-4 {
  margin: 0px !important;
}
.el-input__inner {
  border-radius: 25px !important;
}
.btn-neutral {
  border-radius: 25px !important;
  margin-top: 1px !important;
}
.btn:not(:disabled):not(.disabled) {
  inline-size: 222px !important;
  /* color: grey; */
  margin-left: -50px;
}
.menu-btn[data-v-5bf3a84d] {
  place-content: center;
  width: 150px;
}
.dropdown .dropdown-menu {
  width: 13px !important;
}
.btn btn-neutral el-popover__reference {
  margin: 4px;
}
#destination[data-v-55287aa8] {
  height: 39px !important;
  margin-left: 2px;
}
</style>
