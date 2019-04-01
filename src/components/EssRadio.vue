<template>

  <div class="ess radio" :class="[isDark]"> 
    <label :for="id"> 
      <input
        type="radio"
        :class="[color, canShadow, canIllumination]"
        :id="id"
        :name="name"
        :value="value"
        :checked="picked === value"
        @change="$emit('change', $event.target.value)" />
      <slot></slot>
    </label>
  </div>

</template>

<script>
export default {
  name: "EssRadio",
  model: {
    prop: 'picked',
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
    name: {
      type: String,
      required: true,
      default: null,
    },
    value: {
      type: String,
      default: null
    },
    picked: {
      type: String,
      default: null
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
  },
 };
</script>

<style lang="scss">
@import '../assets/scss/components/radio.scss';
</style>
