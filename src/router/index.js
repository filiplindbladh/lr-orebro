import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Accounting from '@/components/Accounting'

Vue.use(Router)

export default new Router({
  hashbang: false,
  history: true,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/redovisning',
      name: 'Redovisning',
      component: Accounting
    }
  ]
})
