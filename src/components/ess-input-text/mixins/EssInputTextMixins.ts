import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  model: {
    prop: 'value',
    event: 'input',
  },
})
export default class EssInputText extends Vue {

  @Prop({ required: false, default: require('uuid/v1')() })
  protected id!: string | null;

  @Prop({ required: false, default: 'text' })
  protected type!: string | null;

  @Prop({ required: false, default: 'md' })
  protected size!: string | null;

  @Prop({ required: false, default: '' })
  protected name!: string | null;

  @Prop({ required: false, default: 'blue' })
  protected color!: string | null;

  @Prop({ required: false, default: '' })
  protected shape!: string | null;

  @Prop({ required: false, default: '' })
  protected label!: string | null;

  @Prop({ required: false, default: '' })
  protected value!: string | null;

  @Prop({ required: false, default: false })
  protected disabled!: boolean;

  @Prop({ required: false, default: false })
  protected required!: boolean;

  @Prop({ required: false, default: false })
  protected readonly!: boolean;

  @Prop({ required: false, default: '' })
  protected placeholder!: string | null;

  @Prop({ required: false, default: false })
  protected autocomplete!: boolean;

  @Prop({ required: false, default: '' })
  protected textTip!: string | null;

  @Prop({ required: false, default: '' })
  protected iconTextTip!: string | null;

  constructor() {
    super();
  }
}
