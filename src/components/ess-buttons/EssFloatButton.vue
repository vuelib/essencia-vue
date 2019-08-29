<template>
  <button class="ess float" :class="[color, shape, design]">
    <slot/>
  </button>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

import EssButtonMixin from '@/components/ess-buttons/mixins/EssButtonMixin';

@Component({
  name: 'EssFloatButton',
})
export default class EssFloatButton extends EssButtonMixin {
  private currentIcon: string | null = '';
  private originalIcon: string | null = '';

  @Prop({ required: false, default: false })
  private toggle!: string | null;

  @Prop({ required: false, default: 'blue' })
  private toggleIcon!: string | null;

  private mounted(): void {
    if (this.toggle) {
      this.initToggle();
    }
  }

  private initToggle(): void {
    const el = this.$el.querySelector('i') as HTMLElement;

    this.currentIcon = this.originalIcon = el.className;
  }

  private toogleIconButton() {
    if (this.currentIcon === this.originalIcon) {
      this.currentIcon = this.toggleIcon;
    } else {
      this.currentIcon = this.originalIcon;
    }
  }
}
</script>
