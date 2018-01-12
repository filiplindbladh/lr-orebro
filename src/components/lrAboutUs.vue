<template>
    <div>
        <!-- Banner  -->
        <div class="aboutUsImage overlay">
            <div class="quote container">
                <h3>Vi på LR Örebro är som de flesta av våra kunder <br />– hårt arbetande småföretagare</h3>
            </div>
        </div>
        <!-- Content on about us page -->
        <div class="section container contactUs">
            <div class="head">
                <h3>Om oss</h3>
                <hr class="lrHeaderLine">
                <br/>
                <p class="mainText">
                    <!-- <span>I mitten av Sverige…</span> -->
                    <!-- <br /> -->
                    <span>I mitten av Sverige</span> finns vi med kontor beläget i Örebro, och vi är som de flesta av våra kunder – hårt arbetande småföretagare. Som revisor, rådgivare och bollplank träffar vi olika typer av företag från en mängd olika branscher. Det ger oss en bredd och ett djup i vår erfarenhet som alla våra kunder har glädje av.
                    <br />
                    <br />
                    Genom att vi är en del av LR Revision & Redovisning med 70 lokalkontor runt om i Sverige, har vi ett nätverk av revisorer, redovisningskonsulter och skatteexperter som ger oss tillgång till specialistkompetens, utbildning och ett internationellt nätverk. På detta sätt ger vi våra kunder det bästa av två världar, den personliga lilla byrån men med stora resurser att lösa komplicerade problemställningar.
                    Vi samarbetar även med jurist Lena Molner, från LK Juridiska Byrå AB, för att möta våra kunders behov av familje-, avtals- och bolagsjuridisk rådgivning mm.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'lrContactUs'
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
        span {
            font-size: 40px;
            font-weight: bold;
            z-index: 1000;
        }
        .quoteTextAbout {
            z-index: 300;
            margin-top: 0;
            margin-bottom:0;
            text-align: center;
            width: 90%;
        }
        .fa {
            font-size: 40px;
            padding-right: 20px;
        }
    }
    .aboutUsImage {
        margin-top:67px; 
        background-image: url("../img/aboutHeader.png"); 
        background-repeat: no-repeat; 
        background-position:top; 
        background-size:cover; 
        width:100%; 
        height:250px; 
        position:relative; 
    }
    .contactUs .head {
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
        margin-bottom: 50px;
    }
    .lrHeaderLine {
        background-color: $red;
    }
    .mainText {
        text-align:left; 
        span {
        font-weight: bold;
        font-size: 20px;
        padding-bottom: 5px;
        }
    }
    /* ****************** MEDIAQUERIES ****************** */
    @media screen and (max-width: $tablet - 1px) {
        .quote {
            h3 {
                font-size: 5vw;
            }
        }
        .head .lrHeaderLine {
            width:50%;
        }
    }
</style>