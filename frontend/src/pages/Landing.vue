<template>
  <div>
    <header>
      <div class="page-header clear-filter">
        <div class="overlay"></div>
        <main-navbar />
        <video
          class="vid"
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src="../assets/videos/homevid1.mp4" type="video/mp4" />
        </video>
        <div class="content-center">
          <h1 class="title">Welcome to Tunisia Travels</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2 class="title">Wherever you go, we have a place for you.</h2>
          <h5 class="title">Choose your travel destination and Book</h5>

          <tabs />
        </div>
      </div>

      <div style="background-image:url('img/bg7.jpg')">
        <div class="section section-about-us">
          <div class="container">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto text-center">
                <h2 class="title">Need a place to stay for every trip ?</h2>
                <h3>
                  Whether you’re looking for a treehouse for the weekend or an
                  entire home for the whole family, a warm welcome awaits.
                  Behind every stay is a real person who can give you the
                  details you need to check in and feel at home.
                </h3>
              </div>
            </div>
            <div class="separator separator-primary"></div>
            <div class="section-story-overview">
              <div class="row">
                <div class="col-md-6">
                  <div
                    class="image-container image-left"
                    style="background-image: url('https://cf.bstatic.com/images/hotel/max1280x900/689/68905470.jpg')"
                  >
                    <p class="blockquote blockquote-info">
                      “I really liked the warm and professional welcome, the
                      beauty of the house, its architecture and decoration, the
                      nooks where you can read, meditate or chat, the patio, the
                      terrace with a breathtaking view of the city, the bedroom
                      very beautiful and comfortable, the bathroom very clean
                      and nicely decorated with beautiful azulejos, the
                      breakfast delicious and plentiful. I felt in a dreamy axis
                      between Tunisian Medina, Lisbon Moorish district and
                      Andalusian nostalgia. I absolutely recommend! "
                      <br />
                      <br />
                      <small>-Maria</small>
                    </p>
                  </div>
                  <div
                    class="image-container"
                    style="background-image: url('https://cf.bstatic.com/images/hotel/max1280x900/233/233782750.jpg')"
                  ></div>
                </div>
                <div class="col-md-5">
                  <div
                    class="image-container image-right"
                    style="background-image: url('https://cf.bstatic.com/images/hotel/max1024x768/689/68905025.jpg')"
                  ></div>
                  <br />
                  <br />
                  <h3>
                    So why you choose Dar Ben Gacem?
                  </h3>
                  <br />
                  <p>
                    Located in the Medina of Tunis, 12 km from Tunis-Carthage
                    International Airport, Dar Ben Gacem is a traditional-style
                    hotel with free Wi-Fi and a terrace overlooking the city.
                  </p>
                  <p>
                    Decorated in a traditional Tunisian style, its rooms have
                    air conditioning, satellite TV and a private bathroom with
                    shower.
                  </p>
                  <p>
                    Dar Ben Gacem serves breakfast every morning. You can enjoy
                    it on the terrace or in the traditional patio lounge.
                  </p>
                  <p>
                    Dar Ben Gacem is a 20-minute drive from Carthage Golf Course
                    and 14 km from Sidi Boussaid Port.
                  </p>
                  <p>
                    Couples particularly like the location of this property.
                    They give it the score of 9.5 for a stay for two.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section section-team text-center">
          <div class="line"></div>
          <div class="container">
            <h2 class="title">Simple steps to get started</h2>
            <div class="team">
              <div class="row">
                <div class="col-md-3">
                  <div class="team-player">
                    <img
                      src="https://a0.muscache.com/pictures/1effbe54-be33-4f17-a85f-deac9deaff23.jpg"
                      alt="Thumbnail Image"
                    />
                    <h5 class="title">Filter down to your perfect fit</h5>
                    <p class="description">
                      Personalize your search with filters to get exactly what
                      you want.
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="team-player">
                    <img
                      src="https://a0.muscache.com/pictures/3b171a0c-7347-4da7-b89a-38bf675be244.jpg"
                      alt="Thumbnail Image"
                    />
                    <h5 class="title">Dig into the details</h5>
                    <br />
                    <p class="description">
                      Check out the photos. Then, read guest reviews from past
                      reservations to learn what it’s like in person.
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="team-player">
                    <img
                      src="https://a0.muscache.com/pictures/8442231d-bd79-4fba-b8e5-b78e49effe63.jpg"
                      alt="Thumbnail Image"
                    />
                    <h5 class="title">Book with peace of mind</h5>
                    <br />

                    <p class="description">
                      We keep your info safe and follow global security
                      standards to process your payments.
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="team-player">
                    <img
                      src="https://a0.muscache.com/pictures/5b20c5f2-2bcb-4807-b75c-a05980f588d5.jpg"
                      alt="Thumbnail Image"
                    />
                    <h5 class="title">Arrive and enjoy!</h5>
                    <br />

                    <p class="description">
                      Your host is only a message away if you have any
                      questions. They can also offer local tips and advice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section section-team text-center">
            <div class="line"></div>
            <div class="container">
              <h2 class="title">Here is our team</h2>
              <div class="team">
                <div class="row">
                  <div class="col-md-3">
                    <div class="team-player">
                      <img
                        src="img/hou.jpg"
                        alt="Thumbnail Image"
                        class="rounded-circle img-fluid img-raised"
                      />
                      <h4 class="title">Houssem Edd. Abdelli</h4>
                      <p class="category text-primary">Scrum Master</p>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="team-player">
                      <img
                        src="img/ferrr.png"
                        alt="Thumbnail Image"
                        class="rounded-circle img-fluid img-raised"
                      />
                      <h4 class="title">Firas Mrad</h4>
                      <p class="category text-primary">Product Owner</p>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="team-player">
                      <img
                        src="img/omar.jpg"
                        alt="Thumbnail Image"
                        class="rounded-circle img-fluid img-raised"
                      />
                      <h4 class="title">Omar Yakoubi</h4>
                      <p class="category text-primary">Member</p>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="team-player">
                      <img
                        src="img/safa.jpg"
                        alt="Thumbnail Image"
                        class="rounded-circle img-fluid img-raised"
                      />
                      <h4 class="title">Safa Hamrouni</h4>
                      <p class="category text-primary">Member</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import Button from "../components/Button.vue";
import FormGroupInput from "../components/formGroupInput.vue";
import MainNavbar from "./MainNavbar.vue";
import { vsButton, vsSelect, vsPopup } from "vuesax";
import Tabs from "./components/Tabs";
import axios from "axios";
export default {
  name: "landing",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    MainNavbar,
    Tabs,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.content-center {
  z-index: 0;
}
.blockquote {
  width: 500px !important;
}
.team-player img {
  min-width: 150px !important;
  height: 100px !important;
}
.line {
  width: 50%;
  margin-left: 25%;
  border-bottom: 1px solid black;
  /* position: absolute; */
}
.vid {
  /* margin-top: -100px; */
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 120%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0;
  z-index: 0;
}
</style>
