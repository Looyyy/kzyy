import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Shop from '@/components/Shop'
import Orders from '@/components/user/Orders'
import User from '@/components/User'
import Adress from '@/components/user/Adress'
import AdressEdit from '@/components/user/AdressEdit'
import AdressCreated from '@/components/user/AdressCreated'
import ConfirmOrder from '@/components/confirmOrder/ConfirmOrder'
import MonaLity from '@/components/monality/MonaLity.vue'
import data from '@/components/monality/data.vue'
import commen from '@/components/homePage/commen.vue'
Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    { 
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/shop/confirmOrder',
      name: 'confirmOrder',
      component: ConfirmOrder
    },
    {
      path: '/shop/monaLity',
      name: 'monaLity',
      component: MonaLity
    },
    {
      path: '/shop/commen',
      name: 'commen',
      component: commen
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/user/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/user/adress',
      name: 'adress',
      component: Adress
    },
    {
      path: '/user/adressEdit',
      name: 'adressedit',
      component: AdressEdit
    },
    {
      path: '/user/adressCreated',
      name: 'adressCreated',
      component: AdressCreated
    },
    {
      path: '/data',
      name: 'data',
      component: data
    }

  ]
})
export default router
