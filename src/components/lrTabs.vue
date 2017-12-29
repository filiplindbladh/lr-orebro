<template>
<div>
    <div class="tabs is-centered is-outlined">
        <ul>
            <li v-for="tab in tabs" :class="{'is-active' : tab.isActive } ">
              <a :href="tab.href" @click="selectTab(tab)"> {{ tab.name }} </a>
            </li>
        </ul>
        </div>
        <div class="tabsDetails">
        <slot></slot>  
      </div>
  </div>
</template>
<script>
  export default {
    name: 'lrTabs',
    data () {
      return {
        tabs: [],
        icons: [
          '<i class="fa fa-calculator" aria-hidden="true"></i>',
          '<i class="fa fa-lightbulb-o" aria-hidden="true"></i>',
          '<i class="fa fa-search" aria-hidden="true"></i>',
          '<i class="fa fa-book" aria-hidden="true"></i>',
          '<i class="fa fa-credit-card-alt" aria-hidden="true"></i>'
        ],
        isActive: false
      }
    },
    created () {
      this.tabs = this.$children
    },
    methods: {
      selectTab (selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = (tab.name === selectedTab.name)
        })
      }
    }
  }
</script>

<style lang="scss">
@import '../style/main.scss';
.tabs {
  width:100%; 
}
</style>
