<template>
  <div class="slider-container">
    <div class="slider">
      <slider animation="normal" :speed="200" :auto="false" :indicators="'center'" :control-btn="false" :height="'350px'">
        <slider-item>
          <div class="slider-icon">
            <i class="fa fa-quote-left" aria-hidden="true"></i>
          </div>
          <div class="slider-text">
            <p class="mainText">Remember, a "good" review is the type of review that's useful to the people who come along behind you. If you need to take some time away from the keyboard to really organize your thoughts and think about your experience from multiple sides of the issue, take it. Don't start writing in a fit of rage.</p>
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
            <p class="mainText">Remember, a "good" review is the type of review that's useful to the people who come along behind you. If you need to take some time away from the keyboard to really organize your thoughts and think about your experience from multiple sides of the issue, take it. Don't start writing in a fit of rage.</p>
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
            <p class="mainText">Remember, a "good" review is the type of review that's useful to the people who come along behind you. If you need to take some time away from the keyboard to really organize your thoughts and think about your experience from multiple sides of the issue, take it. Don't start writing in a fit of rage.</p>
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
  .slider-container {
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack:center;
        -ms-flex-pack:center;
            justify-content:center;
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center;
    background-color:$grey;
    width:100%;
  }
  .slider {
    //height:350px;
    width:70%;
    background-color:white;
    margin-top:40px;
    margin-bottom:80px;
  }
  .indicators > .slider-indicator-icon {
    margin-right:30px;
  }
  .slider-indicator-icon {
    width:20px !important;
    height:20px !important;
  }
  .indicators > .slider-indicator-active {
    background-color: $red !important;
  }
  .indicators {
    bottom:0 !important;
    z-index: 500 !important;
  }
  .slider-icon {
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack:start;
        -ms-flex-pack:start;
            justify-content:flex-start;
    margin:25px 0 0 80px;
    color: $blue;
  }
  .slider-text {
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column;
    -webkit-box-pack:center;
        -ms-flex-pack:center;
            justify-content:center;
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center;
  }
  .slider-company {
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack:end;
        -ms-flex-pack:end;
            justify-content:flex-end;
    margin:25px 80px 0 0;
    span {
      font-weight:900;
    }
  }
  .fa-quote-left {
    font-size: 5em;
  }

/* ****************** MEDIAQUERIES ****************** */
    @media screen and (max-width: $tablet - 1px) {
      .slider-text p {
        width:90%;
      }
      .slider-icon, .slider-company {
        -webkit-box-pack:center;
            -ms-flex-pack:center;
                justify-content:center;
        margin:0;
      }
      .slider {
        width:100%;
        height:400px;
      }
    }
    @media screen and (min-width: $tablet) and (max-width: $desktop - 1px) {
      .slider-icon, .slider-company {
        -webkit-box-pack:center;
            -ms-flex-pack:center;
                justify-content:center;
        margin:10px;
      }
      .slider {
        min-height:430px;
      }
    }
    @media screen and (max-width: 500px) {
      .fa-quote-left {
        font-size: 3em;
      }
    }
    @media screen and (max-width: 347px) {
      .fa-quote-left {
        display: none;
      }
    }
</style>