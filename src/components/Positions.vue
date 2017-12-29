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
  name: 'Services',
  components: {
    lrMenu,
    lrMainServices,
    lrFooter,
    lrBannerSlider,
    lrHeaderBanner
  }
}
</script>

<style scoped lang="scss">
    @import '../style/main.scss';


</style>
