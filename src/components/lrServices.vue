<template>
    <div class="section container">
        <h2>Kompetens och engagemang som ger resultat</h2>
        <hr class="lrHeaderLine">

        <div class="services">
            <a href="#"> 
                <div class="box redovisning">
                    <img id="image" src="../img/accounting_icon.svg" alt="redovisning.png">
                    <h3>redovisning</h3>
                    <div class="triangle-bottomright"></div>
                </div>
            </a>
            <a href="#"> 
                <div class="box consulting">
                    <img src="../img/consulting_icon.svg" alt="consultation.png">
                    <h3>rådgivning</h3>
                    <div class="triangle-bottomright"></div>
                </div>
            </a>
            <a href="#"> 
                <div class="box revision"> 
                    <img src="../img/revision_icon.svg" alt="revision.png">
                    <h3>revision</h3>
                    <div class="triangle-bottomright"></div>
                </div>
            </a>
        </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
      name: 'lrServices',
      methods: {
    //     mouseOver: function () {
    //     getElementByClass('triangle-bottomright').hide();
    // }
  }

    }

</script>

<style scoped lang="scss">
    @import '../style/_variables.scss';

    .section {
    display: flex;
    align-items: center; 
    flex-direction: column; 
    }

    .lrHeaderLine {
        background-color: $red;
        height:5px; 
    }

    .services {
        width:100%; 
        display: flex; 
        flex-direction: row; 
        justify-content: space-around; 
        margin-bottom:40px; 
    }
    .box {
        height:300px; 
        width:300px; 
        border: 5px solid $grey;  
        display:flex; 
        justify-content:center; 
        align-items:center; 
        flex-direction:column; 
        &:hover {
            border: 5px solid $black;
            background-color:rgba(227, 82, 80, 0.5); 
        } 
        h3 {
            color:$white; 
            z-index:2; 
        }
    }
    .box:hover > .triangle-bottomright {
        transition:5ms; 
        opacity:0;  
    }
    .box:hover > h3 {
        color:$black; 
    }
    .consulting img {
         width: 80%;
    }
    .triangle-bottomright {
        width: 0;
        height: 0;
        border-bottom: 300px solid $black;
        border-left: 300px solid transparent;
        z-index: 1; 
        position:absolute; 
    }

    p {
        text-align:center; 
        font-size: 18px; 
        font-weight:600; 
        width:70%; 
    }


</style>
