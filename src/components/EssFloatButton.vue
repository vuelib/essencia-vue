<template>
  <div >

    <button
      v-if="!route"
      v-ripple
      class="ess float"
      :class="[shape, design, size, color, canShadow, canIllumination]"
      :disabled="disabled"
    > <slot></slot> </button>

    <router-link
      v-if="route"
      v-ripple
      class="ess float-button"
      :to="route"
      :class="[shape, design, size, color, canShadow, canIllumination]"
      :disabled="disabled"
    > <slot></slot> </router-link>

  </div>
</template>

<script>
export default {
  name: "EssFloatButton",
  props: {
    shape: {
      type: String,
      default: "rounded" // square, rounded, circle
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
    route: {
      type: String,
      default: null
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