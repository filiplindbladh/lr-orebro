<template>
    <div>
    <lrMenu></lrMenu>
    <lrMainServices></lrMainServices>
    <lrFooter></lrFooter>
    </div>
</template>

<script>
import lrMenu from '@/components/lrMenu.vue'
import lrMainServices from '@/components/lrMainServices.vue'
import lrFooter from '@/components/lrFooter.vue'
export default {
  name: 'Services',
  components: {
    lrMenu,
    lrMainServices,
    lrFooter
  }
}
</script>

<style scoped lang="scss">
    @import '../style/main.scss';


</style>
