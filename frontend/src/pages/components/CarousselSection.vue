<template>
  <div class="section" id="carousel">
    <div class="container">
      <div class="title">
        <h4>Carousel</h4>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <el-carousel height="500px" >
            <el-carousel-item v-for="(img, index) in images" :key="index">
              <img
                class="d-block"
                :src="img"
              />
              
            </el-carousel-item>
           
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import router from "../../router";
import { Carousel, CarouselItem } from "element-ui";

export default {
  name: "Caroussel",
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
  },
  data() {
    return {
      images: [],
      currentNumber: 0,
      id: "",
      img:""
    };
  },

  mounted() {
    this.getInfo();
    console.log('zz',this.images);
  },
  created() {
    this.id = this.$route.params.id;
  },

  methods: {
    getInfo() {
      axios
        .get(`http://localhost:5000/houseSelected/${this.id}`)
        .then((res) => {
          let response = res.data;

          response.images.forEach((houseUrls) => {
            this.images.push(houseUrls.url);
          });
            console.log('xx', res.data.images);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
