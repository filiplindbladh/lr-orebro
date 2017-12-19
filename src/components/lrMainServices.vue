<template>
  <div>
      <lrTabs id="lrTabs">
        <lrTab name="Redovisning" :selected="true">
          <div id="tabContent" class="tabContent section">
            <h3>Redovisning</h3>
            <hr class="lrHeaderLine"> 
            <p class="leadText">
                Vill du slippa pappersfakturor och en full mejlinkorg? Vi är en modern byrå som kan hjälpa dig att digitalisera och automatisera din ekonomiska administration. Detta skapar en större trygghet för dig och frigör samtidigt mer tid som du istället kan ägna åt din kärnverksamhet. Inom ramen för begreppet redovisning ingår en rad olika ekonomiska tjänster som vi erbjuder våra kunder, däribland löpande bokföring, löneadministration, deklarationer och bokslut. Du väljer själv hur mycket du vill ha hjälp med och vi anpassar våra tjänster utifrån dina behov.
            </p>
          </div>
        </lrTab>
        <lrTab name="Rådgivning">
          <div class="tabContent section">
            <h3>Rådgivning</h3>
            <hr class="lrHeaderLine"> 
            <p class="leadText">
                För många företag är revisorn så mycket mer än ”bara siffror”. I vårt arbete lägger vi stor vikt vid att analysera företaget . Vi gör det genom att se till helheten, d.v.s. produkter, människor, lönsamhet, kvalitet i ekonomisk information etc. På så sätt får vi också en bra uppfattning om företaget fungerar som det är avsett att fungera. Vi kan också vara ett bollplank i frågor som rör affärsutveckling, t.ex. genom att ställa de viktiga frågorna och ta fram underlagen inför besluten.
            </p>
            <p class="leadText">
                Genom att titta på hur omvärlden ser ut, analysera trender i branschen eller bland liknande företag och se på vilka konsekvenser ett beslut kan få på kort och lång sikt, kan våra medarbetare vara värdefulla resurser. Du får även råd inom många viktiga områden, t.ex. ekonomisk planering, skatter och IT. Vi kan också hjälpa dig med kontakter till banker, kreditbolag och myndigheter.
            </p>
          </div>
        </lrTab>
        <lrTab name="Revision">
          <div class="tabContent section">
            <h3>Revision</h3>
            <hr class="lrHeaderLine"> 
            <p class="leadText">
                Revisorn genomför en oberoende revision genom att granska och bedöma företags årsredovisning, bokföring och förvaltning. Resultatet av granskningen dokumenteras och rapporteras både till dig som företagare och i den offentliga revisionsberättelsen. Revisorns kanske viktigaste funktion är att ge trovärdighet åt företagets finansiella information.
            </p>
            <p class="leadText">
                Årsredovisningen och revisionsberättelsen är tillsammans beslutsunderlag för företagets intressenter, och de måste kunna lita på den information som lämnas i årsredovisningen. Revisorn har lagstadgad tystnadsplikt, och det är oftast bara i revisionsberättelsen och vid bolagsstämman som revisorn får lämna ut information.
            </p>
          </div>
        </lrTab>
        <lrTab name="Bokslut">
          <div class="tabContent section">
            <h3>Bokslut</h3>
            <hr class="lrHeaderLine"> 
            <p class="leadText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p class="leadText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </lrTab>
        <lrTab name="Löneadministration">
          <div class="tabContent section">
              <h3>Löneadministration</h3>
              <hr class="lrHeaderLine"> 
              <p class="leadText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p class="leadText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </div>
        </lrTab>
    </lrTabs>
  </div>
</template>

<script>
import { VueTabs, VTab } from 'vue-nav-tabs'
import Icon from 'vue-awesome/components/Icon.vue'
import lrTab from '@/components/lrTab.vue'
import lrTabs from '@/components/lrTabs.vue'
require('vue-animate/dist/vue-animate.min.css')

export default {
  name: 'lrMainServices',
  components: {
    VueTabs,
    VTab,
    Icon,
    lrTab,
    lrTabs
  },
  props: {
    textPosition: {
      type: 'center'
    },
    direction: {
      type: 'center'
    },
    selected: { default: false },

    centered: true
  }
}
</script>

<style lang="scss">
@import "../style/main.scss";
.tabContent {
  width:500px; 
}
.section { 
  .lrHeaderLine {
    background-color: $red;
  }
  .leadText {
    width:70%; 
  }
}

/* ****************** MEDIAQUERIES ****************** */
@media screen and (max-width: $tablet - 1px) {
  .quote {
    h3 {
      font-size: 5vw;
    }
  }
  .leadText {
    width: 100%;
  }
}
</style>