// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VCalendar from 'v-calendar';
import * as VueGoogleMaps from 'vue2-google-maps';
import Toasted from 'vue-toasted';
import VueApexCharts from 'vue-apexcharts';

import store from './store';
import router from './Routes';
import App from './App';

Vue.use(BootstrapVue);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg',
  },
});

Vue.use(VCalendar, {
  firstDayOfWeek: 2,  // Monday
});
Vue.use(Toasted, {duration: 10000});
Vue.component('apexchart', VueApexCharts);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
