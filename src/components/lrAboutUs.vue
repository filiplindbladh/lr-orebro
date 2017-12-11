<template>
    <div>
        <div class="aboutUsImage overlay">
            <div class="quote">
                <div class="quoteText"><h3>Lär känna oss i personalen på Lr Revision i Örebro!</h3></div>
            </div>
        </div>
        <div class="section">
            <h3>Innehållet på sidan, Om oss!</h3>
        </div>
    </div>
</template>

<script>
export default {
  name: 'lrContactUs'
}
</script>

<style lang="scss">
    @import '../style/main.scss';
/* styling for quote inside header */
.quote {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: $white;
    font-size: 28px;
    height: 100%;
    .textIn {
        margin-left: 130px;
    }
    span {
        font-size: 40px;
        font-weight: bold;
        z-index: 1000;
    }
    .quoteText {
        z-index: 300;
        margin-top: 0;
        margin-bottom:0;
    }
    .fa {
        font-size: 40px;
        padding-right: 20px;
    }
}
.aboutUsImage {
    margin-top:67px; 
    background-image: url("../img/lrImage.jpg"); 
    background-repeat: no-repeat; 
    background-position:center; 
    background-size:cover; 
    width:100%; 
    height:250px; 
    position:relative; 
}
</style>