<template>
  <div class="section" id="carousel">
    <div class="container">
      <div class="title">
        <h4>Carousel</h4>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <el-carousel height="500px">
            <el-carousel-item>
              <img
                class="d-block"
                src="../../../public/img/bg1.jpg"
                alt="First slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Nature, United States</h5>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img
                class="d-block"
                src="../../../public/img/bg3.jpg"
                alt="Second slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Somewhere Beyond, United States</h5>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img
                class="d-block"
                src="../../../public/img/bg4.jpg"
                alt="Third slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Yellowstone National Park, United States</h5>
              </div>
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
    };
  },

  mounted() {
    this.startRotation();
    this.getInfo();
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
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
