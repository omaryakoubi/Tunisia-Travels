<template>
  <div id="navbar">
    <navbar transparent menu-classes="ml-auto">
      <div class="navbar-translate">
        <a class="navbar-brand" href="/">
          <span style="color: red">T</span>unisia
          <span style="color: red">T</span>ravels
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-target="#example-navbar-transparent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </button>
      </div>
      <template slot="navbar-menu">
        <Dropdown
          tag="li"
          title
          icon="now-ui-icons location_world"
          class="nav-item"
        >
          <n-button
            @click="$router.push('/BecomeAhost')"
            type="neutral"
            size="small"
            class="menu-btn shown"
            link
            :hidden="hide"
          >
            <i class="now-ui-icons users_circle-08"></i>
            Become a Host
          </n-button>

          <n-button
            @click="$router.push('/profile')"
            type="neutral"
            size="small"
            class="menu-btn hidden"
            link
            :hidden="hide"
          >
            <i class="now-ui-icons education_paper"></i> Account
          </n-button>

          <n-button
            @click="modals.login = true"
            type="neutral"
            size="small"
            class="menu-btn shown"
            link
            :hidden="!hide"
          >
            <i class="now-ui-icons users_circle-08"></i>
            Login
          </n-button>
          <br />

          <n-button
            @click="modals.signup = true"
            type="neutral"
            size="small"
            class="menu-btn shown"
            link
            :hidden="!hide"
          >
            <i class="now-ui-icons users_circle-08"></i>
            SignUp
          </n-button>
          <n-button
            @click="logout"
            type="neutral"
            size="small"
            class="menu-btn hidden"
            link
            :hidden="hide"
          >
            <i class="now-ui-icons users_circle-08"></i>
            Logout
          </n-button>
        </Dropdown>
      </template>
      <modal :show.sync="modals.login" headerClasses="justify-content-center">
        <template slot="header">
          <h2 slot="header" class="title title-up">Login</h2>
        </template>
        <div id="social-line">
          <a
            @click="logInWithFacebook"
            class="btn btn-neutral btn-facebook btn-icon btn-lg btn-round"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
          <a
            href="http://localhost:5000/auth/google"
            class="btn btn-neutral btn-google btn-icon btn-lg btn-round"
          >
            <i class="fab fa-google-plus"></i>
          </a>
        </div>
        <fg-input
          type="text"
          placeholder="Username..."
          addon-left-icon="now-ui-icons users_single-02"
          v-model="username"
        ></fg-input>

        <fg-input
          type="password"
          placeholder="Password..."
          addon-left-icon="now-ui-icons ui-1_lock-circle-open"
          v-model="password"
        ></fg-input>

        <div class="text-center">
          <vs-button @click="login" class="btn btn-danger btn-round btn-lg">Login</vs-button>
        </div>

        <div class="footer">
          <div class="pull-left" type="danger">
            <a
              @click="
                (modals.reset = true),
                  (modals.login = false),
                  (modals.signup = false)
              "
              >Forget Password?</a
            >
          </div>
          <div class="pull-right">
            <a @click="(modals.login = false), (modals.signup = true)"
              >Create new account?</a
            >
          </div>
        </div>
      </modal>
      <modal :show.sync="modals.signup" headerClasses="justify-content-center">
        <template slot="header">
          <h2 slot="header" class="title title-up">Signup</h2>
        </template>
        <template>
          <fg-input
            placeholder="Fullname . . ."
            type="text"
            addon-left-icon="now-ui-icons users_circle-08"
            v-model="name"
          ></fg-input>
          <fg-input
            placeholder="Username . . ."
            type="text"
            addon-left-icon="now-ui-icons users_circle-08"
            v-model="username"
          ></fg-input>
          <fg-input
            type="email"
            placeholder="Email..."
            addon-left-icon="now-ui-icons ui-1_email-85"
            v-model="email"
          ></fg-input>
          <fg-input
            type="password"
            placeholder="Password . . ."
            addon-left-icon="now-ui-icons ui-1_lock-circle-open"
            v-model="password"
          ></fg-input>
          <fg-input
            type="password"
            placeholder="Confirm Password . . ."
            addon-left-icon="now-ui-icons ui-1_lock-circle-open"
            v-model="cpassword"
          ></fg-input>
          <fg-input
            type="number"
            placeholder="Age..."
            addon-left-icon="now-ui-icons media-2_sound-wave"
            v-model="age"
          ></fg-input>
          <fg-input
            type="text"
            placeholder="Phone..."
            addon-left-icon="now-ui-icons tech_mobile"
            v-model="phone"
          ></fg-input>
        </template>

        <template slot="footer" class="card-footer text-center">
          <a
            @click="signup"
            class="btn btn-danger btn-round btn-lg btn-block safe"
            >SignUp</a
          >
          <a
            @click="
              (modals.login = true),
                (modals.signup = false),
                (modals.reset = false)
            "
            >You already have an account?</a
          >
        </template>
      </modal>
      <!-- Reset Modal -->
      <modal :show.sync="modals.reset" headerClasses="justify-content-center">
        <template slot="header">
          <h2 slot="header" class="title title-up">Reset Password</h2>
        </template>
        <div id="form">
          <fg-input
            type="text"
            placeholder="Adress-Mail"
            addon-left-icon="now-ui-icons users_circle-08"
            v-model="adressMail"
          ></fg-input>
          <p v-if="toggle">A mail has been sent to {{ adressMail }}</p>
          <div class="text-center">
            <a @click="resetPassword" class="btn btn-danger btn-round btn-lg"
              >Send</a
            >
          </div>
        </div>
      </modal>
    </navbar>
  </div>
</template>

<script>
import { vsButton } from "vuesax";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";
import { Popover } from "element-ui";
import Modal from "./components/Modal";
import Button from "../components/Button";
import FormGroupInput from "../components/formGroupInput.vue";
import axios from "axios";

export default {
  name: "main-navbar",
  bodyClass: "login-page",

  props: {
    transparent: Boolean,
    colorOnScroll: Number,
  },

  components: {
    Dropdown,
    Modal,
    Navbar,
    [Popover.name]: Popover,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },

  data() {
    return {
      modals: {
        login: false,
        signup: false,
        reset: false,
      },
      name: "",
      username: "",
      email: "",
      password: "",
      cpassword: "",
      age: "",
      phone: "",
      adressMail: "",
      toggle: false,
      auth: false,
      hide: true,
    };
  },

  methods: {
    openNotification(position = null, color) {
      const noti = this.$vs.notification({
        flat: true,
        color,
        position,
        title: "You are logged In !",
      });
    },
    openNotification2(position = null, color) {
      const noti = this.$vs.notification({
        flat: true,
        color,
        position,
        title: "Please try again",
        text: "Wrong password or email.",
      });
    },
    hideAndShow() {
      console.log("hideandshow", localStorage.token);
      this.hide = !this.hide;
      console.log("0", this.hide);
    },

    login() {
      axios
        .post("http://localhost:5000/api/users/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          if (this.username.includes("admin")) {
            console.log("username", this.username);
            let token = res.data.token;
            localStorage.setItem("token", token);
            this.$router.push("/admin").catch(() => {});
            this.hideAndShow();
          } else {
            let token = res.data.token;
            localStorage.setItem("token", token);
            console.log("axios", res.data);
            this.$router.push("/").catch(() => {});
            this.modals.login = false;
            this.auth = true;
            this.hideAndShow();
            this.openNotification("top-right", "success");
          }
        })
        .catch(() => {
          this.openNotification2("top-left", "danger");
        });
    },

    async getInfoFromFacebook() {
      window.FB.api(
        `/me`,
        { fields: "name", access_token: window.FB.getAccessToken() },
        async function (data) {
          console.log("before", data);
          await axios.post("http://localhost:5000/api/facebook-auth/user", {
            data: data,
          });
          try {
            console.log("after", data);
          } catch (error) {
            console.log(error);
          }
        }
      );
    },

    async logUserIn() {
      window.FB.login(
        function(response) {
          if (response.authResponse) {
            localStorage.setItem(
              "accessToken",
              response.authResponse.accessToken
            );
            // console.log(window.FB.getAccessToken());
            // console.log(window.FB.getAuthResponse());
            window.FB.getLoginStatus(function (ressponse) {
              console.log(ressponse);
            });
            console.log(window.FB.getUserID());
          } else {
            console.log("User cancelled login or did not fully authorize.");
          }
        },
        { scope: "public_profile,email" }
      );
      return false;
    },
    async logInWithFacebook() {
      try {
        await this.logUserIn();
        this.hideAndShow();
        setTimeout(async () => await this.getInfoFromFacebook(), 2000);
      } catch (error) {
        console.log(error);
      }
    },

    async initFacebook() {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: "988468071624350",
          cookie: true,
          version: "v8.0",
        });
      };
    },

    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    },

    signup() {
      axios
        .post("http://localhost:5000/api/users/signup", {
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password,
          cpassword: this.cpassword,
          age: this.age,
          phone: this.phone,
        })
        .then((res) => {
          this.modals.signup = false;
          this.modals.login = true;

          console.log("axios", res);
        })
        .catch(() => {
          alert("Something Wrong");
        });
    },

    resetPassword() {
      this.toggle = true;
      axios
        .post("http://localhost:5000/api/users/reset", {
          email: this.adressMail,
        })
        .then(() => {
          this.modals.reset = false;
          res.send("success");
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    },

    logout() {
      this.hideAndShow();
      localStorage.clear();
    },
  },

  async created() {
    try {
      const googleToken = this.$route.query.googleId;
      if (googleToken === undefined) {
        localStorage.removeItem("googleToken");
      }
      if (googleToken !== undefined) {
        localStorage.setItem("googleToken", googleToken);
        this.$router.push("/");
        this.hideAndShow();
      } else {
        localStorage.removeItem("googleToken");
      }
    } catch (error) {
      console.log(error);
    }
  },

  async mounted() {
    try {
      await this.loadFacebookSDK(document, "script", "facebook-jssdk");
      await this.initFacebook();
    } catch (error) {
      console.error(error);
    }
  },

  destroyed() {
    axios
      .get("http://localhost:5000/auth/google")

      .then((req, res) => {
        this.hideAndShow();
        console.log(res);
      })

      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.menu-btn {
  color: black !important;
}
</style>
