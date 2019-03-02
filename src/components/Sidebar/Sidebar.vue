<template>
  <nav
    :class="{sidebar: true, sidebarOpened}"
  >
    <header class="logo">
      <router-link to="/app">Light <span class="fw-semi-bold">Blue</span></router-link>
    </header>
    <ul class="nav">
      <NavLink
        :activeItem="activeItem"
        header="Dashboard"
        link="/app/dashboard"
        iconName="flaticon-home"
        index="dashboard"
        isHeader
      />
      <h5 class="navTitle">TEMPLATE</h5>
      <NavLink
        :activeItem="activeItem"
        header="Another Page"
        link="/app/another-page"
        iconName="flaticon-controls"
        index="typography"
        isHeader
      />
    </ul>
    <h5 class="navTitle d-sm-down-none">
      LABELS
      <a class="actionLink">
        <i class="la la-plus float-right" />
      </a>
    </h5>
    <ul class="sidebarLabels d-sm-down-none">
      <li>
        <a href="#">
          <i class="fa fa-circle text-warning mr-2" />
          <span class="labelName">My Recent</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-circle text-gray mr-2" />
          <span class="labelName">Starred</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-circle text-danger mr-2" />
          <span class="labelName">Background</span>
        </a>
      </li>
    </ul>
    <h5 class="navTitle d-sm-down-none">
      PROJECTS
    </h5>
    <div class="sidebarAlerts d-sm-down-none">
      <b-alert
        v-for="alert in alerts"
        :key="alert.id"
        class="sidebarAlert" variant="transparent"
        show dismissible
      >
        <span>{{alert.title}}</span><br />
        <b-progress class="sidebarProgress progress-xs mt-1"
          :variant="alert.color" :value="alert.value" :max="100" />
        <small>{{alert.footer}}</small>
      </b-alert>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import isScreen from '@/core/screenHelper';
import NavLink from './NavLink/NavLink';

export default {
  name: 'Sidebar',
  components: { NavLink },
  data() {
    return {
      alerts: [
        {
          id: 0,
          title: 'Sales Report',
          value: 15,
          footer: 'Calculating x-axis bias... 65%',
          color: 'info',
        },
        {
          id: 1,
          title: 'Personal Responsibility',
          value: 20,
          footer: 'Provide required notes',
          color: 'danger',
        },
      ],
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState('layout', {
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
