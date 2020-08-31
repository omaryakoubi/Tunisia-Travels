<template>
<div>
    <header>
      <div class="slides">
          <h1>houseName</h1>
          <image-slider>
            <img
            :src="images[Math.abs(currentNumber) % images.length]"
            v-on:mouseover="stopRotation"
            v-on:mouseout="startRotation"
            style="height:500px; width:85%; margin-left:50px"
            />       
            <p style="margin-left: 45%">
            <a @click="prev">Previous</a> || <a @click="next">Next</a>
            </p>
          </image-slider>
      </div>
      </header>
    <body>
        <div>
          <h3>description/ governate/city/address/typeOfPlace</h3> 
          <h3>HostName</h3>
          <option value="optionPet">Pets</option>
          <div class="price ">
          <h3>price/night</h3>
          <div class="info ">
            <div class="dateInfo"><DatePicker hidden/></div>
            <div class="guestsNum">guest number</div>
          </div>
          <!-- <Guests /> -->
          <div class="center">
        <vs-button
        @click="$router.push('/payment')"
          block>
          <i class='bx bxs-paint-roll' 
        ></i>Book
        </vs-button>
      </div>
        </div>
          </div>
    
        <div class="map">
          Geolocation
          <GmapMap
            ref="map"
            :center="coordinates"
            :zoom="15"
            style="width:80% ; height:400px"
            map-type-id="terrain"
          >
            <GmapMarker
              :position="coordinates"
              :clickable="true"
              :draggable="true"
            />
          </GmapMap>
        </div>
    </body>
    
</div>
</template>

<script>
import DatePicker from './DatePicker'
// import Guests from './Guests'
import GmapMarker from "vue2-google-maps/src/components/marker";


export default {
    name: "SelectedHouse",
    components: {
      DatePicker,
      // Guests,
      GmapMarker
    },
    data() {
      return {
      images: ['https://a0.muscache.com/im/pictures/d69b37f2-3f5b-490d-9f0e-d716381b7c34.jpg?aki_policy=xx_large',
       'https://a0.muscache.com/im/pictures/50af384a-a7a8-4085-a927-5aacf124673e.jpg?aki_policy=xx_large',
        'https://a0.muscache.com/im/pictures/6fa744bc-4eb5-4b3b-8e27-ad53514a9e66.jpg?aki_policy=xx_large',
         'https://a0.muscache.com/im/pictures/0b003eb0-90db-4965-ba1b-4ec5ebf43a2c.jpg?aki_policy=xx_large'],
      currentNumber: 0,
      timer: null,
      coordinates: {
        lat: 0,
        lng: 0,
        locality: "",
        start: "",
        end: "",
      },
      }
 },

 mounted: function () {
 this.startRotation();
 },

 methods: {
 startRotation: function() {
 this.timer = setInterval(this.next, 3000);
 },

 stopRotation: function() {
 clearTimeout(this.timer);
 this.timer = null;
 },

 next: function() {
 this.currentNumber += 1
 },
 prev: function() {
 this.currentNumber -= 1
 }
 }
}

</script>

<style  scoped>
.fade-enter-active, .fade-leave-active {
 transition: all 0.8s ease;
 overflow: hidden;
 visibility: visible;
 opacity: 1;
 position: absolute;
}
.fade-enter, .fade-leave-to {
 opacity: 0;
 visibility: hidden;
}
.price {
  position: relative;
 margin-left:70%; 
  width: 400px;
  height: 500px;
  border:1px solid rgb(221, 221, 221); 
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  padding: 24px;
}
.slides {
  margin-left: 10%;
  margin-top: 5%;
  width:80%;
}
.map {
  margin-top: 40px;
}
.info {
  margin: auto;
  width: 75%;
  height: 100px;
  border: gray 2px solid;
  border-radius: 10px;
}
.flex {
display: flex;
border: black 2px solid;

}
.dateInfo {
  height:50px;
  background: linear-gradient(gray, gray) no-repeat center/2px 100%;
  border: 1px gray solid;
  border-radius: 10px;
}
  
</style>>
