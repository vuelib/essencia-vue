<template>
  <div class="ess badge" :class="[color, shape, size]">
    <i :class="[leftIcon, 'left']" :style="{ color: this.iconColor }" v-if="leftIcon"></i>
    <slot></slot>
    <i :class="[rightIcon, 'right']" :style="{ color: this.iconColor }" v-if="rightIcon"></i>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

import EssBadgeMixin from '@/components/ess-badge/mixins/EssBadgeMixin';

@Component({
  name: 'EssBadge',
})
export default class EssBadge extends EssBadgeMixin {}
</script>
