<template>
    <div id="positions">
    <lrMenu></lrMenu>
    <lrFooter></lrFooter>
    </div>
</template>

<script>
import lrMenu from '@/components/lrMenu.vue'
import lrFooter from '@/components/lrFooter.vue'

export default {
  name: 'Positions',
  components: {
    lrMenu,
    lrFooter
  }
}
</script>

<style scoped lang="scss">
    @import '../style/main.scss';


</style>
