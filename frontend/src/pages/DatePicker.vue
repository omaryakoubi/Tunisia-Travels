 <template>
  <div class="block">
    <span class="demonstration"></span>
    <el-date-picker
      v-model="date"
      type="daterange"
      range-separator="To"
      start-placeholder="CheckIn date"
      end-placeholder="CheckOut date"
      :picker-options="pickerOptions"
      @change="getDate"
      value-format="yyyy-MM-dd"
    ></el-date-picker>
  </div>
</template>
<script>
import { DatePicker, TimeSelect } from "element-ui";
export default {
  name: "DatePicker",
  components: {
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect,
  },
  data() {
    return {
      pickerOptions: {
        disabledDate: this.disabledDate,
      },
      date: "",
    };
  },
  methods: {
    disabledDate(time) {
      return time.getTime() < Date.now();
    },
    getDate(event) {
      let start = new Date(this.date[0]).getTime();
      let end = new Date(this.date[1]).getTime();
      let duration = (end - start) / (1000 * 60 * 60 * 24);
      this.$emit("dateToParent", duration);
    },
  },
};
</script>