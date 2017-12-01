<template>
  <div class="section container lrMaps">
    <h2>Här finns vi</h2>
    <hr class="lrHeaderLine">

    <!-- map to find the way to lr-orebro -->
    <div id="map-responsive">
      <iframe id="lrMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.877014942859!2d15.230097815428799!3d59.30161118164911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c156c2f43cb8f%3A0x3e4d739f5e063a9!2sBettorpsgatan+12C%2C+703+69+%C3%96rebro!5e0!3m2!1ssv!2sse!4v1511429759546" width="600" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>

  <!-- the social media icons for lr-orebro -->
    <div class="lrSocialMedia">
      <div class="lrMediaItem">
        <a href="http://lr-revision.se/" target="_blank"> <img src="../img/lr-sverige.svg" alt="Logo LR Sverige"></a>
      </div>
      <div class="lrMediaItem">
        <a href="https://www.facebook.com/" target="_blank"> <i class="fa fa-facebook-square" aria-hidden="true"></i> </a>
        <a href="https://www.linkedin.com/" target="_blank"> </a><i class="fa fa-linkedin-square" aria-hidden="true"></i> </a>
      </div>
    </div>
</div> <!-- / section container -->
</template>

<script>
export default {
  name: 'lrMaps'
}
</script>

<style lang="scss">
@import '../style/_variables.scss';
.lrHeaderLine {
  background-color: $red;
  height:5px; 
}
.lrSocialMedia {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lrMediaItem {
  padding: 0 25px;
  .fa {
    font-size: 50px;
    margin-right: 10px;
  }
  .fa-facebook-square {
    color: $blue;
  }
  .fa-linkedin-square {
    color: $black;
  }
  img {
    width: 216px;
    height: auto;
  }
}
/* styles for the map */
#map-responsive{
  overflow:hidden;
  /* padding-bottom:36.25%; */
  padding-bottom: 350px;
  position:relative;
  height:0;
  width: 100%;
}
#map-responsive #lrMap {
  width: 100%;
  height: 350px;
  left:0;
  top:0;
  position:absolute; 
}

@media screen and (max-width: 550px) {
  .lrSocialMedia {
    flex-direction: column;
  }
  /* #map-responsive {
    padding-bottom: 71.25%;
  } */
}
</style>