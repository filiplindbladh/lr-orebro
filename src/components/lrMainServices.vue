<template>
    <div>
        <div class="accounting-stockphoto overlay">
            <div class="quote">
                <div class="quoteText"><i class="fa fa-quote-left" aria-hidden="true"></i>Vi kan erbjuda ett stort utbud av tjänster</div>  
                <div class="quoteText textIn">inom redovisning och administration</div>
            </div>
        </div>
        <vue-tabs centered>
            <v-tab title="First tab" centered>
            First tab content
            </v-tab>

            <v-tab title="Second tab">
            Second tab content
            </v-tab>

            <v-tab title="Third tab">
            Third tab content
            </v-tab>
        </vue-tabs>
    </div>
</template>

<script>
import {VueTabs, VTab} from 'vue-nav-tabs'

export default {
  name: 'lrMainServices',
  components: {
    VueTabs,
    VTab
  },
  props: {
    textPosition: {
      type: 'center'
    },
    direction: {
      type: 'center'
    },
    centered: true
  }
}
</script>

<style scoped lang="scss">
    @import '../style/main.scss';

    /* styling for quote inside header */
     .quote {
        display: flex;
        align-items: center;
        font-family: 'Playfair Display', serif;
        justify-content: center;
        flex-direction: column;
        color: $white;
        font-size: 28px;
        height: 100%;
        .textIn {
            margin-left: 130px;
        }
        span {
            font-size: 40px;
            font-weight: bold;
            z-index: 1000;
        }
        .quoteText {
            z-index: 300;
            margin-top: 0;
            margin-bottom:0;
        }
        .fa {
            font-size: 40px;
            padding-right: 20px;
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
 
  
 

</style>