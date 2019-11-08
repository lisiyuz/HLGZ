import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

/* 导入公共样式 */
import './assets/reset.min.css'
import './assets/font/iconfont.css'
import './assets/font_1494639_nrc9v20jj9/iconfont.css'
import './assets/font_1498473_z88egw1pdi/iconfont.css'





Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
