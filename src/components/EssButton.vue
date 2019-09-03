<template>
  <!-- <div > -->

    <button
      class="ess"
      :disabled="disabled"
      :class="[shape, design, size, color, canShadow, canIllumination]"
    > <slot></slot> </button>

    <!-- <router-link
      v-if="route"
      class="ess button"
      :to="route"
      :class="[shape, design, size, color, canShadow, canIllumination]"
      :disabled="disabled"
    > <slot></slot> </router-link>

  </div> -->
</template>

<script>
export default {
  name: "EssButton",
  props: {
    shape: {
      type: String,
      default: "rounded" // square, rounded, pill
    },
    design: {
      type: String,
      default: "filled" // filled, outlined, clean
    },
    size: {
      type: String,
      default: null // small, big
    },
    color: {
      type: String,
      default: 'blue'
    },
    shadow: {
      type: Boolean,
      default: false
    },
    illuminate: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    canShadow() {
      return (this.shadow) ? 'shadow' : null;
    },
    canIllumination() {
      return (this.illuminate) ? 'illuminate' : null;
    },
  }
};
</script>