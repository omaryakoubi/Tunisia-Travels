<template>
  <center>
    <div id="review-div">
      <input type="text" placeholder="write here" v-model="text" />
    </div>
    <div>
      <button>Send</button>
    </div>
  </center>
</template>

<script>
export default {
  name: "ForumReviews",
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style scoped>
#review-div {
  height: 300px;
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
}
</style>
