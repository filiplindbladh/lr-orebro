<template>
    <div id="positions">
        <!-- Header  -->
        <lrMenu></lrMenu>
        <div class="positionsHeader overlay">
            <h3>Jobba hos oss!</h3>
        </div>
        <div class="positionsInfo">
            <div>
                <p class="mainText">
                    <span>Vi bryr oss om</span> vår personal och vill att alla medarbetare ska känna sig delaktiga i Byråns verksamhet och utveckling. Vill du också arbeta på en framåtsträvande byrå med en stark teamkänsla? Vi är alltid i behov av kompetent personal och tar gärna emot intresseanmälningar.
                </p>
            </div>
            <img src="../img/LRtable.jpg" alt="Picture of LR Örebro staff">
        </div>
        <div class="work">
            <i class="fa fa-briefcase" aria-hidden="true"></i>
            <h3>Just nu söker vi en revisorsassistent</h3>
            <p>
                Som revisorsassistent hos oss får du en aktiv roll i ditt arbete där du får arbeta med samtliga delar i en revision, som planering, revidering och rapportering. Våra kunder är främst små- och medelstora ägarledda bolag i en mängd olika branscher vilket ger ett omväxlande och intressant arbete. Vi söker främst dig som arbetat på en revisionsbyrå och har några års erfarenhet men nu söker en ny utmaning!
            </p>
            <a class="button is-primary is-outlined">
            SKICKA IN ANSÖKAN 
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
        </div>
        <!-- Footer here -->
        <lrFooter></lrFooter>
    </div>
</template>

<script>
import lrMenu from '@/components/lrMenu.vue'
import lrFooter from '@/components/lrFooter.vue'

export default {
  name: 'Positions',
  components: {
    lrMenu,
    lrFooter
  }
}
</script>

<style scoped lang="scss">
    @import '../style/main.scss';
    .positionsHeader {
        margin-top:67px; 
        background-image: url("../img/positionsHeader.png"); 
        background-repeat: no-repeat; 
        background-position:center; 
        background-size:cover; 
        width:100%; 
        height:250px; 
        position:relative;
        z-index:-1; 
        display:flex; 
        justify-content:center; 
        align-items:center; 
        h3 {
            position:relative;
            color:$white; 
            z-index:450;             
            font-size:35px; 
        } 
    }
    .positionsInfo {
        display:flex; 
        flex-direction:row; 
        justify-content: center; 
        align-items:center;
        margin:40px;  
        .mainText {
            width:100%; 
            text-align:left; 
        }
        .lrHeaderLine {
            background-color: $red; 
        } 
         img {
         width:50%;
         margin:0;  
        }
        span {
            font-weight: bold;
            font-size: 20px; 
        }
    }
    .work {
        display:flex; 
        flex-direction:column; 
        justify-content:center; 
        align-items:center; 
        background-color: $grey;
        width: 100%;
        height: auto;
        padding:20px; 
        .fa-briefcase {
            font-size: 30px;
        }
        p {
            width:70%; 
            text-align:center; 
            margin:20px 0 20px 0;  
        }
        span {
            font-weight:900; 
        }
        i {
            margin-left:5px; 
        }
    }
</style>
