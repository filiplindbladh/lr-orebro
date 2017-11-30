<template>
  <div id="app">
    <router-view/>
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
    h2 {
      font-size: 48px; 
      font-weight:700; 
    }
    h3 {
      font-size:26px; 
    }
    .lrHeaderLine {
      height: 5px;
      width: 295px;
      z-index: 100;
    }
    .overlay:before {
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      background-color: rgba(0, 81, 146, .75);
    }

</style>
