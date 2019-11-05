import Vue from 'vue'
import VueRouter from 'vue-router'

/* 导入的组件 */
import Home from '../views/Home/Home.vue'
import Mine from '../views/Mine/Mine.vue'
import MtDownLoad from '../views/MeituanDownLoad/MtDownLoad.vue'
import Help from '../views/Help/Help.vue'
import PcVersion from '../views/PcVersion/PcVersion.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "hash",
  routes: [{
    path: '/',
    redirect: '/Home'
  }, {
    path: '/Home',
    name: 'home',
    component: Home
  },{
    path:'/Mine',
    name:'mine',
    component:Mine
  },{
    path:'/MtDownLoad',
    name:'MtDownLoad',
    component:MtDownLoad
  },{
    path:'/PcVersion',
    name:'PcVersion',
    component:PcVersion
  },{
    path:'/Help',
    name:'Help',
    component:Help
  }]
})


export default router