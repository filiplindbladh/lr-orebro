<template>
    <div>
        <div class="aboutUsImage overlay">
            <div class="quote container">
                <h3>Vi på LR Örebro är som de flesta av våra kunder <br />– hårt arbetande småföretagare</h3>
            </div>
        </div>
        <div class="section container contactUs">
            <div class="head">
                <h3>Om oss</h3>
                <hr class="lrHeaderLine">
                <br/>
                <p class="mainText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam iste ipsam qui laboriosam doloremque voluptatum, consequatur veritatis rem voluptatibus. Ex quaerat voluptate odit fugit qui at accusamus quibusdam maiores.
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
    /* .mainText {
        width: 70%;
    } */
    .aboutUsImage {
        margin-top:67px; 
        background-image: url("../img/lrImage.jpg"); 
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
    /* ****************** MEDIAQUERIES ****************** */
    @media screen and (max-width: $tablet - 1px) {
        .quote {
            h3 {
                font-size: 5vw;
            }
        }
        /* .mainText {
            width: 100%;
        } */
    }
</style>