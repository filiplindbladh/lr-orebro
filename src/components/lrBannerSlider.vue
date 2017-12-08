<template>
<div>
  <div class="bannerSlider section">
      <div class="bannerItem">
        <vue-slider ref="slider" v-model="value"></vue-slider>
        <p>Hur många fakturor har ni?</p>
      </div> 
      <div class="bannerItem">
        <vue-slider ref="slider" v-model="value"></vue-slider>
        <p>Hur många anställda har ni?</p>
      </div>       
    </div>
  <div class="bannerButton">
    <a class="button is-primary is-outlined lr-button-fortnox">ÅTERKOM MED EN OFFERT</a>
  </div> 
</div>
</template>

<script>
import vueSlider from 'vue-slider-component'

export default {
  name: 'lrBannerSlider',
  components: {
    vueSlider
  },
}
</script>

<style lang="scss">
@import '../style/main.scss';
  .bannerSlider {
    width:100%; 
    display:flex; 
    flex-direction:row; 
    justify-content:space-around; 
  }
  .bannerButton {
    display: flex;
    justify-content:center; 
    margin-bottom:40px; 
  }

</style>
