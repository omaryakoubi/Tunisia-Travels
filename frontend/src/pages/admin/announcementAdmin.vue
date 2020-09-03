<template>
  <div class="card">
    <div class="row collections">
      <div class="card-body" >
        <div class="table-responsive">
          <table class="table">
            <thead class=" text-primary">
              <tr>
                <th>
                  Host Name
                </th>

                <th>
                  City
                </th>

                <th>
                  Type Of Place
                </th>

                <th class="text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody  v-for="(an, index) in announcement" :key="index">
              <tr>
                <td>
                  {{an.hostName}}
                </td>

                <td>
                  {{an.city}}
                </td>

                <td>
                  {{an.typeOfPlace}}
                </td>

                <td class="text-right">
                  <button
                    type="button"
                    class="btn el-tooltip btn-icon btn-info btn-sm"
                    aria-describedby="el-tooltip-4430"
                    tabindex="0"
                  >
                    <!----><i class="fa fa-info"></i
                    ><!----></button
                  ><button
                    type="button"
                    class="btn el-tooltip btn-icon btn-success btn-sm"
                    aria-describedby="el-tooltip-6999"
                    tabindex="0"
                  >
                    <!----><i class="fa fa-check"></i
                    ><!----></button
                  ><button
                    type="button"
                    class="btn el-tooltip btn-icon btn-danger btn-sm"
                    aria-describedby="el-tooltip-4804"
                    tabindex="0"
                  >
                    <!----><i class="fa fa-times"></i
                    ><!---->
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
      announcement: []
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
          this.announcement = res.data
          console.log("response", res.data)})
        .catch((err) => console.log(err));
    },
    
  },
};
</script>
