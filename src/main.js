import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  renderError(h, err) {
    return h('pre', { style: { color: 'red' } }, err.stack)
  },
}).$mount('#app')
