<template>
  <div class="ess card" :class="[shape, isDark, isOutlined, canShadow]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EssCard',
  props: {
    shape: {
      type: String,
      default: "rounded" // square, rounded
    },
    dark: {
      type: Boolean,
      required: false,
      default: false,
    },
    shadow: {
      type: Boolean,
      required: false,
      default: false,
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    isDark() {
      return (this.dark) ? 'dark' : null;
    },

    isOutlined() {
      return (this.outlined) ? 'outlined' : null;
    },

    canShadow() {
      return (this.shadow) ? 'shadow' : null;
    },
  }
}
</script>

<style lang="scss">
@import '../assets/scss/components/card.scss';
</style>
