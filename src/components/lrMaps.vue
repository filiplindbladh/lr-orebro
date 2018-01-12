<template>
  <div class="section container lrMaps">
    <div class="heading-container">
      <h2>Här finns vi</h2>
      <hr class="lrHeaderLine">
    </div>

    <!-- map to find the way to lr-orebro -->
    <div id="map-responsive">
      <iframe id="lrMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.877014942859!2d15.230097815428799!3d59.30161118164911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c156c2f43cb8f%3A0x3e4d739f5e063a9!2sBettorpsgatan+12C%2C+703+69+%C3%96rebro!5e0!3m2!1ssv!2sse!4v1511429759546" width="600" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>

  <!-- the social media icons for lr-orebro -->
    <div class="lrSocialMedia">
      <div class="lrMediaItem">
        <a class="lrMediaIcon" href="http://lr-revision.se/" target="_blank"> <img src="../img/LR-sverige.png" alt="Logo LR Sverige"></a>
      </div>
      <div class="lrMediaItem">
        <a class="lrMediaIcon" href="https://www.facebook.com/" target="_blank"> <i class="fa fa-facebook-square" aria-hidden="true"></i> </a>
        <a class="lrMediaIcon" href="https://www.linkedin.com/" target="_blank"> <i class="fa fa-linkedin-square" aria-hidden="true"></i> </a>
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
  @import '../style/main.scss';
  .heading-container {
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex; 
    -webkit-box-pack:center; 
        -ms-flex-pack:center; 
            justify-content:center; 
    -webkit-box-orient:vertical; 
    -webkit-box-direction:normal; 
        -ms-flex-direction:column; 
            flex-direction:column; 
    -webkit-box-align:center; 
        -ms-flex-align:center; 
            align-items:center; 
  }
  .lrHeaderLine {
    background-color: $red;
    height:5px; 
  }
  .lrSocialMedia {
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
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
    .lrMediaIcon {
      -webkit-transition: all 0.3s ease-in-out;
      -webkit-transition: all .3s ease-in-out;
      -o-transition: all .3s ease-in-out;
      transition: all .3s ease-in-out;
      -webkit-transform: scale(0);
            -ms-transform: scale(0);
                transform: scale(0);
      :hover {
        -webkit-transition: all 0.3s ease-in-out;
        -webkit-transition: all .3s ease-in-out;
        -o-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
        -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
                transform: scale(1.1);
      }
    }
  }
  /* styles for the map */
  #map-responsive{
    overflow:hidden;
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
  /* ****************** MEDIAQUERIES ****************** */
  @media screen and (max-width: 550px) {
    .lrSocialMedia {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
    }
    .lrHeaderLine {
      width:50%;
    }
  }
</style>