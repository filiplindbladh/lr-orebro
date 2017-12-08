<template>
  <div>

  <!-- meny -->
  <lrMenu></lrMenu>
  <lrHeader></lrHeader>
  <!-- contact -->
  <div class="contact">
  <Contact></Contact>
  </div> 
  <!-- services -->
  <lrServices></lrServices>

  <!-- first contact banner -->
  <lrContactBanner bannerText="Långsiktiga lösningar för traditionella eller digitala företag" :backgroundImage="'src/img/lrImage.jpg'"></lrContactBanner>

  <!-- the staff on LR-orebro -->
  <lrStaff></lrStaff>

  <!-- review carousell -->
  <lrReviews></lrReviews>

 <!-- second contact banner -->
 <lrContactBanner bannerText="Behöver ni hjälp att utveckla ert företag?" :backgroundImage="'src/img/contact.jpeg'"></lrContactBanner>

  <!-- How to get there -->
  <lrMaps></lrMaps>

  <!-- footer of the page -->
  <lrFooter></lrFooter>

  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.css'
import Contact from '@/components/Contact.vue'
import lrMenu from '@/components/lrMenu.vue'
import lrHeader from '@/components/lrHeader.vue'
import lrContactBanner from '@/components/lrContactBanner.vue'
import lrServices from '@/components/lrServices.vue'
import lrStaff from '@/components/lrStaff.vue'
import lrReviews from '@/components/lrReviews.vue'
import lrMaps from '@/components/lrMaps.vue'
import lrFooter from '@/components/lrFooter.vue'
import VueImgLoader from 'vue-img-loader'

export default {
  name: 'Start',
  components: {
    Contact,
    lrMenu,
    lrHeader,
    lrServices,
    lrContactBanner,
    lrStaff,
    lrReviews,
    lrMaps,
    lrFooter,
    'vue-img-loader': VueImgLoader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import '../style/main.scss'; 
  body {
    position:relative; 
  }
  .contact {
    z-index: 400;
    right: 15px;
    position:fixed;
    top:500px; 
  }
</style>
