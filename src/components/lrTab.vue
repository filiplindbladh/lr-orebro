<template>
  <div class="tabContainer is-centered" v-show="isActive">
    <slot></slot>  
  </div> 
</template>
<script>
  export default {
    name: 'lrTab',
    props: {
      name: {required: true},
      selected: { default: false }
    },
    data () {
      return {
        isActive: false
      }
    },
    mounted () {
      this.isActive = this.selected
    },
    computed: {
      href () {
        return '#' + this.name.toLowerCase().replace(/[åä]/g, 'a')
      }
    }
  }
</script>
<style scoped lang="scss">
@import '../style/main.scss';
.tabContainer {
  width:100vw; 
}
</style>
