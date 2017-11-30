// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Require the main Sass manifest file
require('./style/main.scss');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

/* ##### Menu ####### */
var openMenu = document.getElementById('open-menu')
openMenu.addEventListener('click', openNav)

var closeMenu = document.getElementById('close-menu')
closeMenu.addEventListener('click', closeNav)

var lis = document.getElementById('overlay-content').getElementsByTagName('li')
for (var i = 0; i < lis.length; i++) { lis[i].addEventListener('click', closeNav) }

function openNav () { document.getElementById('nav').style.width = '100%' }

function closeNav () { document.getElementById('nav').style.width = '0%' }
