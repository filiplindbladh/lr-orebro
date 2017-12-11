<template>
    <div>
        <div class="contactImage overlay">
            <div class="quote">
                <div class="quoteText"><i class="fa fa-quote-left" aria-hidden="true"></i>Vi ser fram emot</div>  
                <div class="quoteText textIn">att höra från dig!</div>
            </div>
        </div>
        <div class="section">
            <h3>Innehållet på sidan, Kontakta oss!</h3>
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
        font-family: 'Playfair Display', serif;
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
    .contactImage {
        margin-top:67px; 
        background-image: url("../img/contact.jpeg"); 
        background-repeat: no-repeat; 
        background-position:center; 
        background-size:cover; 
        width:100%; 
        height:250px; 
        position:relative; 
    }
</style>