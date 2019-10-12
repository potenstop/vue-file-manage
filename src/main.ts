import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ViewUI from 'view-design'
import i18n from '@/locale'
import 'view-design/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(ViewUI, {
  i18n: (key: string, value: string) => i18n.t(key, value)
})
new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
