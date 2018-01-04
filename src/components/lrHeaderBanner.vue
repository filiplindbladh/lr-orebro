<template>
  <div>
    <div class="accounting-stockphoto overlay">
      <div class="quote container">
        <h3>Vi kan erbjuda ett stort utbud av tjänster inom redovisning och administration</h3>
      </div>
    </div>
    <div class="section servicesText">
      <p class="leadText">
        Vad behöver du och ditt företag hjälp med? <br /> 
        Vi på LR Revision & Redovisning i Örebro har en stor kunskapsbredd och erfarenhet från en mängd olika branscher. 
        Hos oss får du ett personligt och professionellt bemötande när vi hjälper dig att förvalta och utveckla ditt företag.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lrHeaderBanner'
}
</script>

<style scoped lang="scss">
 @import '../style/main.scss';
    /* styling for quote inside header */
    .quote {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        height: 100%;
        text-align: center;
        h3 {
            color:$white; 
            z-index:450; 
            width:80%; 
            font-size:35px; 
        }
    }
    .accounting-stockphoto {
        margin-top:67px; 
        background-image: url("../img/servicesHeader.png"); 
        background-repeat: no-repeat; 
        background-position:center; 
        background-size:cover; 
        width:100%; 
        height:250px; 
        position:relative;
        z-index:-1;  
    }
    .servicesText {
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex; 
      -webkit-box-orient:vertical; 
      -webkit-box-direction:normal; 
          -ms-flex-direction:column; 
              flex-direction:column; 
      -webkit-box-pack:center; 
          -ms-flex-pack:center; 
              justify-content:center; 
      -webkit-box-align:center; 
          -ms-flex-align:center; 
              align-items:center; 
      .leadText {
        font-weight:800; 
      }
    }
/* ****************** MEDIAQUERIES ****************** */
@media screen and (max-width: $tablet - 1px) {
    .quote {
        h3 {
            font-size:5vw; 
        }
    }
}
</style>

