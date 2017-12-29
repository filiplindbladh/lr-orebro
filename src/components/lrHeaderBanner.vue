<template>
  <div>
    <div class="accounting-stockphoto overlay">
      <div class="quote container">
        <h3>Vi kan erbjuda ett stort utbud av tjänster <br /> inom redovisning och administration</h3>
      </div>
    </div>
    <div class="section servicesText">
      <p class="leadText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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


</style>

