<template>
    <div>
      <lrMenu></lrMenu>
      <lrAboutUs></lrAboutUs>
      <lrFooter></lrFooter>
    </div>
</template>

<script>
import lrMenu from '@/components/lrMenu.vue'
import lrAboutUs from '@/components/lrAboutUs.vue'
import lrFooter from '@/components/lrFooter.vue'

export default {
  name: 'Services',
  components: {
    lrMenu,
    lrAboutUs,
    lrFooter
  }
}
</script>

<style scoped lang="scss">

</style>
