<template>
    <div class="lrFooter">
      <div class="footer">
        <div class="container footer-container"> 
          <div class="footer-item">
            <h4>ADRESS</h4>
            <hr class="lrHeaderLine">
            <p>Bettorpsgatan 12 C <br>70369 Örebro</p>
          </div>
          <div class="footer-item">
            <h4>KONTAKT</h4>
            <hr class="lrHeaderLine">
            <ul>
              <li><a href="tel:019183850">019 18 38 50</a></li>
              <li><a href="mailto:hej@lr-orebro.se">hej@lr-orebro.se</a></li>
            </ul>
          </div>
          <div class="footer-item">
            <h4>AKTUELLT</h4>
            <hr class="lrHeaderLine">
            <ul>
              <li><a href="static/news/Nyhetsbrev_Nr34-2017.pdf" target="_blank">Nyhetsbrev December 2017</a></li> 
              <li><a href="static/news/Nyhetsbrev-Nr2-2017.pdf" target="_blank">Nyhetsbrev Juni 2017</a></li>
              <li><a href="static/news/Nyhetsbrev-Nr-1-2017.pdf" target="_blank">Nyhetsbrev April 2017</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-icon-container">
        <img class="footer-icon" src="../img/footer.svg" alt="footer-icon.svg">
      </div>
    </div>
</template>

<script>
export default {
  name: 'lrFooter'
}
</script>

<style scoped lang="scss">
  @import '../style/main.scss';
  .footer {
    background-color:$blue !important; 
  }
  .lrFooter {
    background-color:$blue !important; 
    height:100%; 
    position:relative; 
    a, p, h4 {
      color:white; 
    }
    a:hover {
      text-decoration:underline; 
    }
  }
  .lrHeaderLine {
    background-color:$red; 
  }
  .footer-container {
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex; 
    -webkit-box-orient:horizontal; 
    -webkit-box-direction:normal; 
        -ms-flex-direction:row; 
            flex-direction:row; 
    -webkit-box-pack:justify; 
        -ms-flex-pack:justify; 
            justify-content:space-between;
    -ms-flex-wrap:wrap;
        flex-wrap:wrap; 
    margin-bottom: 200px;  
  }
  .footer-item {
    margin:20px; 
    z-index:300; 
  }
  .footer-icon-container {
    position:absolute; 
    bottom:0; 
    width:100%; 
    display: -webkit-box; 
    display: -ms-flexbox; 
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-flow: column wrap;
            flex-flow: column wrap;
  }
  /* ****************** MEDIAQUERIES ****************** */
  @media screen and (max-width: $tablet - 1px) {
    .footer-container {
      margin-bottom:0; 
    }
    /* .footer-icon-container {
      width:90%; 
    } */
  }
  @media screen and (min-width: $tablet) {
  }
</style>