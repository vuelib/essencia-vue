<template>
  <button class="ess" :class="[color, shape, design]">
    <slot/>
  </button>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

import EssButtonMixin from '@/components/ess-buttons/mixins/EssButtonMixin';

@Component({
  name: 'EssButton',
})
export default class EssButton extends EssButtonMixin {}
</script>
