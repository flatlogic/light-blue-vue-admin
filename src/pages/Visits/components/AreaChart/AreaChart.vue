<template><LineChart :data="chartData" :options="options" /></template>
<script>
import { Line } from 'vue-chartjs';
import { Chart, LineElement, PointElement, CategoryScale, LinearScale, Filler, Tooltip, Legend } from 'chart.js';
Chart.register(LineElement, PointElement, CategoryScale, LinearScale, Filler, Tooltip, Legend);
export default {
  name: 'AreaChart',
  components: { LineChart: Line },
  props: { chartData: { type: Object, required: true }, options: { type: Object, required: true } }
};
</script>
