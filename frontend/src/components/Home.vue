<template>
  <div class="home">
    <header>
      <!-- <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="../assets/videos/homevid1.mp4" type="video/mp4" />
      </video>-->
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/#">Become a host</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#credit">Earn credit</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#help">Help</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#register">SignUp</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#login">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <form
      class="container mt-3 rounded"
      style="
          margin: 150px;
          max-width: 420px;
          padding: 30px 30px 60px 30px;
          background-color: white;
          font-family: Helvetica;
          font-weight: 600;
           color: #484848;
        "
    >
      <h1
        style="font-size: 2em;
         font-weight: bold;
         margin-bottom: 15px;"
      >Book unique home and experiences.</h1>
      <br />
      <br />
      <vue-google-autocomplete
        :country="['TN']"
        types="(cities)"
        id="destination"
        class="form-control"
        placeholder="Choose a destination"
        v-on:placechanged="getFromAddress"
        v-on:error="handleError"
      ></vue-google-autocomplete>
      <br />
      <br />
      <div class="input-group" style=" font-size: small;">
        <DatePickers />
      </div>
      <br />
      <br />
      <div class="form-group" style=" font-size: small;">
        <label>GUESTS</label>
        <br />
        <select class="custom-select">
          <option selected>1 guest</option>
          <option value="Adults">Adults</option>
          <option value="Children">Children</option>
          <option value="Infants">Infant</option>
        </select>
        <br />
      </div>
      <div class="form-group">
        <button
          type="submit"
          class="btn btn-primary btn-lg"
          style="float: right;"
          v-on:click.prevent="submit"
        >Search</button>
      </div>
    </form>
  </div>
</template>


<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
import DatePickers from "./DatePickers";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "Home",
  components: { VueGoogleAutocomplete, DatePickers },
  data: function () {
    return {
      destination: {},
    };
  },
  methods: {
    getFromAddress(destination) {
      this.destination = destination;
    },
    handleError(error) {
      alert(error);
    },
    submit() {
      this.$emit("destination", this.destination);
    },
  },
};
</script>



<style scoped>
header {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 30px;
}
.navbar.navbar-expand-lg.navbar-light li a {
  color: red;
  margin-bottom: 20px;
  padding: 14px 16px;
  font-size: 15px;
  font-weight: 500;
}
.container:hover {
  opacity: 0.9;
}
.navbar.navbar-expand-lg.navbar-light li a:hover {
  color: black;
  border-bottom: 0.05px solid black;
}
header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

header .container {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0;
  z-index: 1;
}

@media (pointer: coarse) and (hover: none) {
  header {
    background: url("https://source.unsplash.com/XT5OInaElMw/1600x900") black
      no-repeat center center scroll;
  }
  header video {
    display: none;
    margin-top: 10px;
  }
}
</style>
