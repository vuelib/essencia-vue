<template>
  <div class="ess item" :class="[`gutter-${gutter}`, canSeparator, canHighlight]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "EssListItem",
  props: {
    gutter: {
      type: String,
      required: false,
      default: null, // small, big
    },
    separator: {
      type: Boolean,
      required: false,
      default: false,
    },
    highlight: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    canSeparator() {
      return (this.separator) ? 'separator' : null;
    },
    canHighlight() {
      return (this.highlight) ? 'highlight' : null;
    }
  }
};
</script>
