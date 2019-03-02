<template>
<div :class="{root: true, sidebarClose}">
  <Helper />
  <Header />
  <Sidebar />
  <div class="content animated fadeInUp">
    <transition name="router-animation">
      <router-view />
    </transition>
  </div>
  <footer class="contentFooter">
    Light Blue Vue Admin Dashboard Template - Made by <a href="https://flatlogic.com" target="_blank">Flatlogic</a>
  </footer>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';
import Helper from '@/components/Helper/Helper';

import './Layout.scss';

export default {
  name: 'Layout',
  components: { Sidebar, Header, Helper },
  methods: {
    ...mapActions(
      'layout', ['switchSidebar', 'changeSidebarActive'],
    ),
  },
  computed: {
    ...mapState('layout', {
      sidebarClose: state => state.sidebarClose,
    }),
  },
  created() {
  },
};
</script>

<style src="./Layout.scss" lang="scss" />
