<template>
  <div class="ess input" :class="[isDark]">
    <label :for="id">
      <slot></slot>
    </label>
    <input
      :type="type"
      class="ess"
      :class="[shape, design, color, isDark, canShadow, canIllumination]"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      :autocomplete="canAutocomplete"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('onFocus')"
      @blur="$emit('onBlur')"
    />
  </div>
</template>

<script>
export default {
  name: 'EssInput',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    type: {
      type: String,
      default: "text" // square, rounded, pill
    },
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
      default: null
    },
    placeholder: {
      type: String,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    autocomplete: {
      type: Boolean,
      required: false,
      default: true
    },
    value: {
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
    
    canAutocomplete() {
      return (this.autocomplete) ? 'on' : 'off';
    },
  }
}
</script>
