<template>
  <ess-float-button :color="color" :shape="shape" :design="design">
    <slot/>
  </ess-float-button>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

import EssFloatButton from '@/components/ess-buttons/EssFloatButton.vue';
import EssButtonMixin from '@/components/ess-buttons/mixins/EssButtonMixin';

@Component({
  name: 'EssToogleButton',
  components: {
    EssFloatButton,
  },
})
export default class EssToggleButton extends EssButtonMixin {
  private currentIcon: string = '';
  private originalIcon: string = '';
  private iconElement: HTMLElement | null = null;

  @Prop({ required: true, default: '' })
  private icon!: string;

  private mounted(): void {
    this.$el.addEventListener('click', this.toggle);

    this.iconElement = this.$children[0].$el.querySelector('i') as HTMLElement;

    this.currentIcon = this.originalIcon = this.iconElement.className;
  }

  private toggle() {
    if (this.currentIcon === this.originalIcon) {
      this.currentIcon = this.icon;
    } else {
      this.currentIcon = this.originalIcon;
    }

    this.iconElement.className = this.currentIcon;
  }

  private beforeDetroy(): void {
    this.$el.removeEventListener('click', this.toggle);
  }
}
</script>
