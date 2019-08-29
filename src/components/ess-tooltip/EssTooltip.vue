<template>
  <transition name="fade-tooltip">
    <ess-badge
      color="dark"
      :left-icon="leftIcon"
      :right-icon="rightIcon"
      :icon-color="iconColor"
      style="position: absolute;"
      v-show="visible"
    >
      <slot/>
    </ess-badge>
  </transition>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

import Popper from 'popper.js';
import EssBadge from '@/components/ess-badge/EssBadge.vue';

import EssBadgeMixin from '@/components/ess-badge/mixins/EssBadgeMixin';

@Component({
  name: 'EssTooltip',
  components: {
    EssBadge,
  },
})
export default class EssTooltip extends EssBadgeMixin {

  get popperConfig(): object {
    return {
      placement: 'bottom',
      modifiers: {
        preventOverflow: {
          enabled: true,
        },
      },
      flip: {
        behavior: ['left', 'right', 'top', 'bottom'],
      },
    };
  }
  private visible: boolean = false;
  private popperEl: Popper | null = null;
  private targetEl: HTMLElement | null = null;

  @Prop({ required: false, default: 0 })
  private delay!: number;

  @Prop({ required: true, default: '' })
  private target!: string;

  @Prop({ required: false, default: false })
  private explicitCall!: boolean;

  constructor() {
    super();
  }

  public show(): void {
    this.visible = true;
  }

  public hide(): void {
    setTimeout(() => {
      this.visible = false;
    }, this.delay);
  }

  private mounted(): void {
    this.$nextTick().then(() => {
      this.targetEl = document.getElementById(this.target) as HTMLElement;
      this.popperEl = new Popper(
        this.targetEl,
        this.$children[0].$el,
        this.popperConfig,
      );

      if (!this.explicitCall) {
        this.targetEl.addEventListener('mouseenter', this.show, false);
        this.targetEl.addEventListener('mouseleave', this.hide, false);
      }
    });
  }

  private beforeDestroy(): void {
    if (this.targetEl && !this.explicitCall) {
      this.targetEl.addEventListener('mouseenter', this.show, false);
      this.targetEl.addEventListener('mouseleave', this.hide, false);
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-tooltip-enter-active,
.fade-tooltip-leave-active {
  transition: opacity 300ms;
}
.fade-tooltip-enter,
.fade-tooltip-leave-to {
  opacity: 0;
}
</style>
