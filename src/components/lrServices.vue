<template>
    <div class="section container">
        <h2>Kompetens och engagemang som ger resultat</h2>
        <hr class="lrHeaderLine">

        <div class="services">
            <a href="#"> 
                <div class="box redovisning">
                    <img class="boxImage" src="../img/accounting_icon.svg" alt="redovisning.png">
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
                    <img class="boxImage" src="../img/revision_icon.svg" alt="revision.png">
                    <h3>revision</h3>
                    <div class="triangle-bottomright"></div>
                </div>
            </a>
        </div>
            <p class="mainText">
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
    @import '../style/main.scss';
    h2 {
        text-align:center; 
    }
    .section {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center; 
        -webkit-box-orient: vertical; 
        -webkit-box-direction: normal; 
            -ms-flex-direction: column; 
                flex-direction: column; 
    }
    .lrHeaderLine {
        background-color: $red;
        height:5px; 
    }
    .services {
        width:100%; 
        display: -webkit-box; 
        display: -ms-flexbox; 
        display: flex; 
        -webkit-box-orient: horizontal; 
        -webkit-box-direction: normal; 
            -ms-flex-direction: row; 
                flex-direction: row; 
        -ms-flex-pack: distribute; 
            justify-content: space-around; 
        -ms-flex-wrap:wrap; 
            flex-wrap:wrap; 
        margin-bottom:40px; 
    }
    .box {
        position: relative;
        height:300px; 
        width:300px; 
        border: 2px solid $black;  
        display:-webkit-box;  
        display:-ms-flexbox;  
        display:flex; 
        -webkit-box-pack:center; 
            -ms-flex-pack:center; 
                justify-content:center; 
        -webkit-box-align:center; 
            -ms-flex-align:center; 
                align-items:center; 
        -webkit-box-orient:vertical; 
        -webkit-box-direction:normal; 
            -ms-flex-direction:column; 
                flex-direction:column; 
        &:hover {
            /* background-color:rgba(227, 82, 80, 0.5);  */
            background-color: white;
        } 
        h3 {
            color:$white; 
            z-index:2;
        }
    }
    .box:hover > .triangle-bottomright {
        /* opacity:0;   */
        border-left: 0 solid transparent;
        right: 0;
    }
    .box:hover > h3 {
        color:$black; 
    }
    .consulting img {
        width: 80%;
        height: 211px;
    }
    .triangle-bottomright {
        -webkit-transition: all .3s ease-in-out;
        -o-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
        width: 0;
        height: 0;
        right: 0;
        top: 0;
        border-bottom: 300px solid $blue;
        border-left: 298px solid transparent;
        z-index: 1; 
        position:absolute; 
    }
    p {
        text-align:center; 
        width:70%; 
    }
    .services .box .boxImage {
        height: 211px;
        max-width: 100%;
    }
    /* ****************** MEDIAQUERIES ****************** */
    @media screen and (max-width: $tablet - 1px) {
        .services {
            -webkit-box-orient:vertical;
            -webkit-box-direction:normal;
                -ms-flex-direction:column;
                    flex-direction:column; 
            -webkit-box-align:center; 
                -ms-flex-align:center; 
                    align-items:center;  
        }
        .box {
            margin-bottom:40px; 
        }
        .triangle-bottomright {
            display: none;
        }
        .box > h3 {
            color:$black; 
        }
    }
    @media screen and (min-width: $tablet) and (max-width: $desktop - 1px) {
        .box {
            margin:25px; 
        }
    }

</style>
