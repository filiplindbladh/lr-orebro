import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import About from '@/components/About'
import lrOnline from '@/components/lrOnline'
import Fortnox from '@/components/Fortnox'
import Positions from '@/components/Positions'

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
    },
    {
      path: '/online',
      name: 'Online',
      component: lrOnline
    },
    {
      path: '/kontakta-oss',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/om-oss',
      name: 'About',
      component: About
    },
    {
      path: '/fortnox',
      name: 'Fortnox',
      component: Fortnox
    },
    {
      path: '/lediga-tjanster',
      name: 'Positions',
      component: Positions
    }
  ],
  // when we change to a different page
  // we alwalys see the top of the page
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
