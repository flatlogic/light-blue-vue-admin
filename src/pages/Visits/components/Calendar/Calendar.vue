<template>
  <span class="lb-calendar">
    <v-calendar expanded is-dark :attributes="attrs">
      <template #day-popover="{dayTitle, attributes}">
        <header class="fs-sm text-light fw-semi-bold text-center">
          {{ dayTitle }}
        </header>
        <div class="text-white" v-for="attr in attributes" :key="attr.key">
          <p v-if="attr.customData.title" class="fw-normal m-0">{{attr.customData.title}}</p>
          <p v-if="attr.customData.title" class="fw-thin m-0">{{attr.customData.description}}</p>
          <a v-if="attr.customData.link" class="fw-thin m-0" :href="attr.customData.href">{{attr.customData.link}}</a>
        </div>
      </template>
    </v-calendar>
  </span>
</template>

<script>

export default {
  name: 'Calendar',
  data() {
    return {
      attrs: []
    }
  },
  mounted() {
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();
    this.attrs = [
      {
        key: 1,
        dot: 'blue',
        dates: new Date(year, month, 2),
        popover: { visibility: 'hover' },
        customData: {
          title: 'The flower bed',
          description: 'Contents here',
          visibility: 'hover'
        }
      },
      {
        key: 2,
        dot: 'blue',
        dates: new Date(year, month, 5),
        popover: { visibility: 'hover' },
        customData: {
          title: 'Stop world water pollution',
          description: 'Have a kick off meeting with .inc company',
          visibility: 'hover'
        }
      },
      {
        key: 3,
        dot: 'green',
        dates: new Date(year, month, 18),
        popover: { visibility: 'hover' },
        customData: {
          title: 'Light Blue 2.2 release',
          description: 'Some contents here',
          visibility: 'hover'
        }
      },
      {
        key: 4,
        dot: 'red',
        dates: new Date(year, month, 29),
        popover: { visibility: 'hover' },
        customData: {
          link: 'A link',
          href: 'http://www.flatlogic.com',
          visibility: 'hover'
        }
      }
    ];
  },
};
</script>

<style src="./Calendar.scss" lang="scss" />
