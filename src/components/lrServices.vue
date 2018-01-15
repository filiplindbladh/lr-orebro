<template>
<div> 
    <div  id="sectionServices" class="section container">
        <h2>Kompetens och engagemang som ger resultat</h2>
        <hr class="lrHeaderLine">

        <div class="services">
            <a href="/tjanster#redovisning"> 
                <div class="box redovisning">
                    <img class="boxImage" src="../img/accounting_icon.svg" alt="redovisning.png">
                    <h3>redovisning</h3>
                    <div class="triangle-bottomright"></div>
                </div>
            </a>
            <a href="/tjanster#radgivning"> 
                <div class="box consulting">
                    <img src="../img/consulting_icon.svg" alt="consultation.png">
                    <h3>rådgivning</h3>
                    <div class="triangle-bottomright"></div>
                </div>
            </a>
            <a href="/tjanster#revision"> 
                <div class="box revision"> 
                    <img class="boxImage" src="../img/revision_icon.svg" alt="revision.png">
                    <h3>revision</h3>
                    <div class="triangle-bottomright"></div>
                </div>
            </a>
        </div>
            <p class="mainText">
                <strong>Vad behöver du och ditt företag hjälp med?</strong><br/>Vi på LR Revision & Redovisning i Örebro har stor kunskap och lång erfarenhet från en mängd olika branscher. Hos oss får du ett personligt och professionellt bemötande när vi hjälper dig att förvalta och utveckla ditt företag.
            </p>
    </div>
</div>
</template>

<script>
export default {
  name: 'lrServices'
}
</script>

<style scoped lang="scss">
    @import '../style/main.scss';
    h2 {
        text-align:center; 
    }
    .section {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center; 
        -webkit-box-orient: vertical; 
        -webkit-box-direction: normal; 
            -ms-flex-direction: column; 
                flex-direction: column; 
    }
    .lrHeaderLine {
        background-color: $red;
        height:5px; 
    }
    .services {
        width:100%; 
        display: -webkit-box; 
        display: -ms-flexbox; 
        display: flex; 
        -webkit-box-orient: horizontal; 
        -webkit-box-direction: normal; 
            -ms-flex-direction: row; 
                flex-direction: row; 
        -ms-flex-pack: distribute; 
            justify-content: space-around; 
        -ms-flex-wrap:wrap; 
            flex-wrap:wrap; 
        margin-bottom:40px; 
    }
    .box {
        position: relative;
        height:300px; 
        width:300px; 
        border: 2px solid $black;  
        display:-webkit-box;  
        display:-ms-flexbox;  
        display:flex; 
        -webkit-box-pack:center; 
            -ms-flex-pack:center; 
                justify-content:center; 
        -webkit-box-align:center; 
            -ms-flex-align:center; 
                align-items:center; 
        -webkit-box-orient:vertical; 
        -webkit-box-direction:normal; 
            -ms-flex-direction:column; 
                flex-direction:column; 
        &:hover {
            /* background-color:rgba(227, 82, 80, 0.5);  */
            background-color: white;
        } 
        h3 {
            color:$white; 
            z-index:2;
        }
    }
    .box:hover > .triangle-bottomright {
        /* opacity:0;   */
        border-left: 0 solid transparent;
        right: 0;
    }
    .box:hover > h3 {
        color:$black; 
    }
    .consulting img {
        width: 80%;
        height: 211px;
    }
    .triangle-bottomright {
        -webkit-transition: all .3s ease-in-out;
        -o-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
        width: 0;
        height: 0;
        right: 0;
        top: 0;
        border-bottom: 300px solid $blue;
        border-left: 298px solid transparent;
        z-index: 1; 
        position:absolute; 
    }
    p {
        text-align:center; 
        width:70%; 
    }
    .services .box .boxImage {
        height: 211px;
        max-width: 100%;
    }
   

    /* ****************** MEDIAQUERIES ****************** */
    @media screen and (max-width: $tablet - 1px) {
        .services {
            width:100%; 
            -webkit-box-orient:vertical;
            -webkit-box-direction:normal;
                -ms-flex-direction:column;
                    flex-direction:column; 
            -webkit-box-align:center; 
                -ms-flex-align:center; 
                    align-items:center;  
        }
        .box {
            margin-bottom:40px;
            min-width:100%; 
            height:300px; 
        }
        .triangle-bottomright {
            display: none;
        }
        .box > h3 {
            color:$black; 
        }
         .lrHeaderLine {
          width:50%;
        }
        .box img {
            width:100%; 
        }
    }
    @media screen and (min-width: $tablet) and (max-width: $desktop - 1px) {
        .box {
            margin:25px; 
        }
        
    }

</style>
