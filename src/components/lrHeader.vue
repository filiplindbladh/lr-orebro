<template>
    <div class="section">
        <div class="lrHeader">
            <p>
                VÄLKOMMEN TILL <br /> DIN FRAMTIDSBYRÅ
            </p>
            <hr class="lrHeaderLine">
        </div>
    </div>
</template>

<script>
    export default {
      name: 'lrHeader'
    }
</script>
    
<style lang="scss">
    @import '../style/_variables.scss';

    .section {
        background-color: lightblue;
        padding: 80px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 74px);
    }
    .lrHeader {
        align-items: center;
        display: flex;
        flex-direction: column;
        p {
            font-size: 35px;
            font-weight: bold;
            text-align: center;
            color: $white;
        }
    }
    .lrHeaderLine {
        height: 6px;
        width: 55%;
        background-color: $white;
    }

</style>