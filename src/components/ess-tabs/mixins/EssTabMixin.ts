import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class EssTabMixin extends Vue {

  private id: string | null = null;

  @Prop({ required: true, default: null })
  private name!: string | null;

  constructor() {
    super();
  }

  private mounted(): void {

    this.$nextTick().then(() => {
      this.id = require('uuid/v1')();
    });
  }
}