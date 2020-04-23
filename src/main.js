import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueGoodTable from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'
import Datepicker from 'vuejs-datepicker';

Vue.use(VueAxios, axios);
Vue.use(VueGoodTable);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  VueGoodTable,
  Datepicker,
  render: h => h(App)
}).$mount('#app')
