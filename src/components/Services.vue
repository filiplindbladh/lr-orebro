<template>
    <div>
    <lrMenu></lrMenu>
    <lrHeaderBanner></lrHeaderBanner>
    <lrMainServices></lrMainServices>
    <lrBannerSlider></lrBannerSlider>
    <lrFooter></lrFooter>
    </div>
</template>

<script>
import lrMenu from '@/components/lrMenu.vue'
import lrMainServices from '@/components/lrMainServices.vue'
import lrFooter from '@/components/lrFooter.vue'
import lrBannerSlider from '@/components/lrBannerSlider.vue'
import lrHeaderBanner from '@/components/lrHeaderBanner.vue'

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
