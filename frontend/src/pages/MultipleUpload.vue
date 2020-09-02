<template>
  <form enctype="multipart/form-data">
    <input multiple type="file" ref="files" @change="selectFile" class="file-input" />
    <div v-for="(file,index) in files" :key="index" class="level">
      <div class="level-left">
        <div class="level-item">{{file.name}}</div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <a @click.prevent="files.splice(index,1)" class="delete">Delete</a>
        </div>
      </div>
    </div>
    <button @click.prevent="sendFile">Send</button>
    <div v-for="(image,index) in imagesResp" :key="index">
      <img :src="`${image.url}`" />
    </div>
  </form>
</template>
<script>
export default {
  name: "MultipleUpload",
  data: () => ({
    files: [],
    message: "",
    imagesResp: [],
    // imageUrl: "",
  }),
  methods: {
    selectFile() {
      const files = this.$refs.files.files;
      this.files = [...this.files, ...files];
    },
    async sendFile() {
      const formData = new FormData();
      this.files.forEach((file) => {
        formData.append("files", file);
      });

      await this.axios
        .post("http://localhost:5000/multiple", formData)
        .then((data) => {
          console.log(data.data);
          this.imagesResp = data.data;
        });
    },
  },
};
</script>