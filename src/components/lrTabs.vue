<template>
<div>
    <div class="tabs is-centered" v-scroll-to="{ y: true }">
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
