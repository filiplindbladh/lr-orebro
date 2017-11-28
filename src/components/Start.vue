<template>
  <div>

  <!-- meny -->
  <lrMenu></lrMenu>
  <lrHeader></lrHeader>

  <!-- content on the page -->
  <!-- <firstSection></firstSection> -->

  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.css'
import contact from '@/components/contact.vue'
import lrMenu from '@/components/lrMenu.vue'
import lrHeader from '@/components/lrHeader.vue'
export default {
  name: 'Start',
  components: {
    contact,
    lrMenu,
    lrHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../style/_variables.scss'; 


</style>
