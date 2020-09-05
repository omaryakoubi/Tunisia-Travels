<template>
  <div class="card">
    <div class="row collections">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead class="text-primary">
              <tr>
                <th>Host Name</th>

                <th>City</th>

                <th>Type Of Place</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody v-for="(an, index) in announcement" :key="index">
              <tr>
                <td>{{ an.hostName }}</td>

                <td>{{ an.city }}</td>

                <td>{{ an.typeOfPlace }}</td>

                <td>
                  <n-button
                    type="button"
                    class="btn el-tooltip btn-icon btn-info btn-sm"
                    aria-describedby="el-tooltip-4430"
                    tabindex="0"
                    @click="modals.info = true"
                    @click.prevent="popup(an._id)"
                  >
                    <i class="fa fa-info"></i>
                  </n-button>
                  <n-button
                    type="button"
                    class="btn el-tooltip btn-icon btn-success btn-sm"
                    aria-describedby="el-tooltip-6999"
                    tabindex="0"
                    @click.prevent="accepts(an._id)"
                  >
                    <i class="fa fa-check"></i>
                  </n-button>
                  <n-button
                    type="button"
                    class="btn el-tooltip btn-icon btn-danger btn-sm"
                    aria-describedby="el-tooltip-4804"
                    tabindex="0"
                    @click.prevent="deleteHouse(an._id)"
                  >
                    <i class="fa fa-times"></i>
                  </n-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <modal :show.sync="modals.info" headerClasses="justify-content-center">
      <template slot="header">
        <h2 slot="header" class="title title-up"></h2>
      </template>
      <div v-for="(img, index) in images" :key="index"> 
        <img
        :src="img"
        alt
      /></div>
     
      <h2 style="color: white">{{houseName}}</h2>
      <h3 style="color: white">{{adress}}</h3>
      <h3 style="color: white">{{description}}</h3>
      <h4 style="color: white">{{hostPhone}}</h4>
      <h4 style="color: white">{{price}}TND/night</h4>


      <div class="footer">
        <div class="pull-right"></div>
      </div>
    </modal>
  </div>
</template>
<script>
import Button from "../../components/Button.vue";
import axios from "axios";
import Modal from "../components/Modal";

export default {
  components: {
    [Button.name]: Button,
    Modal,
  },
  data() {
    return {
      announcement: [],
      modals: {
        info: false,
      },
      images: [],
      houseName : '',
      adress: '',
      description: '',
      hostPhone: 0,
      price: 0,
    };
  },
  mounted() {
    this.announcements();
  },
  methods: {
    announcements() {
      axios
        .get("http://localhost:5000/announce")
        .then((res) => {
          this.announcement = res.data;
          console.log('res',res.data);
        })
        .catch((err) => console.log(err));
    },
    accepts(id) {
      axios
        .post(`http://localhost:5000/announce/${id}`)
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => console.log(err));
    },
    deleteHouse(id) {
      axios
        .delete(`http://localhost:5000/announce/${id}`)
        .then((res) => {
          console.log("house deleted");
        })
        .catch((err) => console.log(err));
    },
    popup(id) {
      axios. 
        get(`http://localhost:5000/announce/pop/${id}`)
        .then(res => {
          console.log('pop',res.data)
          this.images = res.data.images[0]
          this.houseName = res.data.houseName
          this.adress = res.data.adress
          this.description= res.data.description
          this.hostPhone= res.data.hostPhone
          this.price= res.data.price
        })
        .catch(err => {console.log(err)})
    }
  },
};
</script>

<style scoped>
.back {
  background-color: black !important;
}
</style>
