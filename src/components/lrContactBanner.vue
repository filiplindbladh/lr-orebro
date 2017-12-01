<template>
    <div class="lrSection">
        <div class="banner parallax overlay">
            <div class="container section">
                <div class="columns">
                    <div class="column">
                        <h3> {{ bannerText }} </h3>
                    </div>
                </div>  
                <div class="columns contactInfo">
                    <div class="column">
                        <a href="tel:019183850">019 18 38 50</a>
                    </div>
                    <div class="column">
                        <a id="lr-button-more" class="button is-danger is-outlined">KONTAKT</a>
                    </div>
                    <div class="column">
                        <a href="mailto:hej@lr-orebro.se">hej@lr-orebro.se</a>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>
    
<script>
    export default {
      name: 'lrContactBanner',
      props: ['bannerText']
    }
</script>

<style scoped lang="scss">
    @import '../style/_variables.scss';
    .banner {
        display: flex;
        justify-content: center;
        align-items: center;
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
    }
    .parallax { 
        background-image: url("../img/lrImage.jpg");
        height: 250px; 
        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
    /* to center the content inside */
    .column {
        color: $green;
        justify-content: center;
        display: flex;
    }
    .contactInfo {
        display: flex;
        align-items: center;
        width: 100%;
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
</style>