<template>
  <img class="ess avatar" :src="src" :class="[size, shape]" />
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'EssAvatar',
})
export default class EssAvatar extends Vue {

  @Prop({ required: true, default: '' })
  protected src!: string;

  @Prop({ required: true, default: 'md' })
  protected size!: string|null;

  @Prop({ required: true, default: 'circle' })
  protected shape!: string|null;

  constructor() {
    super();
  }
}
</script>
