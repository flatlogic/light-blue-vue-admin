<template>
  <b-navbar toggleable="md" class="header d-print-none">
    <b-navbar-nav class="navbar-nav-mobile ml-auto">
        <b-nav-text class="mr-3">
          <b-alert class="header-alert animated bounceIn delay-2s" dismissible v-model="showNavbarAlert">
            <i class="fa fa-info-circle mr-1"></i> Check out Light Blue Settings on the right!
          </b-alert>
        </b-nav-text>
        <b-nav-form class="d-sm-down-none mr-3">
          <b-input-group class="input-group-transparent">
            <b-input-group-text slot="prepend"><i class="la la-search"></i></b-input-group-text>
            <b-input class="input-transparent" id="search-input" placeholder="Search Dashboard" />
          </b-input-group>
        </b-nav-form>
        <b-nav-item-dropdown right extra-menu-classes="py-0">
          <template slot="button-content">
            <span class="avatar thumb-sm float-left mr-2">
              <img class="rounded-circle" src="../../assets/people/a5.jpg" alt="..." />
            </span>
            <span class="d-md-down-none d-lg-inline">Philip <span class="fw-semi-bold">Smith</span></span>
            <span class="ml-2 circle bg-warning text-white fw-bold d-md-down-none d-lg-inline-block">13</span>
          </template>
          <notifications />
        </b-nav-item-dropdown>
        <b-nav-item-dropdown no-caret right extra-menu-classes="dropdown-menu-messages">
          <template slot="button-content">
            <i class="la la-comment px-2" />
          </template>
          <b-dropdown-item>
            <span class="avatar thumb-sm float-left mr-3">
              <img class="rounded-circle" src="../../assets/people/a1.jpg" alt="..." />
            </span>
            <h6>Jane <span class="fw-semi-bold">Hew</span></h6>
            <span class="fs-sm text-muted fw-thin">Hey, John! How is it going? ...</span>
          </b-dropdown-item>
          <b-dropdown-item>
            <span class="avatar thumb-sm float-left mr-3">
              <img class="rounded-circle" src="../../assets/people/a2.jpg" alt="..." />
            </span>
            <h6>Alies <span class="fw-semi-bold">Rumiancaŭ</span></h6>
            <span class="fs-sm text-muted fw-thin">I will definitely buy this template</span>
          </b-dropdown-item>
          <b-dropdown-item>
            <span class="avatar thumb-sm float-left mr-3">
              <img class="rounded-circle" src="../../assets/people/a3.jpg" alt="..." />
            </span>
            <h6>Alexey <span class="fw-semi-bold">Kamandzirau</span></h6>
            <span class="fs-sm text-muted fw-thin">I will definitely buy this template</span>
          </b-dropdown-item>
          <b-dropdown-item-button class="text-center">
            See all messages <i class="fa fa-arrow-right ml-1"></i>
          </b-dropdown-item-button>
        </b-nav-item-dropdown>
        <b-nav-item class="divider"></b-nav-item>
        <b-nav-item-dropdown no-caret right>
          <template slot="button-content">
            <i class="la la-cog px-2" />
          </template>
          <b-dropdown-item><i class="la la-user" /> My Account</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item>Calendar</b-dropdown-item>
          <b-dropdown-item>
            Inbox &nbsp;&nbsp;<b-badge variant="danger" pill class="animated bounceIn">9</b-badge>
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item-button @click="logout">
            <i class="la la-sign-out" /> Log Out
          </b-dropdown-item-button>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown no-caret right class="d-md-down-none">
          <template slot="button-content">
            <i class="la la-globe px-2" />
          </template>
          <b-dropdown-item>
            <span class="badge badge-danger mr-2"><i class="fa fa-bell-o"></i></span>
            <span class="fs-sm">Check out this awesome ticket</span>
          </b-dropdown-item>
          <b-dropdown-item>
            <span class="badge badge-warning mr-2"><i class="fa fa-question-circle"></i></span>
            <span class="fs-sm">Finish 2019 annual report</span>
          </b-dropdown-item>
          <b-dropdown-item>
            <span class="badge badge-success mr-2"><i class="fa fa-info-circle"></i></span>
            <span class="fs-sm">Update Vue.js to the newest version</span>
          </b-dropdown-item>
          <b-dropdown-item>
            <span class="badge badge-info mr-2"><i class="fa fa-plus"></i></span>
            <span class="fs-sm">Establish OKR system</span>
          </b-dropdown-item>
          <b-dropdown-item>
            <span class="badge badge-danger mr-2"><i class="fa fa-tag"></i></span>
            <span class="fs-sm">Fill in time tracking</span>
          </b-dropdown-item>
          <b-dropdown-item-button class="text-center">
            See all tickets <i class="fa fa-arrow-right ml-1"></i>
          </b-dropdown-item-button>
        </b-nav-item-dropdown>
        <b-nav-item class="d-md-down-none" @click="logout">
          <i class="la la-power-off px-2" />
        </b-nav-item>
        <b-nav-item class="d-md-none" @click="switchSidebarMethod" >
          <i class="la la-navicon px-2" />
        </b-nav-item>
      </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Notifications from '@/components/Notifications/Notifications';

export default {
  name: 'Headed',
  components: { Notifications },
  computed: {
    ...mapState('layout', {
      sidebarClose: state => state.sidebarClose,
      sidebarStatic: state => state.sidebarStatic,
    }),
  },
  methods: {
    ...mapActions('layout', ['toggleSidebar', 'toggleChat', 'switchSidebar', 'changeSidebarActive']),
    switchSidebarMethod() {
      if (!this.sidebarClose) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      } else {
        this.switchSidebar(false);
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    },
    logout() {
      window.localStorage.setItem('authenticated', false);
      this.$router.push('/login');
    },
  },
  created() {

  },
  data() {
    return {
      showNavbarAlert: true
    }
  }
};
</script>

<style src="./Header.scss" lang="scss" scoped />
