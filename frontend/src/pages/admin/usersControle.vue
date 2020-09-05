<template>
  <div class="card">
    <div class="row collections">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead class=" text-primary">
              <tr>
                <th>
                  Full Name
                </th>

                <th>
                  Username
                </th>

                <th>
                  Email
                </th>

                <th>
                  Age
                </th>

                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody v-for="(user, index) in usersList" :key="index">
              <tr>
                <td>
                  {{ user.name }}
                </td>

                <td>
                  {{ user.username }}
                </td>

                <td>
                  {{ user.email }}
                </td>
                <td>
                  {{ user.age }}
                </td>

                <td>
                  <button
                    type="button"
                    class="btn el-tooltip btn-icon btn-danger btn-sm"
                    aria-describedby="el-tooltip-4804"
                    tabindex="0"
                    @click.prevent="deleteUser(user._id)"
                  >
                  <i class="fa fa-times"></i
                    >
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../../components/Button.vue";
import axios from "axios";
export default {
  components: {
    [Button.name]: Button,
  },
  data() {
    return {
      usersList: [],
    };
  },
  mounted() {
    this.getUsersNumber();
  },
  methods: {
    getUsersNumber() {
      axios
        .get("http://localhost:5000/api/users/")
        .then((res) => {
          let data = res.data.filter((element) => {
            return element.username !== "admin";
          });  
          this.usersList = data;
        })
        .catch((err) => console.log(err));
    },
    deleteUser(id) {
      axios
        .delete(`http://localhost:5000/api/users/delete/${id}`)
        .then((res) => {
          console.log("user deleted", res);
         this.usersList = this.usersList.filter(user => {
            return user._id !== res.data._id
          })
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style scoped></style>
