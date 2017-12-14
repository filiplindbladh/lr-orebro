<template>
    <div>
    <lr-menu></lr-menu>
    <div class="section flex">
        <div class="card">
            <div class="card-content">
                <img src="../img/lr-online.png" alt="lr-online">
                <p>Håll koll på din ekonomi i mobilen med Lr-Online</p>
            </div>
        </div> 
        <div class="card">
            <div class="card-content">
            <p class="title">Logga in på Lr-Online</p>
            <form action="https://monitor.foretagsplatsen.se/Login" method="post"> 
   
                <input type="hidden" id="theme" name="theme" value="KundId" />     
                <input type="hidden" id="cultureInfo" name="cultureInfo" value="sv-SE" />   
                <p>
                    <label for="username">Användare:</label>  
                    <input class="input" type="text" id="username" name="username">
                </p>
                <p>
                    <label for="password">Lösenord:</label>  
                    <input class="input" type="password" id="password" name="password">   
                </p>  
                <button class="button is-primary is-outlined" type="submit" value="Logga in">Logga in</button>  
            </form>  
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import lrMenu from '@/components/lrMenu.vue'
export default {
  name: 'lrOnline',
  components: {
    lrMenu
  }
}
</script>
<style scoped lang="scss">
    @import '../style/main.scss';
    .flex {
        margin-top:67px; 
        height:100%; 
        display:-webkit-box; 
        display:-ms-flexbox; 
        display:flex;
        -webkit-box-orient:horizontal;
        -webkit-box-direction:normal;
            -ms-flex-direction:row;
                flex-direction:row;  
        -webkit-box-pack:center;  
            -ms-flex-pack:center;  
                justify-content:center; 
        -webkit-box-align:center; 
            -ms-flex-align:center; 
                align-items:center; 
    }
    .card { 
        width:50%;
        height:410px; 
    }
    .card-content {
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex; 
        -webkit-box-pack:center; 
            -ms-flex-pack:center; 
                justify-content:center; 
        -webkit-box-orient:vertical; 
        -webkit-box-direction:normal; 
            -ms-flex-direction:column; 
                flex-direction:column; 
        img {
            min-height: 100%;
            width: 100%;
        }
    }
    button, p  {
        margin-top:20px; 
    }
    /* ****************** MEDIAQUERIES ****************** */
    @media screen and (max-width: $tablet - 1px) {
        .flex {
            -webkit-box-orient:vertical;
            -webkit-box-direction:normal;
                -ms-flex-direction:column;
                    flex-direction:column; 
        }
        .card {
            width:100%;
        }
    }
</style>
