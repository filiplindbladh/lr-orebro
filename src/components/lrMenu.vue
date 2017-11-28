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
                <a class="button is-primary is-outlined lr-button-fortnox"><img src="../img/fortnox.png"><img class="hoverFortnox" src="../img/fortnoxHover.png"></a></a>
            </div>
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
    // Company logo
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
</style>