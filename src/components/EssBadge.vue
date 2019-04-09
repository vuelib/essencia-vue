<template>
  <div class="ess badge" :class="[shape, size, color, isDark, canShadow, canIllumination]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EssBadge',
  props: {
    shape: {
      type: String,
      default: "rounded" // rounded, pill
    },
    size: {
      type: String,
      default: null // small, big
    },
    color: {
      type: String,
      default: null
    },
    dark: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    illuminate: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    isDark() {
      return (this.dark) ? 'dark' : null;
    },

    canShadow() {
      return (this.shadow) ? 'shadow' : null;
    },
    
    canIllumination() {
      return (this.illuminate) ? 'illuminate' : null;
    },
  }
}
</script>
