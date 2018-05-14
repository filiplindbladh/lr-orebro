<template>
  <div id="start">
  <!-- meny -->
  <lrMenu></lrMenu>
  <lrHeader></lrHeader>
  <!-- services -->
  <lrServices></lrServices>
  <!--Facebook post-->
  <!--lrFacebookPost></lrFacebookPost-->

  <!-- first contact banner -->
  <lrContactBanner bannerText="Långsiktiga lösningar för traditionella eller digitala företag" :backgroundImage="true"></lrContactBanner>

  <!-- the staff on LR-orebro -->
  <lrStaff></lrStaff>

  <!-- review carousell -->
  <!--lrReviews></lrReviews-->

 <!-- second contact banner -->
 <lrContactBanner bannerText="Behöver ni hjälp att utveckla ert företag?" :backgroundImage ="false"></lrContactBanner>

  <!-- How to get there -->
  <lrMaps></lrMaps>

  <!-- footer of the page -->
  <lrFooter></lrFooter>

  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.css'
import contactBubble from '@/components/contactBubble.vue'
import lrMenu from '@/components/lrMenu.vue'
import lrHeader from '@/components/lrHeader.vue'
import lrContactBanner from '@/components/lrContactBanner.vue'
import lrServices from '@/components/lrServices.vue'
import lrStaff from '@/components/lrStaff.vue'
import lrReviews from '@/components/lrReviews.vue'
import lrMaps from '@/components/lrMaps.vue'
import lrFooter from '@/components/lrFooter.vue'
import VueImgLoader from 'vue-img-loader'
import lrFacebookPost from '@/components/lrFacebookPost.vue'

export default {
  name: 'Start',
  components: {
    contactBubble,
    lrMenu,
    lrHeader,
    lrServices,
    lrContactBanner,
    lrStaff,
    lrReviews,
    lrMaps,
    lrFooter,
    lrFacebookPost,
    'vue-img-loader': VueImgLoader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    html {
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
    }
    *, *:before, *:after {
            -webkit-box-sizing: inherit;
                    box-sizing: inherit;
    }
    body {
      position:relative;
    }
    .contact {
      z-index: 900;
      right: 10px;
      position:fixed;
      top: 490px;
    }
    /* ****************** MEDIAQUERIES ****************** */
  @media screen and (max-width: $tablet - 1px) {
    .lrHeaderLine {
      width: 50%;
    }
  }
</style>
