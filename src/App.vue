<template>
  <div id="app">
    <div class="loading" v-if="!$data">
      Loading..... (spinner)
    </div>
    <div v-cloak>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
    @import '../node_modules/bulma/css/bulma.css';
    body {
      font-family: Oxygen; 
    } 
    [v-cloak] {
      display:none; 
    }
    .loading {
      position:relative; 
      z-index:99999999999; 
    }
</style>
