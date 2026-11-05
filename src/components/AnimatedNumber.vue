<template><span>{{ formatValue(displayValue) }}</span></template>
<script>
export default {
  name: 'AnimatedNumber',
  props: {
    value: { type: [Number, String], required: true },
    duration: { type: Number, default: 2000 },
    formatValue: { type: Function, default: value => value.toFixed(0) }
  },
  data: () => ({ displayValue: 0, frame: null }),
  watch: { value() { this.animate() } },
  mounted() { this.animate() },
  beforeUnmount() { cancelAnimationFrame(this.frame) },
  methods: {
    animate() {
      cancelAnimationFrame(this.frame)
      const from = this.displayValue
      const target = Number(this.value)
      const start = performance.now()
      const tick = now => {
        const progress = Math.min((now - start) / this.duration, 1)
        this.displayValue = from + (target - from) * progress * progress
        if (progress < 1) this.frame = requestAnimationFrame(tick)
      }
      this.frame = requestAnimationFrame(tick)
    }
  }
}
</script>
