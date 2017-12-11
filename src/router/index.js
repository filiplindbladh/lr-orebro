import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Services from '@/components/Services'
import ContactUs from '@/components/ContactUs'
import AboutUs from '@/components/AboutUs'
import lrOnline from '@/components/lrOnline'

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
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/om-oss',
      name: 'AboutUs',
      component: AboutUs
    }
  ]
})
