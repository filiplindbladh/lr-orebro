<template>
    <div id="positions">
        <!-- Header  -->
        <lrMenu></lrMenu>
        <div class="positionsHeader overlay">
            <h3 class="responsiveHeading">Jobba hos oss!</h3>
        </div>
        <div class="positionsInfo container">
            <div>
                <p class="mainText">
                    <span>Vi bryr oss om</span> vår personal och vill att alla medarbetare ska känna sig delaktiga i Byråns verksamhet och utveckling. Vill du också arbeta på en framåtsträvande byrå med en stark teamkänsla? Vi är alltid i behov av kompetent personal och tar gärna emot intresseanmälningar.
                </p>
            </div>
            <div>
                <img src="../img/LRtable.jpg" alt="Picture of LR Örebro staff">
            </div>
        </div>
        <div class="work">
            <i class="fa fa-briefcase" aria-hidden="true"></i>
            <h3>Just nu söker vi en revisorsassistent</h3>
            <p class="leadText">
                Som revisorsassistent hos oss får du en aktiv roll i ditt arbete där du får arbeta med samtliga delar i en revision, som planering, revidering och rapportering. Våra kunder är främst små- och medelstora ägarledda bolag i en mängd olika branscher vilket ger ett omväxlande och intressant arbete. Vi söker främst dig som arbetat på en revisionsbyrå och har några års erfarenhet men nu söker en ny utmaning!
            </p>
            <a href="mailto:hej@lr-orebro.se" class="button is-primary is-outlined">
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
        display:-webkit-box; 
        display:-ms-flexbox; 
        display:flex; 
        -webkit-box-pack:center; 
            -ms-flex-pack:center; 
                justify-content:center; 
        -webkit-box-align:center; 
            -ms-flex-align:center; 
                align-items:center; 
        h3 {
            position:relative;
            color:$white; 
            z-index:450;             
            font-size:35px; 
        } 
    }
    .positionsInfo {
        display:-webkit-box; 
        display:-ms-flexbox; 
        display:flex; 
        -webkit-box-orient:horizontal; 
        -webkit-box-direction:normal; 
        -ms-flex-direction:row; 
                flex-direction:row; 
        -webkit-box-pack: center; 
        -ms-flex-pack: center; 
                justify-content: center; 
        -webkit-box-align:center; 
        -ms-flex-align:center; 
                align-items:center;
        margin:0 auto;
        padding:40px; 
        width:100%;  
        div {
            width: 50%;
            -ms-flex-preferred-size: 50%;
                flex-basis: 50%;
            img {
                margin-top: 20px;
            }
        }
        .mainText {
            width:95%; 
            text-align:left; 
        }
        .lrHeaderLine {
            background-color: $red; 
        } 
        span {
            font-weight: bold;
            font-size: 20px; 
        }
    }
    .work {
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
        background-color: $grey;
        width: 100%;
        height: auto;
        padding:20px; 
        .fa-briefcase {
            font-size: 30px;
        }
        .leadText {
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
        a {
            z-index:999; 
            }
    }
    @media screen and (max-width: $tablet - 1px) {
    .positionsInfo {
        -webkit-box-orient:vertical;
        -webkit-box-direction:normal;
            -ms-flex-direction:column;
                flex-direction:column;
            div {
                width: 100%;
                /* margin-top:20px;   */
                -ms-flex-preferred-size: 50%;
                    flex-basis: 50%;
            }
        }
        .work {
            .leadText {
                width:100%; 
            }
            h3 {
                text-align:center; 
            }
        }
    }
</style>
