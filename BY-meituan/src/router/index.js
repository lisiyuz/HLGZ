import Vue from 'vue'
import VueRouter from 'vue-router'

/* 导入的组件 */
import Home from '../views/Home/Home.vue'
import Mine from '../views/Mine/Mine.vue'
import Mines from '../views/Mine/mins.vue'
import MtDownLoad from '../views/MeituanDownLoad/MtDownLoad.vue'
import Help from '../views/Help/Help.vue'
import PcVersion from '../views/PcVersion/PcVersion.vue'
import Order from '../views/Order/Order.vue'
import YesOrder from '../views/Order/YesOrder.vue'
import PayOrder from '../views/PayOrder/PayOrder.vue'
import unEnroll from '../views/Enroll/unEnroll.vue'
import MyLogin from '../views/Mine/MineLogin.vue'
import MineDd from '../views/Mine/MineZh/MineDd.vue'
import allOrder from '../views/Mine/MineOrder/allOrder'
import MineSearch from '../views/Mine/MineSs/MineSearch'
import Details from '../views/Details/Details.vue'
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
  }, {
    path: '/Order',
    name: 'order',
    component: Order
  }, {
    path: '/yesorder',
    name: 'yesorder',
    component: YesOrder
  },
  {
    path: '/PayOrder',
    name: 'payorder',
    component: PayOrder
  },
  {
    path: '/allOrder',
    name: 'allpayorder',
    component: allOrder
  }, {
    path: '/Enroll',
    name: 'enroll',
    component: unEnroll
  }, {
    path: '/PayOrder',
    name: 'payorder',
    component: PayOrder
  }, {
    path: '/Mine',
    name: 'mine',
    component: Mine,
    children: [
      {
        path: '',
        name: 'mine',
        component: Mines
      },{
      path: 'allOrder',
      name: 'MineOrder',
      component: allOrder
    },{
      path: 'MineDd',
      name: 'MineZh',
      component: MineDd
    },{
      path: 'MineSearch',
      name: 'MineSs',
      component: MineSearch
    }]
  }, {
    path: '/MyLogin',
    name: 'MyLogin',
    component: MyLogin
  }, {
    path: '/MtDownLoad',
    name: 'MtDownLoad',
    component: MtDownLoad
  }, {
    path: '/MtDownLoad',
    name: 'MtDownLoad',
    component: MtDownLoad
  }, {
    path: '/Details',
    name: 'Details',
    component: Details
  }, {
    path: '/PcVersion',
    name: 'PcVersion',
    component: PcVersion
  }, {
    path: '/Help',
    name: 'Help',
    component: Help
  }]
})


export default router