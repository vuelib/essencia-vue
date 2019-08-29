import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class EssBadgeMixin extends Vue {

  @Prop({ required: false, default: '' })
  protected size!: string | null;

  @Prop({ required: false, default: 'blue' })
  protected color!: string | null;

  @Prop({ required: false, default: 'rounded' })
  protected shape!: string | null;

  @Prop({ required: false, default: '' })
  protected leftIcon!: string | null;

  @Prop({ required: false, default: '' })
  protected rightIcon!: string | null;

  @Prop({ required: false, default: '' })
  protected iconColor!: string | null;

  constructor() {
    super();
  }
}
