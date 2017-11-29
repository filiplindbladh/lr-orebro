<template>
    <div id="lrMenu">
        <div class="container lrMenuContainer">
            <div class="lrLogoContainer">
                <img class="lrLogo" src="../img/logo.png">
            </div>
            <div class="menuItems">
                <a class="menuItem" href="#">START</a>
                <a class="menuItem" href="#">TJÄNSTER</a>
                <a class="menuItem" href="#">OM OSS</a>
                <a class="menuItem" href="#">KONTAKT</a>
                <a class="button is-primary is-outlined lr-button-online">LR-ONLINE</a>
                <a class="button is-primary is-outlined lr-button-fortnox"><img src="../img/fortnox.png"><img class="hoverFortnox" src="../img/fortnoxHover.png"></a>
            </div>
            <div class="smallScreenMenuContainer is-hidden-desktop">
                <!-- Menu open button -->
                <div id='open-menu' class='openBtn'>
                    <!-- Hamburger menu -->
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <!-- Menu overlay that covers the whole screen -->
            <nav id='nav' class='menuOverlay'>
                <div id='close-menu' class='closeBtn'>X</div>
                <ul class='overlay-content' id='overlay-content'>
                    <li><a href='#'>START</a></li>
                    <li><a href='#'>TJÄNSTER</a></li>
                    <li><a href='#'>OM OSS</a></li>
                    <li><a href='#'>KONTAKT</a></li>
                    <li><a href='#'>LR-ONLINE</a></li>
                    <!-- <li><a class="button is-primary is-outlined lr-button-online">LR-ONLINE</a></li> -->
                    <li><a href="#"><img class="hoverFortnox" src="../img/fortnoxHover.png"></a></li>
                </ul> 
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  name: 'lrMenu'
}
</script>

<style lang="scss">
@import '../style/_variables.scss';
    #lrMenu {
        display: flex; 
        flex-direction: row; 
        height: 75px;
        width: 100%;
        background-color: $white;
        border-bottom: 1px solid $blue;
    }
    /* Company logo */
    .lrLogoContainer {
        display: flex;
        align-items: center; 
    }
    .lrLogo {
        height: 65px;
        display: flex; 
        align-items: center;
    }
    .lrMenuContainer {
        display: flex;
    }
    .menuItems {
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        width: 100%; 
        align-items: center;
        .menuItem {
            padding: 0 20px;
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
        }  
    }   
    /*####################
    Menu on small screens
    ####################*/
    .smallScreenMenuContainer {
        align-items: center;
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
        transition: all 0.5s;
        width: 0%;
        z-index: 200;
        a {
            color: $white;
            display: block;
            font-size: 26px;
            padding: 10px;
            text-decoration: none;
            white-space: nowrap;
        }
        a:hover {
            border-bottom: 1px solid #ccff99;
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
        .lrMenuContainer {
            width: 90%;
            justify-content: space-between;
        }
    }
    @media screen and (min-width: $tablet) {
        .smallScreenMenuContainer {
            display: none;
        }
    }
</style>