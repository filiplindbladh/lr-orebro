<template>
    <div id="lrMenu">
        <div class="container lrMenuContainer">
            <div class="lrLogoContainer">
                <img class="lrLogo" src="../img/logo.png">
            </div>
            <div class="menuItems">
                <a href="#">START</a>
                <a href="#">TJÄNSTER</a>
                <a href="#">OM OSS</a>
                <a href="#">KONTAKT</a>
                <a class="button is-link is-outlined has-text-weight-bold">LR-ONLINE</a>
                <a class="button is-link is-outlined"><img src="../img/lt-fortnox.png"></a>
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
    }
    .lrLogo {
        height: 70px;
        display: flex; 
        align-items: center;
    }
    .lrMenuContainer {
        display: flex;
    }
    .lrLogoContainer {
        display: flex; 
    }
    .menuItems {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        width: 100%; 
        align-items: center;
        a {
            color: $lr-black;
            &:hover {
                color: $lr-blue;
            }
        }
        img {
            height: 17px;
            width: 91px;
        }
        .button.is-link.is-outlined {
            background-color: transparent;
            border-color: red;
            color: red;
        }
    }
    
</style>