<template>
  <div>
    <div class="page-header clear-filter" filter-color="black">
      <parallax
        class="page-header-image"
        style="background-image:url('img/bg5.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="photo-container">
          <img src="img/ryan.jpg" alt="" />
        </div>
<!-- modal to upload a new picture  and button to start it -->
          <n-button type="primary" style="background: transparent" @click.native="modals.classic = true">
            Upload photo
          </n-button>
          <modal :show.sync="modals.classic" headerClasses="justify-content-center">
            <h4 slot="header" class="title title-up">Modal title</h4>        
              <div class="photo-container">
                <img src="img/ryan.jpg" alt="" />
              </div>  
            <template slot="footer">
                 <input type="file" style="background: transparent"/>
            </template>
          </modal>
<!-- modal ends here -->
        <h3 class="title">user.name</h3>
        <p class="category"></p>
      </div>
    </div>   
    <div class="section">
      <div class="container"> 
        <n-switch v-model="switches.defaultOff" on-text="OFF" off-text="EDIT"></n-switch>
   
        <p id="edit" @click="enableEdit" style=" text-decoration: underline">Edit</p>
        <h3 class="title">About me</h3>
        <fg-input class="disable" :disabled="edit"  placeholder="Email" value="Email">
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
          records all of his own music, giving it a warm, intimate feel with a
          solid groove structure. An artist of considerable range.
        </fg-input>    
          <fg-input
           class="disable" placeholder="Email" value="Email" style="width:700px; margin:auto; height: 80px" :disabled="edit">
          </fg-input>
            <fg-input
           class="" placeholder="Age" value="Age" style="width:700px; margin:auto; height: 80px" :disabled="edit">
          </fg-input>
            <fg-input
           class="" placeholder="phone Number" value="phone-number" style="width:700px; margin:auto; height: 80px" :disabled="edit">
          </fg-input>
      </div>
    </div>
  </div>
</template>
<script>
// import  Tabs  from './components/Tabs'
// import TabPane  from './components/Tab';
import FormGroupInput from "../components/formGroupInput.vue";
import Switch from './components/Switch.vue';
import modal from './components/Modal'
import Button from '../components/Button'
import axios from 'axios'
// import  requestsMixin  from "../mixins/requestsMixin";


export default {
  name: 'profile',
  bodyClass: 'profile-page',
  components: {
    // Tabs,
    // TabPane,
    [FormGroupInput.name] : FormGroupInput,
    [Switch.name] : Switch,
    [modal.name] : modal,
    [Button.name] : Button
    
  }, 
  data() {
    return {
      form: {
        firstName: '',
        // email: '',
        // age: '',
        // phoneNumber: Number
      },
      switches: {
          defaultOn: true,
          defaultOff: false
      },
      
      edit: true,
      modals : {
        classic : false
      }
  }},
  methods: {
    enableEdit() {
      this.edit = !this.edit
    },
    editOrSave() {
      const text = document.getElementById('edit')
      if(this.edit){
        console.log(this.edit)
        text.innerText('Edit')
      }
      text.innerText('Save')
    },
    handleClick() {
      this.$router.push('/upload')
    }
  },
  
    
     mounted: function() {
    const token = localStorage.getItem('token', token)
    axios
      .get("http://localhost:5000/api/users/profile", 
     {Headers: {
        Authorization : token
      }})
      .then(res => console.log('aaa', res))
      .catch(err => console.log(err)); 
    }
  
};
</script>
<style></style>
