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
            <tbody>
              <tr>
                <td>
                  Dakota Rice
                </td>

                <td>
                  Niger
                </td>

                <td>
                  Oud-Turnhout
                </td>
                <td>
                  Oud-Turnhout
                </td>

                <td >
                 <n-button type="success" link>
                    <i class="fa fa-check"></i>
                  </n-button>
                  <n-button type="danger" link>
                    <i class="fa fa-times"></i>
                  </n-button>
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
export default {
  components: {
    [Button.name]: Button,
  },
  
};
</script>
<style scoped>

</style>
