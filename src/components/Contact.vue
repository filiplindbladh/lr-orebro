<template>
    <div>
      <lrMenu></lrMenu>
      <lrContactUs></lrContactUs>
      <lrFooter></lrFooter>
    </div>
</template>

<script>
import lrMenu from '@/components/lrMenu.vue'
import lrContactUs from '@/components/lrContactUs.vue'
import lrFooter from '@/components/lrFooter.vue'

export default {
  name: 'Services',
  components: {
    lrMenu,
    lrContactUs,
    lrFooter
  }
}
</script>

<style scoped lang="scss">
    @import '../style/main.scss';
</style>
