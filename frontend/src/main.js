
import Vue from 'vue';
import App from './App.vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuesax from "vuesax";
import 'vuesax/dist/vuesax.css'
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';

Vue.config.productionTip = false;

Vue.use(NowUiKit);
Vue.use(VueAxios, axios)
Vue.use(Vuesax)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
