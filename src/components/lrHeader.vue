<template>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>
            <div class="section headerOne overlay">
                <div class="lrHeader container">
                    <h1> VÄLKOMMEN TILL <br /> DIN FRAMTIDSBYRÅ </h1>
                    <hr class="lrHeaderLineHeader">
                    <!-- <a href="/tjanster" id="lr-button-more" class="button is-info is-outlined">LÄS MER</a> -->
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
          <div class="section headerTwo overlay">
                <div class="lrHeader container">
                    <h2>REGISTRERAT VERKLIG HUVUDMAN <br> HOS BOLAGSVERKET?</h2>
                    <h4>– Sista dagen 1 Februari.</h4>
                    <hr class="lrHeaderLineHeader">
                    <!-- <a v-scroll-to="'.facebookBanner'" id="lr-button-more" class="button is-info is-outlined">LÄS MER</a> -->
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
          <div class="section headerThree overlay">
              <div class="lrHeader container">
                  <h2>HÅLL KOLL PÅ DIN<br> EKONOMI MED LR-ONLINE</h2>
                  <hr class="lrHeaderLineHeader">
                  <!-- <a href="/online" id="lr-button-more" class="button is-info is-outlined">LÄS MER</a> -->
              </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</template>

<script>
export default {
  name: 'lrHeader',
  data () {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 8000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>
    
<style lang="scss">
    @import '../style/main.scss';
    .overlay:before {
        content: "";
        display: block;
        height:100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        background-color: rgba(0, 81, 146, .75);
    }
    .swiper-slide {
      max-height:100vh;
    }
    .headerOne {
        background-image: url("../img/headerOne.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-color: $blue;
        position: relative;
        padding: 80px 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        height: calc(100vh - 67px);
        margin-top: 30px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
    }
    .headerTwo {
        background-image: url("../img/headerTwo.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-color: $blue;
        position: relative;
        padding: 80px 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        height: calc(100vh - 67px);
        margin-top: 30px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
    }
    .headerThree {
        background-image: url("../img/headerThree.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-color: $blue;
        position: relative;
        padding: 80px 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        height: calc(100vh - 67px);
        margin-top: 30px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
    }
    .lrHeader {
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        h1,h2,h3,h4 {
            text-align: center;
            color: $white;
            z-index: 100;
        }
    }
    .lrHeaderLineHeader {
        background-color: $white;
        height: 5px;
        width: 295px;
        z-index: 100;
        margin-bottom: 30px;
    }
    #lr-button-more {
        -webkit-transition: all .3s ease-in-out;
        -o-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
        border: 5px solid $green;
        font-size: 23px;
    }
</style>