<template>
  <div class="ess password-strength-bar">
    <!-- <div class="ess bar" :style="{ width: barWidth, height: barHeight, background: color }"></div> -->
    <div class="ess strenfth-indicator" :style="indicatorStyle"></div>
  </div>
</template>

<script lang="ts">
import _ from 'lodash';
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'EssPasswordStrength',
})
export default class EssPasswordStrength extends Vue {
  private zxcvbn: any = require('zxcvbn');

  @Prop({ required: true, default: '' })
  private password!: string | null;

  constructor() {
    super();
  }

  get strong() {
    return _.get(this.zxcvbn(this.password), 'score');
  }

  get indicatorStyle() {
    switch (this.strong) {
      case 0:
        return { background: '#E74C3C', left: '2%' };
      case 1:
        return { background: '#EE7A24', left: '20%' };
      case 2:
        return { background: '#F39C12', left: '40%' };
      case 3:
        return { background: '#F1C40F', left: '60%' };
      case 4:
        return { background: '#1ABC9C', left: 'calc(98% - 40px)' };
    }
  }
}
</script>

<style lang="scss" scoped>
.ess.password-strength-bar {
  left: 0;
  top: 96px;
  height: 4px;
  width: 100%;
  position: absolute;
  border-radius: 9999px;
  background: linear-gradient(
    270deg,
    #1abc9c 0%,
    #f1c40f 33.15%,
    #f39c12 64.64%,
    #e74c3c 100%
  );
}

.ess.password-strength-bar > .ess.strenfth-indicator {
  // left: 0;
  top: -4px;
  width: 40px;
  height: 12px;
  position: relative;
  border-radius: 999px;
  border: 2px solid #ffffff;
  transition: all 300ms ease-in-out;
}
</style>
