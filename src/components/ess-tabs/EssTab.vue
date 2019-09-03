<template>
  <li :id="id" @click="$parent.setCurrentTab(name)">
    <label class="ess font-semi-bold progress-label">
      <slot/>
    </label>
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import EssTabMixin from './mixins/EssTabMixin';

@Component({
  name: 'EssTab',
})
export default class EssTab extends EssTabMixin {}
</script>
