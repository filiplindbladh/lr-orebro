<template>
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
            <li><a href="#">Nyhetsbrev Novemeber</a></li> 
            <li><a href="#">Nyhetsbrev Oktober</a></li>
            <li><a href="#">Läs mer</a></li>
          </ul>
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
  display:flex; 
  flex-direction:row; 
  justify-content:space-between;
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
  width:97%; 

}
 /* ****************** MEDIAQUERIES ****************** */
    @media screen and (max-width: $tablet - 1px) {
      .footer-container {
        margin-bottom:0; 
      }
    }

</style>