<template>
  <span>
    <integer-plusminus
      @input="getValue"
      v-model="adultsNumber"
      :min="0"
      :step="1"
      formName="integer_plus_minus"
    >
      Adults
      <br />
      {{adultsNumber}}
    </integer-plusminus>
    <br />
    <integer-plusminus
      @input="getValue"
      v-model="childrenNumber"
      :min="0"
      :step="1"
      formName="integer_plus_minus"
    >
      Children
      <br />
      {{childrenNumber}}
    </integer-plusminus>
    <br />
    <integer-plusminus
      @input="getValue"
      v-model="infantsNumber"
      :min="0"
      :step="1"
      formName="integer_plus_minus"
    >
      Infants
      <br />
      {{infantsNumber}}
    </integer-plusminus>
    <br />
  </span>
</template>

<script>
import { IntegerPlusminus } from "vue-integer-plusminus";

export default {
  name: "Guests",
  data: function () {
    return {
      adultsNumber: 0,
      childrenNumber: 0,
      infantsNumber: 0,
    };
  },
  components: { IntegerPlusminus },
  methods: {
    getValue(event) {
      let arr = [];
      arr.push(this.adultsNumber, this.childrenNumber, this.infantsNumber);
      this.$emit("numberOfGuests", arr);
    },
  },
};
</script>
<style  scoped>
</style>

