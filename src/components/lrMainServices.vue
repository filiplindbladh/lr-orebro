<template>
    <div>
        <div class="accounting-stockphoto overlay">
            <div class="quote">
                <div class="quoteText"><i class="fa fa-quote-left" aria-hidden="true"></i>Vi kan erbjuda ett stort utbud av tjänster</div>  
                <div class="quoteText textIn">inom redovisning och administration</div>
            </div>
        </div>
        <vue-tabs active-tab-color="white" active-text-color="black" centered>
            <v-tab title="Redovisning" icon="fa-calculator">
                <div class="section tab-content">
                    <h3>Redovisning</h3>
                    <hr class="lrHeaderLine"> 
                    <p class="leadText">
                        Inom ramen för begreppet redovisning ryms en rad återkommande ekonomiska arbetsuppgifter, som t.ex. bokföring, kontering,skatte- och momsfrågor, kund- och leverantörsreskontra, ekonomisk rapportering etc. Vi kan erbjuda ett stort utbud av tjänster inom redovisning och administration. Du väljer själv hur du vill använda oss.
                    </p>
                    <p class="leadText">
                        Vi kan hjälpa till att införa effektiva rutiner anpassade för ditt företag. Det kan handla om att anpassa kontoplanen så att rätt beslutsunderlag kan tas fram, utnyttja teknikens möjligheter, välja rätt program och skapa rutiner för ekonomi och administration. Vi kan också hjälpa till att bygga upp system för effektiv intern kontroll i företaget, vilket minskar risken för fel.
                    </p>
                </div>
            </v-tab>
            <v-tab title="Rådgivning">
                <div class="section tab-content">
                    <h3>Rådgivning</h3>
                    <hr class="lrHeaderLine"> 
                    <p class="leadText">
                        För många företag är revisorn så mycket mer än ”bara siffror”. I vårt arbete lägger vi stor vikt vid att analysera företaget . Vi gör det genom att se till helheten, d.v.s. produkter, människor, lönsamhet, kvalitet i ekonomisk information etc. På så sätt får vi också en bra uppfattning om företaget fungerar som det är avsett att fungera. Vi kan också vara ett bollplank i frågor som rör affärsutveckling, t.ex. genom att ställa de viktiga frågorna och ta fram underlagen inför besluten.
                    </p>
                    <p class="leadText">
                        Genom att titta på hur omvärlden ser ut, analysera trender i branschen eller bland liknande företag och se på vilka konsekvenser ett beslut kan få på kort och lång sikt, kan våra medarbetare vara värdefulla resurser. Du får även råd inom många viktiga områden, t.ex. ekonomisk planering, skatter och IT. Vi kan också hjälpa dig med kontakter till banker, kreditbolag och myndigheter.
                    </p>
                </div>
            </v-tab>
            <v-tab title="Revision">
                <div class="section tab-content">
                    <h3>Revision</h3>
                    <hr class="lrHeaderLine"> 
                    <p class="leadText">
                        Revisorn genomför en oberoende revision genom att granska och bedöma företags årsredovisning, bokföring och förvaltning. Resultatet av granskningen dokumenteras och rapporteras både till dig som företagare och i den offentliga revisionsberättelsen. Revisorns kanske viktigaste funktion är att ge trovärdighet åt företagets finansiella information.
                    </p>
                    <p class="leadText">
                        Årsredovisningen och revisionsberättelsen är tillsammans beslutsunderlag för företagets intressenter, och de måste kunna lita på den information som lämnas i årsredovisningen. Revisorn har lagstadgad tystnadsplikt, och det är oftast bara i revisionsberättelsen och vid bolagsstämman som revisorn får lämna ut information.
                    </p>
                </div>
            </v-tab>
            <v-tab title="Bokslut">
              <div class="section tab-content">
                  <h3>Bokslut</h3>
                  <hr class="lrHeaderLine"> 
                  <p class="leadText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p class="leadText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              </div>
            </v-tab>
            <v-tab title="Löneradministration">
              <div class="section tab-content">
                  <h3>Löneadministration</h3>
                  <hr class="lrHeaderLine"> 
                  <p class="leadText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p class="leadText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              </div>
            </v-tab>
        </vue-tabs>
    </div>
</template>

<script>
import {VueTabs, VTab} from 'vue-nav-tabs'
import Icon from 'vue-awesome/components/Icon.vue'

export default {
  name: 'lrMainServices',
  components: {
    VueTabs,
    VTab,
    Icon
  },
  props: {
    textPosition: {
      type: 'center'
    },
    direction: {
      type: 'center'
    },
    centered: true
  },

  computed: {
    style () {
      return 'font-size:20px;'
    }
  }
}
</script>

<style lang="scss">
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
    .vue-tabs .nav > li span.title {
        font-size:20px; 
    }
    .tab {
        background-color:$blue; 
        border-right: 1px solid white; 
        .title {
            color:white; 
        }
    }
    .leadText {
        margin-bottom:40px; 
        width:70%;
    }
    .tab-content {
        display: flex;
        flex-direction:column; 
        align-items:center; 
        justify-content:center;  
        .tab-container {
            display: block;
            animation: fadeIn 0.3s;
        }
    }
    .icon {
        height:10px; 
    }


</style>