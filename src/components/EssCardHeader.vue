<template>
  <div class="ess header" :class="[canShape, canColor, isDark]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EssCardHeader',
  props: {
    shape: {
      type: String,
      default: 'rounded' // square, rounded
    },
    color: {
      type: String,
      default: null,
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
        if (this.shape === 'rounded') {
          return 'rounded-top';
        }

        return this.shape;
      }
    },
    canColor() {
      
      if (this.color) {
        return `bg-${this.color}`;
      }

      return null;
    },
    isDark() {

      return (this.dark) ? 'dark' : null;
    },
  }
}
</script>
