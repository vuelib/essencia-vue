<template>
  <li :class="[color]" :id="id">
    <label class="ess font-semi-bold progress-label">
      <slot/>
    </label>
    <div class="ess icon">
      <i :class="currentIcon"></i>
    </div>
    <ess-tooltip
      icon-color="#FFB900"
      :left-icon="validateIcon"
      :target="id"
      :explicit-call="true"
      :ref="`tooltip-${id}`"
    >{{ validateMessage }}</ess-tooltip>
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import EssTooltip from '@/components/ess-tooltip/EssTooltip.vue';

@Component({
  name: 'EssStep',
  components: {
    EssTooltip,
  },
})
export default class EssStep extends Vue {
  private id: string | null = null;
  private currentIcon: string | null = null;
  private originalIcon: string | null = null;

  @Prop({ required: true, default: null })
  private name!: string | null;

  @Prop({ required: true, default: null })
  private icon!: string | null;

  @Prop({ required: true, default: 'blue' })
  private color!: string | null;

  @Prop({ required: false, default: true })
  private validate!: boolean | null;

  @Prop({ required: false, default: '' })
  private validateIcon!: string | null;

  @Prop({ required: false, default: null })
  private validateMessage!: string | null;

  constructor() {
    super();
  }

  private mounted(): void {
    this.currentIcon = this.icon;
    this.originalIcon = this.icon;
    this.id = require('uuid/v1')();
  }
}
</script>
