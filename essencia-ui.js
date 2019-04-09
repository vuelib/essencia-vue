/*
|--------------------------------------------------------------------------
| DIRECTIVES
|--------------------------------------------------------------------------
*/
// import Ripple from 'vue-ripple-directive'
import Closable from './src/directives/ClickOutside'

/*
|--------------------------------------------------------------------------
| COMPONENTS
|--------------------------------------------------------------------------
*/
import EssCard from "./src/components/EssCard";
import EssMenu from "./src/components/EssMenu";
import EssList from "./src/components/EssList";
import EssBadge from "./src/components/EssBadge";
import EssRadio from "./src/components/EssRadio";
import EssInput from "./src/components/EssInput";
import EssAvatar from "./src/components/EssAvatar";
import EssButton from "./src/components/EssButton";
import EssSelect from "./src/components/EssSelect";
import EssSwitch from "./src/components/EssSwitch";
import EssListItem from "./src/components/EssListItem";
import EssListTile from "./src/components/EssListTile";
import EssCheckbox from "./src/components/EssCheckbox";
import EssCardFooter from "./src/components/EssCardFooter";
import EssCardHeader from "./src/components/EssCardHeader";
import EssCardContent from "./src/components/EssCardContent";
import EssFloatButton from "./src/components/EssFloatButton";

const components = [
   EssCard,
   EssMenu,
   EssList,
   EssBadge,
   EssRadio,
   EssInput,
   EssAvatar,
   EssButton,
   EssSelect,
   EssSwitch,
   EssListItem,
   EssListTile,
   EssCheckbox,
   EssCardFooter,
   EssCardHeader,
   EssCardContent,
   EssFloatButton,
];

const Components = {
  install(Vue) {
    Vue.directive('click-outside', Closable);

    components.map(component => {
      Vue.component(component.name, component);
    });
  }
}

export default Components;