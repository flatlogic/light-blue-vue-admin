<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>Typography</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">
      Another - <span class="fw-semi-bold">Page</span>
    </h1>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'AnotherPage',
  components: { Widget },
};
</script>
