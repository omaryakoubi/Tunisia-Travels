<template>
  <!-- <HotelDatePicker :minNights="1" :maxNights="30" :v-bind="date" v-on:dateChanged="getDate" /> -->
  <div>
    <!-- :disabled-date="disabledDate" -->
    {{date}}
    <date-picker v-model="date" type="date" format="YYYY-MM-DD" :shortcuts="shortcuts" range></date-picker>
  </div>
</template>

<script>
// import HotelDatePicker from "vue-hotel-datepicker";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "DatePickers",
  components: {
    DatePicker,
  },
  methods: {},
  data: function () {
    return {
      date: "",
      // disabledDate: {},
      range: "",
      shortcuts: [
        { text: "", onClick: () => new Date() },
        {
          text: "",
          onClick: () => (this.range = [new Date(), new Date()]),
        },
      ],
    };
  },
};
</script>