<template>
  <div>

  <!-- meny -->
  <lrMenu></lrMenu>

  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.css'
import contact from '@/components/contact.vue'
import lrMenu from '@/components/lrMenu.vue'
export default {
  name: 'Start',
  components: {
    contact,
    lrMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../style/_variables.scss'; 


</style>
