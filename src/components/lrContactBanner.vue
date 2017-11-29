<template>
    <div class="section">
        <div class="banner parallax">
                hej banner
        </div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam hic maiores quam doloribus minus assumenda, omnis at veritatis quaerat autem accusamus suscipit enim culpa officia ducimus tempore ab amet ipsum!</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam hic maiores quam doloribus minus assumenda, omnis at veritatis quaerat autem accusamus suscipit enim culpa officia ducimus tempore ab amet ipsum!</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam hic maiores quam doloribus minus assumenda, omnis at veritatis quaerat autem accusamus suscipit enim culpa officia ducimus tempore ab amet ipsum!</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam hic maiores quam doloribus minus assumenda, omnis at veritatis quaerat autem accusamus suscipit enim culpa officia ducimus tempore ab amet ipsum!</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam hic maiores quam doloribus minus assumenda, omnis at veritatis quaerat autem accusamus suscipit enim culpa officia ducimus tempore ab amet ipsum!</div>
    </div>
</template>
    
<script>
    export default {
        name: 'lrContactBanner'
    }
</script>

<style lang="scss">
    .banner {
        background-color: pink;
    }
    .parallax { 
        /* The image used */
        background-image: url("../img/lrImage.jpg");

        /* Set a specific height */
        height: 500px; 

        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>