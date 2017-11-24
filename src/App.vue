<template>
  <div id="app">
    <router-link to="/">Start</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="css">
    @import '../node_modules/bulma/css/bulma.css';
</style>
