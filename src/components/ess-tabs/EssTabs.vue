<template>
  <div class="ess tabs">
    <ul>
      <slot/>
    </ul>
    <div class="ess tab-indicator" :style="indicatorStyle"></div>
  </div>
</template>

<script lang="ts">
import { find, findIndex } from 'lodash';
import { Prop, Watch, Component, Vue } from 'vue-property-decorator';

import _ from 'lodash';

@Component({
  name: 'EssTabs',
  model: {
    prop: 'value',
    event: 'change',
  },
})
export default class EssTabs extends Vue {
  private tabs: any[] = [];
  private countTabs: number = 0;
  private currentTab: number = 0;

  private indicatorPosX: number = 0;
  private indicatorWidth: number = 0;

  @Prop({ required: false, default: 'blue' })
  private color!: string;

  @Prop({ required: true })
  private value!: string;

  constructor() {
    super();
  }

  @Watch('value')
  public handle() {
    this.setCurrentTab(this.value);
  }

  get indicatorStyle(): object {
    return {
      left: `${this.indicatorPosX}px`,
      width: `${this.indicatorWidth}px`,
    };
  }

  private mounted(): void {
    this.$nextTick().then(() => {
      this.tabs = this.mapTabs();
      this.setCurrentTab(this.value);
    });
  }

  private mapTabs(): any {
    return this.$children.filter((item: any) => {
      return item.$el instanceof HTMLLIElement;
    });
  }

  private setCurrentTab(name: string) {
    const tab = _.find(this.tabs, ['name', name]);

    this.indicatorPosX = tab.$el.offsetLeft;
    this.indicatorWidth = tab.$el.offsetWidth;

    this.$emit('change', name);
  }
}
</script>
