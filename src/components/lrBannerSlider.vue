<template>
<div class="bannerSliderContainer">
  <div class="bannerSlider section">
      <div class="bannerItem">
        <vue-slider ref="slider" v-model="valueOne"></vue-slider>
        <h5>Hur många fakturor har ni?</h5>
      </div> 
      <div class="bannerItem">
        <vue-slider ref="slider" v-model="valueTwo"></vue-slider>
        <h5>Hur många anställda har ni?</h5>
      </div>       
    </div>
  <div class="bannerButton">
    <a class="button is-primary is-outlined lr-button-fortnox" @click='openModal()'>
      ÅTERKOM MED EN OFFERT 
      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
    </a>
  </div> 
  <contactModal :activate="addActive" @closeRequest='close'></contactModal>
</div>
</template>

<script>
import vueSlider from 'vue-slider-component'
import contactModal from '@/components/contactModal'

export default {
  name: 'lrBannerSlider',
  components: {contactModal, vueSlider},
  data: function () {
    return {
      isOpen: false,
      addActive: '',
      valueOne: 50,
      valueTwo: 50
    }
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen
    },
    openModal: function () {
      this.addActive = 'is-active'
    },
    close () {
      this.addActive = ''
    }
  }
}
</script>

<style lang="scss">
@import '../style/main.scss';
  .bannerSlider {
    width:100%; 
    display:-webkit-box; 
    display:-ms-flexbox; 
    display:flex; 
    -webkit-box-orient:horizontal; 
    -webkit-box-direction:normal; 
        -ms-flex-direction:row; 
            flex-direction:row; 
    -ms-flex-pack:distribute; 
        justify-content:space-around; 
  }
  .bannerButton {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack:center;
        -ms-flex-pack:center;
            justify-content:center; 
    i {
      margin-left:10px; 
    }
  }
  .bannerSliderContainer {
    background-color:$grey;
    width:100%; 
    height: 250px;  
  }
  .bannerItem {
    margin-top:30px; 
  }

</style>
