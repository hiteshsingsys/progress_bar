import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

/**
 * Import plugin which will use across the project
 */
 import './plugins'

/**
 * Import Style Sheet
 */
 import './assets/scss/index.scss'

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
