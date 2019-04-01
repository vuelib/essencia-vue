<template>
  <div class="ess list" :class="[direction, isDark]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "EssList",
  props: {
    direction: {
      type: String,
      required: false,
      default: 'vertical',
    },
    dark: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    isDark() {
      return (this.dark) ? 'dark' : null;
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/components/list.scss';
</style>
