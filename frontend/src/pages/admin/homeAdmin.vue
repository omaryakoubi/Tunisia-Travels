<template>
  <div>
    <div class="page-header page-header-small">
      <parallax class="page-header-image" style="background-image:url('img/header.jpg')"></parallax>
      <main-navbar />
      <div class="content-center title">
        <h1>Admin Platform</h1>
      </div>
    </div>
    <tabs
      pills
      class="nav-align-center"
      tab-content-classes="gallery"
      tab-nav-classes="nav-pills-just-icons"
      type="primary"
    >
      <Tab title="Profile">
        <i slot="label" class="now-ui-icons users_circle-08"></i>
        <div class="col-md-10 ml-auto mr-auto">
          <admin-prof />
        </div>
      </Tab>
      <Tab title="Users">
        <i slot="label" class="now-ui-icons location_world"></i>
        <i slot="label" class="now-ui-icons business_badge"></i>
        <div class="col-md-10 ml-auto mr-auto">
          <div class="row collections">
            <users-cont />
          </div>
        </div>
      </Tab>
      <Tab title="Announcement">
        <i slot="label" class="now-ui-icons design_bullet-list-67"></i>
        <div class="col-md-10 ml-auto mr-auto">
          <div class="row collections">
            <announcement />
          </div>
        </div>
      </Tab>
    </tabs>
  </div>
</template>
<script>
// import MainNavbar from "../MainNavbar.vue";
import Tabs from "../components/Tabs2.vue";
import Tab from "../components/Tab.vue";
import AdminProf from "./adminProfile.vue";
import MainNavbar from "../MainNavbar";
import usersCont from "./usersControle.vue";
import Announcement from "./announcementAdmin.vue";
import Button from "../../components/Button";
export default {
  name: "admin",
  components: {
    Tabs,
    Tab,
    MainNavbar,
    AdminProf,
    usersCont,
    Announcement,
    [Button.name]: Button,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.page-header {
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  min-height: 30vh;
}
.content-center {
  z-index: 0;
}
.nav-align-center {
  margin-top: 30px;
}
.collections {
  margin-top: 50px;
}
.title {
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 22px;
}
</style>
