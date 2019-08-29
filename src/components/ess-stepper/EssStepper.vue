<template>
  <div class="ess stepper">
    <ess-progress-bar
      class="ess stepper-progress-bar"
      v-model="currentStep"
      :color="color"
      :maxValue="countSteps"
    />
    <ul>
      <slot/>
    </ul>
  </div>
</template>

<script lang="ts">
import { find, findIndex } from 'lodash';
import { Prop, Watch, Component, Vue } from 'vue-property-decorator';

import EssProgressBar from '@/components/ess-progress/EssProgressBar.vue';

@Component({
  name: 'EssStepper',
  components: {
    EssProgressBar,
  },
  model: {
    prop: 'value',
    event: 'change',
  },
})
export default class EssStepper extends Vue {
  private steps: any[] = [];

  private countSteps: number = 0;
  private currentStep: number = 0;

  @Prop({ required: false, default: 'blue' })
  private color!: string;

  @Prop({ required: true })
  private value!: string;

  constructor() {
    super();
  }

  public mounted(): void {
    this.steps = this.mapSteps();
    this.countSteps = this.steps.length;

    this.reset();
  }

  public next(): void {
    const item: any = this.steps[this.currentStep - 1];

    if (!item.validate) {
      item.$refs[`tooltip-${item.id}`].show();
    }

    if (
      this.countSteps > 1 &&
      this.currentStep < this.countSteps &&
      item.validate
    ) {
      item.$refs[`tooltip-${item.id}`].hide();

      this.currentStep++;
      this.$emit('change', this.steps[this.currentStep - 1].name);
    }
  }

  public previous(): void {
    const item: any = this.steps[this.currentStep - 1];

    if (this.currentStep > 1) {
      item.$refs[`tooltip-${item.id}`].hide();

      this.currentStep--;
      this.$emit('change', this.steps[this.currentStep - 1].name);
    }
  }

  public reset(): void {
    this.currentStep = this.mapCurrentStep();
  }

  private mapSteps(): any {
    const steps: object[] = this.$children.filter((item: any) => {
      return item.$el instanceof HTMLLIElement;
    });

    return steps;
  }

  private mapCurrentStep(): any {
    const index = findIndex(this.steps, ['name', this.value]);

    if (index < 0 && this.countSteps > 1) {
      return 1;
    }

    if (index < 0) {
      return 0;
    }

    return index + 1;
  }
}
</script>
