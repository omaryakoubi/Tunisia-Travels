<template>

  <div>
    <div class="grid">
      <image-slider>
        <p>
        <a @click="prev">Previous</a> || <a @click="next">Next</a>
        </p>
        <img
        :src="images[Math.abs(currentNumber) % images.length]"
        v-on:mouseover="stopRotation"
        v-on:mouseout="startRotation"
        class="slides"
        />
      </image-slider>
      <div class="price">
        <h2>price/night</h2>
        <DatePicker />
        <Guests />
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
    <h1>House Name</h1>
    <h3>House description</h3>
  </div>

</template>

<script>
import DatePicker from './DatePicker'
import Guests from './Guests'
export default {
    name: "SelectedHouse",
    components: {
      DatePicker,
      Guests
    },
    data() {
      return {
      images: ['http://i.imgur.com/vYdoAKu.jpg', 'http://i.imgur.com/PUD9HQL.jpg', 'http://i.imgur.com/Lfv18Sb.jpg', 'http://i.imgur.com/tmVJtna.jpg', 'http://i.imgur.com/ZfFAkWZ.jpg'],
      currentNumber: 0,
      timer: null
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
  margin-left: 25%;
  margin-top: 8%;
  width: 400px;
  height: 500px;
  border: black 3px solid;
}
.grid {
  display: flex;
}
.slides {
  margin-left: 15%;
  margin-top: 10%;
  background-size:cover;
  width:500px;
  height:500px;
}
  
</style>>
