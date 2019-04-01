<template>
  <img class="ess avatar" :class="[shape, size]" :src="src" />
</template>

<script>
export default {
  name: 'EssAvatar',
  props: {
    shape: {
      type: String,
      required: false,
      default: 'circle' // square, rounded, circle
    },
    size: {
      type: String,
      required: false,
      default: null // small, big
    },
    src: {
      type: String,
      required: true,
      default: ''
    },
  }
}
</script>

<style lang="scss">
@import '../assets/scss/components/avatar.scss';
</style>
