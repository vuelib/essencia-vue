<template>
  <li :id="id" @click="$parent.setCurrentTab(name)">
    <label class="ess font-semi-bold progress-label">
      <slot/>
    </label>
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'EssTab',
})
export default class EssTab extends Vue {
  private id: string | null = null;

  @Prop({ required: true, default: null })
  private name!: string | null;

  constructor() {
    super();
  }

  private mounted(): void {

    this.$nextTick().then(() => {
      this.id = require('uuid/v1')();
    });
  }
}
</script>
