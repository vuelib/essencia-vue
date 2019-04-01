import Vue from 'vue'
import App from './App.vue'
import Ripple from 'vue-ripple-directive'

Vue.config.productionTip = false

Ripple.color = 'rgba(0, 0, 0, 0.08)';

Vue.directive('ripple', Ripple);

new Vue({
  render: h => h(App),
}).$mount('#app')
