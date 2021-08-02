import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import { router } from './router';
import env from './env.json';

axios.defaults.baseURL = env.API_BASE_URL;
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
