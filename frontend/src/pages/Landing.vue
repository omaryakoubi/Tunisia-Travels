<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/header.jpg')"
      >
      </parallax>

      <main-navbar />
      <div class="content-center">
        <h1 class="title">Welcome to Tunisia Travels</h1>
        <h3 class="title">Choose your travel destination and Book</h3>
        <!-- <div>
          <br />
          <br />
          <br />
          <div class="centerx">
            <vs-button
              @click="active1 = !active1"
              color="primary"
              type="filled"
              >{{ !active1 ? "Guests" : "Close" }}</vs-button
            >
            <vs-alert :active.sync="active1">
              <Guests v-on:numberOfGuests="guests" />
            </vs-alert>
            <button @click="postTravelInformations">Submit</button>
            <br />
    </div>
    <div>
      <div class="page-header page-header-small">
        <parallax class="page-header-image" style="background-image: url('img/bg6.jpg')"></parallax>
        <div class="content-center">
          <div class="container">
            <h1 class="title">Welcome to Tunisia Travels</h1>
            <h3 class="title">Choose your travel destination and Book</h3>
            <div class="text-center">
              <DatePicker v-on:dateToParent="dateOfTravel" />
              <AutoComplete v-on:travelDestination="placeToTravel" />
              <div class="centerx">
                <vs-button
                  @click="active1=!active1"
                  color="primary"
                  type="filled"
                >{{!active1?'Guests':'Close'}}</vs-button>
                <vs-alert :active.sync="active1">
                  <Guests v-on:numberOfGuests="guests" />
                </vs-alert>
              </div>
              <router-link to="/MyGeolocation">
                <button @click="postTravelInformations">Submit</button>
              </router-link>
              <!-- <button>NearBy</button> -->
              <br />
            </div>
          </div>
        </div> -->
        <tabs />
      </div>
    </div>
    <div style="background-image:url('img/bg7.jpg')">
      <div class="section section-about-us">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">Need a help to choose a place ?</h2>
              <h3 class="title">Check the temperature</h3>
            </div>
          </div>
          <div class="separator separator-primary"></div>
          <div class="section-story-overview">
            <div class="row">
              <div class="col-md-6">
                <div
                  class="image-container image-left"
                  style="background-image: url('img/login.jpg')"
                >
                  <p class="blockquote blockquote-primary">
                    "Over the span of the satellite record, Arctic sea ice has
                    been declining significantly, while sea ice in the
                    Antarctichas increased very slightly"
                    <br />
                    <br />
                    <small>-NOAA</small>
                  </p>
                </div>
                <!-- Second image on the left side of the article -->
                <div
                  class="image-container"
                  style="background-image: url('img/bg3.jpg')"
                ></div>
              </div>
              <div class="col-md-5">
                <!-- First image on the right side, above the article -->
                <div
                  class="image-container image-right"
                  style="background-image: url('img/bg1.jpg')"
                ></div>
                <h3>
                  So what does the new record for the lowest level of winter ice
                  actually mean
                </h3>
                <p>
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens with climate change. Even if the Arctic
                  continues to be one of the fastest-warming regions of the
                  world, it will always be plunged into bitterly cold polar dark
                  every winter. And year-by-year, for all kinds of natural
                  reasons, there’s huge variety of the state of the ice.
                </p>
                <p>
                  For a start, it does not automatically follow that a record
                  amount of ice will melt this summer. More important for
                  determining the size of the annual thaw is the state of the
                  weather as the midnight sun approaches and temperatures rise.
                  But over the more than 30 years of satellite records,
                  scientists have observed a clear pattern of decline,
                  decade-by-decade.
                </p>
                <p>
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens with climate change. Even if the Arctic
                  continues to be one of the fastest-warming regions of the
                  world, it will always be plunged into bitterly cold polar dark
                  every winter. And year-by-year, for all kinds of natural
                  reasons, there’s huge variety of the state of the ice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-team text-center">
        <div class="container">
          <h2 class="title">Here is our team</h2>
          <div class="team">
            <div class="row">
              <div class="col-md-4">
                <div class="team-player">
                  <img
                    src="img/avatar.jpg"
                    alt="Thumbnail Image"
                    class="rounded-circle img-fluid img-raised"
                  />
                  <h4 class="title">Romina Hadid</h4>
                  <p class="category text-primary">Model</p>
                  <p class="description">
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some
                    <a href="#">links</a> for people to be able to follow them
                    outside the site.
                  </p>
                  <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </div>
              </div>
              <div class="col-md-4">
                <div class="team-player">
                  <img
                    src="img/ryan.jpg"
                    alt="Thumbnail Image"
                    class="rounded-circle img-fluid img-raised"
                  />
                  <h4 class="title">Ryan Tompson</h4>
                  <p class="category text-primary">Designer</p>
                  <p class="description">
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some
                    <a href="#">links</a> for people to be able to follow them
                    outside the site.
                  </p>
                  <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="col-md-4">
                <div class="team-player">
                  <img
                    src="img/eva.jpg"
                    alt="Thumbnail Image"
                    class="rounded-circle img-fluid img-raised"
                  />
                  <h4 class="title">Eva Jenner</h4>
                  <p class="category text-primary">Fashion</p>
                  <p class="description">
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some
                    <a href="#">links</a> for people to be able to follow them
                    outside the site.
                  </p>
                  <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                    <i class="fab fa-google-plus"></i>
                  </a>
                  <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../components/Button.vue";
import FormGroupInput from "../components/formGroupInput.vue";
import MainNavbar from "./MainNavbar.vue";
import { vsButton, vsSelect, vsPopup } from "vuesax";
import Tabs from "./components/Tabs";

export default {
  name: "landing",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    MainNavbar,
    Tabs,
    DatePicker,
    AutoComplete,
    Guests,
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
<style scoped>
.content-center {
  z-index: 0;
}
</style>
