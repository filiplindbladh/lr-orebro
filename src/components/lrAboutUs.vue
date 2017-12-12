<template>
    <div>
        <div class="aboutUsImage overlay">
            <div class="quote container">
                <h3>Lär känna oss i personalen på Lr Revision i Örebro</h3>
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

<style scoped lang="scss">
    @import '../style/main.scss';
/* styling for quote inside header */
.quote {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    color: $white;
    font-size: 28px;
    height: 100%;
    h3 {
        color:white; 
        z-index:999999999; 
        width:80%; 
        font-size:35px; 
        margin-left:50px; 
    }
    span {
        font-size: 40px;
        font-weight: bold;
        z-index: 1000;
    }
    .quoteTextAbout {
        z-index: 300;
        margin-top: 0;
        margin-bottom:0;
        text-align: center;
        width: 90%;
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
    background-position:top; 
    background-size:cover; 
    width:100%; 
    height:250px; 
    position:relative; 
}
</style>