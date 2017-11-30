<template>
  <div>

  <!-- meny -->
  <lrMenu></lrMenu>
  <lrHeader></lrHeader>

  <!-- services -->
  <lrServices></lrServices>

  <lrContactBanner></lrContactBanner>

  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.css'
import contact from '@/components/contact.vue'
import lrMenu from '@/components/lrMenu.vue'
import lrHeader from '@/components/lrHeader.vue'
import lrContactBanner from '@/components/lrContactBanner.vue'
import lrServices from '@/components/lrServices.vue'

export default {
  name: 'Start',
  components: {
    contact,
    lrMenu,
    lrHeader,
    lrServices,
    lrContactBanner

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import '../style/_variables.scss'; 
    @import '../../node_modules/bulma/css/bulma.css';
    body {
      font-family: Oxygen; 
    } 
    h2 {
      font-size: 48px; 
      font-weight:700; 
    }
    h3 {
      font-size:26px; 
    }
    .lrHeaderLine {
      height: 5px;
      width: 295px;
      z-index: 100;
    }
    .overlay:before {
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      background-color: rgba(0, 81, 146, .75);
    }

</style>
