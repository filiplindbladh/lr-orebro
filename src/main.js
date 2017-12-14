// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'
import VueScrollTo from 'vue-scrollto'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
Vue.use(VueTabs)
Vue.use(VueScrollTo)

// Require the main Sass manifest file
require('./style/main.scss')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

/* ##### Menu ####### */
// var openMenu = document.getElementById('open-menu')
// openMenu.addEventListener('click', openNav)

// var closeMenu = document.getElementById('close-menu')
// closeMenu.addEventListener('click', closeNav)

// var lis = document.getElementById('overlay-content').getElementsByTagName('li')
// for (var i = 0; i < lis.length; i++) { lis[i].addEventListener('click', closeNav) }

// function openNav () { document.getElementById('nav').style.width = '100%' }

// function closeNav () { document.getElementById('nav').style.width = '0%' }
// Find output DOM associated to the DOM element passed as parameter
function findOutputForSlider (element) {
  var idVal = element.id
  var outputs = document.getElementsByTagName('output')
  for (var i = 0; i < outputs.length; i++) {
    if (outputs[i].htmlFor === idVal) { return outputs[i] }
  }
}

function getSliderOutputPosition (slider) {
  // Update output position
  var newPlace,
    minValue

  var style = window.getComputedStyle(slider, null)
  // Measure width of range input
  var sliderWidth = parseInt(style.getPropertyValue('width'), 10)

  // Figure out placement percentage between left and right of input
  if (!slider.getAttribute('min')) {
    minValue = 0
  } else {
    minValue = slider.getAttribute('min')
  }
  var newPoint = (slider.value - minValue) / (slider.getAttribute('max') - minValue)

  // Prevent bubble from going beyond left or right (unsupported browsers)
  if (newPoint < 0) {
    newPlace = 0
  } else if (newPoint > 1) {
    newPlace = sliderWidth
  } else {
    newPlace = sliderWidth * newPoint
  }

  return {
    'position': newPlace + 'px'
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Get all document sliders
  var sliders = document.querySelectorAll('input[type="range"].slider');
  [].forEach.call(sliders, function (slider) {
    var output = findOutputForSlider(slider)
    if (output) {
      if (slider.classList.contains('has-output-tooltip')) {
        // Get new output position
        var newPosition = getSliderOutputPosition(slider)

        // Set output position
        output.style['left'] = newPosition.position
      }

      // Add event listener to update output when slider value change
      slider.addEventListener('input', function (event) {
        if (event.target.classList.contains('has-output-tooltip')) {
          // Get new output position
          var newPosition = getSliderOutputPosition(event.target)

          // Set output position
          output.style['left'] = newPosition.position
        }

        // Update output with slider value
        output.value = event.target.value
      })
    }
  })
})
