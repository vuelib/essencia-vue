<template>
  <div class="ess tabs">
    <ul>
      <slot/>
    </ul>
    <div class="ess tab-indicator" :style="indicatorStyle"></div>
  </div>
</template>

<script lang="ts">

import { Prop, Watch, Component, Vue } from 'vue-property-decorator';

import EssTabsMixin from './mixins/EssTabsMixin';

@Component({
  name: 'EssTabs',
})
export default class EssTabs extends EssTabsMixin {

  @Prop({ required: false, default: 'blue' })
  private color!: string;

  private indicatorPosX: number = 0;
  private indicatorWidth: number = 0;

  constructor() {
    
    super();
  }

  get indicatorStyle(): object {

    return {
      left: `${this.indicatorPosX}px`,
      width: `${this.indicatorWidth}px`,
    };
  }

  protected mounted(): void {

    this.$nextTick().then(() => {
      this.setCurrentTab(this.value);
    });
  }

  private setCurrentTab(name: string) {
    
    const child: HTMLLIElement = this.getChildByName(name);

    this.indicatorPosX = child.offsetLeft;
    this.indicatorWidth = child.offsetWidth;

    this.changeName(name);
  }
}
</script>
