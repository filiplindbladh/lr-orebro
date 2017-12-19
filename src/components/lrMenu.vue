<template>
    <div id="lrMenu">
        <div class="container lrMenuContainer">
            <div class="lrLogoContainer">
                <router-link to="/"><img class="lrLogo" src="../img/logo.svg"></router-link> 
            </div>
            <!-- Menu on desktop and lager screens -->
            <div class="menuItems">
                <router-link to="/">START</router-link> 
                <router-link to="/tjanster">TJÄNSTER</router-link>
                <router-link to="/om-oss">OM OSS</router-link>
                <router-link to="/kontakta-oss">KONTAKT</router-link>
                <router-link to="/online">LR-ONLINE</router-link>
                <router-link to="/fortnox">FORTNOX</router-link>
            </div>
            <div class="smallScreenMenuContainer is-hidden-desktop">
                <!-- Menu open button -->
                <div id='open-menu' class='openBtn' v-on:click='open()'>
                    <!-- Hamburger menu -->
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <!-- Menu for screens smaller than tablet -->
            <!-- Menu overlay that covers the whole screen -->
            <nav id='nav' class='menuOverlay' v-bind:class="{ active: isActive }">
                <div id='close-menu' class='closeBtn' v-on:click='close()'>X</div>
                <ul class='overlay-content' id='overlay-content'>
                    <li><router-link to="/">START</router-link></li>
                    <li><router-link to="/tjanster">TJÄNSTER</router-link></li>
                    <li><router-link to="/om-oss">OM OSS</router-link></li>
                    <li><router-link to="/kontakta-oss">KONTAKT</router-link></li>
                    <li><router-link to="/online">LR-ONLINE</router-link></li>
                    <li><router-link to="/fortnox">FORTNOX</router-link></li>
                </ul> 
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  name: 'lrMenu',
  data: function () {
    return {
      isActive: false
    }
  },
  methods: {
    open: function () {
      this.isActive = true
    },
    close: function () {
      this.isActive = false
    }
  }
}
</script>

<style lang="scss">
    @import '../style/main.scss';
    #lrMenu {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex; 
        -webkit-box-orient: horizontal; 
        -webkit-box-direction: normal; 
        -ms-flex-direction: row; 
        flex-direction: row; 
        height: 67px;
        width: 100%;
        background-color: $white;
        border-bottom: 1px solid $blue;
        position: fixed;
        top: 0;
        z-index: 700;
    }
    /* Company logo */
    .lrLogoContainer {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center; 
    }
    .lrLogo {
        height: 65px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex; 
        -webkit-box-align: center; 
        -ms-flex-align: center; 
        align-items: center;
    }
    .lrMenuContainer {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
    .menuItems {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        width: 100%; 
        -webkit-box-align: center; 
        -ms-flex-align: center; 
        align-items: center;
        a {
            transition: all .3s ease-in-out;
            padding: 20px 20px;
            font-weight: bold;
            font-size: 0.85rem;
            color: $black;
            &:hover {
                color: $blue;
            }
        }
        .hoverFortnox {
            display: none;
        }
        .lr-button-fortnox {
            margin-left:20px;
            width: 100.43px;
            height: 30.59px;
        }
        a:hover img:last-child {
            display: block;  
        }
        a:hover img:first-child {
            display: none;  
        }
        .lr-button-online {
            font-size: 0.85rem;
            font-weight: bold;
            margin: 0 20px;
            width: 100.43px;
        }
        img {
            height: 15px;
            /* min height to get IE happy */
            min-width: 100%;  
        }  
    }   
    /*####################
    Menu on small screens
    ####################*/
    .smallScreenMenuContainer {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
    #open-menu div {
        width: 35px;
        height: 5px;
        background-color: black;
        margin: 6px 0;
        cursor: pointer;
    }
    .menuOverlay {
        background: rgba(0,0,0,0.9);
        height: 100%;
        overflow-x: hidden;
        position: fixed;
        right: 0;
        top: 0;
        -webkit-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
        width: 0%;
        z-index: 1000;
        a {
            color: $white;
            display: block;
            font-size: 26px;
            padding: 10px;
            text-decoration: none;
            white-space: nowrap;
            border-bottom: 1px solid transparent;
            -webkit-transition: all 0.4s ease-in-out;
            -o-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
        }
        a:hover {
            border-bottom: 2px solid $green;
            color: $white;
        }
        .closeBtn {
            color: $white;
            cursor: pointer;
            font-family: arial;
            font-size: 39px;
            font-weight: bold;
            padding: 10px;
            position: absolute;
            right: 33px;
            top: -3px;
            z-index: 10;
            &:hover {
                color: $green;
            }
        }
    }
    /* the added class to get the menu to fold out over the screen */
    .active {
        width: 100%;
    }
    .overlay-content {
        position: relative;
        text-align: center;
        top: 22%;
        width: 100%;
    }
    .overlay-content .hoverFortnox {
        max-width: 170px;
    }
    /* ****************** MEDIAQUERIES ****************** */
    @media screen and (max-width: $tablet - 1px) {
        .menuItems {
            display: none;
        }
        .smallScreenMenuContainer {
            right: 0;
            position: absolute;
            top: 10px;
        }
        .lrMenuContainer {
            min-width: 90%;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
        }
    }
    .menuOverlay .closeBtn {
        right: 4%;
    }
    @media screen and (min-width: $tablet) {
        .smallScreenMenuContainer {
            display: none;
        }
    }
</style>