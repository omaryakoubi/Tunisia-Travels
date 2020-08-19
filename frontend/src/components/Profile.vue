<template>
  <div class="container">
    <div class="row my-2">
      <div class="col-lg-8 order-lg-2">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a href data-target="#profile" data-toggle="tab" class="nav-link active">Profile</a>
          </li>
        </ul>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            aria-label="Username"
            aria-describedby="button-addon2"
            disabled
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Edit</button>
          </div>
        </div>
      </div>
      <div class="col-lg-4 order-lg-1 text-center">
        <img src="//placehold.it/150" class="mx-auto img-fluid img-circle d-block" alt="avatar" />
        <h6 class="mt-2">Upload a different photo</h6>
        <label class="custom-file">
          <input type="file" id="file" class="custom-file-input" />
          <span class="custom-file-control">Choose file</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Profile",

  data: function() {
    return {
      user: []
    };
  },
  mounted() {
    // const token =  localStorage.getItem('token')
    axios
      .get("http://localhost:5000/api/users/profile")

      .then(res => localStorage.setItem("token", res.data))
      .catch(err => console.log(err)); 
  }
};
</script>