<template>
  <div>
    <div class="page-header clear-filter" filter-color="black">
      <parallax class="page-header-image" style="background-image:url('img/bg5.jpg')"></parallax>
      <main-navbar />
      <div class="content-center title">
        <h1>Profile</h1>
      </div>
    </div>
    <div class="col-md-10 ml-auto mr-auto">
      <div class="row collections">
        <div class="col-md-8 inpt">
          <div class="row">
            <div class="col-md-5 pr-1">
              <div class="form-group">
                <label>Post</label>
                <input type="text" class="form-control" disabled placeholder="Post" value="User" />
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
          </div>

          <div class="row">
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="4"
                v-model="form.bio"
                placeholder="Type a message..."
                value="form.bio"
                :disabled="edit"
              ></textarea>
            </div>
          </div>
          <br />
          <br />
          <div class="row butto">
            <div class="col-md-2 pl-1">Edit:</div>
            <div class="col-md-2 pl-1">
              <n-switch v-model="edit" on-text="OFF" off-text="ON"></n-switch>
            </div>
            <div class="col-md-4 pl-1">
              <a class="btn btn-danger btn-round btn-small safe">Change Password</a>
            </div>
            <div class="col-md-4 pl-1">
              <a
                @click="updateProfile"
                class="btn btn-success btn-round btn-small safe"
              >Save Changes</a>
            </div>
          </div>
          <br />
        </div>



        <div class="cardi col-md-4">
          <div class="photo-container">
            <img class ="pic" :src="`${form.file}`" style="height:100%" />
          </div>
            <label for="upload">
              <span
                class="now-ui-icons media-1_camera-compact"
                aria-hidden="true"
              ></span>
              <input
                type="file"
                ref="file"
                id="upload"
                style="display:none"
                @change="onSelect"
              />
            </label>
          <h3 class="title">{{ form.name }}</h3>
          <p class="category">User</p>
          <div class="content">
            <p>{{ form.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormGroupInput from "../components/formGroupInput.vue";
import Switch from "./components/Switch.vue";
import modal from "./components/Modal";
import Button from "../components/Button";
import MainNavbar from "./MainNavbar";
import axios from "axios";
export default {
  name: "profile",
  bodyClass: "profile-page",
  components: {
    [FormGroupInput.name]: FormGroupInput,
    [Switch.name]: Switch,
    [modal.name]: modal,
    [Button.name]: Button,
    MainNavbar,
  },
  data() {
    return {
      form: {
        _id: "",
        name: "",
        username: "",
        email: "",
        age: 0,
        phone: 0,
        file: "",
        message: "",
      },
      switches: {
        defaultOn: true,
        defaultOff: false,
      },
      edit: true,
      modals: {
        classic: false,
      },
    };
  },
  methods: {
    //update profile
    async updateProfile(name) {
      console.log("here at the top");
      try {
        const _id = this.form._id;
        console.log(_id);
        await axios.put(`http://localhost:5000/api/users/update/${_id}`, {
          name: this.form.name,
          username: this.form.username,
          email: this.form.email,
          age: this.form.age,
          phone: this.form.phone,
          file: this.form.file,
        });
        console.log("HOU", this.form);
        this.onSubmit();
      } catch (err) {
        console.log(err);
      }
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
        if (this.form.file !== res.data.data[res.data.data.length - 1].url) {
          this.form.file = res.data.data[res.data.data.length - 1].url;
        }
        console.log(res);
      } catch (err) {
        this.message = "not uploaded";
        console.log(err);
      }
    },
  },
  mounted: function () {
    const token = localStorage.getItem("token");
    console.log("token", token);
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
            (this.form.phone = response.phone);
          this.form.file = response.file;
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>
<style scoped>
.cardi {
  background-color: gainsboro;
  border-radius: 15px 50px 30px;
  padding: 10px;
}

.collections {
  margin-top: 50px;
  border: 1px solid black;
  padding: 30px;
  border-radius: 30px;
  text-align: center;
}
.inpt {
  padding: 30px;
  border-radius: 30px;
  /* margin-right:1px; */
}
.edit {
  margin-top: 20px;
}
.textarea-container {
  width: 80%;
  margin: auto;
}
.content-center {
  z-index: 0;
}
.page-header {
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  min-height: 30vh;
}
.content {
  text-align: center;
}
.butto {
  text-align: center;
  align-items: center;
}
.title {
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 22px;
}
.pic {
  z-index: -2 !important;
}
.iconi {
  z-index: 1 !important;
}
.media-1_camera-compact{
  font-size: 24px;
}
</style>
