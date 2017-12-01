<template>
  <div>

  <!-- meny -->
  <lrMenu></lrMenu>
  <lrHeader></lrHeader>

  <!-- services -->
  <lrServices></lrServices>

  <!-- first contact banner -->
  <lrContactBanner bannerText="Långsiktiga lösningar för traditionella eller digitala företag"></lrContactBanner>

  <!-- the staff on LR-orebro -->
  <lrStaff></lrStaff>

  <!-- review carousell -->
  <lrReviews></lrReviews>

 <!-- second contact banner -->
 <lrContactBanner bannerText="Behöver ni hjälp att utveckla ert företag?"></lrContactBanner>

  <!-- How to get there -->
  <lrMaps></lrMaps>

  <!-- footer of the page -->
  <lrFooter></lrFooter>

  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.css'
import contact from '@/components/contact.vue'
import lrMenu from '@/components/lrMenu.vue'
import lrHeader from '@/components/lrHeader.vue'
import lrContactBanner from '@/components/lrContactBanner.vue'
import lrServices from '@/components/lrServices.vue'
import lrStaff from '@/components/lrStaff.vue'
import lrReviews from '@/components/lrReviews.vue'
import lrMaps from '@/components/lrMaps.vue'
import lrFooter from '@/components/lrFooter.vue'

export default {
  name: 'Start',
  components: {
    contact,
    lrMenu,
    lrHeader,
    lrServices,
    lrContactBanner,
    lrStaff,
    lrReviews,
    lrMaps,
    lrFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import '../style/_variables.scss'; 

</style>
