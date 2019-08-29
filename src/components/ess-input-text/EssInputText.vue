<template>
  <div class="ess text-field">
    <label class="ess" for="ess-input-text" v-if="label">{{ label }}</label>

    <input
      class="ess"
      :id="id"
      :type="type"
      :name="name"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
      :class="[size, color, shape]"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      @input="$emit('input', $event.target.value)"
    >

    <span class="ess input-text-tip" v-if="textTip">
      <i :class="iconTextTip" v-if="iconTextTip"></i>
      {{ textTip }}
    </span>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

import EssInputTextMixin from '@/components/ess-input-text/mixins/EssInputTextMixins';

@Component({
  name: 'EssInputText',
})
export default class EssInputText extends EssInputTextMixin {}
</script>
