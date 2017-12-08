<template>
    <div class="lrSection">
        <div class="banner parallax overlay" :style="style">
            <div class="container section">
                <div class="columns">
                    <div class="column">
                        <h3> {{ bannerText }} </h3>
                    </div>
                </div>  
                <div class="columns contactInfo">
                    <div class="column">
                        <i class="fa fa-phone" aria-hidden="true"></i> <a href="tel:019183850">019 18 38 50</a>
                    </div>
                    <div class="column">
                        <a id="lr-button-more" class="button is-info is-outlined">KONTAKT</a>
                    </div>
                    <div class="column">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i> <a href="mailto:hej@lr-orebro.se">hej@lr-orebro.se</a>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>
    
<script>
    // import VueImgLoader from 'vue-img-loader'
    export default {
      name: 'lrContactBanner',
      props: ['bannerText', 'backgroundImage'],
      computed: {
        style () {
          return 'background-image: url(' + this.backgroundImage + ')'
        }
      }
    }
</script>

<style scoped lang="scss">
    @import '../style/main.scss';
    .banner {
        display: flex;
        -ms-display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        z-index: 300;
        h3 {
            color: $white;
            z-index: 300;
        }
        a {
            color: $green;
            z-index: 300;
            &:hover {
                color: $white;
            }
        }
        .section {
            width: 100%;
        }
    }
    .parallax { 
        height: 250px; 
        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
    /* for IE to know the width of the columns */
    .columns {
        min-width: 100%;
    }
    /* to center the content inside */
    .column {
        color: $green;
        justify-content: center;
        display: flex;
        -ms-display: flex;
    }
    .contactInfo {
        display: flex;
        -ms-display: flex;
        -ms-flex-direction: row;
        flex-direction: row;
        align-items: center;
        width: 100%;
        .fa {
            font-size: 20px;
            margin-right: 5px;
        }
    }
    #lr-button-more {
        border: 5px solid $green;
        font-size: 23px;
    }
    .overlay:before {
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        background-color: rgba(0, 81, 146, .75);
    }
    /* ****************** MEDIAQUERIES ****************** */
    @media screen and (max-width: $tablet - 1px) {
        .parallax {
            background-attachment: scroll;
        }
        .banner {
            h3 {
                font-size: 3vw;
            }
            #lr-button-more {
                font-size: 3vw;
                border: 2px solid $green;
            }
        }
    }
    @media screen and (max-width: 650px) {
        .contactInfo {
            flex-direction: column;
            .column {
                display: block;
            }
        }
    }
</style>