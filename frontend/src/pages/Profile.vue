<template>
  <div>
    <div class="page-header clear-filter" filter-color="black">
      <parallax class="page-header-image" style="background-image:url('img/bg5.jpg')"></parallax>
      <div class="container">
        <div class="photo-container">
          <img :src="`${form.file}`" alt />
        </div>

        <!-- 
  <div class="centerx">
    <vs-upload automatic action="http://localhost:5000/api/users/upload"/>
        </div>-->

        <!-- modal to upload a new picture and button to start it -->
        <!-- <n-button
          type="primary"
          style="background: transparent"
          @click.native="modals.classic = true"
        >Upload photo</n-button>
        <modal :show.sync="modals.classic" headerClasses="justify-content-center">
          <h4 slot="header" class="title title-up">Modal title</h4>
          <div class="photo-container">
            <img src="img/ryan.jpg" alt />
          </div>
          <template slot="footer">
            <input type="file" style="background: transparent" />
          </template>
        </modal>-->

        <form enctype="multipart/form-data">
          <div class="fields">
            <label>Upload</label>
            <input type="file" ref="file" @change="onSelect" />
          </div>
          <div class="fields">
            <button @click="onSubmit">submit</button>
          </div>
          <div class="message">
            <h5></h5>
          </div>
        </form>
        <h3 class="title">{{ form.username }}</h3>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <p id="edit" @click="enableEdit" style=" text-decoration: underline">Edit</p>
        <h3 class="title">About me</h3>
        <fg-input
          class="disable"
          placeholder="Name"
          v-model="form.name"
          :value="form.name"
          style="width:700px; margin:auto; height: 80px"
          :disabled="edit"
        ></fg-input>
        <fg-input
          class="disable"
          v-model="form.age"
          :value="form.age"
          style="width:700px; margin:auto; height: 80px"
          :disabled="edit"
        ></fg-input>
        <fg-input
          class="disable"
          v-model="form.phone"
          :value="form.phone"
          style="width:700px; margin:auto; height: 80px"
          :disabled="edit"
        ></fg-input>
        <fg-input
          class="disable"
          v-model="form.email"
          :value="form.email"
          style="width:700px; margin:auto; height: 80px"
          :disabled="edit"
        ></fg-input>
        <div>
          <a style="text-decoration: underline">Change Password</a>
        </div>
        <p @click="disableEdit" style="text-decoration: underline; inline-text: center">Save Changes</p>
      </div>
    </div>
  </div>
</template>
<script>
import FormGroupInput from "../components/formGroupInput.vue";
import Switch from "./components/Switch.vue";
import modal from "./components/Modal";
import Button from "../components/Button";
import axios from "axios";

export default {
  name: "profile",
  bodyClass: "profile-page",
  components: {
    [FormGroupInput.name]: FormGroupInput,
    [Switch.name]: Switch,
    [modal.name]: modal,
    [Button.name]: Button,
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
    enableEdit() {
      this.edit = false;
    },
    disableEdit() {
      this.edit = true;
      this.updateProfile();
    },
    //  successUpload(){
    //   this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
    // },

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
          // this.form.file = ''
          this.form.file = res.data.data[res.data.data.length - 1].url;
        }
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
<style></style>
