<template>
    <div class="section header overlay">
        <div class="lrHeader container">
            <h1> VÄLKOMMEN TILL <br /> DIN FRAMTIDSBYRÅ </h1>
            <hr class="lrHeaderLineHeader">
            <a id="lr-button-more" class="button is-info is-outlined">LÄS MER</a>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'lrHeader'
    }
</script>
    
<style lang="scss">
    @import '../style/main.scss';
    .overlay:before {
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        background-color: rgba(0, 81, 146, .75);
    }
    .header {
        background-image: url("../img/redovisning_ed.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-color: $blue;
        position: relative;
        padding: 80px 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        height: calc(100vh - 67px);
        margin-top: 67px;
    }
    .lrHeader {
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        h1 {
            text-align: center;
            color: $white;
            z-index: 100;
        }
    }
    .lrHeaderLineHeader {
        background-color: $white;
        height: 5px;
        width: 295px;
        z-index: 100;
        margin-bottom: 30px;
    }
    #lr-button-more {
        border: 5px solid $green;
        font-size: 23px;
    }
</style>