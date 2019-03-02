import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import AnotherPage from '@/pages/AnotherPage/AnotherPage';
import AnalyticsPage from '@/pages/Dashboard/Dashboard';
import Login from '@/pages/Login/Login';
import ErrorPage from '@/pages/Error/Error';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'AnalyticsPage',
          component: AnalyticsPage,
        },
        {
          path: 'another-page',
          name: 'AnotherPage',
          component: AnotherPage,
        },
      ],
    },
    {
      path: '*',
      name: 'Error',
      component: ErrorPage,
    }
  ],
});
