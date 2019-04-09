<template>
  <div class="ess tile" :class="[isAuto, canWrap, `gutter-${gutter}`, canLimitHeight, canAlignContent, canSeparator]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "EssListTile",
  props: {
    auto: {
      type: Boolean,
      required: false,
      default: false,
    },
    wrap: {
      type: Boolean,
      required: false,
      default: false,
    },
    gutter: {
      type: String,
      required: false,
      default: null, // small, big
    },
    limitHeight: {
      type: Boolean,
      required: false,
      default: false,
    },
    alignContent: {
      type: String,
      required: false,
      default: null, // start, center, end
    },
    separator: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    isAuto() {
      return (this.auto) ? 'auto' : null;
    },
    canWrap() {
      return (this.wrap) ? 'wrap' : null;
    },
    canLimitHeight() {
      return (this.limitHeight) ? 'limit-height' : null;
    },
    canAlignContent() {

      const validAlignments = ['start', 'center', 'end'];

      if (this.alignContent && validAlignments.includes(this.alignContent)) {
        return `align-content-${this.alignContent}`;
      }

      return null;
    },
    canSeparator() {

      const validSeparators = ['left', 'right'];

      if (this.separator && validSeparators.includes(this.separator)) {
        return `${this.separator}-separator`;
      }

      return null;
    },
  }
};
</script>
