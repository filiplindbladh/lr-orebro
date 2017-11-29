<template>
  <div>

  <!-- meny -->
  <lrMenu></lrMenu>
  <lrHeader></lrHeader>

  <!-- content on the page -->
  <!-- <firstSection></firstSection> -->

  <lrContactBanner></lrContactBanner>

  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.css'
import contact from '@/components/contact.vue'
import lrMenu from '@/components/lrMenu.vue'
import lrHeader from '@/components/lrHeader.vue'
import lrContactBanner from '@/components/lrContactBanner.vue'
export default {
  name: 'Start',
  components: {
    contact,
    lrMenu,
    lrHeader,
    lrContactBanner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../style/_variables.scss'; 


</style>
