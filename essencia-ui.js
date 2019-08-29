/*
|--------------------------------------------------------------------------
| DIRECTIVES
|--------------------------------------------------------------------------
*/
// import Ripple from 'vue-ripple-directive'
// import Closable from './src/directives/ClickOutside'

/*
|--------------------------------------------------------------------------
| COMPONENTS
|--------------------------------------------------------------------------
*/
// import EssCard from "./src/components/EssCard";

const components = [
  //  EssCard,
];

const Components = {
  install(Vue) {
    // Vue.directive('click-outside', Closable);

    components.map(component => {
      Vue.component(component.name, component);
    });
  }
}

export default Components;