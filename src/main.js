// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue, { createApp, configureCompat } from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Toasted from 'vue-toasted';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import VueApexCharts from 'vue3-apexcharts';

import store from './store';
import router from './Routes';
import App from './App';
import layoutMixin from './mixins/layout';

Vue.use(BootstrapVue);
Vue.mixin(layoutMixin);
Vue.use(Toasted, {duration: 10000});

configureCompat({ MODE: 2 });
const app = createApp(App)
  .use(store)
  .use(router)
  .use(VCalendar, { firstDayOfWeek: 2 })
  .component('apexchart', VueApexCharts);

router.isReady().then(() => app.mount('#app'));
