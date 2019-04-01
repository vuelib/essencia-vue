import Ripple from 'vue-ripple-directive'

import EssCard from "./src/components/EssCard";
import EssList from "./src/components/EssList";
import EssBadge from "./src/components/EssBadge";
import EssRadio from "./src/components/EssRadio";
import EssInput from "./src/components/EssInput";
import EssAvatar from "./src/components/EssAvatar";
import EssButton from "./src/components/EssButton";
import EssSwitch from "./src/components/EssSwitch";
import EssListItem from "./src/components/EssListItem";
import EssListTile from "./src/components/EssListTile";
import EssCheckbox from "./src/components/EssCheckbox";
import EssFloatButton from "./src/components/EssFloatButton";

const components = [
   EssCard,
   EssList,
   EssBadge,
   EssRadio,
   EssInput,
   EssAvatar,
   EssButton,
   EssSwitch,
   EssListItem,
   EssListTile,
   EssCheckbox,
   EssFloatButton,
];

const Components = {
  install(Vue) {

    Ripple.color = 'rgba(0, 0, 0, 0.08)';

    Vue.directive('ripple', Ripple);

    components.map(component => {
      Vue.component(component.name, component);
    });
  }
}

export default Components;