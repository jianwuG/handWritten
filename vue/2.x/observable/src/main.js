import Vue from 'vue'
import App from './App.vue'
import store from '../demo/toVuex/index'

Vue.config.productionTip = false;
Vue.prototype.$gwStore=store;

new Vue({
  render: h => h(App),
}).$mount('#app')
