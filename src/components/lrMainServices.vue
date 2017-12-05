<template>
    <div>
        <div class="accounting-stockphoto overlay">

        </div>
        
        <div class="section container">
            <div class="services">
                <a href="#"> 
                    <div class="box redovisning">
                        <img id="image" src="../img/accounting_icon.svg" alt="redovisning.png">
                        <h3>redovisning</h3>
                    </div>
                </a>
                <a href="#"> 
                    <div class="box consulting">
                        <img src="../img/consulting_icon.svg" alt="consultation.png">
                        <h3>rådgivning</h3>
                        <div class="triangle-bottomright"></div>
                    </div>
                </a>
                <a href="#"> 
                    <div class="box revision"> 
                        <img src="../img/revision_icon.svg" alt="revision.png">
                        <h3>revision</h3>
                        <div class="triangle-bottomright"></div>
                    </div>
                </a>
            </div>
        </div>
        <div class="accounting-content section"> 
            <p class="mainText-bold">Inom ramen för begreppet redovisning ryms en rad återkommande ekonomiska arbetsuppgifter, som t.ex. bokföring, kontering,skatte- och momsfrågor, kund- och leverantörsreskontra, ekonomisk rapportering etc. Vi kan erbjuda ett stort utbud av tjänster inom redovisning och administration. Du väljer själv hur du vill använda oss.</p>
            <h3>Rutiner</h3>
            <hr class="lrHeaderLine">
            <p class="mainText">Vi kan hjälpa till att införa effektiva rutiner anpassade för ditt företag. Det kan handla om att anpassa kontoplanen så att rätt beslutsunderlag kan tas fram, utnyttja teknikens möjligheter, välja rätt program och skapa rutiner för ekonomi och administration. Vi kan också hjälpa till att bygga upp system för effektiv intern kontroll i företaget, vilket minskar risken för fel.</p>
        </div> 
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
      name: 'lrMainServices',
      methods: {
  }

    }

</script>

<style scoped lang="scss">
    @import '../style/main.scss';
 
    .services {
        width:100%; 
        display: flex; 
        flex-direction: row; 
        justify-content: space-around; 
        flex-wrap:wrap; 
        margin-bottom:40px; 
    }
    .box {
        height:300px; 
        width:300px; 
        border: 5px solid $grey;  
        display:flex; 
        justify-content:center; 
        align-items:center; 
        flex-direction:column; 
        &:hover {
            border: 5px solid $black;
            background-color:rgba(227, 82, 80, 0.5); 
        } 
        h3 {
            color:$white; 
            z-index:2;
        }
    }
    .box:hover > .triangle-bottomright {
        transition:5ms; 
        opacity:0;  
    }
    .box:hover > h3 {
        color:$black; 
    }
    .consulting img {
         width: 80%;
    }
    .triangle-bottomright {
        width: 0;
        height: 0;
        border-bottom: 300px solid $black;
        border-left: 300px solid transparent;
        z-index: 1; 
        position:absolute; 
    }
    .redovisning {
        border: 5px solid $black;
        background-color:rgba(227, 82, 80, 0.5); 
        h3 {
            color:black; 
        }
    }
    .accounting-stockphoto {
        margin-top:67px; 
        background-image: url("../img/accounting-stockphoto.png"); 
        background-repeat: no-repeat; 
        background-position:center; 
        background-size:cover; 
        width:100%; 
        height:250px; 
        position:relative; 
    }
    .mainText-bold {
        font-size: 18px;
        font-weight: 700;
        line-height:30px; 
    } 
    .accounting-content {
        width:70%; 
        margin:0 auto; 
        h3 {
            margin-top: 40px; 
        }
    }


    /* ****************** MEDIAQUERIES ****************** */
    @media screen and (max-width: $tablet - 1px) {
      .services {
          flex-direction:column; 
          align-items:center;  
      }
      .box {
          margin-bottom:40px; 
      }
    }
    @media screen and (min-width: $tablet) and (max-width: $desktop - 1px) {
        .box {
            margin:25px; 
        }
    }

</style>
