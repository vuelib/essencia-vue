import { Prop, Component, Vue } from 'vue-property-decorator';

@Component({})
export default class EssButtonMixin extends Vue {

  @Prop({ required: false, default: 'blue' })
  private color!: string|null;

  @Prop({ required: false, default: '' })
  private shape!: string|null;

  @Prop({ required: false, default: '' })
  private design!: string|null;

  constructor() {
    super();
  }
}
