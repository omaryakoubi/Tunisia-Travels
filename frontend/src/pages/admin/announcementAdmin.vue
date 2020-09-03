<template>
  <div class="card">
    <div class="row collections">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead class=" text-primary">
              <tr>
                <th>
                  Name
                </th>

                <th>
                  Country
                </th>

                <th>
                  City
                </th>

                <th class="text-right">
                  Salary
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
                  <n-button type="success" link>
                    <i class="fa fa-check"></i>
                  </n-button>
                  <n-button type="danger" link>
                    <i class="fa fa-times"></i>
                  </n-button>
                </td>
              </tr>

              <tr>
                <td>
                  Minerva Hooper
                </td>

                <td>
                  Curaçao
                </td>

                <td>
                  Sinaai-Waas
                </td>

                <td class="text-right">
                  $23,789
                </td>
              </tr>

              <tr>
                <td>
                  Sage Rodriguez
                </td>

                <td>
                  Netherlands
                </td>

                <td>
                  Baileux
                </td>

                <td class="text-right">
                  $56,142
                </td>
              </tr>

              <tr>
                <td>
                  Philip Chaney
                </td>

                <td>
                  Korea, South
                </td>

                <td>
                  Overland Park
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
                              <!----><i
                                class="fa fa-check"
                              ></i
                              ><!----></button
                            ><button
                              type="button"
                              class="btn el-tooltip btn-icon btn-danger btn-sm"
                              aria-describedby="el-tooltip-4804"
                              tabindex="0"
                            >
                              <!----><i
                               class="fa fa-times"
                              ></i
                              ><!---->
                            </button>
                </td>
              </tr>

              <tr>
                <td>
                  Doris Greene
                </td>

                <td>
                  Malawi
                </td>

                <td>
                  Feldkirchen in Kärnten
                </td>

                <td class="text-right">
                  <button
                              type="button"
                              class="btn el-tooltip btn-icon btn-info btn-sm"
                              aria-describedby="el-tooltip-4430"
                              tabindex="0"
                            >
                              <!----><i class="now-ui-icons users_single-02"></i
                              ><!----></button
                            ><button
                              type="button"
                              class="btn el-tooltip btn-icon btn-success btn-sm"
                              aria-describedby="el-tooltip-6999"
                              tabindex="0"
                            >
                              <!----><i
                                class="now-ui-icons ui-2_settings-90"
                              ></i
                              ><!----></button
                            ><button
                              type="button"
                              class="btn el-tooltip btn-icon btn-danger btn-sm"
                              aria-describedby="el-tooltip-4804"
                              tabindex="0"
                            >
                              <!----><i
                                class="now-ui-icons ui-1_simple-remove"
                              ></i
                              ><!---->
                            </button>
                </td>
              </tr>

              <tr>
                <td>
                  Mason Porter
                </td>

                <td>
                  Chile
                </td>

                <td>
                  Gloucester
                </td>

                <td class="text-right">
                  $78,615
                </td>
              </tr>

              <tr>
                <td>
                  Jon Porter
                </td>

                <td>
                  Portugal
                </td>

                <td>
                  Gloucester
                </td>

                <td class="text-right">
                  $98,615
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
