<template>
  <section class="notifications navbar-notifications">
    <header class="header">
      <h6 class="my-3 text-center">You have 13 notifications</h6>
    </header>
    <NewNotifictionsList v-if="newNotifications" />
    <NotifictionsList v-else-if="notificationsTabSelected === 1" />
    <Messages v-else-if="notificationsTabSelected === 2" />
    <Progress v-else-if="notificationsTabSelected === 3" />
    <NotifictionsList v-else/>
    <footer class="text-sm footer px-4 py-2">
      <span class="fs-mini">Synced at: 21 Apr 2019 18:36</span>
      <b-button
        variant="link"
        @click="loadNotifications"
        :class="{disabled: isLoad, 'btn-xs float-right py-0': true}"
      >
        <span v-if="isLoad"><i class="la la-refresh la-spin" /> Loading...</span>
        <i v-else class="la la-refresh" />
      </b-button>
    </footer>
  </section>
</template>

<script>
import Vue from 'vue';

import NotifictionsList from './NotificationsDemo/NotificationsList';
import NewNotifictionsList from './NotificationsDemo/NewNotificationsList';
import Messages from './NotificationsDemo/Messages';
import Progress from './NotificationsDemo/Progress';

export default {
  name: 'Notification',
  components: {
    NotifictionsList, NewNotifictionsList, Messages, Progress,
  },
  data() {
    return {
      notificationsTabSelected: 1,
      newNotifications: null,
      isLoad: false,
    };
  },
  methods: {
    loadNotifications() {
      Vue.set(this, 'isLoad', true);

      setTimeout(() => {
        Vue.set(this, 'newNotifications', 'new notifications component');
        Vue.set(this, 'isLoad', false);
      }, 1500);
    },
  },
};
</script>

<style src="./Notifications.scss" lang="scss" />
