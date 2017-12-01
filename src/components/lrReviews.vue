<template>
  <div class="slider-container">
    <div class="slider">
      <slider animation="fade" :speed="100" :auto="false" :indicators="center" :control-btn="false">
        <slider-item>
          <div class="slider-icon">
            <i class="fa fa-quote-left fa-5x" aria-hidden="true"></i>
          </div>
          <div class="slider-text">
            <p>Remember, a "good" review is the type of review that's useful to the people who come along behind you. If you need to take some time away from the keyboard to really organize your thoughts and think about your experience from multiple sides of the issue, take it. Don't start writing in a fit of rage.</p>
          </div>
          <div class="slider-company">
            <p>– Namn Namnsson, <span>Företag AB</span></p>
          </div>
        </slider-item>
        <slider-item>
          <div class="slider-icon">
            <i class="fa fa-quote-left fa-5x" aria-hidden="true"></i>
          </div>
          <div class="slider-text">
            <p>Remember, a "good" review is the type of review that's useful to the people who come along behind you. If you need to take some time away from the keyboard to really organize your thoughts and think about your experience from multiple sides of the issue, take it. Don't start writing in a fit of rage.</p>
          </div>
          <div class="slider-company">
            <p>– Namn Namnsson, <span>Företag AB</span></p>
          </div>
        </slider-item>
        <slider-item>
          <div class="slider-icon">
            <i class="fa fa-quote-left fa-5x" aria-hidden="true"></i>
          </div>
          <div class="slider-text">
            <p>Remember, a "good" review is the type of review that's useful to the people who come along behind you. If you need to take some time away from the keyboard to really organize your thoughts and think about your experience from multiple sides of the issue, take it. Don't start writing in a fit of rage.</p>
          </div>
          <div class="slider-company">
            <p>– Namn Namnsson, <span>Företag AB</span></p>
          </div>
        </slider-item>
      </slider>
  </div>
</div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'
export default {
  name: 'lrReviews',
  data () {
    return {
      list: [
        { backgroundColor: '#3f51b5', width: '100%', height: '100%' },
        { backgroundColor: '#eee', width: '100%', height: '100%', auto: 'false' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', auto: 'false' }
      ]
    }
  },
  components: {
    Slider,
    SliderItem
  }
}
</script>

<style lang="scss">
@import '../style/_variables.scss';
.slider-container {
  display:flex; 
  justify-content:center; 
  align-items:center; 
  background-color:$grey;
  width:100%; 
  height: 500px;  
}
.slider {
  height:300px; 
  width:70%; 
  background-color:white;  
}
.slider-indicator-activeder-indicator-active {
  color:red; 
}
.indicators > .slider-indicator-icon {
  margin-right:30px;  
}
.slider-indicator-icon {
  border:1px solid black;
}
.indicators > .slider-indicator-active {
  background-color: $green !important;
}

.slider-icon {
  display:flex; 
  justify-content:flex-start;
  margin:25px 0 0 80px; 
  color: $green;
}
.slider-text {
  display:flex; 
  flex-direction:column; 
  justify-content:center;
  align-items:center;
  p {
    width:60%; 
  }   
}
.slider-company {
  display:flex; 
  justify-content:flex-end; 
  margin:25px 80px 0 0; 
  span {
    font-weight:900; 
  }
}
</style>