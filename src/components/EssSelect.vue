<template>
  <div class="ess select" :class="[isDark]">
    <label :for="id">
      <slot></slot>
    </label>

    <select
      class="ess"
      :id="id"
      :value="value"
      :disabled="disabled"
      :class="[shape, design, color, isDark]"
      @change="$emit('input', $event.target.value)"
    >
      <option v-for="(option, index) in options" :value="option.value" :key="index">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "EssSelect",
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    shape: {
      type: String,
      default: "rounded" // square, rounded, pill
    },
    design: {
      type: String,
      default: "outlined" // filled, outlined, clean
    },
    color: {
      type: String,
      default: "blue"
    },
    dark: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      required: true,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: null
    },
    options: {
      type: Array,
      required: true,
      default: [],
    },
    value: {
      type: String,
      default: null
    }
  },
  computed: {
    isDark() {
      return (this.dark) ? 'dark' : null;
    },
  }
};
</script>
