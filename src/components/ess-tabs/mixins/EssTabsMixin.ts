import _ from 'lodash';
import { Component, Prop, Vue, Watch} from 'vue-property-decorator';

@Component({
  model: {
    prop: 'value',
    event: 'change',
  },
})
export default class EssTabsMixin extends Vue {
  
  protected children: any[] = [];

  @Prop({ required: true })
  protected value!: string;

  constructor() {
    super();
  }

  @Watch('value')
  public handle() {

    this.changeName(this.value);
  }

  protected mounted(): void {

    this.$nextTick().then(() => {
      this.children = this.mapChildren();
      this.changeName(this.value);
    });
  }

  private mapChildren(): any {
    
    return this.$children.filter((item: any) => {
      return item.$el instanceof HTMLLIElement;
    });
  }

  protected getChildByName(name: string): HTMLLIElement {
    
    return _.find(this.children, ['name', name]).$el as HTMLLIElement;
  }

  protected changeName(name: string) {

    this.$emit('change', name);
  }
}