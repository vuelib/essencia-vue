import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  model: {
    prop: 'value',
    event: 'input',
  },
})
export default class EssProgressMixin extends Vue {

  @Prop({ required: false, default: 4 })
  protected size!: number;

  @Prop({ required: false, default: 'blue' })
  protected color!: string;

  @Prop({ required: false, default: 0 })
  protected value!: number;

  @Prop({ required: false, default: 100 })
  protected maxValue!: number;

  constructor() {
    super();
  }
}
