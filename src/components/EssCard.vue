<template>
  <div class="ess card" :class="[canShape, canColor, canShadow, isDark]">
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
    color: {
      type: String,
      default: null
    },
    shadow: {
      type: Boolean,
      required: false,
      default: false,
    },
    dark: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    canShape() {
      
      const validShapes = ['square', 'rounded'];

      if (validShapes.includes(this.shape)) {
        return this.shape;
      }

      return 'rounded';
    },
    canColor() {
      
      if (this.color) {
        return `bg-${this.color}`;
      }

      return null;
    },
    canShadow() {

      if (this.shadow) {
        return (this.isDark) ? 'shadow-dark' : 'shadow-light'
      }

      return null;
    },
    isDark() {

      return (this.dark) ? 'dark' : null;
    },
  }
}
</script>
