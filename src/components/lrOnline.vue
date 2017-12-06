<template>
    <div>
    <lr-menu></lr-menu>
    <div class="section flex"> 
        <div class="card">
            <div class="card-content">
            <p class="title">Logga in på Lr-Online</p>
            <form action="https://monitor.foretagsplatsen.se/Login" method="post"> 
   
                <input type="hidden" id="theme" name="theme" value="KundId" />     
                <input type="hidden" id="cultureInfo" name="cultureInfo" value="Språk" />   
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
            <footer class="card-footer">
                
            </footer>
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
.flex {
    display:flex; 
    justify-content:center; 
    align-items:center; 
}

.card { 
    margin-top:100px; 
    width:50%; 
}
.card-content {
    display:flex; 
    justify-content:center; 
    flex-direction:column; 
}
button, p  {
    margin-top:20px; 
}

</style>
