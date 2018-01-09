<template>
    <div>
        <!-- Menu  -->
        <lr-menu></lr-menu>
        <!-- Banner -->
        <div class="contactImage overlay">
            <div class="quote container">
                <h3 class="responsiveHeading">Moderna bokföringsprogram <br /> för småföretagare</h3>
            </div>
        </div>
        <!-- Content for Fortnox page -->
        <div class="section flex">
            <div class="card">
                <div class="card-content">
                    <div class="cardImage">
                        <img src="../img/fortnox_img.png" alt="fortnox">
                    </div>
                </div>
            </div> 
            <div class="card">
                <div class="card-content">
                    <div class="FNimg">
                        <img src="../img/fortnox.png" alt="fortnox logo">
                    </div>

                    <p class="FNstrong">Hej, Logga in här!</p>
                    <!-- Log in form to Fortnox page -->
                    <!-- target blank to get the inlogged page to show in a new tab -->
                    <form action="https://apps.fortnox.se/fs/fs/login.php" name="login" method="post" id="login" target="_blank"> 
                        <p>
                            <label for="username">Användarnamn:</label>  
                            <input class="input" type="text" id="login_userid" name="userid">
                        </p>
                        <p>
                            <label for="password">Lösenord:</label>  
                            <input class="input" type="password" id="login_password" name="passwd">   
                        </p>  
                        <button class="button is-primary is-outlined" type="submit" value="Logga in">Logga in</button>  
                    </form>  
                    <br />
                    <a class="link" href="https://apps.fortnox.se/password/request" target="_blank">Har du glömt ditt lösenord?</a>
                    <!-- Link to go directly to the home page Fortnox -->
                    <a href="https://www.fortnox.se/" target="_blank">Gå direkt till fortnox.se</a>
                </div>
            </div>
        </div>
        <!-- Footer here -->
        <lrFooter></lrFooter>
    </div>
</template>

<script>
import lrMenu from '@/components/lrMenu.vue'
import lrFooter from '@/components/lrFooter.vue'
export default {
  name: 'Fortnox',
  components: {
    lrMenu,
    lrFooter
  }
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
        height: 100%;
        text-align: center;
        h3 {
            color:$white; 
            z-index:450; 
            width:80%; 
            font-size:35px; 
        }
        span {
            font-size: 40px;
            font-weight: bold;
            z-index: 1000;
        }
        .quoteTextContact {
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
    .lrHeaderLine {
        background-color: $red;
    }
    .contactImage {
        margin-top:67px; 
        background-image: url("../img/lrContact.jpeg"); 
        background-repeat: no-repeat; 
        background-position:center; 
        background-size:cover; 
        width:100%; 
        height:250px; 
        position:relative; 
    }
    .flex {
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
                align-items: stretch;
                -webkit-box-align: stretch;        
                -ms-flex-align: stretch;        
                align-items: stretch;
    }
    .card { 
        width:50%;
    }
    .card-content {
        /* max-height: 100%; */
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
        .cardImage {
            height: auto;
            text-align: center;
        }
    }
    button, p  {
        margin-top:10px; 
    }
    .FNstrong {
        font-weight: bold;
        font-size: 18px;
        margin-left: 5px;
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
            height:auto;
        }
    }
</style>
