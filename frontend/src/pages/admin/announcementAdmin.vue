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
                  >
                    <i class="fa fa-info"></i>
                  </n-button>
                  <n-button
                    type="button"
                    class="btn el-tooltip btn-icon btn-success btn-sm"
                    aria-describedby="el-tooltip-6999"
                    tabindex="0"
                    @click.prevent="accept"
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
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQppdtQ3TrHpvktLshhp7MoNZHYl0ZHv5OYmQ&usqp=CAU"
        alt
      />
      <h1 style="color: white">Hello</h1>
      <h3 style="color: white">info will be here</h3>

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
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    },
    accept() {
      axios
        .post("http://localhost:5000/announce")
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
  },
};
</script>

<style scoped>
.back {
  background-color: black !important;
}
</style>
