import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Services from '@/components/Services'

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
      path: '/tjanster',
      name: 'Services',
      component: Services
    }
  ]
})
