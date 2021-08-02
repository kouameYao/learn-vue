import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import { router } from './router';
import env from './env.json';

// Récuperation du token setter juste apres le login
// Puis on vérifie s'il existe
const token = localStorage.getItem("token");
if(token)(
  // Le header de tous les appellent de axios auront par défaut ceci
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
) 

// La base_url de tous les appellent de axios auront par défaut ceci
axios.defaults.baseURL = env.API_BASE_URL;

Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
