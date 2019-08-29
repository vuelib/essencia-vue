<template>
  <div class="ess input-text">
    <label class="ess" for="ess-input-text" v-if="label">{{ label }}</label>

    <input
      class="ess"
      :id="id"
      :name="name"
      :type="dynamicType"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
      :class="[size, color, shape]"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      @input="$emit('input', $event.target.value)"
    >

    <span class="ess input-text-tip" v-if="textTip && !showStrength">
      <i :class="iconTextTip" v-if="iconTextTip"></i>
      {{ textTip }}
    </span>

    <ess-toggle-button
      design="clean"
      icon="far fa-eye-slash"
      class="password-visibility-button"
      :color="color"
      @click.native="toggleType()"
    >
      <i class="far fa-eye"></i>
    </ess-toggle-button>

    <ess-password-strength :password="value" v-if="showStrength"/>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

import EssInputText from '@/components/ess-input-text/EssInputText.vue';
import EssToggleButton from '@/components/ess-buttons/EssToggleButton.vue';
import EssPasswordStrength from '@/components/ess-input-text/EssPasswordStrength.vue';

import EssInputTextMixin from '@/components/ess-input-text/mixins/EssInputTextMixins';

@Component({
  name: 'EssInputPassword',
  components: {
    EssInputText,
    EssToggleButton,
    EssPasswordStrength,
  },
})
export default class EssInputPassword extends EssInputTextMixin {
  private dynamicType: string | null;

  @Prop({ required: false, default: false })
  private showStrength!: boolean;

  constructor() {
    super();

    this.dynamicType = 'password';
  }

  private toggleType(): void {
    this.dynamicType === 'password'
      ? (this.dynamicType = 'text')
      : (this.dynamicType = 'password');
  }
}
</script>

<style lang="scss" scoped>
.password-visibility-button {
  top: 36px;
  right: 5px;
  position: absolute;
}
</style>
