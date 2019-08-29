<template>
  <div class="ess progress-bar">
    <label class="ess font-semi-bold progress-label" v-if="label">{{ label }}</label>
    <!-- <label class="ess font-regular progress-counter" :style="[labelCounterPosition]"> {{ labelCounterText }} </label> -->
    <div class="ess bar-background" :style="{ height: barHeight }"></div>
    <div class="ess bar" :class="[color]" :style="{ width: barWidth, height: barHeight }"></div>
  </div>
</template>

<script lang="ts">
import { Prop, Watch, Component } from 'vue-property-decorator';

import EssProgressMixin from '@/components/ess-progress/mixins/EssProgressMixin';

@Component({
  name: 'EssProgressBar',
})
export default class EssProgressBar extends EssProgressMixin {
  @Prop({ required: false, default: '' })
  protected label!: string;

  private barWidth: string | null;
  private barHeight: string | null;

  // @Prop({ required: false, default: 'fixed' })
  // protected counter!: string;

  // @Prop({ required: false, default: 'top' })
  // protected counterPosition!: string;

  constructor() {
    super();

    this.barWidth = null;
    this.barHeight = null;
  }

  public mounted(): void {
    this.barHeight = `${this.size}px`;
    this.barWidth = `${this.calcBarWidth()}%`;
  }

  @Watch('value')
  private onValueChanged(): void {
    this.barWidth = `${this.calcBarWidth()}%`;
  }

  private calcBarWidth(): number {
    const calc = (this.value / this.maxValue) * 100;

    if (calc < 0) {
      return 0;
    }

    if (calc > 100) {
      return 100;
    }

    return calc;
  }
}
</script>
