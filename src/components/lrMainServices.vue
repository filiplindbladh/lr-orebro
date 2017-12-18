<template>
    <div>
        <vue-tabs active-tab-color="white" active-text-color="black" centered v-scroll-to="{ y: true }">
            <v-tab class="v-tab" title="Redovisning">
                <div id="tabContent" class="section container tab-content">
                    <h3>Redovisning</h3>
                    <hr class="lrHeaderLine"> 
                    <p class="leadText">
                        Vill du slippa pappersfakturor och en full mejlinkorg? Vi är en modern byrå som kan hjälpa dig att digitalisera och automatisera din ekonomiska administration. Detta skapar en större trygghet för dig och frigör samtidigt mer tid som du istället kan ägna åt din kärnverksamhet. Inom ramen för begreppet redovisning ingår en rad olika ekonomiska tjänster som vi erbjuder våra kunder, däribland löpande bokföring, löneadministration, deklarationer och bokslut. Du väljer själv hur mycket du vill ha hjälp med och vi anpassar våra tjänster utifrån dina behov.
                    </p>
                    <!-- <p class="leadText">
                        Inom ramen för begreppet redovisning ryms en rad återkommande ekonomiska arbetsuppgifter, som t.ex. bokföring, kontering,skatte- och momsfrågor, kund- och leverantörsreskontra, ekonomisk rapportering etc. Vi kan erbjuda ett stort utbud av tjänster inom redovisning och administration. Du väljer själv hur du vill använda oss.
                    </p> -->
                    <!-- <p class="leadText">
                        Vi kan hjälpa till att införa effektiva rutiner anpassade för ditt företag. Det kan handla om att anpassa kontoplanen så att rätt beslutsunderlag kan tas fram, utnyttja teknikens möjligheter, välja rätt program och skapa rutiner för ekonomi och administration. Vi kan också hjälpa till att bygga upp system för effektiv intern kontroll i företaget, vilket minskar risken för fel.
                    </p> -->
                </div>
            </v-tab>
            <v-tab class="v-tab" title="Rådgivning">
                <div class="section container tab-content">
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
            <v-tab class="v-tab" title="Revision">
                <div class="section container tab-content">
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
            <v-tab class="v-tab" title="Bokslut">
              <div class="section container tab-content">
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
            <v-tab class="v-tab" title="Löneradministration">
              <div class="section container tab-content">
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
require('vue-animate/dist/vue-animate.min.css')

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
  }
}
</script>

<style lang="scss">
    @import '../style/main.scss';
    .vue-tabs .nav > li span.title {
        font-size:15px; 
    }
    li.tab.active,
    li.tab.active:hover {
        background-color: $white;
    }
    .vue-tabs .nav-tabs-justified > li > a, 
    .vue-tabs .nav-tabs.nav-justified > li > a {
        border-bottom: 1px solid transparent;
    }
    .tab {
        background-color:$blue; 
        transition: all .3s ease-in-out;
        border-right: 1px solid white;
        /* transition: all 1s ease-out; */
        .title {
            color:white; 
        }
    }
    li.tab:hover {
        transition: all .3s ease-in-out;
        background-color: #eeeeee;
    }
    li.tab:hover .title {
        color:black;
    }
    .tabs__link > .title {
        color:$white; 
    }
    .tabs__link:hover > .title {
        color:black; 
    }
    .leadText {
        margin-bottom:40px; 
        width:70%;
    }
    .tab-content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient:vertical;
        -webkit-box-direction:normal;
            -ms-flex-direction:column;
                flex-direction:column; 
        -webkit-box-align:center; 
            -ms-flex-align:center; 
                align-items:center; 
        -webkit-box-pack:center; 
            -ms-flex-pack:center; 
                justify-content:center;  
        .tab-container {
            display: block;
            -webkit-animation: fadeIn 0.5s;
                    animation: fadeIn 0.5s;
        }
    }
    .icon {
        height:10px; 
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
        .leadText { 
            width:100%;
        }
    }
</style>