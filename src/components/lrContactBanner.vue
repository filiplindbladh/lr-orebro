<template>
    <div class="lrSection">
        <div class="banner parallax overlayYes">
                <div class="container section">
                    <div class="columns">
                        <div class="column">
                            <h3>Långsiktiga lösningar för traditionella eller digitala företag</h3>
                        </div>
                    </div>
                <div class="columns contactInfo">
                    <div class="column">
                        <a href="tel:0700000000">070 000 00 00</a>
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
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis, aut quae vel cum provident eius nulla veniam sunt magnam natus quod modi sit illum quam repellendus voluptatibus sed repudiandae.</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis, aut quae vel cum provident eius nulla veniam sunt magnam natus quod modi sit illum quam repellendus voluptatibus sed repudiandae.</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis, aut quae vel cum provident eius nulla veniam sunt magnam natus quod modi sit illum quam repellendus voluptatibus sed repudiandae.</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis, aut quae vel cum provident eius nulla veniam sunt magnam natus quod modi sit illum quam repellendus voluptatibus sed repudiandae.</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis, aut quae vel cum provident eius nulla veniam sunt magnam natus quod modi sit illum quam repellendus voluptatibus sed repudiandae.</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis, aut quae vel cum provident eius nulla veniam sunt magnam natus quod modi sit illum quam repellendus voluptatibus sed repudiandae.</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis, aut quae vel cum provident eius nulla veniam sunt magnam natus quod modi sit illum quam repellendus voluptatibus sed repudiandae.</p>                       
        
    </div>  
</template>
    
<script>
    export default {
      name: 'lrContactBanner'
    }
</script>

<style scoped lang="scss">
    @import '../style/_variables.scss';
    .overlayYes:before {
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
    .banner {
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 300;
        h3 {
            font-size: 22px;
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
        height: 180px; 
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
</style>