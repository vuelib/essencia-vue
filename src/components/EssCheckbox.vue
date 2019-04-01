<template>
  <div class="ess checkbox" :class="[isDark]">
    <input
      type="checkbox" 
      class="ess" 
      :class="[color, canShadow, canIllumination]"
      :id="id"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
    />
    <label :for="id"> <slot></slot> </label>
  </div>
</template>

<script>
export default {
  name: "EssCheckbox",
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    color: {
      type: String,
      default: 'blue'
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
    id: {
      type: String,
      required: true,
      default: null,
    },
    checked: {
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
};
</script>

<style lang="scss">
@import '../assets/scss/components/checkbox.scss';
</style>
