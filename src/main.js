import Vue from 'vue'
import App from './App.vue'
// import Ripple from 'vue-ripple-directive'
import ClickOutside from './directives/ClickOutside'

Vue.config.productionTip = false

Vue.directive('click-outside', ClickOutside);

new Vue({
  render: h => h(App),
}).$mount('#app')
