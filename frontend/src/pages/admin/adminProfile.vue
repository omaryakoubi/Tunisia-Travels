<template>
  <div class="row collections">
    <div class="col-md-8 inpt">
      <div class="row">
        <div class="col-md-5 pr-1">
          <div class="form-group">
            <label>Post</label>
            <input
              type="text"
              class="form-control"
              disabled
              placeholder="Post"
              value="Administrator"
            />
          </div>
        </div>
        <div class="col-md-3 px-1">
          <div class="form-group">
            <label>Username</label>
            <input
              v-model="form.username"
              :disabled="edit"
              type="text"
              class="form-control"
              placeholder="Username"
              value="form.username"
            />
          </div>
        </div>
        <div class="col-md-4 pl-1">
          <div class="form-group">
            <label>Full Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Full Name"
              v-model="form.name"
              value="form.name"
              :disabled="edit"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 pr-1">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              v-model="form.email"
              value="form.email"
              :disabled="edit"
            />
          </div>
        </div>
        <div class="col-md-6 pl-1">
          <div class="form-group">
            <label>Age</label>
            <input
              type="text"
              class="form-control"
              placeholder="Age"
              v-model="form.age"
              value="form.age"
              :disabled="edit"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 pr-1">
          <div class="form-group">
            <label>Address</label>
            <input
              type="text"
              class="form-control"
              placeholder="Address"
              v-model="form.address"
              value="form.address"
              :disabled="edit"
            />
          </div>
        </div>
        <div class="col-md-6 pl-1">
          <div class="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              class="form-control"
              placeholder="Phone Number"
              v-model="form.phone"
              value="form.phone"
              :disabled="edit"
            />
          </div>
        </div>
      </div>
      <div class="row butto">
        <div class="col-md-2 pl-1">Edit:</div>
        <div class="col-md-2 pl-1">
          <n-switch v-model="edit" on-text="OFF" off-text="ON"></n-switch>
        </div>
        <div class="col-md-4 pl-1">
          <a class="btn btn-danger btn-round btn-small safe">Change Password</a>
        </div>
        <div class="col-md-4 pl-1">
          <a @click="disableEdit" class="btn btn-success btn-round btn-small safe">Save Changes</a>
        </div>
      </div>
    </div>

    <div class="cardi col-md-4">
      <div class="photo-container">
        <img class="pic" :src="`${form.file}`" style="height:100%" />
      </div>
      <label for="upload">
        <span class="now-ui-icons media-1_camera-compact" aria-hidden="true"></span>
        <input type="file" ref="file" id="upload" style="display:none" @change="onSelect" />
      </label>
      <h3 class="title">{{ form.name }}</h3>
      <!-- <p class="category">{{ Administrator }}</p> -->
      <div class="content">
        <div class="social-description">
          <h2>{{ usersNumber }}</h2>
          <p>Users</p>
        </div>
        <div class="social-description">
          <h2>{{hosts}}</h2>
          <p>Hosts</p>
        </div>
        <div class="social-description">
          <h2>{{ housesNumber }}</h2>
          <p>Houses</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormGroupInput from "../../components/formGroupInput.vue";
import Switch from "../components/Switch.vue";
import modal from "../components/Modal";
import axios from "axios";
export default {
  name: "profile",
  bodyClass: "profile-page",
  components: {
    [FormGroupInput.name]: FormGroupInput,
    [Switch.name]: Switch,
    [modal.name]: modal,
  },
  data() {
    return {
      form: {
        _id: "",
        name: "",
        username: "",
        email: "",
        age: "",
        phone: "",
        city: "",
        country: "",
        zip: "",
        file: "",
        message: "",
      },
      hosts: 0,
      usersNumber: 0,
      housesNumber: 0,
      hostNumber: 0,
      arrNotAdmin: 0,
      countHouses: 0,
      arrNameOfHosts: [],
      switches: {
        defaultOff: true,
      },

      edit: true,
      modals: {
        classic: false,
      },
    };
  },
  methods: {
    enableEdit() {
      this.edit = false;
    },
    disableEdit() {
      this.edit = true;
      this.updateProfile();
    },
    async updateAdmin(name) {
      try {
        const _id = this.form._id;
        await axios.put(`http://localhost:5000/api/users/update/${_id}`, {
          name: this.form.name,
          username: this.form.username,
          email: this.form.email,
          age: this.form.age,
          phone: this.form.phone,
          city: this.form.city,
          country: this.form.country,
          zip: this.form.zip,
          file: this.form.file,
        });
      } catch (err) {
        console.log(err);
      }
    },
    getUsersNumber() {
      axios
        .get("http://localhost:5000/api/users/")
        .then((res) => {
          let data = res.data.filter((element) => {
            return element.username !== "admin";
          });
          this.usersNumber = data.length;
        })
        .catch((err) => console.log(err));
    },
    housesNum() {
      axios.get("http://localhost:5000/houses").then((res) => {
        this.housesNumber = res.data.length;

        res.data.forEach((house) => {
          this.arrNameOfHosts.push(house.hostName);
          let c = this.arrNameOfHosts.length;
        });
      });
    },

    onSelect() {
      this.file = this.$refs.file.files[0];
    },
    async onSubmit() {
      try {
        const formData = new FormData();
        formData.append("imageFile", this.file);
        const res = await axios.post(
          "http://localhost:5000/api/users/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } catch (err) {
        this.message = "not uploaded";
        console.log(err);
      }
    },
  },

  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
      axios
        .get("http://localhost:5000/api/users/profile")
        .then((res) => {
          let response = res.data.user;
          (this.form._id = response._id),
            (this.form.username = response.username),
            (this.form.name = response.name),
            (this.form.username = response.username),
            (this.form.email = response.email),
            (this.form.age = response.age),
            (this.form.phone = response.phone),
            (this.form.city = response.city),
            (this.form.country = response.country),
            (this.form.zip = response.zip),
            (this.form.file = response.file);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    this.getUsersNumber();
    this.housesNum();
  },
};
</script>
<style scoped>
.cardi {
  background-color: gainsboro;
  border-radius: 15px 50px 30px;
}
.collections {
  margin-top: 50px;
  border: 1px solid black;
  padding: 30px;
  border-radius: 30px;
  text-align: center;
}
.butto {
  margin-top: 40px;
  text-align: center;
  align-items: center;
}
.inpt {
  padding: 30px;
  border-radius: 30px;
}
.media-1_camera-compact {
  font-size: 24px;
}
</style>
