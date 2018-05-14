<template>
    <div class="lrSection">
        <!-- get the background image for Start component -->
        <div class="banner parallax overlay"
          v-bind:class="[
            { mugImage: backgroundImage === true },
            { phoneImage: backgroundImage === false }
          ]"
        >
            <div class="container section bannerContent">
                <div class="columns">
                    <div class="column">
                        <h3> {{ bannerText }} </h3>
                    </div>
                </div>
                <!-- Contact info to LR örebro -->
                <div class="columns contactInfo">
                    <div class="column">
                        <i class="fa fa-phone" aria-hidden="true"></i> <a href="tel:019183850">019 18 38 50</a>
                    </div>
                    <div class="column contactBtn">
                        <a id="lr-button-more" class="button is-info is-outlined" @click='openModal()'>KONTAKT</a>
                    </div>
                    <div class="column">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i> <a href="mailto:hej@lr-orebro.se">hej@lr-orebro.se</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- when we click on KONTAKT, show this modal window -->
        <contactModal :activate="addActive" @closeRequest='close'></contactModal>
    </div>
</template>

<script>
import contactModal from '@/components/contactModal'
export default {
  name: 'lrContactBanner',
  components: {contactModal},
  props: ['bannerText', 'backgroundImage'],
  data: function () {
    return {
      isOpen: false,
      addActive: ''
    }
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen
    },
    openModal: function () {
      this.addActive = 'is-active'
    },
    close () {
      this.addActive = ''
    }
  },
  computed: {
  }
}
</script>

<style scoped lang="scss">
    .banner {
        min-height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
                justify-content: center;
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
    .bannerContent {
        min-width: 100%;
        display: -webkit-box;
        display: flex;
        -ms-display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        text-align: center;
        z-index: 300;
        -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            margin: 0 auto;
    }
    /* for IE to know the width of the columns */
    .columns {
        min-width: 100%;
    }
    /* to center the content inside */
    .column {
        color: $green;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        display: -webkit-box;
        display: flex;
        -ms-display: flex;
    }
    .contactInfo {
        display: -webkit-box;
        display: flex;
        -ms-display: flex;
        -ms-flex-direction: row;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 100%;
        .fa {
            font-size: 20px;
            margin-right: 5px;
        }
    }
    #lr-button-more {
        -webkit-transition: all .3s ease-in-out;
        -o-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
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
    .mugImage {
      background-image: url('../img/lrImage.png');
    }
    .phoneImage {
      background-image: url('../img/lrContact.jpeg');
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
            min-height: 100%;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            .column {
                display: block;
                min-height: 50px;
            }
            /* to make the contact button display center vertically */
            .contactBtn {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                    -ms-flex-align: center;
                        align-items: center;
            }
        }
    }
</style>