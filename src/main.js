import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue'
import VueOnsen from 'vue-onsenui';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueOnsen); 

new Vue({
  render: h => h(App),
}).$mount('#app')
